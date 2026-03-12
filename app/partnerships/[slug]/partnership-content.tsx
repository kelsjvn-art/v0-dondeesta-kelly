"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { Mail } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { partnerships } from "@/lib/partnership-data"

function PartnershipInner({ slug }: { slug: string }) {
  const { t } = useLanguage()

  const partnership = partnerships.find((p) => p.slug === slug)
  if (!partnership) notFound()

  const title = t(partnership.titleKey)
  const about = t(partnership.aboutKey)
  const contentItems = t(partnership.contentKey)
    .split(" / ")
    .map((s) => s.trim())
    .filter(Boolean)
  const idealForItems = t(partnership.idealForKey)
    .split(" / ")
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="sub-page" />

      {/* Back button */}
      <div className="fixed top-[60px] left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <a
            href="/#collaborations"
            className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">←</span>
            {t("partnership.back")}
          </a>
        </div>
      </div>

      {/* Hero — same layout as About Me: image left, text right */}
      <section className="pt-36 md:pt-40 pb-12 md:pb-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Image — left column */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partnership.heroImage}
                alt={title}
                className="w-full h-[520px] md:h-[640px] object-cover object-center rounded-2xl"
              />
            </div>
            {/* Title + About — right column */}
            <div className="w-full md:w-3/5">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight text-balance">
                {title}
              </h1>
              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-3">
                {t("label.about")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border/50" />

        {/* Content Creation */}
        <section className="py-10 md:py-12">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-5">
            {t("label.contentcreation")}
          </p>
          <ul className="space-y-3">
            {contentItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-border/50" />

        {/* Ideal For */}
        <section className="py-10 md:py-12">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-5">
            {t("label.idealfor")}
          </p>
          <ul className="space-y-3">
            {idealForItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Gallery */}
      <section className="py-10 md:py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6">
            {t("label.gallery")}
          </p>
          <div className="columns-2 md:columns-3 gap-3 md:gap-4">
            {partnership.gallery.map((src, i) => (
              <div key={i} className="break-inside-avoid mb-3 md:mb-4 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full object-cover block"
                  style={{ maxHeight: "280px", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 px-6 bg-foreground text-primary-foreground text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 tracking-tight">
          {t("contact.title")}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          {t("contact.description")}
        </p>
        <a
          href="mailto:Dondeestakelly@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors text-sm tracking-wide"
        >
          <Mail className="w-4 h-4" />
          {t("partnership.contact")}
        </a>
      </section>
    </main>
  )
}

export function PartnershipContent({ slug }: { slug: string }) {
  return (
    <LanguageProvider>
      <PartnershipInner slug={slug} />
    </LanguageProvider>
  )
}
