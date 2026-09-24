/**
 * Vercel Serverless Function — POST /api/contact
 * Shared logic: ../server/contactHandler.js
 */
import { handleContact } from '../server/contactHandler.js'

export default async function handler(req, res) {
  const contentType = String(req.headers['content-type'] || '')
  const rawByteLength =
    typeof req.body === 'string'
      ? Buffer.byteLength(req.body, 'utf8')
      : Buffer.byteLength(JSON.stringify(req.body || {}), 'utf8')

  const result = await handleContact({
    method: req.method,
    contentType,
    body: req.body,
    rawByteLength,
    env: process.env,
  })

  for (const [key, value] of Object.entries(result.headers || {})) {
    res.setHeader(key, value)
  }

  if (result.body == null) {
    return res.status(result.status).end()
  }

  return res.status(result.status).json(result.body)
}
