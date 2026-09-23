/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Required env (Vercel / hosting — never commit secrets):
 *   RESEND_API_KEY
 *   CONTACT_TO_EMAIL          e.g. kontakt@weboro.io
 *   CONTACT_FROM_EMAIL        e.g. Weboro Website <noreply@weboro.io>
 *                             Must be a verified domain sender in Resend (production).
 *
 * Optional:
 *   CONTACT_SUBJECT_PREFIX    default "[Weboro upit]"
 *   CONTACT_ALLOW_DEV_SENDER  "1" only — permits Resend onboarding sender in non-production
 */
const MAX_BODY_BYTES = 12_000
const MAX_FIELD = {
  fullName: 120,
  company: 160,
  email: 200,
  phone: 40,
  projectType: 100,
  message: 5000,
  website: 200,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DEV_SENDER = 'Weboro Dev <onboarding@resend.dev>'

function stripControl(value) {
  return String(value || '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
}

function escapeText(value) {
  return stripControl(value)
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isProduction() {
  return process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'
}

function resolveFromEmail() {
  const configured = (process.env.CONTACT_FROM_EMAIL || '').trim()
  if (configured) return configured

  // Explicit DEV-only escape hatch — never used as silent production fallback
  if (!isProduction() && process.env.CONTACT_ALLOW_DEV_SENDER === '1') {
    return DEV_SENDER
  }

  return null
}

function buildSubject(prefix, projectType, company, fullName) {
  const who = company || fullName || 'Upit'
  const raw = `${prefix} ${projectType} — ${who}`
  return stripControl(raw).slice(0, 180)
}

function buildPlainText({ fullName, company, email, phone, projectType, message, sentAt }) {
  return [
    'NOVI WEBORO UPIT',
    '',
    `Ime: ${fullName}`,
    `Kompanija: ${company}`,
    `Email: ${email}`,
    `Telefon: ${phone || '—'}`,
    `Vrsta projekta: ${projectType}`,
    '',
    'PORUKA:',
    message,
    '',
    '---',
    'Poslato sa weboro.io',
    `Vreme (server): ${sentAt}`,
  ].join('\n')
}

function buildHtml({ fullName, company, email, phone, projectType, message, sentAt }) {
  const row = (label, value) =>
    `<tr><td style="padding:6px 0;color:#71717a;font-size:13px;width:140px;vertical-align:top;">${label}</td>` +
    `<td style="padding:6px 0;color:#18181b;font-size:14px;">${value}</td></tr>`

  return `<!DOCTYPE html>
<html lang="sr">
<body style="margin:0;padding:24px;background:#f4f4f5;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;">
    <tr>
      <td style="padding:24px 28px;">
        <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#a1a1aa;">Novi Weboro upit</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          ${row('Ime', escapeHtml(fullName))}
          ${row('Kompanija', escapeHtml(company))}
          ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#ea580c;text-decoration:none;">${escapeHtml(email)}</a>`)}
          ${row('Telefon', escapeHtml(phone || '—'))}
          ${row('Vrsta projekta', escapeHtml(projectType))}
        </table>
        <p style="margin:20px 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#a1a1aa;">Poruka</p>
        <p style="margin:0;white-space:pre-wrap;color:#27272a;font-size:14px;line-height:1.55;">${escapeHtml(message)}</p>
        <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e4e4e7;font-size:12px;color:#a1a1aa;">
          Poslato sa weboro.io<br>${escapeHtml(sentAt)}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  const contentType = String(req.headers['content-type'] || '')
  if (contentType && !contentType.includes('application/json')) {
    return res.status(415).json({ ok: false, error: 'unsupported_media_type' })
  }

  const rawLen =
    typeof req.body === 'string'
      ? Buffer.byteLength(req.body, 'utf8')
      : Buffer.byteLength(JSON.stringify(req.body || {}), 'utf8')

  if (rawLen > MAX_BODY_BYTES) {
    return res.status(413).json({ ok: false, error: 'payload_too_large' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = resolveFromEmail()
  const subjectPrefix = stripControl(process.env.CONTACT_SUBJECT_PREFIX || '[Weboro upit]').slice(0, 40)

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact API not configured', {
      hasKey: Boolean(apiKey),
      hasTo: Boolean(toEmail),
      hasFrom: Boolean(fromEmail),
      vercelEnv: process.env.VERCEL_ENV || null,
    })
    return res.status(503).json({
      ok: false,
      error: 'not_configured',
      message: 'Contact API is not configured.',
    })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ ok: false, error: 'invalid_json' })
    }
  }

  // Honeypot — bots fill "website"; humans never see it
  const honeypot = escapeText(body?.website).slice(0, MAX_FIELD.website)
  if (honeypot) {
    console.log('Contact honeypot trip', { at: new Date().toISOString() })
    return res.status(200).json({ ok: true })
  }

  const fullName = escapeText(body?.fullName).slice(0, MAX_FIELD.fullName)
  const company = escapeText(body?.company).slice(0, MAX_FIELD.company)
  const email = escapeText(body?.email).slice(0, MAX_FIELD.email)
  const phone = escapeText(body?.phone).slice(0, MAX_FIELD.phone)
  const projectType = escapeText(body?.projectType).slice(0, MAX_FIELD.projectType)
  const message = escapeText(body?.message).slice(0, MAX_FIELD.message)
  const consent = Boolean(body?.consent)

  if (!fullName || fullName.length < 2) {
    return res.status(400).json({ ok: false, error: 'invalid_name' })
  }
  if (!company || company.length < 2) {
    return res.status(400).json({ ok: false, error: 'invalid_company' })
  }
  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: 'invalid_email' })
  }
  if (!projectType) {
    return res.status(400).json({ ok: false, error: 'invalid_project_type' })
  }
  if (!message || message.length < 10) {
    return res.status(400).json({ ok: false, error: 'invalid_message' })
  }
  if (!consent) {
    return res.status(400).json({ ok: false, error: 'consent_required' })
  }

  const sentAt = new Date().toISOString()
  const subject = buildSubject(subjectPrefix, projectType, company, fullName)
  const payload = { fullName, company, email, phone, projectType, message, sentAt }
  const text = buildPlainText(payload)
  const html = buildHtml(payload)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
        html,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Resend delivery failed', {
        status: response.status,
        detail: detail.slice(0, 200),
        at: sentAt,
      })
      return res.status(502).json({ ok: false, error: 'delivery_failed' })
    }

    let resendId = null
    try {
      const data = await response.json()
      resendId = data?.id || null
    } catch {
      /* ignore */
    }

    console.log('Contact email sent', { ok: true, at: sentAt, resendId })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error', {
      message: err?.message || String(err),
      at: new Date().toISOString(),
    })
    return res.status(500).json({ ok: false, error: 'server_error' })
  }
}
