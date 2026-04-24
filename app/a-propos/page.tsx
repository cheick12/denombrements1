import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Award, Clock, Heart, Shield, Trophy, Target, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Soumaoro Signature',
  description:
    'Discover the story of Soumaoro Signature. A professional basketball player turned premium chauffeur — 18 years of discipline, excellence and team spirit now serving your every journey.',
}

const values = [
  {
    icon: Clock,
    title: 'Punctuality',
    description:
      'Being there before you even start waiting. Every ride is planned with a safety margin built in.',
  },
  {
    icon: Shield,
    title: 'Discretion',
    description:
      'Your journeys, conversations and habits remain strictly confidential — always.',
  },
  {
    icon: Heart,
    title: 'Care',
    description:
      'Every client is unique. We adapt our service to your preferences and specific needs.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'VTC certified, ongoing training, meticulously maintained vehicle — excellence is non-negotiable.',
  },
]

const careerStats = [
  { value: '18', unit: 'years', label: 'Pro basketball career' },
  { value: '500+', unit: 'rides', label: 'Journeys completed' },
  { value: '4.9', unit: '/ 5', label: 'Client rating' },
  { value: '24/7', unit: '', label: 'Availability' },
]

export default function AboutPage() {
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
                  My Story
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                From the court{' '}
                <span className="text-gradient-gold">to the road</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed">
                18 years as a professional basketball player taught me one thing above all:
                excellence is not an accident. It is a daily choice. That philosophy now drives
                every journey at Soumaoro Signature.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Driver portrait / stats */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card rounded-2xl overflow-hidden relative" style={{ minHeight: 480 }}>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-200 to-dark-300" />

                {/* Basketball career badge */}
                <div className="relative p-8 text-center">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(201,169,110,0.2) 0%, rgba(201,169,110,0.05) 100%)',
                      border: '1px solid rgba(201,169,110,0.3)',
                    }}
                  >
                    <Trophy className="w-14 h-14 text-gold" />
                  </div>
                  <div className="text-white font-serif text-2xl font-bold mb-1">Soumaoro</div>
                  <div className="text-gold/70 text-sm tracking-widest uppercase mb-6">
                    Pro Athlete · Private Chauffeur
                  </div>

                  {/* Career highlight */}
                  <div className="p-4 rounded-xl border border-gold/15 bg-gold/5 text-left mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-gold" />
                      <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                        Career highlight
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      18 seasons of professional basketball — discipline, precision and the
                      relentless pursuit of excellence on every play.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-gold/15 bg-gold/5 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-gold" />
                      <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                        Now
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      The same standards. A new arena. Every client receives the focused attention
                      of a champion-level mindset.
                    </p>
                  </div>
                </div>

                {/* Career stats */}
                <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {careerStats.slice(0, 2).map(({ value, unit, label }) => (
                      <div key={label}>
                        <div className="text-gold font-bold font-serif text-xl">
                          {value}
                          {unit && <span className="text-gold/60 text-xs ml-1">{unit}</span>}
                        </div>
                        <div className="text-white/40 text-xs mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-2xl" />
            </div>

            {/* Story text */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                A champion mindset in every journey
              </h2>

              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  For 18 years, I competed as a professional basketball player at the highest
                  level. Every season demanded total focus, relentless preparation and the
                  ability to perform under pressure. I learned that true excellence is built
                  in the details — not the big moments.
                </p>
                <p>
                  When I retired and settled in Fougères, at the heart of Brittany, I channelled
                  that same drive into a new passion: private transportation. Soumaoro Signature
                  was born from a simple conviction — every journey deserves the same preparation
                  a professional athlete brings to a match.
                </p>
                <p>
                  The vehicle I chose — a Tesla Model Y — reflects my values: cutting-edge
                  performance, absolute reliability and a commitment to sustainability. Seven seats,
                  zero emissions, and a cabin that feels like first class on every road.
                </p>
                <p>
                  Whether you are a CEO travelling to Paris, a family headed to the airport, or
                  a couple celebrating a special occasion, I give you my word: punctual, discreet
                  and excellent. Every single time.
                </p>
              </div>

              <div className="mt-8 p-5 rounded-xl border border-gold/15 bg-gold/5">
                <blockquote className="text-white italic font-serif text-lg">
                  "On the court, good was never enough. In this car, the same rule applies.
                  Your journey deserves a champion."
                </blockquote>
                <div className="text-gold text-sm mt-3 font-semibold">
                  — Soumaoro, Founder & Chauffeur
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/reservation"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
                >
                  Experience the difference
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats banner */}
        <section className="py-12 bg-dark-100 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {careerStats.map(({ value, unit, label }) => (
                <div key={label} className="card-3d-wrap">
                  <div className="card-3d">
                    <div className="text-3xl font-serif font-bold text-gradient-gold">
                      {value}
                      {unit && <span className="text-gold/60 text-base ml-1">{unit}</span>}
                    </div>
                    <div className="text-white/40 text-sm mt-1">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-dark border-t border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl text-white mb-4">Our core values</h2>
              <p className="text-white/50 max-w-xl mx-auto">
                These four pillars guide every action and define the identity of Soumaoro Signature.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="glass-card rounded-xl p-6 text-center hover-lift card-3d-wrap">
                  <div className="card-3d">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-dark-100 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-serif text-2xl text-white mb-8">Certifications & Insurance</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Professional VTC licence',
                'Public liability insurance',
                'Professional driving licence',
                'Ongoing training',
                'Certified vehicle',
                'Registered business (SIRET)',
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
