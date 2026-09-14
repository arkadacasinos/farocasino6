import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://farocasino6.vercel.app/sitemap.xml',
    host: 'https://farocasino6.vercel.app',
  }
}
