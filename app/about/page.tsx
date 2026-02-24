import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Shield,
  Truck,
  Award,
  Users,
  Clock,
  MapPin,
  Target,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/cars"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export const metadata: Metadata = {
  title: "About Us | Damumwi Motors - Trusted Car Dealer in Kenya",
  description:
    "Learn about Damumwi Motors, a trusted car dealership in Kenya with 7+ years of experience importing quality vehicles from Japan and Europe. Meet our team and discover our story.",
}

const milestones = [
  {
    year: "2018",
    title: "Founded in Nairobi",
    description:
      "David Munji Mwihia started Damumwi Motors with a vision to provide quality, affordable vehicles to Kenyan buyers.",
  },
  {
    year: "2020",
    title: "Direct Japan Imports",
    description:
      "Established direct partnerships with Japanese auction houses and dealers, cutting out middlemen for better prices.",
  },
  {
    year: "2023",
    title: "200+ Cars Sold",
    description:
      "Reached a milestone of over 200 vehicles successfully delivered to satisfied customers across Kenya.",
  },
  {
    year: "2026",
    title: "Expanding Selection",
    description:
      "Broadened our range to include European brands like Mercedes-Benz and Mazda alongside our trusted Toyota lineup.",
  },
]

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description:
      "We share everything - auction grades, real mileage, chassis numbers, and service history. No hidden surprises.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Our reputation is built on honest deals. We treat every customer like family and stand behind every vehicle we sell.",
  },
  {
    icon: Target,
    title: "Value",
    description:
      "Direct imports mean no middlemen. We pass the savings directly to you with competitive C&F, CIF, and CNF pricing.",
  },
  {
    icon: Users,
    title: "Service",
    description:
      "From your first WhatsApp message to vehicle delivery, we guide you through every step of the buying process.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Damumwi Motors showroom"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/75" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-background/80">
              Our Story
            </span>
            <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl">
              Building Trust, One Car at a Time
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-background/70 md:text-lg">
              Damumwi Motors is more than a car dealership. We are your trusted
              partner in finding quality, affordable vehicles imported directly
              from Japan and Europe to Kenya.
            </p>
          </div>
        </section>

        {/* Story + Image */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Who We Are
              </span>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                Passionate About Quality Cars
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by David Munji Mwihia, Damumwi Motors was born from a
                  passion for connecting Kenyan buyers with exceptional vehicles
                  at fair prices. With over 7 years in the automotive industry,
                  we have built a reputation for honesty, quality, and
                  outstanding customer service.
                </p>
                <p>
                  We source vehicles directly from trusted auction houses and
                  dealers in Japan, ensuring each car meets our strict quality
                  standards before it is shipped to Kenya. Our direct import
                  model eliminates unnecessary costs, allowing us to offer
                  competitive pricing across our entire inventory.
                </p>
                <p>
                  From budget-friendly Toyota Probox vans to premium
                  Mercedes-Benz sedans and SUVs, we stock vehicles for every
                  need and budget. Our team handles everything from sourcing to
                  shipping and delivery, making the car buying experience
                  seamless and stress-free.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/team-david.jpg"
                alt="David Munji Mwihia, Founder of Damumwi Motors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="text-lg font-semibold text-background">
                  David Munji Mwihia
                </p>
                <p className="text-sm text-background/70">
                  Founder & Lead Dealer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="mb-12 text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                What Drives Us
              </span>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                Our Core Values
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Our Journey
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-12 md:self-start md:text-right"
                      : "md:pl-12 md:self-end"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:top-1 ${
                      idx % 2 === 0
                        ? "md:left-auto md:-right-[6.5px]"
                        : "md:-left-[6.5px]"
                    }`}
                  />
                  <span className="text-sm font-bold text-primary">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { icon: Award, value: "200+", label: "Cars Sold" },
                { icon: Users, value: "150+", label: "Happy Customers" },
                { icon: Clock, value: "7+", label: "Years Experience" },
                { icon: Truck, value: "47", label: "Counties Reached" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <stat.icon className="mb-2 h-6 w-6 text-primary-foreground/70" />
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Simple Process
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
              How to Buy Your Next Car
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Browse & Choose",
                description:
                  "Explore our inventory online or tell us what you are looking for. We will match you with the perfect vehicle.",
              },
              {
                step: "02",
                title: "Contact via WhatsApp",
                description:
                  "Reach out on WhatsApp for pricing details, additional photos, or to ask any questions about a vehicle.",
              },
              {
                step: "03",
                title: "Book & Receive",
                description:
                  "Secure your vehicle with a booking deposit. We handle all logistics and deliver straight to your location in Kenya.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-xl border border-border bg-card p-8"
              >
                <span className="mb-4 text-4xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  Get In Touch
                </span>
                <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                  We Would Love to Hear From You
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Whether you are looking for a specific vehicle, need advice on
                  the best import options, or simply want to learn more about
                  our services, do not hesitate to reach out.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone / WhatsApp</p>
                      <a
                        href={`tel:+${WHATSAPP_NUMBER}`}
                        className="text-sm font-medium text-foreground hover:text-primary"
                      >
                        +254 721 904074
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Business Hours</p>
                      <p className="text-sm font-medium text-foreground">
                        Mon - Sat: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center lg:p-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Send us a message on WhatsApp and our team will respond within
                  minutes during business hours.
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Phone className="h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <Link href="/inventory">
                    <Button size="lg" variant="outline" className="w-full gap-2">
                      Browse Inventory
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
