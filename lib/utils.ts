import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatDateTime(dateStr: string, timeStr: string): string {
  return `${formatDate(dateStr)} à ${timeStr}`
}

export function getTodayString(): string {
  return new Date().toISOString().split('T')[0]
}

export function getMinDate(): string {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
}

export function generateId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = 'SC-'
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function maskEmail(email: string): string {
  const [user, domain] = email.split('@')
  const maskedUser = user.charAt(0) + '***' + user.charAt(user.length - 1)
  return `${maskedUser}@${domain}`
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('33')) {
    return '+33 ' + cleaned.slice(2).replace(/(.{2})/g, '$1 ').trim()
  }
  return phone.replace(/(.{2})/g, '$1 ').trim()
}
