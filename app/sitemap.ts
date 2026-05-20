import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webtasarimiyapanfirmalar.com';

  // Sitedeki mevcut rotalarımız
  const routes = [
    '',
    '/kurumsal',
    '/hizmetler',
    '/hizmetler/nextjs-headless',
    '/hizmetler/dijital-kimlik',
    '/hizmetler/geo-seo',
    '/hizmetler/google-ads',
    '/hizmetler/e-ticaret',
    '/hizmetler/saas-crm',
    '/basari-hikayeleri',
    '/basari-hikayeleri/tonermasters',
    '/projeler',
    '/blog',
    '/iletisim',
    '/teklif-al',
  ];

  const sitemapUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    // Ana sayfa önceliği 1.0, alt sayfalar 0.8
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...sitemapUrls];
}