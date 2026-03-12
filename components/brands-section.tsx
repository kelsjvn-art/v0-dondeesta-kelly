"use client"

import { useLanguage } from "@/lib/language-context"

const brands = [
  { name: "Avianca", src: "/Avianca-Logo.png" },
  { name: "Avianca Lifemiles", src: "/Lifemiles%20logo.png" },
  { name: "Arajet", src: "/arajet.png" },
  { name: "Curaçao Tourist Board", src: "/Curazao.webp" },
  { name: "Mövenpick Resort Petra", src: "/movenpick%20resort%20Petra.png" },
  { name: "Viajero Hostels", src: "/hotel-viajero.png" },
  { name: "Holafly", src: "/Holalfy.png" },
  { name: "IATI Seguros", src: "/IATILOGO.png" },
  { name: "Europcar", src: "/Europcar_logo.png" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative aspect-[3/2] flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
