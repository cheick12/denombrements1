import { NextRequest, NextResponse } from 'next/server'
import { getBookings } from '@/lib/bookings'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { date, time } = body

    if (!date || !time) {
      return NextResponse.json({ error: 'date and time required' }, { status: 400 })
    }

    const bookings = getBookings()
    const [reqH, reqM] = time.split(':').map(Number)
    const reqMinutes = reqH * 60 + reqM

    // Check for conflicts within a 90-minute window
    const BUFFER_MIN = 90

    const conflict = bookings
      .filter((b) => b.date === date && b.status !== 'cancelled')
      .some((b) => {
        const [bH, bM] = b.time.split(':').map(Number)
        const bMinutes = bH * 60 + bM
        return Math.abs(reqMinutes - bMinutes) < BUFFER_MIN
      })

    if (conflict) {
      return NextResponse.json({
        available: false,
        message: 'Ce créneau n\'est pas disponible. Veuillez choisir un autre horaire (marge minimum 90 min entre deux courses).',
      })
    }

    return NextResponse.json({ available: true, message: 'Créneau disponible.' })
  } catch (err) {
    console.error('[availability]', err)
    return NextResponse.json({ error: 'Erreur de vérification' }, { status: 500 })
  }
}
