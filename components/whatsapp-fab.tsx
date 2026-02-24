"use client"

import { Phone } from "lucide-react"
import { getWhatsAppLink } from "@/lib/cars"

export function WhatsAppFAB() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
