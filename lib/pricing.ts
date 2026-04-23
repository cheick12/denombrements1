import type { TripType, PricingRequest, PricingResponse } from './types'

// Fixed airport prices (one way from Fougères)
const AIRPORT_PRICES: Record<string, number> = {
  aeroport_rennes: 85,
  aeroport_nantes: 140,
  aeroport_paris: 350,
}

// Pricing constants
const BASE_FARE = 15
const RATE_DAY = 2.2    // €/km between 7h-20h
const RATE_NIGHT = 3.0  // €/km between 20h-7h
const MIN_FARE = 30
const WAIT_PER_HOUR = 30

function isNightRate(time: string): boolean {
  const [h] = time.split(':').map(Number)
  return h >= 20 || h < 7
}

// Haversine distance (straight line) between two French city coords
// These are approximate coords for common routes from Fougères
const CITY_COORDS: Record<string, [number, number]> = {
  'fougères': [48.352, -1.199],
  'rennes': [48.117, -1.678],
  'nantes': [47.218, -1.554],
  'paris': [48.856, 2.352],
  'saint-malo': [48.649, -2.025],
  'mont-saint-michel': [48.636, -1.511],
  'laval': [48.073, -0.769],
  'le mans': [47.995, 0.192],
  'caen': [49.183, -0.370],
  'tours': [47.394, 0.685],
  'brest': [48.390, -4.486],
  'lorient': [47.748, -3.365],
  'vannes': [47.658, -2.760],
  'quimper': [47.996, -4.097],
  'saint-brieuc': [48.514, -2.765],
  'vitré': [48.124, -1.208],
  'ernée': [48.299, -0.928],
  'mayenne': [48.302, -0.617],
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

function estimateDistance(from: string, to: string): number {
  const fromKey = from.toLowerCase().trim()
  const toKey = to.toLowerCase().trim()

  const fromCoords = CITY_COORDS[fromKey] || CITY_COORDS['fougères']
  const toCoords = CITY_COORDS[toKey]

  if (!toCoords) {
    // Fallback: 50km average local trip
    return 50
  }

  // Road factor: ~1.3x straight-line distance
  const straight = haversineKm(fromCoords[0], fromCoords[1], toCoords[0], toCoords[1])
  return Math.round(straight * 1.3)
}

export function calculatePrice(req: PricingRequest): PricingResponse {
  const { tripType, time, disposalHours } = req

  const night = isNightRate(time)
  const rate = night ? RATE_NIGHT : RATE_DAY

  // Fixed airport fares
  if (AIRPORT_PRICES[tripType]) {
    const fixedPrice = AIRPORT_PRICES[tripType]
    const nightSurcharge = night ? Math.round(fixedPrice * 0.2) : 0
    const total = fixedPrice + nightSurcharge
    return {
      distanceKm: tripType === 'aeroport_rennes' ? 50 : tripType === 'aeroport_nantes' ? 120 : 360,
      durationMin: tripType === 'aeroport_rennes' ? 50 : tripType === 'aeroport_nantes' ? 90 : 240,
      isNightRate: night,
      price: total,
      breakdown: {
        baseFare: fixedPrice,
        distanceCharge: 0,
        nightSurcharge,
        returnDiscount: 0,
        total,
      },
    }
  }

  // Mise à disposition (hourly)
  if (tripType === 'mise_a_disposition') {
    const hours = disposalHours || 4
    const hourlyPrice = WAIT_PER_HOUR * hours
    const nightSurcharge = night ? Math.round(hourlyPrice * 0.2) : 0
    const total = Math.max(MIN_FARE, hourlyPrice + nightSurcharge)
    return {
      distanceKm: 0,
      durationMin: hours * 60,
      isNightRate: night,
      price: total,
      breakdown: {
        baseFare: hourlyPrice,
        distanceCharge: 0,
        nightSurcharge,
        returnDiscount: 0,
        total,
      },
    }
  }

  // Distance-based pricing
  const distanceKm = estimateDistance(req.departure, req.arrival)
  const durationMin = Math.round((distanceKm / 80) * 60)

  const distanceCharge = Math.round(distanceKm * rate)
  const subtotal = BASE_FARE + distanceCharge
  const nightSurcharge = night ? Math.round(subtotal * 0.15) : 0

  let returnDiscount = 0
  let baseTotal = Math.max(MIN_FARE, subtotal + nightSurcharge)

  // Round trip: 10% discount
  if (tripType === 'retour') {
    returnDiscount = Math.round(baseTotal * 0.1)
    baseTotal = Math.round(baseTotal * 2 * 0.9)
  }

  return {
    distanceKm,
    durationMin,
    isNightRate: night,
    price: baseTotal,
    breakdown: {
      baseFare: BASE_FARE,
      distanceCharge,
      nightSurcharge,
      returnDiscount,
      total: baseTotal,
    },
  }
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getTripTypeLabel(type: TripType): string {
  const labels: Record<TripType, string> = {
    simple: 'Trajet simple',
    retour: 'Aller-retour',
    mise_a_disposition: 'Mise à disposition',
    aeroport_rennes: 'Aéroport de Rennes',
    aeroport_nantes: 'Aéroport de Nantes',
    aeroport_paris: 'Aéroport de Paris CDG',
    longue_distance: 'Longue distance',
  }
  return labels[type] || type
}
