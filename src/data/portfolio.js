/**
 * Portfolio — only OutreachGenie has an internal case study.
 * Bleki / ProdajAutomobil are external client-work links on /portfolio.
 */
export const CASE_STUDY_SLUGS = ['outreachgenie']

export const CLIENT_LIVE_URLS = {
  bleki: 'https://bleki.co.rs/',
  'prodaj-automobil': 'https://prodajautomobil.rs/',
}

export function isCaseStudySlug(slug) {
  return CASE_STUDY_SLUGS.includes(slug)
}
