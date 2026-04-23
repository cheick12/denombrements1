import Link from 'next/link'
import { ArrowRight, Wifi, Battery, Wind, Shield, Volume2, Smartphone } from 'lucide-react'

const features = [
  { icon: Wifi, label: 'Wi-Fi Premium', sub: 'Connexion haut débit' },
  { icon: Battery, label: 'Tesla EV', sub: '100% électrique' },
  { icon: Wind, label: 'Climatisation', sub: 'Ambiance personnalisée' },
  { icon: Shield, label: 'Sécurité', sub: 'Conduite assistée' },
  { icon: Volume2, label: 'Sono premium', sub: 'Sonos / Bose' },
  { icon: Smartphone, label: 'Chargeur USB', sub: 'Recharge à bord' },
]

export default function VehicleSection() {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Le Véhicule
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              L'excellence à bord d'une{' '}
              <span className="text-gradient-gold">Tesla Model S</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Voyagez dans un silence total à bord de notre berline premium entièrement
              électrique. Confort exceptionnel, technologies de pointe et conduite fluide pour
              une expérience de transport sans égale.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {features.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{label}</div>
                    <div className="text-white/40 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase"
            >
              Réserver ce véhicule
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Vehicle visual */}
          <div className="relative">
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 70%)',
              }}
            />

            {/* Car placeholder — elegant dark card */}
            <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Simulated car silhouette using CSS */}
              <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-300" />

              {/* Horizontal light beam effect */}
              <div
                className="absolute left-0 right-0 h-px top-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)',
                }}
              />

              <div className="relative text-center">
                {/* Tesla-like logo placeholder */}
                <svg
                  viewBox="0 0 200 70"
                  className="w-48 h-auto mx-auto mb-4 opacity-60"
                  fill="currentColor"
                >
                  <text
                    x="100"
                    y="50"
                    textAnchor="middle"
                    className="text-gold"
                    fill="#C9A96E"
                    fontSize="52"
                    fontFamily="Georgia, serif"
                    fontWeight="bold"
                    letterSpacing="8"
                  >
                    TESLA
                  </text>
                </svg>
                <div className="text-white/30 text-xs tracking-[0.3em] uppercase">
                  Model S — Intérieur cuir blanc
                </div>
              </div>

              {/* Bottom specs bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { v: '7', u: 'places', l: 'Capacité' },
                    { v: '0→100', u: '2.3s', l: 'Accélération' },
                    { v: '600', u: 'km', l: 'Autonomie' },
                  ].map(({ v, u, l }) => (
                    <div key={l}>
                      <div className="text-gold text-base font-bold font-serif">
                        {v} <span className="text-gold/60 text-xs">{u}</span>
                      </div>
                      <div className="text-white/30 text-[10px] tracking-wide uppercase mt-0.5">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-gold/20 rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-gold/20 rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
