"use client"

import { CollaborationCard } from "@/components/collaboration-card"
import { Navigation } from "@/components/navigation"
import { BrandsSection } from "@/components/brands-section"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { MapPin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

// All images organized by section — each image used only once
// DO NOT MODIFY HERO IMAGE — This is the final cinematic hero
const images = {
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%285%29-joDqTlb1hMntUgSATatqXkDsK6gQFH.jpeg",

  destinations: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.49.18%20PM-jcpuOD6FyOFTkwRPoGf8vAicaeEfM2.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.49.18%20PM%20%281%29-uoHjD1f6QPUI7pUC8J9kyOqPJf8UQZ.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.49.18%20PM%20%282%29-60ViGymXfInQnf4gAyl7Bu2zVvGS7f.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.45.17%20PM-jYjm9nfX0k1pWna3kui64Jtin4v4cT.jpeg",
  ],

  upcoming: [
    "/upcoming-3.jpeg",
    "/upcoming-5.jpeg",
    "/upcoming-6.jpeg",
    "/upcoming-7.jpeg",
    "/upcoming-8.jpeg",
    "/upcoming-9.jpeg",
  ],

  // Only first photo per collaboration category
  collaborations: {
    destinations:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%281%29-FAp60OqYjBfy7ywwwwvjplLtbnDFyO.jpeg",
    hotels:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.45.18%20PM%20%287%29-sMlFUahkJDd46401ci6krED3vJuwBg.jpeg",
    brands:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%284%29-Y74B2Q7EWnbLu4djfFGf23l51UKAcL.jpeg",
    platforms:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%282%29-EC9axtoz2yd0oFarhwUqGT9PZhZDrm.jpeg",
    airlines:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.36%20PM%20%283%29-rQybA30kww7rH0DgmO1YpBdQVGcmK6.jpeg",
  },

  work: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.35%20PM-81K1wIOrLsbeVMG2pxa15ZSO7rQaDG.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.45.18%20PM%20%282%29-AHPadw12QlXZvgJfyZX6UoMbtj8Q4B.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.45.18%20PM%20%281%29-0JsCT89YIn4isJo9Fw4CAG87hsBOdU.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.36%20PM%20%282%29-zP56ymNQy8tL99LxCsmvBYmDqKWgXr.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.36%20PM-YWyC6xTygFvYggBaJgMoPN0ZCtdkNm.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.45.18%20PM%20%286%29-gMClhkYPOwgK5ZbUC3lXQirBijCiYV.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM-E14XHgN3s2pXwnLKi8ulSIv0zVzVYT.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%281%29-bqD2MU0XiNPi9jETk1ErjGcI5E8vZa.jpeg",
  ],
}

function PageContent() {
  const { t } = useLanguage()

  const upcomingList = [
    t("upcoming.list.1"),
    t("upcoming.list.2"),
    t("upcoming.list.3"),
    t("upcoming.list.4"),
    t("upcoming.list.5"),
  ]

  const collaborationCategories = [
    {
      titleKey: "category.destinations.title",
      subtitleKey: "category.destinations.subtitle",
      slug: "destination-tourism" as const,
      image: images.collaborations.destinations,
    },
    {
      titleKey: "category.hotels.title",
      subtitleKey: "category.hotels.subtitle",
      slug: "hotels-unique-stays" as const,
      image: images.collaborations.hotels,
    },
    {
      titleKey: "category.brands.title",
      subtitleKey: "category.brands.subtitle",
      slug: "travel-brand" as const,
      image: images.collaborations.brands,
    },
    {
      titleKey: "category.platforms.title",
      subtitleKey: "category.platforms.subtitle",
      slug: "travel-platforms" as const,
      image: images.collaborations.platforms,
    },
    {
      titleKey: "category.airlines.title",
      subtitleKey: "category.airlines.subtitle",
      slug: "transportation" as const,
      image: images.collaborations.airlines,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* ====== HERO SECTION — DO NOT MODIFY ====== */}
      <section id="home" className="relative h-screen overflow-hidden">
        <Image
          src={images.hero}
          alt="Kelly Vega - Travel Storyteller"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            {t("hero.subtitle")}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight text-balance max-w-4xl">
            {t("hero.title")}
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>
      {/* ====== END HERO SECTION — DO NOT MODIFY ====== */}

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full md:w-2/5 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Foto-Bio.jpeg"
                alt="Kelly Vega"
                className="w-full h-[520px] md:h-[640px] object-cover object-top rounded-2xl"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 tracking-tight">
                {t("about.title")}
              </h2>
              <div className="space-y-5">
                {t("about.description")
                  .split("\n")
                  .map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 md:py-28 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              {t("destinations.label")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              {t("destinations.title")}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {images.destinations.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group"
              >
                <Image
                  src={src}
                  alt={`Destination ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Travel Section */}
      <section id="upcoming" className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — text */}
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
                {t("upcoming.label")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-6">
                {t("upcoming.title")}
              </h2>
              <div className="space-y-4 mb-8">
                {t("upcoming.description")
                  .split("\n")
                  .map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
              </div>
              <ul className="space-y-2">
                {upcomingList.map((destination, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-base">{destination}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — photo grid: horizontal, 6 verticales, horizontal */}
            <div className="flex flex-col gap-3 md:gap-4">

              {/* upcoming-1 — horizontal arriba */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl group">
                <Image
                  src={images.upcoming[0]}
                  alt="Upcoming travel 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* upcoming-3, 5, 6, 7, 8, 9 — 6 verticales en 2 filas de 3 */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {images.upcoming.slice(2, 8).map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl group"
                  >
                    <Image
                      src={src}
                      alt={`Upcoming travel vertical ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* upcoming-2 — horizontal abajo */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl group">
                <Image
                  src={images.upcoming[1]}
                  alt="Upcoming travel 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Categories Section */}
      <section id="collaborations" className="py-20 md:py-28 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              {t("collaborations.label")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-6">
              {t("collaborations.title")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic">
              {t("collaborations.longterm")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collaborationCategories.map((category, index) => (
              <CollaborationCard
                key={index}
                title={t(category.titleKey)}
                subtitle={t(category.subtitleKey)}
                slug={category.slug}
                image={category.image}
                className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSection />

      {/* Recent Work Section */}
      <section id="work" className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              {t("work.label")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              {t("work.title")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.work.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-xl group"
              >
                <Image
                  src={src}
                  alt={`Recent work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-28 px-6 bg-foreground text-primary-foreground"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 leading-relaxed">
            {t("contact.description")}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <a
              href="mailto:Dondeestakelly@gmail.com"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span>Dondeestakelly@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/dondeesta_kelly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <span>@dondeesta_kelly</span>
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{t("contact.footer")}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function CollaborationPage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}
