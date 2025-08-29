import { MetadataRoute } from 'next'

// Define your website's base URL
const baseUrl = 'https://www.dunstandetailing.co.uk'

// Service areas and key services for additional SEO value
const services = [
  'car-detailing-kent',
  'paint-correction-maidstone',
  'ceramic-coating-kent',
  'interior-detailing-maidstone',
  'mobile-car-detailing-kent'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  // Main site structure
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#map`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Generate service-specific URLs for better local SEO
  // These would be virtual pages that resolve to sections with service-specific content
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...mainPages,
    // Note: Uncomment servicePages when you add individual service pages
    // ...servicePages,
  ]
}
