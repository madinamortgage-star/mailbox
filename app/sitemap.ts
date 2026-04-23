import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mybizmailbox.biz';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/success`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/cancel`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ];
}
