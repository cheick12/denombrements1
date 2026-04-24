import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Book Online',
    description:
      'Fill out the form in under 60 seconds. Choose your itinerary, date and time, and receive an instant price estimate.',
  },
  {
    number: '02',
    title: 'Instant Confirmation',
    description:
      'You receive a confirmation email with all the details. Your chauffeur will contact you 30 minutes before pickup.',
  },
  {
    number: '03',
    title: 'Travel in Serenity',
    description:
      'Your chauffeur waits at the agreed address, exactly on time. Sit back and enjoy the ride in premium comfort.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              How It Works
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Book in 3 simple steps
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A seamless process designed for efficiency. Your comfort starts the moment you book.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

          {steps.map(({ number, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center group">
              {/* Number */}
              <div className="relative z-10 w-16 h-16 rounded-full border-2 border-gold/30 bg-dark flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                <span className="font-serif text-xl font-bold text-gradient-gold">{number}</span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/reservation"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
          >
            Start my booking
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
