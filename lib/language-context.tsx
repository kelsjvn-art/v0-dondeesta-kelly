"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.destinations": "Destinations",
    "nav.upcoming": "Upcoming",
    "nav.collaborations": "Partnerships",
    "nav.work": "Work",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Travel Storyteller & Photographer",
    "hero.title": "Documenting the world through cinematic stories",

    // About
    "about.title": "About Me",
    "about.description":
      "I'm a travel photographer and storyteller drawn to emotional moments that rarely make the brochure.\nFrom remote landscapes to cultural encounters, I capture the beauty and humanity that make each destination worth remembering.\nMy work aims to inspire people to discover the world with curiosity and intention through cinematic storytelling, landscape photography, and immersive travel experiences.",

    // Destinations
    "destinations.label": "Visual Stories",
    "destinations.title": "Places I've Explored",

    // Upcoming
    "upcoming.label": "Coming Soon",
    "upcoming.title": "Upcoming Travel Destinations",
    "upcoming.description":
      "This year takes me across five cinematic destinations — and the right brand partner is welcome along for the ride.\nThese expeditions aren't just trips, they're an invitation for brands to become part of authentic journeys, told honestly and with intention.",
    "upcoming.list.1": "USA National Parks",
    "upcoming.list.2": "Iceland",
    "upcoming.list.3": "South Asia",
    "upcoming.list.4": "Alaska",
    "upcoming.list.5": "Patagonia",

    // Collaborations
    "collaborations.label": "Work Together",
    "collaborations.title": "Partnership Opportunities",
    "collaborations.longterm":
      "Beyond single-destination campaigns, I'm open to long-term partnerships that travel the full year with me. Multiple destinations provide the opportunity for deeper storytelling and brand narrative that builds over time.",

    // Collaboration categories
    "category.destinations.title": "Destination & Tourism",
    "category.destinations.subtitle": "Cinematic stories for tourism boards and destinations",
    "category.destinations.about":
      "The best travel content does not just show a place; it makes you feel it. I partner with destinations and tourism organizations to create cinematic stories that capture the landscapes, culture, and character that make a place worth visiting. The goal is content that moves people from scrolling past to experiencing it for themselves.",
    "category.destinations.content":
      "cinematic travel reels / landscape and destination photography / storytelling around local culture and experiences / immersive travel narratives / UGC content for tourism campaigns, social media and marketing platforms",
    "category.destinations.idealfor":
      "tourism boards / destination marketing organizations / regional tourism offices / national parks and protected areas / tourism campaigns and travel initiatives",

    "category.hotels.title": "Hotels & Unique Stays",
    "category.hotels.subtitle": "Visual storytelling for hotels, resorts and unique stays",
    "category.hotels.about":
      "A great stay is more than a room; it is a feeling, a story, and a moment in time. I partner with hotels, resorts, and unique stays to tell visual stories that go beyond the property itself, capturing the atmosphere, surrounding landscape, and the moments that make a stay memorable.",
    "category.hotels.content":
      "cinematic reels showcasing the property and its atmosphere / lifestyle and hospitality photography / storytelling that connects the stay with the destination / visual narratives highlighting the guest experience / UGC content created for hotel marketing, advertising and digital platforms",
    "category.hotels.idealfor":
      "boutique hotels / luxury hotels / hotel groups and international hotel chains / resorts and wellness resorts / eco lodges / glamping experiences / retreats and unique stays",

    "category.brands.title": "Travel Brand",
    "category.brands.subtitle": "Authentic content for travel and outdoor brands",
    "category.brands.about":
      "The most compelling brand content doesn't feel like an ad; it feels like part of the journey. I partner with travel and outdoor brands whose products are a natural fit for real journeys, integrating them authentically into the adventure.",
    "category.brands.content":
      "cinematic travel reels featuring products during real journeys / storytelling during outdoor adventures and expeditions / landscape photography in travel environments / practical travel content showing products in use / UGC content created for brand marketing and advertising campaigns",
    "category.brands.idealfor":
      "travel gear brands / outdoor and adventure brands / luggage companies / travel insurance companies / connectivity services (eSIM providers) / digital travel tools and travel technology",

    "category.platforms.title": "Travel Platforms & Experiences",
    "category.platforms.subtitle": "Immersive content for platforms and experience providers",
    "category.platforms.about":
      "The most memorable travel moments happen in the experience itself. I partner with travel platforms and experience providers to tell the emotional stories behind the activities, adventures, and cultural encounters that make a journey feel worth taking.",
    "category.platforms.content":
      "cinematic reels documenting travel experiences / storytelling around tours, adventures and cultural activities / photography capturing the atmosphere of experiences / immersive travel narratives / UGC content created for platform marketing and digital campaigns",
    "category.platforms.idealfor":
      "experience platforms / activity marketplaces / tour operators / travel booking platforms / adventure tour companies",

    "category.airlines.title": "Transportation",
    "category.airlines.subtitle": "Journey storytelling for airlines, trains and road trips",
    "category.airlines.about":
      "Transportation is an essential part of the travel experience. I build partnerships with transportation companies to showcase the journey itself and the destinations it connects. Through visual storytelling, the focus is on documenting the travel experience from departure to arrival.",
    "category.airlines.content":
      "cinematic storytelling of travel journeys / visual narratives around routes and destinations / road trip and travel logistics storytelling / photography capturing moments of the journey / UGC content created for transportation marketing and digital campaigns",
    "category.airlines.idealfor":
      "airlines / train companies / car rental companies / road trip platforms / cruise companies",

    // Labels
    "label.about": "About",
    "label.contentcreation": "Content Creation",
    "label.idealfor": "Ideal For",
    "label.gallery": "Gallery",

    // Partnership page
    "partnership.back": "Back to Partnerships",
    "partnership.contact": "Work Together",

    // Brands
    "brands.label": "Featured In",
    "brands.title": "Brands & Partners",

    // Work
    "work.label": "Portfolio",
    "work.title": "Recent Work",

    // Contact
    "contact.title": "Let's Create Together",
    "contact.description":
      "Looking for authentic travel content? I'm available for collaborations, partnerships and creative projects.",
    "contact.footer": "Based anywhere — Available worldwide",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.destinations": "Destinos",
    "nav.upcoming": "Próximos",
    "nav.collaborations": "Alianzas",
    "nav.work": "Trabajo",
    "nav.contact": "Contacto",

    // Hero
    "hero.subtitle": "Narradora de Viajes & Fotógrafa",
    "hero.title": "Documentando el mundo a través de historias cinematográficas",

    // About
    "about.title": "Sobre mí",
    "about.description":
      "Soy fotógrafa de viajes y narradora visual atraída por los momentos emocionales que rara vez aparecen en los folletos.\nDesde paisajes remotos hasta encuentros culturales, capturo la belleza y la humanidad que hacen que cada destino valga la pena recordar.\nMi trabajo busca inspirar a las personas a descubrir el mundo con curiosidad e intención a través del storytelling cinematográfico, la fotografía de paisajes y las experiencias de viaje inmersivas.",

    // Destinations
    "destinations.label": "Historias Visuales",
    "destinations.title": "Lugares que he Explorado",

    // Upcoming
    "upcoming.label": "Próximamente",
    "upcoming.title": "Próximos Destinos de Viaje",
    "upcoming.description":
      "Este año me lleva a cinco destinos cinematográficos — y el socio de marca adecuado es bienvenido a acompañarme.\nEstas expediciones no son solo viajes, son una invitación para que las marcas sean parte de viajes auténticos, contados con honestidad e intención.",
    "upcoming.list.1": "Parques Nacionales de EE.UU.",
    "upcoming.list.2": "Islandia",
    "upcoming.list.3": "Asia del Sur",
    "upcoming.list.4": "Alaska",
    "upcoming.list.5": "Patagonia",

    // Collaborations
    "collaborations.label": "Trabajemos Juntos",
    "collaborations.title": "Oportunidades de Alianza",
    "collaborations.longterm":
      "Más allá de las campañas de un solo destino, estoy abierta a alianzas a largo plazo que recorran el año completo conmigo. Múltiples destinos ofrecen la oportunidad de un storytelling más profundo y una narrativa de marca que se construye con el tiempo.",

    // Collaboration categories
    "category.destinations.title": "Destinos y Turismo",
    "category.destinations.subtitle": "Historias cinematográficas para destinos y juntas de turismo",
    "category.destinations.about":
      "El mejor contenido de viajes no solo muestra un lugar; te hace sentirlo. Me asocio con destinos y organizaciones de turismo para crear historias cinematográficas que capturan los paisajes, la cultura y el carácter que hacen que un lugar valga la pena visitar. El objetivo es contenido que mueva a las personas de pasar de largo a vivirlo.",
    "category.destinations.content":
      "reels de viaje cinematográficos / fotografía de paisajes y destinos / storytelling sobre cultura y experiencias locales / narrativas de viaje inmersivas / contenido UGC para campañas de turismo, redes sociales y plataformas de marketing",
    "category.destinations.idealfor":
      "juntas de turismo / organizaciones de marketing de destinos / oficinas regionales de turismo / parques nacionales y áreas protegidas / campañas de turismo e iniciativas de viaje",

    "category.hotels.title": "Hoteles y Alojamientos",
    "category.hotels.subtitle": "Storytelling visual para hoteles, resorts y alojamientos únicos",
    "category.hotels.about":
      "Una gran estadía es más que una habitación; es una sensación, una historia y un momento en el tiempo. Me asocio con hoteles, resorts y alojamientos únicos para contar historias visuales que van más allá de la propiedad en sí, capturando la atmósfera, el paisaje circundante y los momentos que hacen memorable una estadía.",
    "category.hotels.content":
      "reels cinematográficos del establecimiento y su atmósfera / fotografía de lifestyle y hospitalidad / storytelling que conecta la estadía con el destino / narrativas visuales que destacan la experiencia del huésped / contenido UGC para marketing hotelero, publicidad y plataformas digitales",
    "category.hotels.idealfor":
      "hoteles boutique / hoteles de lujo / grupos hoteleros y cadenas internacionales / resorts y resorts de bienestar / eco lodges / experiencias de glamping / retiros y alojamientos únicos",

    "category.brands.title": "Marcas de Viaje",
    "category.brands.subtitle": "Contenido auténtico para marcas de viajes y outdoor",
    "category.brands.about":
      "El contenido de marca más convincente no parece un anuncio; parece parte del viaje. Me asocio con marcas de viajes y outdoor cuyos productos encajan de forma natural en viajes reales, integrándolos de manera auténtica en la aventura.",
    "category.brands.content":
      "reels de viaje cinematográficos con productos en viajes reales / storytelling en aventuras y expediciones al aire libre / fotografía de paisajes en entornos de viaje / contenido práctico mostrando productos en uso / contenido UGC para campañas de marketing y publicidad de marca",
    "category.brands.idealfor":
      "marcas de equipamiento de viaje / marcas de outdoor y aventura / empresas de equipaje / compañías de seguros de viaje / servicios de conectividad (proveedores de eSIM) / herramientas digitales de viaje y tecnología",

    "category.platforms.title": "Plataformas y Experiencias",
    "category.platforms.subtitle": "Contenido inmersivo para plataformas y proveedores de experiencias",
    "category.platforms.about":
      "Los momentos de viaje más memorables ocurren en la experiencia misma. Me asocio con plataformas de viaje y proveedores de experiencias para contar las historias emocionales detrás de las actividades, aventuras y encuentros culturales que hacen que un viaje valga la pena.",
    "category.platforms.content":
      "reels cinematográficos documentando experiencias de viaje / storytelling sobre tours, aventuras y actividades culturales / fotografía que captura la atmósfera de las experiencias / narrativas de viaje inmersivas / contenido UGC para marketing de plataformas y campañas digitales",
    "category.platforms.idealfor":
      "plataformas de experiencias / marketplaces de actividades / operadores turísticos / plataformas de reservas de viaje / empresas de tours de aventura",

    "category.airlines.title": "Transporte",
    "category.airlines.subtitle": "Storytelling de viaje para aerolíneas, trenes y road trips",
    "category.airlines.about":
      "El transporte es una parte esencial de la experiencia de viaje. Construyo alianzas con empresas de transporte para mostrar el viaje en sí y los destinos que conecta. A través del storytelling visual, el enfoque está en documentar la experiencia de viaje de principio a fin.",
    "category.airlines.content":
      "storytelling cinematográfico de viajes / narrativas visuales sobre rutas y destinos / storytelling de road trips y logística de viaje / fotografía que captura momentos del trayecto / contenido UGC para marketing de transporte y campañas digitales",
    "category.airlines.idealfor":
      "aerolíneas / empresas ferroviarias / empresas de alquiler de autos / plataformas de road trip / empresas de cruceros",

    // Labels
    "label.about": "Sobre",
    "label.contentcreation": "Contenido",
    "label.idealfor": "Ideal para",
    "label.gallery": "Galería",

    // Partnership page
    "partnership.back": "Volver a Alianzas",
    "partnership.contact": "Trabajemos Juntos",

    // Brands
    "brands.label": "Destacada en",
    "brands.title": "Marcas y Socios",

    // Work
    "work.label": "Portafolio",
    "work.title": "Trabajo Reciente",

    // Contact
    "contact.title": "Creemos Juntos",
    "contact.description":
      "¿Buscas contenido de viajes auténtico? Estoy disponible para colaboraciones, alianzas y proyectos creativos.",
    "contact.footer": "Basada en cualquier lugar — Disponible en todo el mundo",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
