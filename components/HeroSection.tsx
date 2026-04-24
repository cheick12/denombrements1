'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, ChevronDown, Play, Pause } from 'lucide-react'

const SHOTS = [
  {
    src: '/images/tesla-exterior.jpg',
    animation: 'kenBurns1',
    label: 'Tesla Model Y',
    caption: 'Premium Electric Chauffeur',
  },
  {
    src: '/images/tesla-dashboard.jpg',
    animation: 'kenBurns2',
    label: 'Refined Interior',
    caption: 'White Leather & 15" Touchscreen',
  },
  {
    src: '/images/tesla-overhead.jpg',
    animation: 'kenBurns3',
    label: '7-Seat Capacity',
    caption: 'Spacious Comfort for Every Journey',
  },
  {
    src: '/images/tesla-rear-panoramic.jpg',
    animation: 'kenBurns4',
    label: 'Panoramic Glass Roof',
    caption: 'Open Sky Passenger Experience',
  },
  {
    src: '/images/tesla-rear-interior.jpg',
    animation: 'kenBurns5',
    label: 'Executive Seating',
    caption: 'Business Class on Every Road',
  },
]

const INTERVAL = 6000
const TRANSITION_MS = 1500

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [captionKey, setCaptionKey] = useState(0)

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % SHOTS.length)
    setCaptionKey((k) => k + 1)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(advance, INTERVAL)
    return () => clearInterval(t)
  }, [isPlaying, advance])

  const goTo = (i: number) => {
    setCurrent(i)
    setCaptionKey((k) => k + 1)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Cinematic background shots — each absolutely stacked, opacity crossfade */}
      {SHOTS.map((shot, i) => (
        <div
          key={shot.src}
          className="absolute inset-0 bg-cover bg-center will-change-opacity"
          style={{
            backgroundImage: `url(${shot.src})`,
            opacity: i === current ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
            animation: i === current ? `${shot.animation} 12s ease-in-out infinite alternate` : 'none',
          }}
        />
      ))}

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #0A0A0A)' }}
      />

      {/* Top-right shot label */}
      <div className="absolute top-24 right-8 z-20 text-right hidden md:block" key={captionKey}>
        <div className="caption-animate text-gold text-xs tracking-[0.25em] uppercase font-semibold">
          {SHOTS[current].label}
        </div>
        <div className="caption-animate text-white/40 text-xs mt-0.5" style={{ animationDelay: '0.1s' }}>
          {SHOTS[current].caption}
        </div>
      </div>

      {/* Shot counter */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-white/25 text-xs tracking-widest font-mono hidden md:block">
        {String(current + 1).padStart(2, '0')} / {String(SHOTS.length).padStart(2, '0')}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Premium Private Chauffeur — Fougères
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-slide-up">
            The art of{' '}
            <span className="text-gradient-gold">private travel</span>
            {' '}redefined
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10 animate-slide-up">
            Absolute punctuality, total discretion and luxury comfort aboard a Tesla Model Y.
            Your personal chauffeur in Brittany, available 24/7.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33600000000"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold tracking-widest uppercase"
            >
              Call Directly
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '500+', label: 'Rides Completed' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '24/7', label: 'Availability' },
            ].map(({ value, label }) => (
              <div key={label} className="animate-fade-in">
                <div className="text-2xl font-serif font-bold text-gradient-gold">{value}</div>
                <div className="text-white/40 text-xs mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating trust badges — desktop only */}
        <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2">
          {[
            { icon: Shield, label: 'Pro Insurance' },
            { icon: Star, label: 'Certified VTC' },
            { icon: Clock, label: 'Always On Time' },
          ].map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="glass-card flex items-center gap-3 px-4 py-3 rounded-lg float-badge"
              style={{ animationDelay: `${i * 1.3}s` }}
            >
              <Icon className="w-4 h-4 text-gold shrink-0" />
              <span className="text-white/80 text-xs tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {SHOTS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Play/pause */}
      <button
        onClick={() => setIsPlaying((p) => !p)}
        className="absolute bottom-14 right-8 z-20 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/40 transition-colors"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 animate-fade-in z-20">
        <span className="text-[10px] tracking-widest uppercase">Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
