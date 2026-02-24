import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { InventoryFilters } from "@/components/inventory-filters"

export const metadata: Metadata = {
  title: "Inventory | Damumwi Motors - New & Used Cars for Sale in Kenya",
  description:
    "Browse our full inventory of quality new and used cars for sale in Kenya. Toyota, Mercedes-Benz, Mazda, Suzuki and more. Affordable prices with nationwide delivery.",
}

export default function InventoryPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16">
        <div className="mb-8">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Collection
          </span>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vehicle Inventory
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Explore our selection of quality imported vehicles. Each car comes
            with verified specs, auction grades, and competitive C&F/CIF
            pricing. Book your preferred vehicle via WhatsApp.
          </p>
        </div>

        <InventoryFilters />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
