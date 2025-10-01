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
// import Outreach from '@/pages/usluge/Outreach.vue'
// import OutreachGenie from '@/pages/OutreachGenie.vue'

const routes = [
    { path: '/', component: Weboro },
    { path: '/o-nama', component: Onama, meta: {title: 'O nama — Weboro'} },
    { path: '/portfolio', component: Portfolio, meta: { title: 'Portfolio — Weboro' } },
    { path: '/blog', component: Blog, meta: {title: 'Blog - Weboro'} },
    { path: '/karijera', component: Karijera, meta: {title: 'Karijera - Weboro'} },
    { path: '/kontakt', component: Kontakt, meta: {title: 'Kontak - Weboro'} },
    //
    { path: '/usluge/ecommerce', component: Ecommerce, meta: {title: 'eCommerce - Weboro'} },
    { path: '/usluge/social-media', component: SocialMedia, meta: {title: 'Social Media - Weboro'} },
    { path: '/usluge/google-ads', component: GoogleAds, meta: {title: 'Google Ads & Analitycs- Weboro'} },
    { path: '/usluge/seo', component: Seo, meta: {title: 'Seo - Weboro'} },
    { path: '/usluge/branding', component: Branding, meta: {title: 'Branding - Weboro'} },
    { path: '/usluge/video', component: Video, meta: {title: 'Video - Weboro'} },
    // { path: '/usluge/outreach', component: Outreach },
    //
    // { path: '/outreachgenie', component: OutreachGenie }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Weboro — Smart Digital Solutions'
})

export default router
