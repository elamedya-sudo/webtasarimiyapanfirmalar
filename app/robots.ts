import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // İleride admin paneli eklerseniz buraya disallow: '/admin' şeklinde ekleme yapabilirsiniz.
    },
    sitemap: 'https://www.webtasarimiyapanfirmalar.com/sitemap.xml',
  };
}