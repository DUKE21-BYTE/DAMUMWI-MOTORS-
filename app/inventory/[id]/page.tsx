import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowLeft,
  Phone,
  Fuel,
  Gauge,
  Settings,
  Calendar,
  Car as CarIcon,
  Tag,
  Shield,
  Check,
  Share2,
} from "lucide-react"
import { cars, getWhatsAppLink, formatMileage, formatPrice } from "@/lib/cars"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { CarCard } from "@/components/car-card"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const car = cars.find((c) => c.id === id)
  if (!car) return { title: "Car Not Found | Damumwi Motors" }

  const title = `${car.year} ${car.make} ${car.model} ${car.trim} | Damumwi Motors`
  const description = `Buy a ${car.condition.toLowerCase()} ${car.year} ${car.make} ${car.model} ${car.trim} - ${car.engineCC}cc ${car.fuelType} ${car.transmission} with ${formatMileage(car.mileage)} for ${formatPrice(car.price)}. Available at Damumwi Motors Kenya.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [car.image],
    },
  }
}

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params
  const car = cars.find((c) => c.id === id)
  if (!car) notFound()

  const carName = `${car.year} ${car.make} ${car.model} ${car.trim}`
  const whatsappLink = getWhatsAppLink(carName)

  const isLuxury = car.make === "Mercedes-Benz"
  const interiorImage = isLuxury
    ? "/images/interior-premium.jpg"
    : "/images/interior-generic.jpg"

  const similarCars = cars
    .filter((c) => c.id !== car.id && (c.category === car.category || c.make === car.make))
    .slice(0, 3)

  const specs = [
    { icon: Calendar, label: "Year", value: car.yearMonth },
    { icon: Gauge, label: "Mileage", value: formatMileage(car.mileage) },
    { icon: Settings, label: "Engine", value: `${car.engineCC}cc` },
    { icon: Fuel, label: "Fuel", value: car.fuelType },
    { icon: CarIcon, label: "Transmission", value: car.transmission },
    { icon: CarIcon, label: "Drive Type", value: car.driveType },
  ]

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-10">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Inventory
          </Link>
        </div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Images - 3 cols */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            {/* Main image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={car.image}
                alt={carName}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {car.badge && (
                <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                  {car.badge}
                </Badge>
              )}
            </div>

            {/* Interior image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={interiorImage}
                alt={`${carName} interior`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute bottom-3 left-3">
                <Badge
                  variant="secondary"
                  className="bg-card/90 text-card-foreground backdrop-blur-sm"
                >
                  Interior View
                </Badge>
              </div>
            </div>
          </div>

          {/* Details - 2 cols */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Title + price */}
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge variant="outline">{car.condition}</Badge>
                <Badge variant="outline">{car.category}</Badge>
                {car.auctionGrade && (
                  <Badge className="bg-accent text-accent-foreground">
                    {car.auctionGrade.startsWith("Ready") ? car.auctionGrade : `Grade ${car.auctionGrade}`}
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {car.year} {car.make} {car.model}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {car.trim}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <Tag className="h-5 w-5 text-accent" />
                <span className="text-3xl font-bold text-foreground">
                  {formatPrice(car.price)}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {car.priceLabel}
              </p>
            </div>

            {/* Specs */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Specifications
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-start gap-2">
                    <spec.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {spec.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {car.chassisNo && (
                <div className="mt-4 border-t border-border pt-4">
                  <div className="flex items-start gap-2">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Chassis No.
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {car.chassisNo}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {car.ownership && (
                <div className="mt-3">
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="text-sm font-medium text-foreground">
                      {car.ownership}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Features & Equipment
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {car.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Phone className="h-4 w-4" />
                  Book via WhatsApp
                </Button>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Inquire About This Car
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Similar cars */}
        {similarCars.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              Similar Vehicles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similarCars.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
