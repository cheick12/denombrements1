import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Plane, MapPin, Timer, Globe, Car, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Services VTC Premium',
  description:
    'Découvrez tous nos services : transferts aéroport (Rennes, Nantes, Paris CDG), mise à disposition, longue distance, événements. Chauffeur privé premium à Fougères.',
}

const services = [
  {
    id: 'aeroport',
    icon: Plane,
    title: 'Transferts Aéroport',
    tagline: 'Ponctualité absolue, zéro stress',
    description: `Nos transferts aéroport sont pensés pour vous offrir une expérience sans stress de bout en bout.
    Nous suivons votre vol en temps réel pour adapter notre heure d'arrivée à d'éventuels retards.
    Nous vous attendons à la sortie des arrivées, panneau à votre nom, prêts à charger vos bagages.`,
    features: [
      'Suivi de vol en temps réel',
      'Attente gratuite 30 minutes après l\'atterrissage',
      'Aide aux bagages incluse',
      'Tarifs fixes garantis (pas de surprise)',
      'Disponible 24h/24 — 7j/7',
      'Accueil personnalisé avec panneau',
    ],
    prices: [
      { dest: 'Aéroport de Rennes (RNS)', price: '85€' },
      { dest: 'Aéroport de Nantes (NTE)', price: '140€' },
      { dest: 'Aéroport Paris CDG', price: '350€' },
      { dest: 'Aéroport Paris Orly', price: '370€' },
    ],
  },
  {
    id: 'longue-distance',
    icon: MapPin,
    title: 'Longue Distance',
    tagline: 'La France à votre service',
    description: `Partez sereinement vers Paris, Lyon, Bordeaux ou toute autre ville française.
    Profitez du trajet pour travailler, vous reposer ou simplement vous déconnecter pendant que
    votre chauffeur gère la route. Une alternative élégante au train ou à la voiture personnelle.`,
    features: [
      'Wi-Fi haut débit à bord',
      'Eau minérale et collations',
      'Musique selon vos préférences',
      'Pauses selon vos besoins',
      'Aucun stress de stationnement',
      'Devis personnalisé',
    ],
    prices: [
      { dest: 'Fougères → Paris', price: '350€' },
      { dest: 'Fougères → Caen', price: '180€' },
      { dest: 'Fougères → Tours', price: '220€' },
      { dest: 'Sur devis pour toute destination', price: 'Devis' },
    ],
  },
  {
    id: 'disposition',
    icon: Timer,
    title: 'Mise à Disposition',
    tagline: 'Votre chauffeur, votre agenda',
    description: `Idéal pour les journées chargées : rendez-vous multiples, visites de sites,
    tournées commerciales ou journée à Paris. Votre chauffeur reste disponible toute la durée
    que vous souhaitez, s'adaptant à votre planning en temps réel.`,
    features: [
      'Minimum 2 heures',
      'Kilométrage illimité inclus',
      'Itinéraire entièrement flexible',
      'Attente entre rendez-vous',
      'Facturation à l\'heure réelle',
      'Disponible en semaine et week-end',
    ],
    prices: [
      { dest: 'Tarif horaire', price: '30€/h' },
      { dest: 'Demi-journée (4h)', price: '100€' },
      { dest: 'Journée complète (8h)', price: '190€' },
      { dest: 'Sur devis pour durées spéciales', price: 'Devis' },
    ],
  },
  {
    id: 'evenements',
    icon: Globe,
    title: 'Événements & Occasions Spéciales',
    tagline: 'Chaque moment mérite l\'excellence',
    description: `Mariages, soirées d'entreprise, remises de prix, cérémonies : faites de chaque
    événement un souvenir inoubliable. Votre chauffeur en tenue irréprochable, véhicule décoré
    sur demande, service personnalisé pour chaque occasion.`,
    features: [
      'Tenue de soirée sur demande',
      'Décoration du véhicule possible',
      'Champagne à bord (sur réservation)',
      'Service de type hôtelier',
      'Confidentialité totale',
      'Navettes pour groupes disponibles',
    ],
    prices: [
      { dest: 'Mariage (forfait journée)', price: 'Sur devis' },
      { dest: 'Soirée d\'entreprise', price: 'Sur devis' },
      { dest: 'Transfert VIP événement', price: 'À partir de 85€' },
      { dest: 'Navettes (par trajet)', price: 'À partir de 60€' },
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
                Nos Prestations
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
              Services VTC Premium
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Chaque prestation est une promesse de qualité. Nous adaptons notre service à
              chacun de vos besoins, du plus simple au plus exigeant.
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
                    Réserver ce service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Price card */}
                <div className={idx % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass-card rounded-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/5">
                      <h3 className="text-white/70 text-xs tracking-widest uppercase font-semibold">
                        Tarification
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
                        * Tarifs indicatifs. Prix confirmé à la réservation.
                        Majoration nuit (+15%) entre 20h et 7h.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ bar */}
        <section className="bg-dark-100 border-t border-white/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-white text-center mb-10">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Puis-je annuler ou modifier ma réservation ?',
                  a: 'Oui, toute annulation est gratuite jusqu\'à 24h avant le départ. En dessous de 24h, 50% du montant est retenu.',
                },
                {
                  q: 'Le paiement se fait comment ?',
                  a: 'Par carte bancaire en ligne, en espèces à bord ou par virement bancaire pour les entreprises.',
                },
                {
                  q: 'Acceptez-vous les animaux de compagnie ?',
                  a: 'Oui, les petits animaux de compagnie sont acceptés avec leur caisse de transport.',
                },
                {
                  q: 'Proposez-vous des factures pour les entreprises ?',
                  a: 'Absolument. Une facture TVA est émise pour chaque prestation professionnelle.',
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
