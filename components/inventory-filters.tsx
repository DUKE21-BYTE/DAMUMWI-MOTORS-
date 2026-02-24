"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { cars } from "@/lib/cars"
import { CarCard } from "@/components/car-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const makes = Array.from(new Set(cars.map((c) => c.make))).sort()
const categories = Array.from(new Set(cars.map((c) => c.category))).sort()
const fuelTypes = Array.from(new Set(cars.map((c) => c.fuelType))).sort()

export function InventoryFilters() {
  const [query, setQuery] = useState("")
  const [selectedMake, setSelectedMake] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedFuel, setSelectedFuel] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("price-asc")
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...cars]

    // Search
    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (c) =>
          c.make.toLowerCase().includes(q) ||
          c.model.toLowerCase().includes(q) ||
          c.trim.toLowerCase().includes(q) ||
          `${c.year}`.includes(q)
      )
    }

    // Filters
    if (selectedMake !== "all") {
      result = result.filter((c) => c.make === selectedMake)
    }
    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category === selectedCategory)
    }
    if (selectedFuel !== "all") {
      result = result.filter((c) => c.fuelType === selectedFuel)
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage)
        break
    }

    return result
  }, [query, selectedMake, selectedCategory, selectedFuel, sortBy])

  const activeFilters =
    (selectedMake !== "all" ? 1 : 0) +
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedFuel !== "all" ? 1 : 0)

  const clearFilters = () => {
    setQuery("")
    setSelectedMake("all")
    setSelectedCategory("all")
    setSelectedFuel("all")
    setSortBy("price-asc")
  }

  return (
    <div>
      {/* Search & toggle */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by make, model or year..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          className="gap-2 sm:w-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilters > 0 && (
            <Badge className="ml-1 bg-primary text-primary-foreground">
              {activeFilters}
            </Badge>
          )}
        </Button>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="year-desc">Year: Newest First</SelectItem>
            <SelectItem value="mileage-asc">Mileage: Lowest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="mb-6 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">
              Filter By
            </h3>
            {activeFilters > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <X className="h-3 w-3" />
                Clear all
              </button>
            )}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger>
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Makes</SelectItem>
                {makes.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedFuel} onValueChange={setSelectedFuel}>
              <SelectTrigger>
                <SelectValue placeholder="Fuel Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fuel Types</SelectItem>
                {fuelTypes.map((f) => (
                  <SelectItem key={f} value={f}>
                    {f}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filtered.length} of {cars.length} vehicles
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16 text-center">
          <Search className="mb-4 h-10 w-10 text-muted-foreground" />
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            No vehicles found
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Try adjusting your search or filters
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
