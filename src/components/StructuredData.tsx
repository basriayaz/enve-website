import { Metadata } from 'next'

export const structuredData: Metadata = {
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ENVE Yapı Proje Mühendislik',
      'url': 'https://enveproje.com',
      'logo': 'https://enveproje.com/logo.png',
      'description': 'İstanbul merkezli uzman mühendislik ekibi ile yapı, geoteknik, elektrik ve mekanik projelerde güvenilir çözümler sunuyoruz.',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'TR',
        'addressRegion': 'İstanbul',
        'addressLocality': 'İstanbul'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+90-216-123-45-67',
        'contactType': 'customer service',
        'availableLanguage': 'Turkish'
      },
      'sameAs': [
        'https://twitter.com/enveproje',
        'https://linkedin.com/company/enveproje'
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Mühendislik Hizmetleri',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Yapı Mühendisliği',
              'description': 'Bina ve yapı projelerinin mühendislik hizmetleri'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Geoteknik Mühendislik',
              'description': 'Zemin etüdü ve geoteknik raporlar'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Elektrik Projeleri',
              'description': 'Elektrik tesisatı projeleri ve danışmanlığı'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Mekanik Projeler',
              'description': 'HVAC ve mekanik sistem projeleri'
            }
          }
        ]
      }
    })
  }
}

export default function StructuredData() {
  return null
}
