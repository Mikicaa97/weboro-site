import { createRouter, createWebHistory } from 'vue-router'

// Glavne
import Weboro from '@/pages/Weboro.vue'
import Onama from '@/pages/Onama.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Blog from '@/pages/Blog.vue'
import Karijera from '@/pages/Karijera.vue'
import Kontakt from '@/pages/Kontakt.vue'
//
// // Usluge
import Ecommerce from '@/pages/usluge/Ecommerce.vue'
import SocialMedia from '@/pages/usluge/SocialMedia.vue'
import GoogleAds from '@/pages/usluge/GoogleAds.vue'
import Seo from '@/pages/usluge/Seo.vue'
import Branding from '@/pages/usluge/Branding.vue'
import Video from '@/pages/usluge/Video.vue'
import Magento from '@/pages/usluge/Magento.vue'
import Wordpress from '@/pages/usluge/Wordpress.vue'
import CustomWeb from '@/pages/usluge/CustomWeb.vue'
import Growth from '@/pages/usluge/Growth.vue'

// OutreachGenie
import OgHub from '@/pages/outreachgenie/Hub.vue'
import OgAi from '@/pages/outreachgenie/AiAlati.vue'
import OgBuilder from '@/pages/outreachgenie/CampaignBuilder.vue'
import OgSending from '@/pages/outreachgenie/Sending.vue'
import OgSubs from '@/pages/outreachgenie/Subscribers.vue'
import OgAnalytics from '@/pages/outreachgenie/Analytics.vue'
import OgTeams from '@/pages/outreachgenie/Teams.vue'

const routes = [
    { path: '/', component: Weboro },
    { path: '/o-nama', component: Onama, meta: {title: 'O nama — Weboro'} },
    { path: '/portfolio', component: Portfolio, meta: { title: 'Portfolio — Weboro' } },
    { path: '/blog', component: Blog, meta: {title: 'Blog - Weboro'} },
    { path: '/karijera', component: Karijera, meta: {title: 'Karijera - Weboro'} },
    { path: '/kontakt', component: Kontakt, meta: {title: 'Kontak - Weboro'} },
    //
    { path: '/usluge/ecommerce', component: Ecommerce, meta: {title: 'Web & prodaja — Weboro'} },
    { path: '/usluge/magento', component: Magento, meta: {title: 'Magento — Weboro'} },
    { path: '/usluge/wordpress', component: Wordpress, meta: {title: 'WordPress — Weboro'} },
    { path: '/usluge/custom-web', component: CustomWeb, meta: {title: 'Custom web — Weboro'} },
    { path: '/usluge/growth', component: Growth, meta: {title: 'Growth & outreach — Weboro'} },
    { path: '/usluge/social-media', component: SocialMedia, meta: {title: 'Social Media - Weboro'} },
    { path: '/usluge/google-ads', component: GoogleAds, meta: {title: 'Google Ads & Analitycs- Weboro'} },
    { path: '/usluge/seo', component: Seo, meta: {title: 'Seo - Weboro'} },
    { path: '/usluge/branding', component: Branding, meta: {title: 'Branding - Weboro'} },
    { path: '/usluge/video', component: Video, meta: {title: 'Video - Weboro'} },

    // OutreachGenie case study
    { path: '/outreachgenie', component: OgHub, meta: {title: 'OutreachGenie — Weboro'} },
    { path: '/outreachgenie/ai-alati', component: OgAi, meta: {title: 'AI alati — OutreachGenie'} },
    { path: '/outreachgenie/campaign-builder', component: OgBuilder, meta: {title: 'Campaign Builder — OutreachGenie'} },
    { path: '/outreachgenie/sending', component: OgSending, meta: {title: 'Sending Engine — OutreachGenie'} },
    { path: '/outreachgenie/subscribers', component: OgSubs, meta: {title: 'Subscribers & Engagement — OutreachGenie'} },
    { path: '/outreachgenie/analytics', component: OgAnalytics, meta: {title: 'Analytics & A/B — OutreachGenie'} },
    { path: '/outreachgenie/teams', component: OgTeams, meta: {title: 'Teams & sigurnost — OutreachGenie'} },
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
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Weboro — Smart Digital Solutions'
})

export default router
