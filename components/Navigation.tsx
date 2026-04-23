'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || mobileOpen
            ? 'glass-dark shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors">
                <span className="text-gold text-xs font-serif font-bold">SS</span>
              </div>
              <div>
                <span className="text-white font-serif font-semibold text-lg tracking-widest uppercase">
                  Soumaoro
                </span>
                <div className="text-[10px] text-gold/70 tracking-[0.2em] uppercase -mt-0.5">
                  Chauffeur Privé
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors duration-200 relative group',
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-200',
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="tracking-wide">06 XX XX XX XX</span>
              </a>
              <Link
                href="/reservation"
                className="btn-gold px-5 py-2.5 rounded text-sm text-[#0A0A0A] font-semibold tracking-widest uppercase"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-gold transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(0,0,0,0.85)' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-72 transition-transform duration-300 md:hidden',
          'bg-dark-100 border-l border-gold/10 flex flex-col',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <span className="text-white font-serif font-semibold tracking-widest uppercase">
            Soumaoro Signature
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 text-white/50 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-4 py-3 rounded text-sm tracking-wide transition-colors',
                pathname === link.href
                  ? 'bg-gold/10 text-gold'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5 flex flex-col gap-3">
          <a
            href="tel:+33600000000"
            className="flex items-center justify-center gap-2 py-3 rounded border border-white/10 text-sm text-white/70"
          >
            <Phone className="w-4 h-4" />
            06 XX XX XX XX
          </a>
          <Link
            href="/reservation"
            className="btn-gold py-3 rounded text-center text-sm text-[#0A0A0A] font-semibold tracking-widest uppercase"
          >
            Réserver maintenant
          </Link>
        </div>
      </div>
    </>
  )
}
