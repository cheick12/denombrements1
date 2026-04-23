import fs from 'fs'
import path from 'path'
import type { Booking, ContactMessage } from './types'

const DATA_DIR = path.join(process.cwd(), 'data')
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json')
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json')

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

export function getBookings(): Booking[] {
  ensureDataDir()
  if (!fs.existsSync(BOOKINGS_FILE)) {
    fs.writeFileSync(BOOKINGS_FILE, '[]', 'utf8')
    return []
  }
  try {
    const raw = fs.readFileSync(BOOKINGS_FILE, 'utf8')
    return JSON.parse(raw) as Booking[]
  } catch {
    return []
  }
}

export function getBookingById(id: string): Booking | null {
  const bookings = getBookings()
  return bookings.find((b) => b.id === id) ?? null
}

export function saveBooking(booking: Booking): void {
  ensureDataDir()
  const bookings = getBookings()
  const idx = bookings.findIndex((b) => b.id === booking.id)
  if (idx >= 0) {
    bookings[idx] = booking
  } else {
    bookings.unshift(booking)
  }
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf8')
}

export function updateBookingStatus(id: string, status: Booking['status']): boolean {
  const bookings = getBookings()
  const idx = bookings.findIndex((b) => b.id === id)
  if (idx < 0) return false
  bookings[idx].status = status
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf8')
  return true
}

export function getMessages(): ContactMessage[] {
  ensureDataDir()
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, '[]', 'utf8')
    return []
  }
  try {
    const raw = fs.readFileSync(MESSAGES_FILE, 'utf8')
    return JSON.parse(raw) as ContactMessage[]
  } catch {
    return []
  }
}

export function saveMessage(message: ContactMessage): void {
  ensureDataDir()
  const messages = getMessages()
  messages.unshift(message)
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8')
}

export function getAdminStats() {
  const bookings = getBookings()
  const now = new Date()
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

  const confirmed = bookings.filter((b) => b.status !== 'cancelled')
  const paid = bookings.filter((b) => b.paymentStatus === 'paid')
  const thisMonthBookings = confirmed.filter((b) => b.date.startsWith(thisMonth))

  return {
    totalBookings: bookings.length,
    confirmedBookings: confirmed.length,
    totalRevenue: paid.reduce((sum, b) => sum + b.finalPrice, 0),
    revenueThisMonth: thisMonthBookings
      .filter((b) => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.finalPrice, 0),
    bookingsThisMonth: thisMonthBookings.length,
    averageRating: 4.9,
  }
}
