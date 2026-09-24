/**
 * Netlify Function — rewritten from /api/contact
 * Shared logic: ../../server/contactHandler.js
 */
import { handleContact } from '../../server/contactHandler.js'

export async function handler(event) {
  const contentType =
    event.headers?.['content-type'] || event.headers?.['Content-Type'] || ''

  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : event.body || ''

  const rawByteLength = Buffer.byteLength(rawBody, 'utf8')

  const result = await handleContact({
    method: event.httpMethod,
    contentType,
    body: rawBody,
    rawByteLength,
    env: process.env,
  })

  return {
    statusCode: result.status,
    headers: result.headers || {},
    body: result.body == null ? '' : JSON.stringify(result.body),
  }
}
