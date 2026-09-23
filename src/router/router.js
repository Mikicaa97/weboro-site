import { createRouter, createWebHistory } from 'vue-router'
import { applySeo } from '@/lib/seo.js'

const routes = [
  { path: '/', component: () => import('@/pages/Weboro.vue') },
  { path: '/o-nama', component: () => import('@/pages/Onama.vue'), meta: { title: 'O nama — Weboro' } },
  { path: '/portfolio', component: () => import('@/pages/Portfolio.vue'), meta: { title: 'Portfolio — Weboro' } },
  { path: '/portfolio/bleki', redirect: '/portfolio' },
  { path: '/portfolio/prodaj-automobil', redirect: '/portfolio' },
  {
    path: '/portfolio/:slug',
    component: () => import('@/pages/PortfolioCase.vue'),
    meta: { title: 'Case study — Weboro' },
  },
  {
    path: '/blog',
    component: () => import('@/pages/Blog.vue'),
    meta: { title: 'Blog — Weboro', noindex: true },
  },
  {
    path: '/karijera',
    component: () => import('@/pages/Karijera.vue'),
    meta: { title: 'Karijera — Weboro', noindex: true },
  },
  { path: '/kontakt', component: () => import('@/pages/Kontakt.vue'), meta: { title: 'Kontakt — Weboro' } },
  { path: '/privacy', component: () => import('@/pages/Privacy.vue'), meta: { title: 'Politika privatnosti — Weboro' } },
  { path: '/terms', component: () => import('@/pages/Terms.vue'), meta: { title: 'Uslovi korišćenja — Weboro' } },

  { path: '/usluge/ecommerce', component: () => import('@/pages/usluge/Ecommerce.vue'), meta: { title: 'Web & eCommerce — Weboro' } },
  { path: '/usluge/magento', component: () => import('@/pages/usluge/Magento.vue'), meta: { title: 'Magento — Weboro' } },
  { path: '/usluge/magento/migracije-i-upgrade', component: () => import('@/pages/usluge/magento/Migracije.vue'), meta: { title: 'Magento migracije — Weboro' } },
  { path: '/usluge/magento/integracije', component: () => import('@/pages/usluge/magento/Integracije.vue'), meta: { title: 'Magento integracije — Weboro' } },
  { path: '/usluge/magento/performance-hosting', component: () => import('@/pages/usluge/magento/Performance.vue'), meta: { title: 'Magento performanse & hosting — Weboro' } },
  { path: '/usluge/magento/frontend-hyva', component: () => import('@/pages/usluge/magento/Frontend.vue'), meta: { title: 'Magento frontend & Hyvä — Weboro' } },
  { path: '/usluge/magento/odrzavanje-sla', component: () => import('@/pages/usluge/magento/Odrzavanje.vue'), meta: { title: 'Magento održavanje & SLA — Weboro' } },
  { path: '/usluge/magento/b2b-resenja', component: () => import('@/pages/usluge/magento/B2B.vue'), meta: { title: 'Magento B2B rešenja — Weboro' } },
  { path: '/usluge/wordpress', component: () => import('@/pages/usluge/Wordpress.vue'), meta: { title: 'WordPress — Weboro' } },
  { path: '/usluge/custom-web', component: () => import('@/pages/usluge/CustomWeb.vue'), meta: { title: 'Custom Development — Weboro' } },
  { path: '/usluge/growth', component: () => import('@/pages/usluge/Growth.vue'), meta: { title: 'Growth & Analytics — Weboro' } },
  { path: '/usluge/google-marketing', redirect: '/usluge/growth' },
  { path: '/usluge/google-ads', component: () => import('@/pages/usluge/GoogleAds.vue'), meta: { title: 'Google Ads — Weboro' } },
  { path: '/usluge/seo', component: () => import('@/pages/usluge/Seo.vue'), meta: { title: 'SEO & Search Console — Weboro' } },
  { path: '/usluge/google/ga4-gtm', component: () => import('@/pages/usluge/google/Ga4Gtm.vue'), meta: { title: 'GA4 & GTM — Weboro' } },
  {
    path: '/usluge/google/merchant-center',
    component: () => import('@/pages/usluge/google/MerchantCenter.vue'),
    meta: { title: 'Merchant Center — Weboro', noindex: true },
  },
  {
    path: '/usluge/google/youtube-display',
    component: () => import('@/pages/usluge/google/YoutubeDisplay.vue'),
    meta: { title: 'YouTube & Display — Weboro', noindex: true },
  },
  {
    path: '/usluge/google/looker-studio',
    component: () => import('@/pages/usluge/google/LookerStudio.vue'),
    meta: { title: 'Looker Studio — Weboro', noindex: true },
  },
  {
    path: '/usluge/social-media',
    component: () => import('@/pages/usluge/SocialMedia.vue'),
    meta: { title: 'Meta Ads & Social — Weboro', noindex: true },
  },
  {
    path: '/usluge/branding',
    component: () => import('@/pages/usluge/Branding.vue'),
    meta: { title: 'Branding — Weboro', noindex: true },
  },
  {
    path: '/usluge/video',
    component: () => import('@/pages/usluge/Video.vue'),
    meta: { title: 'Video — Weboro', noindex: true },
  },

  // Legacy OutreachGenie module URLs → portfolio case study
  { path: '/outreachgenie', redirect: '/portfolio/outreachgenie' },
  { path: '/outreachgenie/:rest(.*)', redirect: '/portfolio/outreachgenie' },

  // Dead blog detail routes
  { path: '/blog/:slug', redirect: '/blog' },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFound.vue'),
    meta: { title: 'Stranica nije pronađena — Weboro', noindex: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  applySeo(to)
})

export default router
