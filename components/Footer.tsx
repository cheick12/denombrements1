import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Shield, Star } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/reservation', label: 'Réserver' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Espace admin' },
]

const services = [
  'Transfert aéroport Rennes',
  'Transfert aéroport Nantes',
  'Transfert aéroport Paris CDG',
  'Mise à disposition',
  'Longue distance',
  'Événements & soirées',
]

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/5">
      {/* Trust bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: 'Assurance Pro', sub: 'Couverture complète' },
              { icon: Star, label: '4.9 / 5', sub: '87 avis vérifiés' },
              { icon: Clock, label: '24h/24 — 7j/7', sub: 'Toujours disponible' },
              { icon: MapPin, label: 'Fougères', sub: 'Bretagne & France' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 text-gold mb-1" />
                <span className="text-white text-sm font-semibold">{label}</span>
                <span className="text-white/40 text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded border border-gold/40 flex items-center justify-center">
                <span className="text-gold text-xs font-serif font-bold">SS</span>
              </div>
              <div>
                <div className="text-white font-serif font-semibold text-lg tracking-widest uppercase">
                  Soumaoro
                </div>
                <div className="text-[10px] text-gold/60 tracking-[0.2em] uppercase -mt-0.5">
                  Signature — Chauffeur Privé
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Soumaoro Signature — Service de transport privé haut de gamme à Fougères.
              Ponctualité, discrétion et excellence à chaque trajet.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+33600000000"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    06 XX XX XX XX
                  </a>
                  <div className="text-white/30 text-xs mt-0.5">Disponible 24h/24</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@sc-signature.fr"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  contact@soumaoro-signature.fr
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">Fougères, Bretagne</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-green-500/30 text-green-400 text-sm hover:bg-green-500/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>© {new Date().getFullYear()} Soumaoro Signature. Tous droits réservés.</span>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-gold transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-gold transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-gold transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
