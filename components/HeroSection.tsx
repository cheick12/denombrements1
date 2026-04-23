'use client'

import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">
      {/* Particle stars */}
      <div className="stars pointer-events-none" />

      {/* Gold glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(201,169,110,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Thin gold horizontal line */}
      <div className="absolute top-[40%] left-0 right-0 h-px opacity-10"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A96E 50%, transparent 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Chauffeur Privé Premium
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-slide-up">
            L'excellence du{' '}
            <span className="text-gradient-gold">transport privé</span>
            {' '}à Fougères
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10 animate-slide-up">
            Ponctualité absolue, discrétion totale et confort haut de gamme.
            Votre chauffeur personnel en Bretagne, disponible 24h/24.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
            >
              Réserver maintenant
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33600000000"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold tracking-widest uppercase"
            >
              Appeler directement
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '500+', label: 'Courses réalisées' },
              { value: '4.9★', label: 'Note moyenne' },
              { value: '24/7', label: 'Disponibilité' },
            ].map(({ value, label }) => (
              <div key={label} className="animate-fade-in">
                <div className="text-2xl font-serif font-bold text-gradient-gold">{value}</div>
                <div className="text-white/40 text-xs mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating trust badges — right side, desktop only */}
        <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2">
          {[
            { icon: Shield, label: 'Assurance Pro' },
            { icon: Star, label: 'Certifié VTC' },
            { icon: Clock, label: 'Ponctuel' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card flex items-center gap-3 px-4 py-3 rounded-lg"
            >
              <Icon className="w-4 h-4 text-gold shrink-0" />
              <span className="text-white/70 text-xs tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-fade-in">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #0A0A0A)' }}
      />
    </section>
  )
}
