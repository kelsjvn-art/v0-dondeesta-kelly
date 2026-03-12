"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CategoryDetailModal } from "@/components/category-detail-modal"

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
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Clickable card — no accordion */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl",
          className
        )}
        aria-label={`View details for ${title}`}
      >
        {/* Image with title overlay — exactly as before */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-serif text-xl md:text-2xl font-medium text-white tracking-tight text-balance">
              {title}
            </h3>
          </div>
        </div>
      </button>

      {/* Detail modal */}
      {open && (
        <CategoryDetailModal
          title={title}
          about={about}
          content={content}
          idealFor={idealFor}
          image={image}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
