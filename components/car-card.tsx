import Image from "next/image"
import Link from "next/link"
import { Fuel, Gauge, Settings, Calendar, Tag } from "lucide-react"
import { type Car, formatMileage, formatPrice } from "@/lib/cars"
import { Badge } from "@/components/ui/badge"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Link
      href={`/inventory/${car.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model} ${car.trim}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {car.badge && (
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
            {car.badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-tight text-foreground">
            {car.year} {car.make} {car.model}
          </h3>
        </div>
        <p className="mb-3 text-sm text-muted-foreground">{car.trim}</p>

        {/* Specs grid */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Gauge className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Fuel className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Settings className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span>{car.engineCC}cc {car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span>{car.yearMonth}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-1.5">
            <Tag className="h-4 w-4 text-accent" />
            <span className="text-lg font-bold text-foreground">
              {formatPrice(car.price)}
            </span>
          </div>
          <span className="text-xs font-medium text-primary">
            View Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
