import { NextRequest, NextResponse } from 'next/server'
import { calculatePrice } from '@/lib/pricing'
import type { PricingRequest } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const body: PricingRequest = await req.json()

    const { departure, arrival, date, time, tripType, passengers, disposalHours } = body

    if (!departure || !time || !tripType) {
      return NextResponse.json(
        { error: 'Paramètres manquants : departure, time, tripType' },
        { status: 400 }
      )
    }

    const result = calculatePrice({
      departure,
      arrival: arrival || '',
      date: date || '',
      time,
      tripType,
      passengers: passengers || 1,
      disposalHours,
    })

    return NextResponse.json(result)
  } catch (err) {
    console.error('[pricing]', err)
    return NextResponse.json({ error: 'Erreur de calcul du tarif' }, { status: 500 })
  }
}
