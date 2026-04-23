import { NextRequest, NextResponse } from 'next/server'
import { saveBooking } from '@/lib/bookings'
import { calculatePrice } from '@/lib/pricing'
import type { Booking, PricingResponse } from '@/lib/types'
import { generateId } from '@/lib/utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      departure,
      arrival,
      date,
      time,
      tripType,
      passengers,
      luggage,
      disposalHours,
      returnDate,
      returnTime,
      firstName,
      lastName,
      email,
      phone,
      notes,
      pricing,
    } = body

    // Basic validation
    if (!departure || !date || !time || !tripType || !firstName || !email || !phone) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
    }

    // Use provided pricing or recalculate
    const priceData: PricingResponse =
      pricing ||
      calculatePrice({
        departure,
        arrival: arrival || '',
        date,
        time,
        tripType,
        passengers: passengers || 1,
        disposalHours,
      })

    const booking: Booking = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: 'pending',

      departure,
      arrival: arrival || '',
      date,
      time,
      tripType,
      passengers: passengers || 1,
      luggage: luggage || 0,
      disposalHours,
      returnDate,
      returnTime,

      distanceKm: priceData.distanceKm,
      durationMin: priceData.durationMin,
      basePrice: priceData.breakdown.baseFare + priceData.breakdown.distanceCharge,
      nightSurcharge: priceData.breakdown.nightSurcharge,
      finalPrice: priceData.price,
      isNightRate: priceData.isNightRate,

      firstName,
      lastName,
      email,
      phone,
      notes: notes || '',

      paymentStatus: 'pending',
      paymentMethod: 'card',
    }

    saveBooking(booking)

    // In production: send confirmation email here
    // await sendConfirmationEmail(booking)

    return NextResponse.json(
      {
        id: booking.id,
        status: booking.status,
        price: booking.finalPrice,
        message: 'Réservation confirmée',
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('[booking]', err)
    return NextResponse.json({ error: 'Erreur lors de la réservation' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
