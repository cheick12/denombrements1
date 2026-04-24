import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Plane, MapPin, Timer, Globe, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Premium VTC Services',
  description:
    'Discover all our services: airport transfers (Rennes, Nantes, Paris CDG), chauffeur by the hour, long distance, events. Premium private chauffeur in Fougères.',
}

const services = [
  {
    id: 'airport',
    icon: Plane,
    title: 'Airport Transfers',
    tagline: 'Absolute punctuality, zero stress',
    description: `Our airport transfers are designed to give you a completely stress-free experience from door to door.
    We track your flight in real time and adjust our arrival to match any delays.
    We meet you at arrivals with a name board, ready to load your luggage.`,
    features: [
      'Real-time flight tracking',
      'Free waiting up to 30 min after landing',
      'Luggage assistance included',
      'Fixed fares — no surprises',
      'Available 24/7',
      'Personalised name-board greeting',
    ],
    prices: [
      { dest: 'Rennes Airport (RNS)', price: '€85' },
      { dest: 'Nantes Airport (NTE)', price: '€140' },
      { dest: 'Paris CDG', price: '€350' },
      { dest: 'Paris Orly', price: '€370' },
    ],
  },
  {
    id: 'long-distance',
    icon: MapPin,
    title: 'Long Distance',
    tagline: 'All of France at your service',
    description: `Travel serenely to Paris, Lyon, Bordeaux or any French city.
    Use the journey to work, rest or simply disconnect while your chauffeur handles the road.
    An elegant alternative to the train or driving yourself.`,
    features: [
      'High-speed Wi-Fi on board',
      'Still water and light snacks',
      'Music tailored to your taste',
      'Stops whenever you need',
      'No parking stress',
      'Custom quote for every trip',
    ],
    prices: [
      { dest: 'Fougères → Paris', price: '€350' },
      { dest: 'Fougères → Caen', price: '€180' },
      { dest: 'Fougères → Tours', price: '€220' },
      { dest: 'Any destination', price: 'Quote' },
    ],
  },
  {
    id: 'hourly',
    icon: Timer,
    title: 'Chauffeur by the Hour',
    tagline: 'Your chauffeur, your schedule',
    description: `Perfect for busy days: multiple meetings, site visits, business tours or a full day in Paris.
    Your chauffeur remains at your disposal for as long as you need, adapting to your schedule in real time.`,
    features: [
      'Minimum 2 hours',
      'Unlimited mileage included',
      'Fully flexible itinerary',
      'Waiting between appointments',
      'Billed by the actual hour',
      'Available weekdays and weekends',
    ],
    prices: [
      { dest: 'Hourly rate', price: '€30/h' },
      { dest: 'Half day (4h)', price: '€100' },
      { dest: 'Full day (8h)', price: '€190' },
      { dest: 'Extended durations', price: 'Quote' },
    ],
  },
  {
    id: 'events',
    icon: Globe,
    title: 'Events & Special Occasions',
    tagline: 'Every moment deserves excellence',
    description: `Weddings, corporate dinners, award ceremonies, galas — make every event an unforgettable memory.
    Your chauffeur arrives impeccably dressed, vehicle decorated on request,
    with a personalised service tailored to each occasion.`,
    features: [
      'Black-tie attire on request',
      'Vehicle decoration available',
      'Champagne on board (pre-booked)',
      'Hotel-level concierge service',
      'Total confidentiality',
      'Group shuttle runs available',
    ],
    prices: [
      { dest: 'Wedding (full-day package)', price: 'Quote' },
      { dest: 'Corporate evening', price: 'Quote' },
      { dest: 'VIP event transfer', price: 'From €85' },
      { dest: 'Shuttle (per journey)', price: 'From €60' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-dark pt-20">
        {/* Hero */}
        <div className="bg-dark-100 border-b border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Our Services
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
              Premium VTC Services
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Every service is a promise of quality. We tailor our offering to your needs —
              from the straightforward to the truly exceptional.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {services.map(({ id, icon: Icon, title, tagline, description, features, prices }, idx) => (
              <div
                key={id}
                id={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">{title}</h2>
                  <p className="text-gold text-sm tracking-wide mb-5">{tagline}</p>

                  <p className="text-white/60 leading-relaxed mb-8 whitespace-pre-line">
                    {description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/reservation"
                    className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
                  >
                    Book this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Price card */}
                <div className={idx % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass-card rounded-xl overflow-hidden card-3d-wrap">
                    <div className="card-3d">
                      <div className="px-6 py-4 border-b border-white/5">
                        <h3 className="text-white/70 text-xs tracking-widest uppercase font-semibold">
                          Pricing
                        </h3>
                      </div>
                      <div className="divide-y divide-white/5">
                        {prices.map(({ dest, price }) => (
                          <div key={dest} className="flex justify-between items-center px-6 py-4">
                            <span className="text-white/60 text-sm">{dest}</span>
                            <span className="text-gold font-semibold">{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="px-6 py-4 bg-gold/5 border-t border-gold/10">
                        <p className="text-white/30 text-xs">
                          * Indicative fares. Price confirmed at booking.
                          Night surcharge (+15%) between 8 pm and 7 am.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <section className="bg-dark-100 border-t border-white/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-white text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I cancel or modify my booking?',
                  a: 'Yes, cancellations are free up to 24 hours before departure. Within 24 hours, 50% of the fare is retained.',
                },
                {
                  q: 'How do I pay?',
                  a: 'By credit card online, cash on board, or bank transfer for corporate clients.',
                },
                {
                  q: 'Do you accept pets?',
                  a: 'Yes, small pets are welcome in an appropriate carrier.',
                },
                {
                  q: 'Do you provide invoices for businesses?',
                  a: 'Absolutely. A VAT invoice is issued for every professional journey.',
                },
              ].map(({ q, a }) => (
                <details key={q} className="glass-card rounded-xl group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                    <span className="text-white text-sm font-medium">{q}</span>
                    <span className="text-gold text-xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-4 text-white/50 text-sm">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
