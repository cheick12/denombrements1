import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import VehicleSection from '@/components/VehicleSection'
import TeslaSlider from '@/components/TeslaSlider'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soumaoro Signature — Premium Private Chauffeur in Fougères',
  description:
    'Premium private chauffeur VTC service in Fougères, Brittany. Airport transfers (Rennes, Nantes, Paris), long distance, hourly hire. Online booking 24/7.',
}

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Cinematic video hero with Tesla shots */}
        <HeroSection />

        {/* Services grid */}
        <ServicesSection />

        {/* How it works */}
        <HowItWorksSection />

        {/* Vehicle section */}
        <VehicleSection />

        {/* Tesla photo slider — 5 cinematic shots */}
        <TeslaSlider />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Banner */}
        <section className="py-20 bg-dark relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1.5 rounded border border-gold/20 bg-gold/5 text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Available now
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              Your next journey,{' '}
              <span className="text-gradient-gold">crafted to your standard</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Book online or call directly. Your personal chauffeur is available 24/7 to take
              you wherever you need to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
              >
                Book Online
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

        {/* Coverage area */}
        <section className="py-16 bg-dark-100 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl text-white mb-2">Service area</h3>
              <p className="text-white/40 text-sm">Based in Fougères — All of Brittany and beyond</p>
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
                'All of France',
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
