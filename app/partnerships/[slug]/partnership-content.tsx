"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Mail } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
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

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={partnership.heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-background" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/#collaborations"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm tracking-wide group"
          >
            <span className="p-2 rounded-full bg-foreground/30 backdrop-blur-sm group-hover:bg-foreground/50 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </span>
            <span className="hidden sm:inline">{t("partnership.back")}</span>
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-16 left-0 right-0 px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight text-balance max-w-4xl mx-auto">
            {title}
          </h1>
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-3xl mx-auto px-6">

        {/* About */}
        <section className="py-16 md:py-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4">
            {t("label.about")}
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {about}
          </p>
        </section>

        <div className="border-t border-border/50" />

        {/* Content Creation */}
        <section className="py-16 md:py-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6">
            {t("label.contentcreation")}
          </p>
          <ul className="space-y-4">
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
        <section className="py-16 md:py-20">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6">
            {t("label.idealfor")}
          </p>
          <ul className="space-y-4">
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
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-8 text-center">
            {t("label.gallery")}
          </p>
          <div className="columns-2 md:columns-3 gap-3 md:gap-4">
            {partnership.gallery.map((src, i) => (
              <div key={i} className="break-inside-avoid mb-3 md:mb-4 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 px-6 bg-foreground text-primary-foreground text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 tracking-tight">
          {t("contact.title")}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          {t("contact.description")}
        </p>
        <a
          href="mailto:Dondeestakelly@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors text-sm tracking-wide"
        >
          <Mail className="w-4 h-4" />
          {t("partnership.contact")}
        </a>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <Link
            href="/#collaborations"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("partnership.back")}
          </Link>
        </div>
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
