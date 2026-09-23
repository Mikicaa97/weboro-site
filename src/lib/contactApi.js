/**
 * Contact form API client.
 * Posts to Vercel serverless /api/contact (or VITE_CONTACT_API_URL).
 * Success is returned only when the server responds with { ok: true }.
 */

const DEFAULT_ENDPOINT = '/api/contact'

const MAX = {
  fullName: 120,
  company: 160,
  email: 200,
  phone: 40,
  message: 5000,
}

export class ContactApiError extends Error {
  constructor(code, message) {
    super(message || code)
    this.name = 'ContactApiError'
    this.code = code
  }
}

/**
 * @param {object} payload
 * @returns {Promise<{ ok: true }>}
 */
export async function submitContactForm(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL || DEFAULT_ENDPOINT

  let response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new ContactApiError('network', 'Network request failed')
  }

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok || !data?.ok) {
    const code = data?.error || (response.status === 503 ? 'not_configured' : 'server_error')
    throw new ContactApiError(code, data?.message || 'Request failed')
  }

  return { ok: true }
}

/**
 * Client-side validation before submit.
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(form, t) {
  const errors = {}
  const name = form.fullName?.trim() || ''
  const company = form.company?.trim() || ''
  const email = form.email?.trim() || ''
  const phone = form.phone?.trim() || ''
  const message = form.message?.trim() || ''

  if (!name || name.length < 2) {
    errors.fullName = t('contact_err_name')
  } else if (name.length > MAX.fullName) {
    errors.fullName = t('contact_err_name')
  }

  if (!company || company.length < 2) {
    errors.company = t('contact_err_company')
  } else if (company.length > MAX.company) {
    errors.company = t('contact_err_company')
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > MAX.email) {
    errors.email = t('contact_err_email')
  }

  if (phone.length > MAX.phone) {
    errors.phone = t('contact_err_phone')
  }

  if (!form.projectType) {
    errors.projectType = t('contact_err_type')
  }

  if (!message || message.length < 10) {
    errors.message = t('contact_err_message')
  } else if (message.length > MAX.message) {
    errors.message = t('contact_err_message_long')
  }

  if (!form.consent) {
    errors.consent = t('contact_err_consent')
  }

  return { valid: Object.keys(errors).length === 0, errors }
}
