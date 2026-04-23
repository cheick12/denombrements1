import { NextRequest, NextResponse } from 'next/server'
import { saveMessage } from '@/lib/bookings'
import type { ContactMessage } from '@/lib/types'
import { generateId } from '@/lib/utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, subject, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires : firstName, email, message' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const msg: ContactMessage = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      firstName,
      lastName: lastName || '',
      email,
      phone: phone || '',
      subject: subject || 'Demande générale',
      message,
      read: false,
    }

    saveMessage(msg)

    // In production: send notification email to admin here
    // await sendAdminNotificationEmail(msg)

    return NextResponse.json(
      { id: msg.id, message: 'Message reçu, nous vous répondrons dans les 2 heures.' },
      { status: 201 }
    )
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du message' }, { status: 500 })
  }
}
