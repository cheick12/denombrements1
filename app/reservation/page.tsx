import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { Shield, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book your private chauffeur',
  description:
    'Book your premium VTC in Fougères online. Instant price calculation, email confirmation. Airport transfers, long distance, hourly hire.',
}

export default function ReservationPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-dark pt-24 pb-20">
        {/* Header */}
        <div className="bg-dark-100 border-b border-white/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Online Booking
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Book your journey
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Secure form · Instant price · Immediate confirmation
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Why us */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-white font-serif text-lg mb-5">Why choose us?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Shield, title: 'Guaranteed safety', sub: 'Pro insurance, maintained vehicle' },
                    { icon: Clock, title: 'Absolute punctuality', sub: '0 delays across 500+ rides' },
                    { icon: Phone, title: 'Reachable 24/7', sub: 'By phone or WhatsApp' },
                  ].map(({ icon: Icon, title, sub }) => (
                    <li key={title} className="flex gap-3">
                      <div className="w-8 h-8 rounded bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{title}</div>
                        <div className="text-white/40 text-xs mt-0.5">{sub}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fixed prices */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-white font-serif text-lg mb-4">Airport flat fares</h3>
                <div className="space-y-3">
                  {[
                    { dest: 'Rennes (RNS)', price: '€85' },
                    { dest: 'Nantes (NTE)', price: '€140' },
                    { dest: 'Paris CDG', price: '€350' },
                  ].map(({ dest, price }) => (
                    <div key={dest} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-white/60 text-sm">{dest}</span>
                      <span className="text-gold font-semibold text-sm">{price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/30 text-xs mt-3">Fixed one-way fares from Fougères</p>
              </div>

              {/* WhatsApp */}
              <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
                <div className="text-white font-medium text-sm mb-1">Need a quick quote?</div>
                <p className="text-white/40 text-xs mb-4">
                  Contact us directly on WhatsApp for a personalised fare.
                </p>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium hover:bg-green-500/15 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
