"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface CollaborationCardProps {
  title: string
  about: string
  content: string
  idealFor: string
  image: string
  className?: string
}

export function CollaborationCard({
  title,
  about,
  content,
  idealFor,
  image,
  className,
}: CollaborationCardProps) {
  const [expanded, setExpanded] = useState(false)
  const { t } = useLanguage()

  return (
    <div className={cn("group", className)}>
      {/* Clickable header area */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
        aria-expanded={expanded}
      >
        {/* Image — always visible */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
            <h3 className="font-serif text-xl md:text-2xl font-medium text-white tracking-tight text-balance">
              {title}
            </h3>
            <div
              className={cn(
                "flex-shrink-0 ml-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform duration-300",
                expanded ? "rotate-180" : "rotate-0"
              )}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-1 pb-4 space-y-4">
          {/* About */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-1.5">
              {t("label.about")}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{about}</p>
          </div>

          {/* Content Creation */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-1.5">
              {t("label.contentcreation")}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
          </div>

          {/* Ideal For */}
          <div>
            <p className="text-primary text-xs tracking-[0.15em] uppercase mb-1.5">
              {t("label.idealfor")}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{idealFor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
