import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Booking confirmed',
  robots: { index: false, follow: false },
}

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { id?: string }
}) {
  const bookingId = searchParams.id || 'SS-XXXXXX'

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark pt-24 pb-20 flex items-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 w-full text-center">
          {/* Icon */}
          <div className="w-24 h-24 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-8 animate-fade-in">
            <CheckCircle className="w-12 h-12 text-gold" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl text-white mb-3 animate-slide-up">
            Booking confirmed!
          </h1>

          {/* Booking ID */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded border border-gold/25 bg-gold/5 text-gold font-mono text-sm mb-6 animate-fade-in">
            Booking #{bookingId}
          </div>

          <p className="text-white/60 mb-2">
            A confirmation email has been sent to your address.
          </p>
          <p className="text-white/40 text-sm mb-10">
            Your chauffeur will contact you 30 minutes before pickup to confirm their arrival.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="glass-card rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-2">
                <Phone className="w-4 h-4" />
                Need help?
              </div>
              <p className="text-white/50 text-sm mb-3">
                Call us for any last-minute changes.
              </p>
              <a href="tel:+33600000000" className="text-white text-sm hover:text-gold transition-colors">
                06 XX XX XX XX
              </a>
            </div>
            <div className="glass-card rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-2">
                <Mail className="w-4 h-4" />
                Confirmation email
              </div>
              <p className="text-white/50 text-sm">
                Check your inbox and spam folder. The email contains all your journey details.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold tracking-widest uppercase"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
            >
              New booking
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
