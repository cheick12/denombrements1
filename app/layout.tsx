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
    default: 'Soumaoro Signature — Chauffeur Privé Premium à Fougères',
    template: '%s | Soumaoro Signature VTC',
  },
  description:
    'Chauffeur privé premium VTC à Fougères, Bretagne. Transferts aéroport, trajets longue distance, mise à disposition. Ponctualité, discrétion et confort haut de gamme.',
  keywords: [
    'VTC Fougères',
    'chauffeur privé Fougères',
    'transport premium Bretagne',
    'VTC Rennes',
    'chauffeur privé Bretagne',
    'taxi VIP Fougères',
    'transfert aéroport Rennes',
    'Soumaoro Signature',
  ],
  authors: [{ name: 'Soumaoro Signature' }],
  creator: 'Soumaoro Signature',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://soumaoro-signature.fr',
    siteName: 'Soumaoro Signature VTC',
    title: 'Soumaoro Signature — Chauffeur Privé Premium à Fougères',
    description:
      'Service de transport privé premium. Ponctualité, discrétion et confort haut de gamme en Bretagne.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SC Signature VTC Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumaoro Signature — VTC Premium Fougères',
    description: 'Chauffeur privé premium à Fougères. Réservation en ligne 24h/24.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://sc-signature.fr" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Soumaoro Signature VTC',
              description: 'Service de chauffeur privé premium à Fougères, Bretagne',
              url: 'https://soumaoro-signature.fr',
              telephone: '+33-6-XX-XX-XX-XX',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Fougères',
                addressRegion: 'Bretagne',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.352,
                longitude: -1.199,
              },
              priceRange: '€€€',
              servesCuisine: 'Transport',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '87',
              },
            }),
          }}
        />
      </head>
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
