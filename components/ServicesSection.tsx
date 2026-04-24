import Link from 'next/link'
import { Plane, MapPin, Timer, Globe, Star, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description:
      'Transfers to Rennes, Nantes, Paris CDG and all airports. Real-time flight tracking to guarantee your pickup regardless of delays.',
    price: 'From €85',
    features: ['Flight tracking included', 'Free 30-min wait', 'Fixed price guaranteed'],
    href: '/services#aeroport',
  },
  {
    icon: MapPin,
    title: 'Long Distance',
    description:
      'Paris, Lyon, Bordeaux… Travel comfortably without parking stress or train schedules. Your personal chauffeur for every long journey.',
    price: 'On quote',
    features: ['Wi-Fi onboard', 'Water & snacks', 'Flexible schedule'],
    href: '/services#longue-distance',
  },
  {
    icon: Timer,
    title: 'Chauffeur by the Hour',
    description:
      'A dedicated chauffeur for your business meetings, multi-stop days or a full-day city tour — entirely on your schedule.',
    price: '€30/hour',
    features: ['Min. 2 hours', 'Dedicated driver', 'Flexible itinerary'],
    href: '/services#disposition',
  },
  {
    icon: Globe,
    title: 'Events & Special Occasions',
    description:
      'Weddings, corporate events, private parties. Arrive in style with impeccable service and a pristine vehicle.',
    price: 'On quote',
    features: ['Formal attire', 'Total discretion', 'Welcome bouquet'],
    href: '/services#evenements',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Our Services
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Services crafted for excellence
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every journey is a premium experience. We adapt our service to your most demanding needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description, price, features, href }) => (
            <div
              key={title}
              className="group glass-card rounded-xl p-7 hover-lift hover:border-gold/25 transition-all duration-300 card-3d-wrap"
            >
              <div className="card-3d">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-gold text-sm font-semibold">{price}</span>
                </div>

                <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{description}</p>

                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <Star className="w-3 h-3 text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-gold text-sm hover:gap-3 transition-all group-hover:text-gold-light"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/reservation"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
          >
            Book your ride
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
