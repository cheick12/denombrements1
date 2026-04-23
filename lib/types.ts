export type TripType = 'simple' | 'retour' | 'mise_a_disposition' | 'aeroport_rennes' | 'aeroport_nantes' | 'aeroport_paris' | 'longue_distance'

export type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'

export type PaymentStatus = 'pending' | 'paid' | 'refunded' | 'failed'

export interface Booking {
  id: string
  createdAt: string
  status: BookingStatus

  // Trip
  departure: string
  arrival: string
  date: string
  time: string
  tripType: TripType
  passengers: number
  luggage: number
  returnDate?: string
  returnTime?: string
  disposalHours?: number

  // Pricing
  distanceKm: number
  durationMin: number
  basePrice: number
  nightSurcharge: number
  finalPrice: number
  isNightRate: boolean

  // Client
  firstName: string
  lastName: string
  email: string
  phone: string
  notes?: string

  // Payment
  paymentStatus: PaymentStatus
  paymentMethod?: 'card' | 'cash' | 'virement'
  stripeSessionId?: string
}

export interface PricingRequest {
  departure: string
  arrival: string
  date: string
  time: string
  tripType: TripType
  passengers: number
  disposalHours?: number
}

export interface PricingResponse {
  distanceKm: number
  durationMin: number
  isNightRate: boolean
  price: number
  breakdown: {
    baseFare: number
    distanceCharge: number
    nightSurcharge: number
    returnDiscount: number
    total: number
  }
  message?: string
}

export interface ContactMessage {
  id: string
  createdAt: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
  read: boolean
}

export interface AdminStats {
  totalBookings: number
  confirmedBookings: number
  totalRevenue: number
  averageRating: number
  bookingsThisMonth: number
  revenueThisMonth: number
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  content: string
  rating: number
  date: string
  avatarInitials: string
}
