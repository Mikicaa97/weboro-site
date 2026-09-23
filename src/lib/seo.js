/**
 * Centralized SEO meta for Weboro site.
 * Locale is client-side only (no /en|/sr URL) — no hreflang.
 */
export const SITE_ORIGIN = 'https://weboro.io'
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`

/** @typedef {{ title: string, description: string, ogImage?: string, noindex?: boolean, schema?: 'home' | 'service' | 'case' | null }} SeoMeta */

/** @type {Record<string, SeoMeta>} */
export const SEO_BY_PATH = {
  '/': {
    title: 'Weboro — Web, eCommerce & Custom Development',
    description:
      'Weboro razvija web i eCommerce sisteme, custom softver i unapređenje postojećih platformi — sa fokusom na poslovni problem, ne na tehnologiju radi tehnologije.',
    schema: 'home',
  },
  '/portfolio': {
    title: 'Portfolio — Weboro',
    description:
      'Odabrani Weboro projekti: sopstveni SaaS proizvod OutreachGenie i klijentski rad na katalog sistemima, integracijama i lead sajtovima.',
  },
  '/portfolio/outreachgenie': {
    title: 'OutreachGenie — SaaS customer engagement | Weboro',
    description:
      'Case study: Weboro SaaS proizvod za kontakte, email kampanje i customer engagement — product UX, backend logika, billing, email infrastruktura i sigurnost.',
    ogImage: `${SITE_ORIGIN}/OutreachGenieHero.png`,
    schema: 'case',
  },
  '/o-nama': {
    title: 'O nama — Weboro',
    description:
      'Ko stoji iza Weboro-a: web, eCommerce i custom razvoj sa fokusom na poslovni problem — uključujući rad na postojećim sistemima i sopstveni SaaS proizvod.',
  },
  '/kontakt': {
    title: 'Kontakt — Pošaljite nam projekat | Weboro',
    description:
      'Recite nam šta želite da napravite ili šta trenutno ne radi kako treba. Ne morate unapred da znate platformu — predložićemo najpraktičniji sledeći korak.',
  },
  '/privacy': {
    title: 'Politika privatnosti — Weboro',
    description: 'Kako Weboro obrađuje podatke sa kontakt forme i osnovne informacije o privatnosti na weboro.io.',
  },
  '/terms': {
    title: 'Uslovi korišćenja — Weboro',
    description: 'Osnovni uslovi korišćenja sajta weboro.io.',
  },
  '/usluge/ecommerce': {
    title: 'Web & eCommerce — Weboro',
    description:
      'Poslovni sajtovi, shopovi i katalog sistemi. Prvo analiziramo postojeće stanje — tek onda biramo platformu.',
    schema: 'service',
  },
  '/usluge/magento': {
    title: 'Magento 2 / Adobe Commerce — Weboro',
    description:
      'Magento kada kompleksnost kataloga, integracija ili B2B to zaista zahteva — novi sistemi, migracije, performance i održavanje.',
    schema: 'service',
  },
  '/usluge/magento/migracije-i-upgrade': {
    title: 'Magento migracije i upgrade — Weboro',
    description: 'M1→M2, major upgrade i platformski prelasci sa fokusom na rizik, staging i stabilan go-live.',
    schema: 'service',
  },
  '/usluge/magento/integracije': {
    title: 'Magento integracije — Weboro',
    description: 'ERP, plaćanja, kuriri, PIM i API integracije za Magento / Adobe Commerce.',
    schema: 'service',
  },
  '/usluge/magento/performance-hosting': {
    title: 'Magento performanse i hosting — Weboro',
    description: 'Brzina, keširanje, indeksi i hosting praksa za Magento prodavnice koje moraju da izdrže saobraćaj.',
    schema: 'service',
  },
  '/usluge/magento/frontend-hyva': {
    title: 'Magento frontend i Hyvä — Weboro',
    description: 'Hyvä i storefront UX za brži Magento frontend i bolje Core Web Vitals.',
    schema: 'service',
  },
  '/usluge/magento/odrzavanje-sla': {
    title: 'Magento održavanje i SLA — Weboro',
    description: 'Security patch-evi, monitoring i održavanje Magento sistema sa jasnim SLA okvirom.',
    schema: 'service',
  },
  '/usluge/magento/b2b-resenja': {
    title: 'Magento B2B rešenja — Weboro',
    description: 'Company accounts, ponude, deljeni katalozi i B2B tokovi na Magento / Adobe Commerce.',
    schema: 'service',
  },
  '/usluge/wordpress': {
    title: 'WordPress / WooCommerce — Weboro',
    description:
      'Fleksibilan web i eCommerce bez nepotrebne kompleksnosti — poslovni sajtovi, WooCommerce i unapređenje postojećeg sistema kada ima smisla.',
    schema: 'service',
  },
  '/usluge/custom-web': {
    title: 'Custom Development — Weboro',
    description:
      'Custom softver za procese koje gotovi alati ne pokrivaju: SaaS, poslovne aplikacije, integracije i automatizacija — uz unapređenje postojećih sistema kada ima smisla.',
    schema: 'service',
  },
  '/usluge/growth': {
    title: 'Growth & Analytics — Weboro',
    description:
      'Rast koji možemo da pratimo: akvizicija, SEO i analitika povezani sa poslovnim ciljem — ne samo saobraćaj.',
    schema: 'service',
  },
  '/usluge/google-ads': {
    title: 'Google Ads — Weboro',
    description:
      'Google Ads usmeren na poslovni rezultat — kampanje povezane sa trackingom, landingom i merenjem, ne samo sa klikovima.',
    schema: 'service',
  },
  '/usluge/seo': {
    title: 'SEO — Weboro',
    description:
      'SEO koji počinje od dobrog sajta: tehnička osnova, struktura, sadržaj i search intent za dugoročnu organsku vidljivost.',
    schema: 'service',
  },
  '/usluge/google/ga4-gtm': {
    title: 'GA4 & GTM — Weboro',
    description:
      'Merenje kojem možete da verujete — plan, implementacija i validacija trackinga povezanog sa poslovnim ciljem.',
    schema: 'service',
  },
  '/usluge/google/merchant-center': {
    title: 'Merchant Center — Weboro',
    description:
      'Feed i katalog podrška za Shopping/PMax u okviru Growth & eCommerce projekata — ne kao zasebna strateška usluga.',
    noindex: true,
  },
  '/usluge/google/youtube-display': {
    title: 'YouTube & Display — Weboro',
    description:
      'YouTube i Display kao kanali unutar Growth kampanja kada odgovaraju cilju — ne kao core Weboro ponuda.',
    noindex: true,
  },
  '/usluge/google/looker-studio': {
    title: 'Looker Studio — Weboro',
    description:
      'Reporting sloj unutar Analytics-a — vizualizacija KPI-jeva povezanih sa Ads i GA4, ne standalone dashboard proizvod.',
    noindex: true,
  },
  '/usluge/social-media': {
    title: 'Meta Ads & Social — Weboro',
    description: 'Paid social podrška u okviru Growth projekata (sporedna capability).',
    noindex: true,
  },
  '/usluge/branding': {
    title: 'Branding — Weboro',
    description: 'Branding podrška uz web i product development (sporedna usluga).',
    noindex: true,
  },
  '/usluge/video': {
    title: 'Video — Weboro',
    description: 'Video produkcija uz digitalne projekte (sporedna usluga).',
    noindex: true,
  },
  '/blog': {
    title: 'Blog — Weboro',
    description: 'Weboro beleške o web razvoju i digitalnim proizvodima. Sadržaj se priprema.',
    noindex: true,
  },
  '/karijera': {
    title: 'Karijera — Weboro',
    description: 'Informacije o eventualnim otvorenim pozicijama u Weboro timu.',
    noindex: true,
  },
}

const FALLBACK = {
  title: 'Weboro — Web, eCommerce & Custom Development',
  description:
    'Weboro razvija web i eCommerce sisteme, custom softver i unapređenje postojećih platformi.',
}

function ensureMeta(selector, attr, attrValue, content) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function ensureLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Weboro',
    url: SITE_ORIGIN,
    email: 'kontakt@weboro.io',
    logo: `${SITE_ORIGIN}/og-image.png`,
    sameAs: [],
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Weboro',
    url: SITE_ORIGIN,
  }
}

function serviceSchema(meta, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: meta.title.replace(' — Weboro', '').replace(' | Weboro', ''),
    description: meta.description,
    provider: {
      '@type': 'Organization',
      name: 'Weboro',
      url: SITE_ORIGIN,
    },
    url: `${SITE_ORIGIN}${path}`,
  }
}

/**
 * @param {import('vue-router').RouteLocationNormalized} to
 */
export function applySeo(to) {
  const path = to.path.replace(/\/$/, '') || '/'
  let meta = SEO_BY_PATH[path]

  if (!meta && path.startsWith('/portfolio/')) {
    meta = {
      title: 'Case study nije pronađen — Weboro',
      description: FALLBACK.description,
      noindex: true,
    }
  }

  if (!meta) {
    meta = {
      ...FALLBACK,
      title: typeof to.meta?.title === 'string' ? to.meta.title : FALLBACK.title,
      noindex: Boolean(to.meta?.noindex),
    }
  }

  const canonical = `${SITE_ORIGIN}${path === '/' ? '/' : path}`
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE

  document.title = meta.title
  ensureMeta('meta[name="description"]', 'name', 'description', meta.description)
  ensureMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
  ensureMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
  ensureMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
  ensureMeta('meta[property="og:type"]', 'property', 'og:type', meta.schema === 'case' ? 'article' : 'website')
  ensureMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
  ensureMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
  ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
  ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)
  ensureLink('canonical', canonical)

  if (meta.noindex) {
    // Keep pages deep-linkable and allow link equity; hide from search positioning.
    ensureMeta('meta[name="robots"]', 'name', 'robots', 'noindex, follow')
  } else {
    const robots = document.head.querySelector('meta[name="robots"]')
    robots?.remove()
  }

  // Organization + WebSite once; Service/Case per page
  setJsonLd('ld-organization', organizationSchema())
  setJsonLd('ld-website', websiteSchema())
  if (meta.schema === 'service') {
    setJsonLd('ld-page', serviceSchema(meta, path))
  } else {
    setJsonLd('ld-page', null)
  }
}

/** Paths safe to list in sitemap.xml (indexable public pages). */
export function getSitemapPaths() {
  return Object.entries(SEO_BY_PATH)
    .filter(([, m]) => !m.noindex)
    .map(([path]) => path)
}
