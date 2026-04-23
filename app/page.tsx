import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import VehicleSection from '@/components/VehicleSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soumaoro Signature — Chauffeur Privé Premium à Fougères',
  description:
    'Service de chauffeur privé VTC premium à Fougères, Bretagne. Transferts aéroport Rennes, Nantes, Paris. Mise à disposition, longue distance. Réservation en ligne 24h/24.',
}

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <VehicleSection />
        <TestimonialsSection />

        {/* CTA Banner */}
        <section className="py-20 bg-dark-100 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1.5 rounded border border-gold/20 bg-gold/5 text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Disponible maintenant
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              Votre prochain trajet,{' '}
              <span className="text-gradient-gold">à la hauteur de vos exigences</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Réservez en ligne ou appelez directement. Votre chauffeur personnel est disponible
              24h/24 pour vous accompagner où vous le souhaitez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
              >
                Réserver en ligne
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33600000000"
                className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold tracking-widest uppercase"
              >
                <Phone className="w-4 h-4" />
                06 XX XX XX XX
              </a>
            </div>
          </div>
        </section>

        {/* Zone coverage */}
        <section className="py-16 bg-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl text-white mb-2">Zone de service</h3>
              <p className="text-white/40 text-sm">
                Basé à Fougères — Toute la Bretagne et au-delà
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Fougères',
                'Rennes',
                'Saint-Malo',
                'Mont-Saint-Michel',
                'Nantes',
                'Paris',
                'Laval',
                'Vitré',
                'Caen',
                'Tours',
                'Toute la France',
              ].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 rounded border border-dark-400 text-white/40 text-sm hover:border-gold/30 hover:text-white/70 transition-colors cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
