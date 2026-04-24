import type { Metadata } from 'next'
import { getBookings, getMessages, getAdminStats } from '@/lib/bookings'
import { formatPrice } from '@/lib/pricing'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import {
  TrendingUp,
  Calendar,
  Users,
  Euro,
  CheckCircle,
  Clock,
  XCircle,
  MessageSquare,
  ArrowLeft,
  Car,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin — Soumaoro Signature',
  robots: { index: false, follow: false },
}

const statusConfig: Record<
  string,
  { label: string; color: string; icon: typeof Clock }
> = {
  pending: { label: 'Pending', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20', icon: Clock },
  confirmed: { label: 'Confirmed', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', icon: CheckCircle },
  in_progress: { label: 'In progress', color: 'text-gold bg-gold/10 border-gold/20', icon: Car },
  completed: { label: 'Completed', color: 'text-green-400 bg-green-400/10 border-green-400/20', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'text-red-400 bg-red-400/10 border-red-400/20', icon: XCircle },
}

export default async function AdminPage() {
  const bookings = getBookings()
  const messages = getMessages()
  const stats = getAdminStats()

  const statCards = [
    { icon: Calendar, label: 'Total bookings', value: stats.totalBookings, sub: `${stats.bookingsThisMonth} this month` },
    { icon: CheckCircle, label: 'Confirmed', value: stats.confirmedBookings, sub: 'Excluding cancellations' },
    { icon: Euro, label: 'Total revenue', value: formatPrice(stats.totalRevenue), sub: `${formatPrice(stats.revenueThisMonth)} this month` },
    { icon: MessageSquare, label: 'Messages', value: messages.filter((m) => !m.read).length, sub: `${messages.length} total` },
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Top bar */}
      <div className="bg-dark-100 border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Public site
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-white font-serif font-semibold">
            Dashboard — Soumaoro Signature
          </span>
        </div>
        <div className="text-white/30 text-xs">
          {new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {statCards.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="glass-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <TrendingUp className="w-3.5 h-3.5 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white font-serif">{value}</div>
              <div className="text-white/50 text-xs mt-1">{label}</div>
              <div className="text-white/30 text-xs mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bookings table */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <h2 className="text-white font-semibold">Recent bookings</h2>
                <span className="text-white/30 text-xs">{bookings.length} total</span>
              </div>

              {bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Calendar className="w-8 h-8 text-white/20 mb-3" />
                  <p className="text-white/30 text-sm">No bookings yet</p>
                  <p className="text-white/20 text-xs mt-1">
                    New bookings will appear here as they come in
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        {['ID', 'Client', 'Journey', 'Date', 'Price', 'Status'].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left text-xs text-white/30 tracking-wider uppercase font-medium"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {bookings.slice(0, 15).map((booking) => {
                        const s = statusConfig[booking.status] || statusConfig.pending
                        const StatusIcon = s.icon
                        return (
                          <tr key={booking.id} className="hover:bg-white/2 transition-colors">
                            <td className="px-4 py-3">
                              <span className="text-gold text-xs font-mono">{booking.id}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-white text-sm">
                                {booking.firstName} {booking.lastName}
                              </div>
                              <div className="text-white/30 text-xs">{booking.phone}</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-white/70 text-xs max-w-[120px] truncate">
                                {booking.departure}
                              </div>
                              <div className="text-white/40 text-xs truncate">
                                → {booking.arrival || 'Hourly hire'}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-white/70 text-xs">{booking.date}</div>
                              <div className="text-white/40 text-xs">{booking.time}</div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-gold font-semibold text-sm">
                                {booking.finalPrice}€
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-xs font-medium ${s.color}`}
                              >
                                <StatusIcon className="w-3 h-3" />
                                {s.label}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Messages sidebar */}
          <div>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <h2 className="text-white font-semibold">Recent messages</h2>
                <span className="text-white/30 text-xs">{messages.length} total</span>
              </div>

              {messages.length === 0 ? (
                <div className="py-12 text-center">
                  <MessageSquare className="w-7 h-7 text-white/20 mx-auto mb-3" />
                  <p className="text-white/30 text-sm">No messages</p>
                </div>
              ) : (
                <div className="divide-y divide-white/5 max-h-[500px] overflow-y-auto">
                  {messages.slice(0, 10).map((msg) => (
                    <div key={msg.id} className="p-4 hover:bg-white/2 transition-colors">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-white text-sm font-medium">
                          {msg.firstName} {msg.lastName}
                        </span>
                        {!msg.read && (
                          <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1" />
                        )}
                      </div>
                      <div className="text-white/40 text-xs mb-2">{msg.email}</div>
                      <p className="text-white/60 text-xs line-clamp-2">{msg.message}</p>
                      <div className="text-white/20 text-xs mt-2">
                        {new Date(msg.createdAt).toLocaleDateString('en-GB')}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="mt-4 glass-card rounded-xl p-5 space-y-3">
              <h3 className="text-white/60 text-xs tracking-widest uppercase font-semibold mb-3">
                Quick actions
              </h3>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
              >
                <Users className="w-4 h-4 text-gold" />
                Call a client
              </a>
              <Link
                href="/reservation"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
              >
                <Calendar className="w-4 h-4 text-gold" />
                New booking
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming rides */}
        <div className="mt-6 glass-card rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-white font-semibold">Upcoming rides</h2>
          </div>
          {bookings.filter((b) => b.status !== 'cancelled' && b.status !== 'completed').length === 0 ? (
            <div className="flex items-center justify-center py-10 text-white/30 text-sm gap-2">
              <Car className="w-5 h-5" />
              No upcoming rides at the moment
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {bookings
                .filter((b) => b.status !== 'cancelled' && b.status !== 'completed')
                .slice(0, 5)
                .map((booking) => (
                  <div key={booking.id} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-gold font-bold text-sm">{booking.time}</div>
                        <div className="text-white/30 text-xs">{booking.date}</div>
                      </div>
                      <div>
                        <div className="text-white text-sm">
                          {booking.firstName} {booking.lastName}
                        </div>
                        <div className="text-white/40 text-xs">
                          {booking.departure} → {booking.arrival || 'Hourly hire'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold font-bold">{booking.finalPrice}€</span>
                      <a
                        href={`tel:${booking.phone}`}
                        className="text-xs px-3 py-1.5 rounded border border-white/10 text-white/50 hover:border-gold/30 hover:text-gold transition-colors"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
