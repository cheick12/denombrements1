'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Car,
  Plane,
  RotateCcw,
  Timer,
  CheckCircle,
  Loader2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react'
import { cn, getMinDate } from '@/lib/utils'
import type { TripType, PricingResponse } from '@/lib/types'

const TRIP_TYPES: { value: TripType; label: string; description: string; icon: typeof Car }[] = [
  { value: 'simple', label: 'Trajet simple', description: "D'un point A à un point B", icon: Car },
  { value: 'retour', label: 'Aller-retour', description: '10% de remise sur le retour', icon: RotateCcw },
  { value: 'mise_a_disposition', label: 'Mise à disposition', description: "Chauffeur dédié à l'heure", icon: Timer },
  { value: 'aeroport_rennes', label: 'Aéroport Rennes', description: 'Transfert forfait — 85€', icon: Plane },
  { value: 'aeroport_nantes', label: 'Aéroport Nantes', description: 'Transfert forfait — 140€', icon: Plane },
  { value: 'aeroport_paris', label: 'Aéroport Paris CDG', description: 'Transfert forfait — 350€', icon: Plane },
]

interface FormData {
  departure: string
  arrival: string
  date: string
  time: string
  tripType: TripType
  passengers: number
  luggage: number
  disposalHours: number
  returnDate: string
  returnTime: string
  firstName: string
  lastName: string
  email: string
  phone: string
  notes: string
}

const INITIAL: FormData = {
  departure: '',
  arrival: '',
  date: '',
  time: '',
  tripType: 'simple',
  passengers: 1,
  luggage: 0,
  disposalHours: 4,
  returnDate: '',
  returnTime: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notes: '',
}

const STEP_LABELS = ['Itinéraire', 'Options', 'Tarif', 'Coordonnées', 'Confirmation']

export default function BookingForm() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [pricing, setPricing] = useState<PricingResponse | null>(null)
  const [loadingPrice, setLoadingPrice] = useState(false)
  const [priceError, setPriceError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [bookingId, setBookingId] = useState('')

  const set = (key: keyof FormData, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }))

  const fetchPrice = useCallback(async () => {
    setLoadingPrice(true)
    setPriceError('')
    try {
      const body = {
        departure: form.departure,
        arrival: form.arrival,
        date: form.date,
        time: form.time,
        tripType: form.tripType,
        passengers: form.passengers,
        disposalHours: form.disposalHours,
      }
      const res = await fetch('/api/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('Erreur de calcul')
      const data: PricingResponse = await res.json()
      setPricing(data)
    } catch {
      setPriceError('Impossible de calculer le tarif. Veuillez réessayer.')
    } finally {
      setLoadingPrice(false)
    }
  }, [form])

  const goNext = async () => {
    if (step === 1) await fetchPrice()
    setStep((s) => Math.min(s + 1, 4))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goPrev = () => {
    setStep((s) => Math.max(s - 1, 0))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const submitBooking = async () => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, pricing }),
      })
      if (!res.ok) throw new Error('Erreur de réservation')
      const data = await res.json()
      setBookingId(data.id)
      setStep(4)
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    } finally {
      setSubmitting(false)
    }
  }

  const isStep0Valid =
    form.departure.length > 2 &&
    (form.tripType === 'mise_a_disposition' || form.arrival.length > 2) &&
    form.date &&
    form.time

  const isStep3Valid =
    form.firstName.length > 1 &&
    form.lastName.length > 1 &&
    form.email.includes('@') &&
    form.phone.length >= 10

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step progress */}
      {step < 4 && (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all',
                    i < step
                      ? 'bg-gold text-[#0A0A0A]'
                      : i === step
                      ? 'bg-gold text-[#0A0A0A] ring-2 ring-gold/30 ring-offset-2 ring-offset-dark'
                      : 'bg-dark-400 text-white/30'
                  )}
                >
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    'text-[10px] tracking-wide text-center hidden sm:block',
                    i === step ? 'text-gold' : 'text-white/30'
                  )}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative h-0.5 bg-dark-400 rounded-full mt-1">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-gold rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP 0 — Itinerary */}
      {step === 0 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="font-serif text-2xl text-white">Votre itinéraire</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                Adresse de départ
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                <input
                  type="text"
                  placeholder="ex: Fougères, 35300"
                  value={form.departure}
                  onChange={(e) => set('departure', e.target.value)}
                  className="input-dark pl-10"
                />
              </div>
            </div>

            {form.tripType !== 'mise_a_disposition' && (
              <div>
                <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                  Adresse d'arrivée
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <input
                    type="text"
                    placeholder="ex: Rennes, Aéroport"
                    value={form.arrival}
                    onChange={(e) => set('arrival', e.target.value)}
                    className="input-dark pl-10"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <input
                    type="date"
                    min={getMinDate()}
                    value={form.date}
                    onChange={(e) => set('date', e.target.value)}
                    className="input-dark pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                  Heure
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => set('time', e.target.value)}
                    className="input-dark pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Trip type */}
            <div>
              <label className="block text-xs text-white/50 mb-3 tracking-wide uppercase">
                Type de prestation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TRIP_TYPES.map(({ value, label, description, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => set('tripType', value)}
                    className={cn(
                      'flex items-start gap-3 p-3 rounded border text-left transition-all',
                      form.tripType === value
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-dark-400 hover:border-dark-500 text-white/60 hover:text-white/80'
                    )}
                  >
                    <Icon className="w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">{label}</div>
                      <div className="text-xs opacity-60 mt-0.5">{description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1 — Options */}
      {step === 1 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="font-serif text-2xl text-white">Options du trajet</h2>

          <div className="space-y-5">
            {/* Passengers */}
            <div>
              <label className="block text-xs text-white/50 mb-3 tracking-wide uppercase">
                Nombre de passagers
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => set('passengers', n)}
                    className={cn(
                      'w-10 h-10 rounded border text-sm font-semibold transition-all',
                      form.passengers === n
                        ? 'border-gold bg-gold text-[#0A0A0A]'
                        : 'border-dark-400 text-white/50 hover:border-gold/40 hover:text-white'
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Luggage */}
            <div>
              <label className="block text-xs text-white/50 mb-3 tracking-wide uppercase">
                Bagages (valises)
              </label>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => set('luggage', n)}
                    className={cn(
                      'w-10 h-10 rounded border text-sm font-semibold transition-all',
                      form.luggage === n
                        ? 'border-gold bg-gold text-[#0A0A0A]'
                        : 'border-dark-400 text-white/50 hover:border-gold/40 hover:text-white'
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Disposal hours */}
            {form.tripType === 'mise_a_disposition' && (
              <div>
                <label className="block text-xs text-white/50 mb-3 tracking-wide uppercase">
                  Durée de mise à disposition
                </label>
                <div className="flex gap-2 flex-wrap">
                  {[2, 3, 4, 5, 6, 8, 10].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => set('disposalHours', h)}
                      className={cn(
                        'px-4 py-2 rounded border text-sm font-semibold transition-all',
                        form.disposalHours === h
                          ? 'border-gold bg-gold text-[#0A0A0A]'
                          : 'border-dark-400 text-white/50 hover:border-gold/40 hover:text-white'
                      )}
                    >
                      {h}h
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Return details */}
            {form.tripType === 'retour' && (
              <div className="p-4 rounded border border-gold/20 bg-gold/5 space-y-4">
                <div className="text-sm text-gold font-medium">Informations du retour</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                      Date retour
                    </label>
                    <input
                      type="date"
                      min={form.date || getMinDate()}
                      value={form.returnDate}
                      onChange={(e) => set('returnDate', e.target.value)}
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                      Heure retour
                    </label>
                    <input
                      type="time"
                      value={form.returnTime}
                      onChange={(e) => set('returnTime', e.target.value)}
                      className="input-dark"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="p-4 rounded border border-white/5 bg-dark-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">Départ</span>
                <span className="text-white">{form.departure || '—'}</span>
              </div>
              {form.tripType !== 'mise_a_disposition' && (
                <div className="flex justify-between">
                  <span className="text-white/50">Arrivée</span>
                  <span className="text-white">{form.arrival || '—'}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-white/50">Date & heure</span>
                <span className="text-white">{form.date} à {form.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Passagers</span>
                <span className="text-white">{form.passengers}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 — Pricing */}
      {step === 2 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="font-serif text-2xl text-white">Devis de votre trajet</h2>

          {loadingPrice && (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <Loader2 className="w-8 h-8 text-gold animate-spin" />
              <p className="text-white/50 text-sm">Calcul du tarif en cours…</p>
            </div>
          )}

          {priceError && (
            <div className="flex items-start gap-3 p-4 rounded border border-red-500/30 bg-red-500/10">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-red-400 text-sm">{priceError}</p>
                <button
                  onClick={fetchPrice}
                  className="text-xs text-red-400/70 underline mt-1"
                >
                  Réessayer
                </button>
              </div>
            </div>
          )}

          {pricing && !loadingPrice && (
            <>
              {/* Price card */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-white/50 text-sm mb-1">Prix total estimé</div>
                    <div className="font-serif text-5xl font-bold text-gradient-gold">
                      {pricing.price}€
                    </div>
                    {pricing.isNightRate && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 text-xs">
                        <Clock className="w-3 h-3" />
                        Tarif nuit appliqué
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    {pricing.distanceKm > 0 && (
                      <>
                        <div className="text-white text-sm font-medium">{pricing.distanceKm} km</div>
                        <div className="text-white/40 text-xs mt-0.5">
                          ~{Math.round(pricing.durationMin / 60)}h{String(pricing.durationMin % 60).padStart(2, '0')}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="gold-line mb-5" />

                {/* Price breakdown */}
                <div className="space-y-2.5 text-sm">
                  {pricing.breakdown.baseFare > 0 && (
                    <div className="flex justify-between">
                      <span className="text-white/50">Prise en charge</span>
                      <span className="text-white">{pricing.breakdown.baseFare}€</span>
                    </div>
                  )}
                  {pricing.breakdown.distanceCharge > 0 && (
                    <div className="flex justify-between">
                      <span className="text-white/50">Distance ({pricing.distanceKm} km)</span>
                      <span className="text-white">{pricing.breakdown.distanceCharge}€</span>
                    </div>
                  )}
                  {pricing.breakdown.nightSurcharge > 0 && (
                    <div className="flex justify-between">
                      <span className="text-amber-400/80">Majoration nuit</span>
                      <span className="text-amber-400">+{pricing.breakdown.nightSurcharge}€</span>
                    </div>
                  )}
                  {pricing.breakdown.returnDiscount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-green-400/80">Remise aller-retour (-10%)</span>
                      <span className="text-green-400">-{pricing.breakdown.returnDiscount}€</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10 flex justify-between font-semibold">
                    <span className="text-white">Total TTC</span>
                    <span className="text-gold">{pricing.price}€</span>
                  </div>
                </div>
              </div>

              {/* Info notes */}
              <div className="text-xs text-white/30 space-y-1">
                <p>* Tarif estimatif. Le prix final est confirmé par le chauffeur.</p>
                <p>* Tarif nuit : 20h — 7h (+15%).</p>
                <p>* Péages et frais de stationnement non inclus pour les longues distances.</p>
              </div>
            </>
          )}
        </div>
      )}

      {/* STEP 3 — Client info */}
      {step === 3 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="font-serif text-2xl text-white">Vos coordonnées</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                  Prénom *
                </label>
                <input
                  type="text"
                  placeholder="Jean"
                  value={form.firstName}
                  onChange={(e) => set('firstName', e.target.value)}
                  className="input-dark"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                  Nom *
                </label>
                <input
                  type="text"
                  placeholder="Dupont"
                  value={form.lastName}
                  onChange={(e) => set('lastName', e.target.value)}
                  className="input-dark"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                Email *
              </label>
              <input
                type="email"
                placeholder="jean.dupont@email.com"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                className="input-dark"
              />
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                Téléphone *
              </label>
              <input
                type="tel"
                placeholder="06 XX XX XX XX"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                className="input-dark"
              />
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-2 tracking-wide uppercase">
                Instructions spéciales (optionnel)
              </label>
              <textarea
                placeholder="Numéro de vol, instructions particulières, adresse précise…"
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                rows={3}
                className="input-dark resize-none"
              />
            </div>

            {/* Booking summary */}
            <div className="p-4 rounded border border-gold/15 bg-gold/5 space-y-2 text-sm">
              <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
                Récapitulatif
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Trajet</span>
                <span className="text-white text-right">
                  {form.departure}
                  {form.arrival && ` → ${form.arrival}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Date</span>
                <span className="text-white">{form.date} à {form.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Passagers</span>
                <span className="text-white">{form.passengers}</span>
              </div>
              {pricing && (
                <div className="flex justify-between pt-2 border-t border-white/10 font-semibold">
                  <span className="text-white">Montant estimé</span>
                  <span className="text-gold">{pricing.price}€</span>
                </div>
              )}
            </div>

            <p className="text-xs text-white/30">
              En confirmant, vous acceptez nos{' '}
              <a href="/cgv" className="text-gold/60 underline hover:text-gold">
                conditions générales de vente
              </a>
              . Paiement possible par carte, espèces ou virement.
            </p>
          </div>
        </div>
      )}

      {/* STEP 4 — Confirmation */}
      {step === 4 && (
        <div className="text-center py-10 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-serif text-3xl text-white mb-3">Réservation confirmée !</h2>
          {bookingId && (
            <div className="inline-block px-4 py-1.5 rounded bg-gold/10 border border-gold/20 text-gold text-sm font-mono mb-5">
              #{bookingId}
            </div>
          )}
          <p className="text-white/60 text-sm max-w-sm mx-auto mb-2">
            Un email de confirmation a été envoyé à{' '}
            <strong className="text-white">{form.email}</strong>.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Votre chauffeur vous contactera 30 minutes avant la prise en charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`/reservation/confirmation?id=${bookingId}`}
              className="btn-gold px-6 py-3 rounded text-sm text-[#0A0A0A] font-semibold tracking-widest uppercase inline-flex items-center gap-2"
            >
              Voir ma réservation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/"
              className="btn-outline-gold px-6 py-3 rounded text-sm font-semibold tracking-widest uppercase"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      {step < 4 && (
        <div className="flex gap-3 mt-10">
          {step > 0 && (
            <button
              onClick={goPrev}
              className="flex items-center gap-2 px-5 py-3 rounded border border-dark-400 text-white/60 hover:text-white hover:border-white/20 text-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Retour
            </button>
          )}
          <button
            onClick={step === 3 ? submitBooking : goNext}
            disabled={
              (step === 0 && !isStep0Valid) ||
              (step === 3 && !isStep3Valid) ||
              submitting ||
              (step === 2 && loadingPrice)
            }
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold tracking-widest uppercase transition-all',
              'btn-gold text-[#0A0A0A]',
              ((step === 0 && !isStep0Valid) || (step === 3 && !isStep3Valid) || submitting)
                ? 'opacity-40 cursor-not-allowed'
                : ''
            )}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Confirmation…
              </>
            ) : step === 3 ? (
              <>
                Confirmer la réservation
                <CheckCircle className="w-4 h-4" />
              </>
            ) : (
              <>
                Continuer
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
