"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface CategoryDetailModalProps {
  title: string
  about: string
  content: string
  idealFor: string
  image: string
  onClose: () => void
}

export function CategoryDetailModal({
  title,
  about,
  content,
  idealFor,
  image,
  onClose,
}: CategoryDetailModalProps) {
  const { t } = useLanguage()

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

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Overlay */}
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
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

          {/* Close button — top right */}
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

        {/* Content */}
        <div className="px-6 py-8 space-y-7">
          {/* About */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-2">
              {t("label.about")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">{about}</p>
          </div>

          <div className="border-t border-border/50" />

          {/* Content Creation */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-2">
              {t("label.contentcreation")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">{content}</p>
          </div>

          <div className="border-t border-border/50" />

          {/* Ideal For */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-2">
              {t("label.idealfor")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">{idealFor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
