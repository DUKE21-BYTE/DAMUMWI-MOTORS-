"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppLink } from "@/lib/cars"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About Us" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Damumwi Motors Logo"
            width={60}
            height={60}
            priority
            className="h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-normal rounded-xl"
          />
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Damumwi
            </span>
            <span className="text-xl font-bold tracking-tight text-primary">
              {" "}Motors
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-base font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Phone className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
