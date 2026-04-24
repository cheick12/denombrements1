'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: '/images/tesla-exterior.jpg',
    title: 'Tesla Model Y — Pearl White',
    caption: 'Sleek, silent, unmistakable. Our vehicle commands attention on every road.',
    badge: 'Exterior',
  },
  {
    src: '/images/tesla-dashboard.jpg',
    title: 'Cockpit & 15" Touchscreen',
    caption: 'Every control at a glance. The future of in-car technology, at your fingertips.',
    badge: 'Technology',
  },
  {
    src: '/images/tesla-overhead.jpg',
    title: '7-Seat Configuration',
    caption: 'Overhead panorama reveals the generous cabin space — comfort for every passenger.',
    badge: 'Space',
  },
  {
    src: '/images/tesla-rear-panoramic.jpg',
    title: 'Panoramic Glass Roof',
    caption: "Sky-view seating for rear passengers. The open road meets open sky.",
    badge: 'Comfort',
  },
  {
    src: '/images/tesla-rear-interior.jpg',
    title: 'Executive Rear Cabin',
    caption: 'Premium white leather throughout. Business class on every journey.',
    badge: 'Luxury',
  },
]

const AUTOPLAY_MS = 5000

export default function TeslaSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const go = useCallback((i: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((i + SLIDES.length) % SLIDES.length)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const next = useCallback(() => go(current + 1), [current, go])
  const prev = useCallback(() => go(current - 1), [current, go])

  useEffect(() => {
    const t = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Our Vehicle
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Tesla Model Y —{' '}
            <span className="text-gradient-gold">inside & out</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every detail has been chosen for your comfort. Explore the vehicle that will carry you.
          </p>
        </div>

        {/* Main slider */}
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/7' }}>
          {/* Slides */}
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{
                backgroundImage: `url(${slide.src})`,
                opacity: i === current ? 1 : 0,
                zIndex: i === current ? 1 : 0,
              }}
            />
          ))}

          {/* Overlay gradient */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            }}
          />

          {/* Badge */}
          <div className="absolute top-5 left-5 z-20">
            <span className="px-3 py-1 rounded border border-gold/40 bg-black/40 text-gold text-xs tracking-[0.2em] uppercase font-semibold backdrop-blur-sm">
              {SLIDES[current].badge}
            </span>
          </div>

          {/* Slide counter */}
          <div className="absolute top-5 right-5 z-20 text-white/40 text-xs font-mono tracking-widest">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 font-bold">
              {SLIDES[current].title}
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              {SLIDES[current].caption}
            </p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-black/30 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 hover:bg-black/50 transition-all backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-black/30 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 hover:bg-black/50 transition-all backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1 scrollbar-hide">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => go(i)}
              className={`shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-gold ring-offset-2 ring-offset-dark opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
              style={{ width: 100, height: 60 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1 bg-black/60">
                <span className="text-[9px] text-white/80 tracking-wide truncate block">
                  {slide.badge}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Specs bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '7', unit: 'seats', label: 'Passenger capacity' },
            { value: '533', unit: 'km', label: 'Range (WLTP)' },
            { value: '5.1', unit: 's', label: '0 — 100 km/h' },
            { value: '100%', unit: 'electric', label: 'Zero emissions' },
          ].map(({ value, unit, label }) => (
            <div
              key={label}
              className="glass-card rounded-xl p-4 text-center card-3d-wrap"
            >
              <div className="card-3d">
                <div className="text-2xl font-serif font-bold text-gradient-gold">
                  {value}
                  <span className="text-gold/60 text-sm ml-1">{unit}</span>
                </div>
                <div className="text-white/40 text-xs mt-1 tracking-wide">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
