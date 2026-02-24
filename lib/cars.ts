export interface Car {
  id: string
  make: string
  model: string
  trim: string
  year: number
  yearMonth: string
  condition: "New" | "Used"
  mileage: number
  engineCC: number
  fuelType: string
  transmission: string
  driveType: string
  price: number
  priceLabel: string
  image: string
  interiorImage: string
  features: string[]
  auctionGrade?: string
  chassisNo?: string
  ownership?: string
  category: "Sedan" | "SUV" | "Hatchback" | "Van" | "Wagon"
  badge?: string
}

export const cars: Car[] = [
  {
    id: "mercedes-c200-hybrid-2019",
    make: "Mercedes-Benz",
    model: "C-Class",
    trim: "Hybrid C200 Laureus Edition",
    year: 2019,
    yearMonth: "2019/10",
    condition: "Used",
    mileage: 112717,
    engineCC: 1490,
    fuelType: "Hybrid (Petrol)",
    transmission: "Automatic",
    driveType: "2WD",
    price: 18500,
    priceLabel: "C&F USD 18,500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vBUcESApnwnsayY6l4br2NtkuhNkRp.png",
    interiorImage: "",
    features: [
      "Laureus Edition package",
      "Hybrid powertrain",
      "Leather seats",
      "Climate control",
      "Navigation system",
      "LED headlights",
      "Parking sensors",
      "Alloy wheels",
    ],
    category: "Sedan",
    badge: "Premium",
  },
  {
    id: "mercedes-glc220d-2019",
    make: "Mercedes-Benz",
    model: "GLC-Class",
    trim: "GLC220D 4MATIC Sports",
    year: 2019,
    yearMonth: "2019/1",
    condition: "Used",
    mileage: 81281,
    engineCC: 2140,
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "4WD",
    price: 16700,
    priceLabel: "C&F USD 16,700",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asnAugBPiSPgqOWYaFw8Pmh0Mcw2wf.png",
    interiorImage: "",
    features: [
      "4MATIC all-wheel drive",
      "Sports package",
      "Leather interior",
      "Panoramic sunroof",
      "Power tailgate",
      "360-degree camera",
      "AMG styling",
      "Heated seats",
    ],
    category: "SUV",
    badge: "4MATIC",
  },
  {
    id: "toyota-harrier-2019",
    make: "Toyota",
    model: "Harrier",
    trim: "Progress Metal & Leather Package",
    year: 2019,
    yearMonth: "2019",
    condition: "Used",
    mileage: 199000,
    engineCC: 2000,
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "2WD",
    price: 17300,
    priceLabel: "CNF USD 17,300",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xpyr1BCQ9ILCxUXqYAiK5IwJmwBam9.png",
    interiorImage: "",
    features: [
      "Sunroof",
      "JBL sound system",
      "360-degree camera",
      "Seat heater",
      "Power seat",
      "Cruise control",
      "Power back door",
      "Modellista aero kit",
    ],
    auctionGrade: "Ready to ship",
    category: "SUV",
    badge: "Ready to Ship",
  },
  {
    id: "suzuki-baleno-xs-2019",
    make: "Suzuki",
    model: "Baleno",
    trim: "XS",
    year: 2019,
    yearMonth: "2019/11",
    condition: "Used",
    mileage: 69821,
    engineCC: 1200,
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "2WD",
    price: 8100,
    priceLabel: "CIF USD 8,100",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eAOKqH0fwqcqGvAQ8vGCq9XNDcQBYI.png",
    interiorImage: "",
    features: [
      "Keyless entry",
      "Push-button start",
      "Touchscreen infotainment",
      "Rear camera",
      "Alloy wheels",
      "Climate control",
      "Bluetooth connectivity",
      "USB port",
    ],
    category: "Hatchback",
    badge: "Budget Friendly",
  },
  {
    id: "toyota-probox-van-2019",
    make: "Toyota",
    model: "Probox Van",
    trim: "GL",
    year: 2019,
    yearMonth: "2019/2",
    condition: "Used",
    mileage: 100649,
    engineCC: 1490,
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "4WD",
    price: 6837,
    priceLabel: "C&F USD 6,837",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OcU5qd6r5wZRG3Sqz5pKwfkiJLeGyu.png",
    interiorImage: "",
    features: [
      "4-wheel drive",
      "2 Power windows",
      "Air conditioning",
      "Power steering",
      "Central locking",
      "Spacious cargo area",
      "Durable build",
      "Fuel efficient",
    ],
    category: "Van",
    badge: "Best Value",
  },
  {
    id: "toyota-corolla-fielder-2019",
    make: "Toyota",
    model: "Corolla Fielder",
    trim: "Hybrid G",
    year: 2019,
    yearMonth: "2019/2",
    condition: "Used",
    mileage: 81575,
    engineCC: 1490,
    fuelType: "Hybrid (Petrol)",
    transmission: "Automatic",
    driveType: "2WD",
    price: 9500,
    priceLabel: "CIF USD 9,500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2011.52.15%20AM-IxPpbJ4XYXClrF9aTqaxXCkZpGgpxF.jpeg",
    interiorImage: "",
    features: [
      "Hybrid powertrain",
      "Excellent fuel economy",
      "Spacious wagon",
      "Keyless entry",
      "Climate control",
      "Rear camera",
      "LED headlights",
      "One owner",
    ],
    auctionGrade: "4.5",
    chassisNo: "NKE165-7207977",
    ownership: "One Owner",
    category: "Wagon",
    badge: "Eco-Friendly",
  },
  {
    id: "mazda-cx30-hybrid-2020",
    make: "Mazda",
    model: "CX-30",
    trim: "Hybrid X Proactive Touring Selection",
    year: 2020,
    yearMonth: "2020/6",
    condition: "Used",
    mileage: 116639,
    engineCC: 1990,
    fuelType: "Hybrid (Petrol)",
    transmission: "Automatic",
    driveType: "2WD",
    price: 10219,
    priceLabel: "C&F USD 10,219",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6RhiumhKI3DkgXhDk3OPZqEKF253q7.png",
    interiorImage: "",
    features: [
      "Hybrid powertrain",
      "Proactive Touring selection",
      "Head-up display",
      "Adaptive cruise control",
      "Lane-keep assist",
      "Bose sound system",
      "Leather seats",
      "360-degree camera",
    ],
    auctionGrade: "4",
    category: "SUV",
    badge: "Auction Grade 4",
  },
]

export const WHATSAPP_NUMBER = "254721904074"

export function getWhatsAppLink(carName?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`
  if (carName) {
    const message = encodeURIComponent(
      `Hi Damumwi Motors! I'm interested in the ${carName}. Could you provide more details and availability?`
    )
    return `${baseUrl}?text=${message}`
  }
  return `${baseUrl}?text=${encodeURIComponent("Hi Damumwi Motors! I'd like to inquire about your available vehicles.")}`
}

export function formatMileage(km: number): string {
  return km.toLocaleString() + " km"
}

export function formatPrice(price: number): string {
  return "USD " + price.toLocaleString()
}
