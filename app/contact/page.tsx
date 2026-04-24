'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '06 XX XX XX XX',
    sub: 'Available 24/7',
    href: 'tel:+33600000000',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@soumaoro-signature.fr',
    sub: 'Reply within 2 hours',
    href: 'mailto:contact@soumaoro-signature.fr',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Fougères, Brittany',
    sub: 'Service across all of France',
    href: null,
  },
  {
    icon: Clock,
    title: 'Availability',
    value: '24/7 — 365 days a year',
    sub: 'Including public holidays',
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const isValid = form.firstName && form.email.includes('@') && form.message.length > 10

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-dark pt-20">
        {/* Header */}
        <div className="bg-dark-100 border-b border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Contact
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
              Let&apos;s talk about your journey
            </h1>
            <p className="text-white/50 text-xl max-w-xl mx-auto">
              A question, a quote, a special request? We reply within 2 hours.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <aside className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, value, sub, href }) => (
                <div key={title} className="glass-card rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs tracking-wide uppercase mb-1">
                        {title}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white font-medium text-sm hover:text-gold transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-white font-medium text-sm">{value}</div>
                      )}
                      <div className="text-white/30 text-xs mt-0.5">{sub}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="p-5 rounded-xl border border-green-500/25 bg-green-500/5">
                <div className="font-medium text-white text-sm mb-2">
                  Instant reply on WhatsApp
                </div>
                <p className="text-white/40 text-xs mb-4">
                  For a quick quote or urgent booking.
                </p>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium hover:bg-green-500/15 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">Message sent!</h3>
                  <p className="text-white/50 text-sm max-w-sm">
                    Thank you for reaching out. We will reply within 2 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 btn-outline-gold px-5 py-2.5 rounded text-sm font-semibold tracking-widest uppercase"
                  >
                    New message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-serif text-2xl text-white mb-6">Send us a message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                        First name *
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => set('firstName', e.target.value)}
                        required
                        className="input-dark"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => set('lastName', e.target.value)}
                        className="input-dark"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        required
                        className="input-dark"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        className="input-dark"
                        placeholder="+44 7700 900000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => set('subject', e.target.value)}
                      className="input-dark"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a quote</option>
                      <option value="booking">Question about a booking</option>
                      <option value="corporate">Corporate partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      required
                      rows={5}
                      placeholder="Describe your request, preferred dates, itinerary…"
                      className="input-dark resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="text-red-400 text-sm p-3 rounded border border-red-500/20 bg-red-500/10">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!isValid || status === 'loading'}
                    className="btn-gold w-full py-4 rounded flex items-center justify-center gap-2 text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
