"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.destinations", href: "#destinations" },
  { key: "nav.upcoming", href: "#upcoming" },
  { key: "nav.collaborations", href: "#collaborations" },
  { key: "nav.work", href: "#work" },
  { key: "nav.contact", href: "#contact" },
]

export function Navigation() {
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50 py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-serif text-lg font-medium text-foreground tracking-tight">
          Kelly Vega
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                  scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Language toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className={`text-xs tracking-[0.15em] font-medium px-3 py-1.5 rounded-full border transition-colors ${
              scrolled
                ? "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                : "border-white/30 text-white/80 hover:text-white hover:border-white/60"
            }`}
            aria-label="Toggle language"
          >
            {language === "en" ? "ES" : "EN"}
          </button>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-1 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-sm border-b border-border/50 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
