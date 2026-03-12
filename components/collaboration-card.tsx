import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { PartnershipSlug } from "@/lib/partnership-data"

interface CollaborationCardProps {
  title: string
  slug: PartnershipSlug
  image: string
  className?: string
}

export function CollaborationCard({
  title,
  slug,
  image,
  className,
}: CollaborationCardProps) {
  return (
    <Link
      href={`/partnerships/${slug}`}
      className={cn(
        "group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl",
        className
      )}
      aria-label={`View ${title} partnership details`}
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
    </Link>
  )
}
