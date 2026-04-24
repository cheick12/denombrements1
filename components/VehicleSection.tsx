import Link from 'next/link'
import { ArrowRight, Wifi, Battery, Wind, Shield, Volume2, Smartphone } from 'lucide-react'

const features = [
  { icon: Wifi, label: 'Premium Wi-Fi', sub: 'High-speed onboard connection' },
  { icon: Battery, label: 'Tesla EV', sub: '100% electric' },
  { icon: Wind, label: 'Climate Control', sub: 'Personalised ambient temperature' },
  { icon: Shield, label: 'Safety', sub: 'Autopilot-assisted driving' },
  { icon: Volume2, label: 'Premium Audio', sub: 'Crystal clear surround sound' },
  { icon: Smartphone, label: 'USB Charging', sub: 'Charge all devices onboard' },
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
                The Vehicle
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Excellence aboard a{' '}
              <span className="text-gradient-gold">Tesla Model Y</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Travel in complete silence aboard our premium 7-seat electric SUV.
              Exceptional comfort, cutting-edge technology and fluid drive
              for an unmatched transportation experience.
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
              Book this vehicle
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Vehicle photo */}
          <div className="relative">
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 70%)',
              }}
            />

            <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Tesla exterior photo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/tesla-exterior.jpg')" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.1) 60%, transparent 100%)',
                }}
              />

              {/* Bottom specs bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { v: '7', u: 'seats', l: 'Capacity' },
                    { v: '5.1', u: 's', l: '0–100 km/h' },
                    { v: '533', u: 'km', l: 'Range' },
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

            {/* Decorative corners */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-gold/20 rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-gold/20 rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
