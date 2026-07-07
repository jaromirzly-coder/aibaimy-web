import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aibaimy.cloud', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://aibaimy.cloud/vop', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://aibaimy.cloud/gdpr', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://aibaimy.cloud/reklamace', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://aibaimy.cloud/odstoupeni', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://aibaimy.cloud/cookies', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
