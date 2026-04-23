import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marie-Claire Fontaine',
    role: 'Directrice commerciale',
    content:
      "Service irréprochable ! Le chauffeur était ponctuel, la voiture impeccable et le trajet vers Rennes s'est déroulé dans une atmosphère feutrée très professionnelle. Je recommande à 100%.",
    rating: 5,
    date: 'Mars 2024',
    initials: 'MF',
  },
  {
    name: 'Thomas Leclerc',
    role: "Chef d'entreprise",
    content:
      "J'utilise Soumaoro Signature pour tous mes transferts aéroport. Jamais un retard, toujours un accueil chaleureux. C'est devenu un partenaire de confiance pour mes déplacements professionnels.",
    rating: 5,
    date: 'Février 2024',
    initials: 'TL',
  },
  {
    name: 'Sophie & Guillaume',
    role: 'Mariés le 15 juin',
    content:
      "Nous avons fait appel à Soumaoro Signature pour notre mariage. La Tesla était sublimement présentée, le chauffeur discret et attentionné. Un souvenir inoubliable. Merci du fond du coeur !",
    rating: 5,
    date: 'Juin 2024',
    initials: 'SG',
  },
  {
    name: 'Bernard Charpentier',
    role: 'Médecin',
    content:
      "Je fais régulièrement Paris en une journée pour des conférences. Soumaoro Signature me permet de travailler dans le calme pendant le trajet. Un service vraiment premium, à la hauteur des grandes métropoles.",
    rating: 5,
    date: 'Janvier 2024',
    initials: 'BC',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Avis Clients
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-white/50">4.9 / 5 — Basé sur 87 avis vérifiés</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ name, role, content, rating, date, initials }) => (
            <div key={name} className="glass-card rounded-xl p-6 hover-lift">
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-gold/30" />
                <div className="flex gap-0.5">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "{content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-[#0A0A0A] text-sm font-bold">
                  {initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{name}</div>
                  <div className="text-white/40 text-xs">{role} · {date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-xs mt-8">
          Avis collectés via Google Maps et notre formulaire de satisfaction.
        </p>
      </div>
    </section>
  )
}
