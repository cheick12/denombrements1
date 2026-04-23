import Link from 'next/link'
import { Plane, MapPin, Timer, Globe, Star, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Transfert Aéroport',
    description:
      'Transferts vers Rennes, Nantes, Paris CDG et tous les aéroports. Suivi des vols en temps réel pour garantir votre prise en charge.',
    price: 'Dès 85€',
    features: ['Suivi vol inclus', 'Attente gratuite 30min', 'Forfait fixe garanti'],
    href: '/services#aeroport',
  },
  {
    icon: MapPin,
    title: 'Trajet Longue Distance',
    description:
      'Paris, Lyon, Bordeaux… Voyagez confortablement sans contrainte de parking ou de train. Votre chauffeur personnel pour de grands trajets.',
    price: 'Sur devis',
    features: ['Wifi à bord', 'Eau et collations', 'Flexibilité horaire'],
    href: '/services#longue-distance',
  },
  {
    icon: Timer,
    title: 'Mise à Disposition',
    description:
      'Chauffeur dédié à l\'heure pour vos rendez-vous professionnels, tournées, ou toute la journée selon vos besoins.',
    price: '30€/heure',
    features: ['Minimum 2 heures', 'Chauffeur attitré', 'Itinéraire flexible'],
    href: '/services#disposition',
  },
  {
    icon: Globe,
    title: 'Événements & Soirées',
    description:
      'Mariages, événements d\'entreprise, soirées privées. Arrivez en grande classe avec un service irréprochable.',
    price: 'Sur devis',
    features: ['Tenue impeccable', 'Discrétion absolue', 'Bouquet de bienvenue'],
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
              Nos Prestations
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Des services taillés pour l'excellence
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Chaque trajet est une expérience premium. Nous adaptons notre service à vos besoins
            les plus exigeants.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description, price, features, href }) => (
            <div
              key={title}
              className="group glass-card rounded-xl p-7 hover-lift hover:border-gold/25 transition-all duration-300"
            >
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
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/reservation"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
          >
            Réserver votre trajet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
