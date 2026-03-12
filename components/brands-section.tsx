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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 md:gap-y-8 md:gap-x-6">
          {brandNames.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center px-4 py-3 rounded-xl border border-border/40 bg-background/50"
            >
              <span className="text-muted-foreground/60 font-medium text-sm md:text-base tracking-wide hover:text-muted-foreground transition-colors text-center select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
