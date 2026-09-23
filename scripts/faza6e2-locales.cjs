const fs = require('fs')
const path = require('path')

function patch(file, locale) {
  const p = path.join(__dirname, '..', 'src', 'locales', file)
  const data = JSON.parse(fs.readFileSync(p, 'utf8'))

  data.gm_secondary_eyebrow =
    locale === 'en'
      ? 'Secondary capability · Growth & Analytics'
      : 'Sekundarna capability · Growth & Analytics'

  data.gm_page_cta_secondary = 'Growth & Analytics'

  data.gr_v2_secondary_note =
    locale === 'en'
      ? 'Merchant, YouTube and Looker stay available as supporting capabilities when a Growth project needs them — not as separate core services.'
      : 'Merchant, YouTube i Looker ostaju dostupni kao podrška kada Growth projekat to zahteva — ne kao zasebne glavne usluge.'

  data.meta_secondary_title =
    locale === 'en'
      ? 'Paid social when it supports the Growth mix'
      : 'Paid social kada podržava Growth miks'

  data.meta_secondary_lead =
    locale === 'en'
      ? 'We use Meta Ads as a paid channel inside measurable Growth work — not as full-service community management, calendars, or influencer agency work.'
      : 'Meta Ads koristimo kao paid kanal unutar merljivog Growth rada — ne kao full-service community management, kalendare ili influencer agenciju.'

  data.meta_secondary_focus_title = locale === 'en' ? 'What this covers' : 'Šta ovo pokriva'

  data.meta_secondary_focus =
    locale === 'en'
      ? [
          'Paid Meta campaigns when they fit acquisition goals',
          'Tracking and conversion alignment with GA4/Ads',
          'Creative tests tied to business outcomes',
        ]
      : [
          'Paid Meta kampanje kada odgovaraju akviziciji',
          'Tracking i konverzije usklađeni sa GA4/Ads',
          'Creative testovi vezani za poslovni ishod',
        ]

  data.meta_secondary_note =
    locale === 'en'
      ? 'This page is intentionally secondary. For acquisition strategy start from Growth & Analytics.'
      : 'Ova stranica je namerno sekundarna. Za akvizicionu strategiju krenite od Growth & Analytics.'

  const gm = data.gm_pages
  if (gm?.merchant) {
    gm.merchant.title =
      locale === 'en'
        ? 'Merchant Center feed & catalog support for commerce campaigns'
        : 'Merchant Center feed i katalog podrška za commerce kampanje'
    gm.merchant.lead =
      locale === 'en'
        ? 'Feed health, approvals, and Shopping/PMax readiness — as support inside Growth and eCommerce projects, not a standalone strategic service.'
        : 'Zdravlje feed-a, odobrenja i Shopping/PMax spremnost — kao podrška unutar Growth i eCommerce projekata, ne kao zasebna strateška usluga.'
    gm.merchant.kpis =
      locale === 'en'
        ? ['Feed health', 'Product approvals', 'Shopping readiness']
        : ['Zdravlje feed-a', 'Odobrenja proizvoda', 'Shopping spremnost']
  }
  if (gm?.youtube) {
    gm.youtube.title =
      locale === 'en'
        ? 'YouTube & Display when the campaign mix needs them'
        : 'YouTube & Display kada kampanja to zahteva'
    gm.youtube.lead =
      locale === 'en'
        ? 'Video and display channels used selectively inside Growth campaigns — not positioned as a core Weboro competence or every-Google-channel catalog.'
        : 'Video i display kanali selektivno unutar Growth kampanja — ne kao core Weboro kompetencija ili katalog svih Google kanala.'
  }
  if (gm?.looker) {
    gm.looker.title =
      locale === 'en'
        ? 'Looker Studio as the reporting layer of Analytics'
        : 'Looker Studio kao reporting sloj Analytics-a'
    gm.looker.lead =
      locale === 'en'
        ? 'Dashboards that visualize GA4, Ads and business KPIs — a visualization layer inside Analytics, not a standalone dashboard product.'
        : 'Dashboards koji vizualizuju GA4, Ads i poslovne KPI-jeve — vizualizacioni sloj unutar Analytics-a, ne standalone dashboard proizvod.'
  }

  for (const key of Object.keys(gm || {})) {
    const page = gm[key]
    if (!Array.isArray(page.related)) continue
    page.related = page.related.map((rel) => {
      if (rel.to === '/usluge/google-marketing') {
        return { label: 'Growth & Analytics', to: '/usluge/growth' }
      }
      return rel
    })
  }

  // Legacy Google Marketing hub cards still in locales — keep for unused GoogleMarketing.vue
  // but do not surface in nav.

  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n')
  console.log('patched', file)
}

patch('en.json', 'en')
patch('sr.json', 'sr')
