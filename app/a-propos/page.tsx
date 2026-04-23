import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Award, Clock, Heart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos — Soumaoro Signature',
  description:
    'Découvrez l\'histoire de Soumaoro Signature. Un chauffeur privé passionné, professionnel et discret au service de vos déplacements à Fougères et en Bretagne.',
}

const values = [
  {
    icon: Clock,
    title: 'Ponctualité',
    description:
      'Être là avant même que vous n\'attendiez. Chaque course est planifiée avec une marge de sécurité.',
  },
  {
    icon: Shield,
    title: 'Discrétion',
    description:
      'Vos déplacements, vos conversations, vos habitudes : tout reste strictement confidentiel.',
  },
  {
    icon: Heart,
    title: 'Bienveillance',
    description:
      'Chaque client est unique. Nous adaptons notre service à vos préférences et besoins.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Certifié VTC, formation continue, véhicule entretenu — l\'excellence n\'est pas une option.',
  },
]

export default function AProposPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-dark pt-20">
        {/* Hero */}
        <div className="bg-dark-100 border-b border-white/5 py-20 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at top right, rgba(201,169,110,0.06) 0%, transparent 60%)',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                  Notre Histoire
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                La passion du service,{' '}
                <span className="text-gradient-gold">à votre service</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed">
                Soumaoro Signature est né d'une conviction simple : chaque déplacement mérite
                le même niveau d'excellence qu'un voyage en première classe.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Driver portrait placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-200 to-dark-300" />

                {/* Elegant monogram */}
                <div className="relative text-center">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(201,169,110,0.2) 0%, rgba(201,169,110,0.05) 100%)',
                      border: '1px solid rgba(201,169,110,0.3)',
                    }}
                  >
                    <span className="font-serif text-5xl font-bold text-gradient-gold">S</span>
                  </div>
                  <div className="text-white font-serif text-xl">Votre Chauffeur</div>
                  <div className="text-gold/60 text-sm mt-1 tracking-widest uppercase">
                    Soumaoro Signature
                  </div>
                </div>

                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { v: '500+', l: 'Courses' },
                      { v: '4.9★', l: 'Note' },
                      { v: '3 ans', l: 'Expérience' },
                    ].map(({ v, l }) => (
                      <div key={l}>
                        <div className="text-gold font-bold font-serif">{v}</div>
                        <div className="text-white/40 text-xs mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-2xl" />
            </div>

            {/* Story text */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Un service né d'une passion pour l'excellence
              </h2>

              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Installé à Fougères, au cœur de la Bretagne, j'ai créé Soumaoro Signature
                  avec une vision claire : offrir un service de transport privé qui rivalise
                  avec les meilleures maisons de chauffeurs européennes.
                </p>
                <p>
                  Issu du secteur de l'hôtellerie de luxe, j'ai développé une approche du
                  service client exigeante et bienveillante. Chaque client qui monte à bord
                  est accueilli comme un invité de marque — qu'il soit chef d'entreprise,
                  voyageur d'affaires ou couple en escapade.
                </p>
                <p>
                  Mon véhicule, une Tesla entièrement électrique, a été choisi pour son confort
                  exceptionnel, sa technologie de pointe et son engagement écologique. Voyager
                  en classe sans compromis sur l'environnement.
                </p>
                <p>
                  Chaque course est une promesse : arriver à l'heure, conduire en sécurité,
                  et vous laisser un souvenir agréable de votre trajet.
                </p>
              </div>

              <div className="mt-8 p-5 rounded-xl border border-gold/15 bg-gold/5">
                <blockquote className="text-white italic font-serif text-lg">
                  "Mon objectif est simple : que vous arriviez à destination détendu,
                  souriant, et prêt à revenir."
                </blockquote>
                <div className="text-gold text-sm mt-3 font-semibold">
                  — Votre chauffeur, Soumaoro Signature
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/reservation"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
                >
                  Vivre l'expérience
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <section className="bg-dark-100 border-t border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl text-white mb-4">Nos valeurs fondamentales</h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Ces quatre piliers guident chacune de nos actions et définissent
                l'identité de Soumaoro Signature.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="glass-card rounded-xl p-6 text-center hover-lift">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-dark border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-serif text-2xl text-white mb-8">
              Certifications & Assurances
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Carte VTC professionnelle',
                'Assurance RC Pro',
                'Permis B professionnel',
                'Formation continue',
                'Véhicule contrôlé',
                'SIRET enregistré',
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-4 py-2.5 rounded border border-gold/15 bg-gold/5"
                >
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span className="text-white/70 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
