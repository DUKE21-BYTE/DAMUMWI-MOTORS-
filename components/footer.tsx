import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { WHATSAPP_NUMBER, getWhatsAppLink } from "@/lib/cars"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Damumwi Motors Logo"
                width={60}
                height={60}
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
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for quality new and used vehicles in Kenya.
              We import directly from Japan and Europe to bring you the best
              deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/inventory", label: "View Inventory" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hover:text-foreground"
                >
                  +254 721 904074
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>info@damumwimotors.co.ke</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get In Touch
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Ready to find your dream car? Reach out to us on WhatsApp for the
              fastest response.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Damumwi Motors. All rights
            reserved. | Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
