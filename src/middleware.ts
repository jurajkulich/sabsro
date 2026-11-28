import { defineMiddleware } from 'astro:middleware'
import { bindShortWords } from './utils/typography'

// Runs at build time for every prerendered page: binds Slovak one-letter words to the next word.
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next()
  if (!response.headers.get('content-type')?.includes('text/html')) return response

  const headers = new Headers(response.headers)
  headers.delete('content-length')
  return new Response(bindShortWords(await response.text()), {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
})
