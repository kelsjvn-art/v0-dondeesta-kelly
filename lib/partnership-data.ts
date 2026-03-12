export type PartnershipSlug =
  | "destination-tourism"
  | "hotels-unique-stays"
  | "travel-brand"
  | "travel-platforms"
  | "transportation"

export interface PartnershipMeta {
  slug: PartnershipSlug
  /** Translation key for the card image used as the hero */
  heroImage: string
  titleKey: string
  aboutKey: string
  contentKey: string
  idealForKey: string
  /** All gallery images in order */
  gallery: string[]
}

export const partnerships: PartnershipMeta[] = [
  {
    slug: "destination-tourism",
    heroImage: "/Destination-01.jpeg",
    titleKey: "category.destinations.title",
    aboutKey: "category.destinations.about",
    contentKey: "category.destinations.content",
    idealForKey: "category.destinations.idealfor",
    gallery: Array.from({ length: 18 }, (_, i) => `/Destination-${String(i + 1).padStart(2, "0")}.jpeg`),
  },
  {
    slug: "hotels-unique-stays",
    heroImage: "/Hotel-01.jpeg",
    titleKey: "category.hotels.title",
    aboutKey: "category.hotels.about",
    contentKey: "category.hotels.content",
    idealForKey: "category.hotels.idealfor",
    gallery: Array.from({ length: 24 }, (_, i) => `/Hotel-${String(i + 1).padStart(2, "0")}.jpeg`),
  },
  {
    slug: "travel-brand",
    heroImage: "/Travelbrand-01.jpeg",
    titleKey: "category.brands.title",
    aboutKey: "category.brands.about",
    contentKey: "category.brands.content",
    idealForKey: "category.brands.idealfor",
    gallery: Array.from({ length: 12 }, (_, i) => `/Travelbrand-${String(i + 1).padStart(2, "0")}.jpeg`),
  },
  {
    slug: "travel-platforms",
    heroImage: "/Experiences-01.jpeg",
    titleKey: "category.platforms.title",
    aboutKey: "category.platforms.about",
    contentKey: "category.platforms.content",
    idealForKey: "category.platforms.idealfor",
    gallery: Array.from({ length: 16 }, (_, i) => `/Experiences-${String(i + 1).padStart(2, "0")}.jpeg`),
  },
  {
    slug: "transportation",
    heroImage: "/Transportation-01.jpeg",
    titleKey: "category.airlines.title",
    aboutKey: "category.airlines.about",
    contentKey: "category.airlines.content",
    idealForKey: "category.airlines.idealfor",
    gallery: Array.from({ length: 15 }, (_, i) => `/Transportation-${String(i + 1).padStart(2, "0")}.jpeg`),
  },
]

export const slugToCardImage: Record<PartnershipSlug, string> = {
  "destination-tourism":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%281%29-FAp60OqYjBfy7ywwwwvjplLtbnDFyO.jpeg",
  "hotels-unique-stays":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.45.18%20PM%20%287%29-sMlFUahkJDd46401ci6krED3vJuwBg.jpeg",
  "travel-brand":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%284%29-Y74B2Q7EWnbLu4djfFGf23l51UKAcL.jpeg",
  "travel-platforms":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%282%29-EC9axtoz2yd0oFarhwUqGT9PZhZDrm.jpeg",
  transportation:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.36%20PM%20%283%29-rQybA30kww7rH0DgmO1YpBdQVGcmK6.jpeg",
}
