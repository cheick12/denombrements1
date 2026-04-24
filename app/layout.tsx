import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Soumaoro Signature — Premium Private Chauffeur in Fougères',
    template: '%s | Soumaoro Signature VTC',
  },
  description:
    'Premium private chauffeur service (VTC) based in Fougères, Brittany. Airport transfers, long distance, hourly hire. Punctuality, discretion and luxury comfort.',
  keywords: [
    'VTC Fougères',
    'private chauffeur Fougères',
    'premium transport Brittany',
    'VTC Rennes',
    'private driver Brittany',
    'VIP taxi Fougères',
    'Rennes airport transfer',
    'Soumaoro Signature',
    'Tesla chauffeur France',
  ],
  authors: [{ name: 'Soumaoro Signature' }],
  creator: 'Soumaoro Signature',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://soumaoro-signature.fr',
    siteName: 'Soumaoro Signature VTC',
    title: 'Soumaoro Signature — Premium Private Chauffeur in Fougères',
    description:
      'Premium private transportation service. Punctuality, discretion and luxury comfort in Brittany.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soumaoro Signature — Premium VTC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumaoro Signature — Premium VTC Fougères',
    description: 'Premium private chauffeur in Fougères. Online booking 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://soumaoro-signature.fr" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Soumaoro Signature VTC',
              description: 'Premium private chauffeur service in Fougères, Brittany',
              url: 'https://soumaoro-signature.fr',
              telephone: '+33-6-XX-XX-XX-XX',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Fougères',
                addressRegion: 'Brittany',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.352,
                longitude: -1.199,
              },
              priceRange: '€€€',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '87',
              },
            }),
          }}
        />
      </head>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  )
}
