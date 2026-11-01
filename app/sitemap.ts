import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://varazsfazek.hu/', changeFrequency: 'weekly', priority: 1 }];
}
