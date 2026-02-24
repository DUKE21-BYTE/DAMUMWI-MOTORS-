import Link from "next/link"
import { ArrowRight, Shield, Truck, Award, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cars, getWhatsAppLink } from "@/lib/cars"
import { CarCard } from "@/components/car-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function HomePage() {
  const featuredCars = cars.slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C0A062]/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C0A062]/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
            
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#C0A062 1px, transparent 1px), linear-gradient(90deg, #C0A062 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Premium Cars in Kenya</span>
            </div>

            <h1 className="mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-slide-up">
              <span className="text-white">DAMUMWI</span>
              <span className="text-[#C0A062]">.</span>
            </h1>
            
            <p className="mb-4 text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
              MOTORS
            </p>

            <p className="mb-10 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Your trusted destination for premium new and used vehicles. 
              Quality assured, competitively priced, directly imported to Kenya.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/inventory" className="w-full sm:w-auto">
                <Button size="lg" className="w-full btn-gold h-14 text-lg">
                  View Inventory
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full btn-outline h-14 text-lg bg-transparent hover:bg-transparent">
                  <Phone className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Cars */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Our Collection
              </span>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                Featured Vehicles
              </h2>
              <p className="mt-2 max-w-lg text-muted-foreground">
                Hand-picked vehicles offering the best value and quality. Each
                car is inspected and comes with full documentation.
              </p>
            </div>
            <Link href="/inventory">
              <Button variant="outline" className="gap-2">
                View All Cars
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="mb-12 text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Why Damumwi Motors
              </span>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                Your Trusted Partner
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Verified Quality",
                  desc: "Every vehicle undergoes thorough inspection. We provide auction grades, service history, and genuine mileage verification for complete transparency.",
                },
                {
                  icon: Truck,
                  title: "Nationwide Delivery",
                  desc: "We handle all logistics from Japan to your doorstep in Kenya. C&F and CIF pricing includes shipping. Delivery available across all 47 counties.",
                },
                {
                  icon: Award,
                  title: "Best Prices Guaranteed",
                  desc: "Direct imports mean no middlemen. We pass the savings to you with competitive C&F, CIF, and CNF pricing in USD for transparency.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Wide Selection
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
              Brands We Stock
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Toyota",
              "Mercedes-Benz",
              "Mazda",
              "Suzuki",
              "Nissan",
              "Honda",
              "Subaru",
              "Mitsubishi",
            ].map((brand) => (
              <div
                key={brand}
                className="flex h-16 items-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center lg:px-8 lg:py-20">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Find Your Perfect Car?
            </h2>
            <p className="mb-8 max-w-lg text-primary-foreground/80">
              Chat with us on WhatsApp for personalized recommendations,
              pricing, and to book your vehicle today.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Phone className="h-4 w-4" />
                Chat on WhatsApp Now
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
