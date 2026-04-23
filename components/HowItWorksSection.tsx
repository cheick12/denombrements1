import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Réservez en ligne',
    description:
      'Remplissez le formulaire en moins de 60 secondes. Choisissez votre itinéraire, la date et recevez immédiatement le tarif.',
  },
  {
    number: '02',
    title: 'Confirmation instantanée',
    description:
      'Vous recevez un email de confirmation avec tous les détails. Le chauffeur vous contacte 30 min avant la prise en charge.',
  },
  {
    number: '03',
    title: 'Voyagez en sérénité',
    description:
      "Votre chauffeur vous attend à l'adresse convenue, à l'heure exacte. Profitez du trajet dans un confort premium.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Comment ça marche
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Réservez en 3 étapes simples
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Un processus fluide pensé pour aller à l'essentiel. Votre confort commence dès la
            réservation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

          {steps.map(({ number, title, description }, i) => (
            <div key={number} className="relative flex flex-col items-center text-center group">
              {/* Number */}
              <div className="relative z-10 w-16 h-16 rounded-full border-2 border-gold/30 bg-dark-100 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
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
            Commencer ma réservation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
