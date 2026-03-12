"use client"

import { useLanguage } from "@/lib/language-context"

const brandNames = [
  "Airbnb",
  "Booking.com",
  "Expedia",
  "TripAdvisor",
  "GetYourGuide",
  "Viator",
  "Klook",
  "Hostelworld",
]

export function BrandsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 px-6 bg-secondary/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {t("brands.label")}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-tight">
            {t("brands.title")}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brandNames.map((brand) => (
            <span
              key={brand}
              className="text-muted-foreground/60 font-medium text-sm md:text-base tracking-wide hover:text-muted-foreground transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
