import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marie-Claire Fontaine',
    role: 'Sales Director',
    content:
      "Flawless service! The chauffeur was punctual, the car immaculate, and the drive to Rennes was conducted in a wonderfully hushed, professional atmosphere. 100% recommended.",
    rating: 5,
    date: 'March 2024',
    initials: 'MF',
  },
  {
    name: 'Thomas Leclerc',
    role: 'CEO',
    content:
      "I use Soumaoro Signature for every airport transfer. Never a delay, always a warm welcome. It has become a trusted partner for all my business travel.",
    rating: 5,
    date: 'February 2024',
    initials: 'TL',
  },
  {
    name: 'Sophie & Guillaume',
    role: 'Married June 15th',
    content:
      "We called on Soumaoro Signature for our wedding. The Tesla was presented beautifully, the chauffeur discreet and attentive. An unforgettable memory. Thank you from the bottom of our hearts!",
    rating: 5,
    date: 'June 2024',
    initials: 'SG',
  },
  {
    name: 'Bernard Charpentier',
    role: 'Physician',
    content:
      "I regularly make day trips to Paris for conferences. Soumaoro Signature lets me work in peace during the journey. A truly premium service, on par with the best in major cities.",
    rating: 5,
    date: 'January 2024',
    initials: 'BC',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Client Reviews
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            What our clients say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-white/50">4.9 / 5 — Based on 87 verified reviews</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ name, role, content, rating, date, initials }) => (
            <div key={name} className="glass-card rounded-xl p-6 hover-lift card-3d-wrap">
              <div className="card-3d">
                {/* Quote icon */}
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-gold/30" />
                  <div className="flex gap-0.5">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                  "{content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-[#0A0A0A] text-sm font-bold">
                    {initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{name}</div>
                    <div className="text-white/40 text-xs">{role} · {date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-xs mt-8">
          Reviews collected via Google Maps and our satisfaction form.
        </p>
      </div>
    </section>
  )
}
