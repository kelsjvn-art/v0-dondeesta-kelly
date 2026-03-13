import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { PartnershipSlug } from "@/lib/partnership-data"

interface CollaborationCardProps {
  title: string
  subtitle: string
  slug: PartnershipSlug
  image: string
  className?: string
}

export function CollaborationCard({
  title,
  subtitle,
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"

        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-xl md:text-2xl font-medium text-white tracking-tight text-balance leading-snug">
            {title}
          </h3>
          <p className="text-white/75 text-sm mt-1 leading-snug text-balance">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  )
}
