/**
 * Shared contact form processing (Vercel + Netlify).
 *
 * Required env (never commit secrets):
 *   RESEND_API_KEY
 *   CONTACT_TO_EMAIL
 *   CONTACT_FROM_EMAIL
 *
 * Optional:
 *   CONTACT_SUBJECT_PREFIX
 *   CONTACT_ALLOW_DEV_SENDER  "1" only — non-production Resend onboarding sender
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

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

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

function isProduction(env) {
  return (
    env.VERCEL_ENV === 'production' ||
    env.CONTEXT === 'production' ||
    env.NODE_ENV === 'production'
  )
}

function resolveFromEmail(env) {
  const configured = (env.CONTACT_FROM_EMAIL || '').trim()
  if (configured) return configured

  if (!isProduction(env) && env.CONTACT_ALLOW_DEV_SENDER === '1') {
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

function jsonResult(status, body, extraHeaders = {}) {
  return {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    body,
  }
}

function measureBodyBytes(body) {
  if (typeof body === 'string') {
    return Buffer.byteLength(body, 'utf8')
  }
  if (body == null) return 0
  return Buffer.byteLength(JSON.stringify(body), 'utf8')
}

function parseBody(body) {
  if (body == null) return { ok: true, value: {} }
  if (typeof body === 'object') return { ok: true, value: body }
  if (typeof body === 'string') {
    if (!body.trim()) return { ok: true, value: {} }
    try {
      return { ok: true, value: JSON.parse(body) }
    } catch {
      return { ok: false }
    }
  }
  return { ok: false }
}

/**
 * Platform-neutral contact handler.
 *
 * @param {object} input
 * @param {string} input.method
 * @param {string} [input.contentType]
 * @param {string|object|null} input.body
 * @param {number} [input.rawByteLength]
 * @param {NodeJS.ProcessEnv} [input.env]
 * @returns {Promise<{ status: number, headers: Record<string, string>, body: object|null }>}
 */
export async function handleContact({
  method,
  contentType = '',
  body = null,
  rawByteLength,
  env = process.env,
}) {
  const httpMethod = String(method || '').toUpperCase()

  if (httpMethod === 'OPTIONS') {
    return {
      status: 204,
      headers: { ...CORS_HEADERS },
      body: null,
    }
  }

  if (httpMethod !== 'POST') {
    return jsonResult(405, { ok: false, error: 'method_not_allowed' })
  }

  const ct = String(contentType || '')
  if (ct && !ct.includes('application/json')) {
    return jsonResult(415, { ok: false, error: 'unsupported_media_type' })
  }

  const byteLen =
    typeof rawByteLength === 'number' ? rawByteLength : measureBodyBytes(body)

  if (byteLen > MAX_BODY_BYTES) {
    return jsonResult(413, { ok: false, error: 'payload_too_large' })
  }

  const apiKey = env.RESEND_API_KEY
  const toEmail = env.CONTACT_TO_EMAIL
  const fromEmail = resolveFromEmail(env)
  const subjectPrefix = stripControl(env.CONTACT_SUBJECT_PREFIX || '[Weboro upit]').slice(0, 40)

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact API not configured', {
      hasKey: Boolean(apiKey),
      hasTo: Boolean(toEmail),
      hasFrom: Boolean(fromEmail),
      vercelEnv: env.VERCEL_ENV || null,
      netlifyContext: env.CONTEXT || null,
    })
    return jsonResult(503, {
      ok: false,
      error: 'not_configured',
      message: 'Contact API is not configured.',
    })
  }

  const parsed = parseBody(body)
  if (!parsed.ok) {
    return jsonResult(400, { ok: false, error: 'invalid_json' })
  }
  const data = parsed.value

  const honeypot = escapeText(data?.website).slice(0, MAX_FIELD.website)
  if (honeypot) {
    console.log('Contact honeypot trip', { at: new Date().toISOString() })
    return jsonResult(200, { ok: true })
  }

  const fullName = escapeText(data?.fullName).slice(0, MAX_FIELD.fullName)
  const company = escapeText(data?.company).slice(0, MAX_FIELD.company)
  const email = escapeText(data?.email).slice(0, MAX_FIELD.email)
  const phone = escapeText(data?.phone).slice(0, MAX_FIELD.phone)
  const projectType = escapeText(data?.projectType).slice(0, MAX_FIELD.projectType)
  const message = escapeText(data?.message).slice(0, MAX_FIELD.message)
  const consent = Boolean(data?.consent)

  if (!fullName || fullName.length < 2) {
    return jsonResult(400, { ok: false, error: 'invalid_name' })
  }
  if (!company || company.length < 2) {
    return jsonResult(400, { ok: false, error: 'invalid_company' })
  }
  if (!email || !EMAIL_RE.test(email)) {
    return jsonResult(400, { ok: false, error: 'invalid_email' })
  }
  if (!projectType) {
    return jsonResult(400, { ok: false, error: 'invalid_project_type' })
  }
  if (!message || message.length < 10) {
    return jsonResult(400, { ok: false, error: 'invalid_message' })
  }
  if (!consent) {
    return jsonResult(400, { ok: false, error: 'consent_required' })
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
      return jsonResult(502, { ok: false, error: 'delivery_failed' })
    }

    let resendId = null
    try {
      const resendData = await response.json()
      resendId = resendData?.id || null
    } catch {
      /* ignore */
    }

    console.log('Contact email sent', { ok: true, at: sentAt, resendId })
    return jsonResult(200, { ok: true })
  } catch (err) {
    console.error('Contact API error', {
      message: err?.message || String(err),
      at: new Date().toISOString(),
    })
    return jsonResult(500, { ok: false, error: 'server_error' })
  }
}
