"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export type GalleryKey = "destinations" | "hotels" | "brands" | "platforms" | "airlines"

const galleryImages: Record<GalleryKey, string[]> = {
  destinations: Array.from({ length: 18 }, (_, i) => `/Destination-${String(i + 1).padStart(2, "0")}.jpeg`),
  hotels: Array.from({ length: 25 }, (_, i) => `/Hotel-${String(i + 1).padStart(2, "0")}.jpeg`),
  brands: Array.from({ length: 12 }, (_, i) => `/Travelbrand-${String(i + 1).padStart(2, "0")}.jpeg`),
  platforms: Array.from({ length: 16 }, (_, i) => `/Experiences-${String(i + 1).padStart(2, "0")}.jpeg`),
  airlines: Array.from({ length: 15 }, (_, i) => `/Transportation-${String(i + 1).padStart(2, "0")}.jpeg`),
}

interface CategoryDetailModalProps {
  title: string
  about: string
  content: string
  idealFor: string
  image: string
  galleryKey: GalleryKey
  onClose: () => void
}

export function CategoryDetailModal({
  title,
  about,
  content,
  idealFor,
  image,
  galleryKey,
  onClose,
}: CategoryDetailModalProps) {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  const contentItems = content.split(" / ").map((s) => s.trim()).filter(Boolean)
  const idealForItems = idealFor.split(" / ").map((s) => s.trim()).filter(Boolean)
  const photos = galleryImages[galleryKey]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "relative z-10 w-full sm:max-w-2xl max-h-[92dvh] overflow-y-auto",
          "bg-background rounded-t-3xl sm:rounded-3xl shadow-2xl",
          "animate-in fade-in slide-in-from-bottom-4 duration-300"
        )}
      >
        {/* Hero image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl sm:rounded-t-3xl flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-foreground/40 backdrop-blur-sm text-white hover:bg-foreground/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight text-balance">
              {title}
            </h2>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="px-6 py-8 space-y-7">

          {/* About */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-3">
              {t("label.about")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">{about}</p>
          </div>

          <div className="border-t border-border/50" />

          {/* Content Creation */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-3">
              {t("label.contentcreation")}
            </p>
            <ul className="space-y-2">
              {contentItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border/50" />

          {/* Ideal For */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-3">
              {t("label.idealfor")}
            </p>
            <ul className="space-y-2">
              {idealForItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border/50" />

          {/* Gallery */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-4">
              Gallery
            </p>
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {photos.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-52 aspect-[3/4] overflow-hidden rounded-xl snap-start"
                >
                  <Image
                    src={src}
                    alt={`${title} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
