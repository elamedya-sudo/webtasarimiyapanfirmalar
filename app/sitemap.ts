import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webtasarimiyapanfirmalar.com';

  // Projemizdeki tüm aktif ve gerçek sayfaların listesi
  const routes = [
    '', // Ana sayfa
    '/kurumsal/hakkimizda',
    '/kurumsal/misyon-vizyon',
    '/kurumsal/ekibimiz',
    '/kurumsal/nerelerdeyiz',
    '/hizmetler',
    '/hizmetler/nextjs-headless',
    '/hizmetler/dijital-kimlik',
    '/hizmetler/geo-seo',
    '/hizmetler/google-ads',
    '/hizmetler/e-ticaret',
    '/hizmetler/saas-crm',
    '/basari-hikayeleri',
    '/basari-hikayeleri/toner-masters',
    '/basari-hikayeleri/dwt-turkiye',
    '/basari-hikayeleri/vicom-energy',
    '/projeler',
    '/blog',
    '/iletisim',
    '/teklif-al',
  ];

  const sitemapUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...sitemapUrls];
}