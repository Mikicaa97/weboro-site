<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 gr-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_78%_18%,rgba(255,138,61,0.09),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 sm:mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('service_growth_page_title') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3 sm:mb-4">{{ $t('gr_v2_eyebrow') }}</p>
            <h1 class="text-[2rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.08] mb-4 sm:mb-5">
              {{ $t('gr_v2_title') }}
            </h1>
            <p class="text-[15px] sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-6 sm:mb-8">
              {{ $t('gr_v2_lead') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
              >
                {{ $t('cta_send_project') }}
              </router-link>
              <router-link
                to="/portfolio"
                class="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('web_cta_work') }}
              </router-link>
            </div>
          </div>

          <div class="hidden sm:block lg:col-span-6 relative">
            <div class="absolute -inset-3 bg-gradient-to-tr from-[#ff8a3d]/14 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden p-4 sm:p-5 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.9)]">
              <svg class="w-full h-auto" viewBox="0 0 480 220" role="img" :aria-label="$t('gr_v2_visual_aria')">
                <rect width="480" height="220" fill="#0f0f10"/>
                <text x="240" y="22" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.3" font-family="ui-sans-serif, system-ui, sans-serif">GROWTH LOOP</text>

                <rect x="20" y="50" width="100" height="48" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <text x="70" y="78" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('gr_v2_node_acq') }}</text>

                <path d="M 120 74 L 148 74" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="148,74 140,70 140,78" fill="#ff8a3d" opacity="0.7"/>

                <rect x="150" y="50" width="110" height="48" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="205" y="78" text-anchor="middle" fill="#e4e4e7" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('gr_v2_node_site') }}</text>

                <path d="M 260 74 L 288 74" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="288,74 280,70 280,78" fill="#ff8a3d" opacity="0.7"/>

                <rect x="290" y="50" width="100" height="48" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="340" y="78" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('gr_v2_node_actions') }}</text>

                <path d="M 390 74 L 418 74" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="418,74 410,70 410,78" fill="#ff8a3d" opacity="0.7"/>

                <rect x="420" y="50" width="40" height="48" rx="8" fill="#1f1610" stroke="rgba(255,138,61,0.4)"/>
                <text x="440" y="78" text-anchor="middle" fill="#ffb088" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('gr_v2_node_meas') }}</text>

                <path d="M 440 98 L 440 130 L 70 130 L 70 98" fill="none" stroke="rgba(255,138,61,0.25)" stroke-width="1.2" stroke-dasharray="4 4"/>
                <text x="240" y="158" text-anchor="middle" fill="#71717a" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('gr_v2_loop_note') }}</text>

                <rect x="60" y="176" width="110" height="28" rx="6" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <text x="115" y="194" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Ads</text>
                <rect x="185" y="176" width="110" height="28" rx="6" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <text x="240" y="194" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">SEO</text>
                <rect x="310" y="176" width="110" height="28" rx="6" fill="#151517" stroke="rgba(255,138,61,0.25)"/>
                <text x="365" y="194" text-anchor="middle" fill="#d4d4d8" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">GA4 / GTM</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRINCIPLE -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('gr_v2_principle_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed text-base sm:text-lg">{{ $t('gr_v2_principle_text') }}</p>
      </div>
    </section>

    <!-- THREE AREAS AS FLOW + DETAIL -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-10">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('gr_v2_areas_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('gr_v2_areas_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('gr_v2_areas_lead') }}</p>
        </div>

        <div class="space-y-6">
          <!-- Acquisition -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 grid lg:grid-cols-12 gap-6">
            <div class="lg:col-span-4">
              <p class="text-[10px] uppercase tracking-[0.16em] text-[#ffb088]/80 mb-2">01 · Acquisition</p>
              <h3 class="text-xl font-bold mb-2">{{ $t('gr_v2_ads_title') }}</h3>
              <router-link to="/usluge/google-ads" class="text-sm text-[#ff8a3d] hover:text-[#ffb088]">Google Ads →</router-link>
            </div>
            <div class="lg:col-span-8">
              <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ $t('gr_v2_ads_lead') }}</p>
              <ul class="space-y-2">
                <li v-for="(item, i) in adsItems" :key="i" class="flex gap-3 text-sm text-zinc-300">
                  <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
                </li>
              </ul>
            </div>
          </article>

          <!-- Organic -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 grid lg:grid-cols-12 gap-6">
            <div class="lg:col-span-4">
              <p class="text-[10px] uppercase tracking-[0.16em] text-[#ffb088]/80 mb-2">02 · Organic</p>
              <h3 class="text-xl font-bold mb-2">{{ $t('gr_v2_seo_title') }}</h3>
              <router-link to="/usluge/seo" class="text-sm text-[#ff8a3d] hover:text-[#ffb088]">SEO →</router-link>
            </div>
            <div class="lg:col-span-8">
              <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ $t('gr_v2_seo_lead') }}</p>
              <ul class="space-y-2">
                <li v-for="(item, i) in seoItems" :key="i" class="flex gap-3 text-sm text-zinc-300">
                  <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
                </li>
              </ul>
            </div>
          </article>

          <!-- Measurement -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 grid lg:grid-cols-12 gap-6">
            <div class="lg:col-span-4">
              <p class="text-[10px] uppercase tracking-[0.16em] text-[#ffb088]/80 mb-2">03 · Measurement</p>
              <h3 class="text-xl font-bold mb-2">{{ $t('gr_v2_analytics_title') }}</h3>
              <router-link to="/usluge/google/ga4-gtm" class="text-sm text-[#ff8a3d] hover:text-[#ffb088]">GA4 / GTM →</router-link>
            </div>
            <div class="lg:col-span-8">
              <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ $t('gr_v2_analytics_lead') }}</p>
              <ul class="space-y-2">
                <li v-for="(item, i) in analyticsItems" :key="i" class="flex gap-3 text-sm text-zinc-300">
                  <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
                </li>
              </ul>
            </div>
          </article>
        </div>

          <p class="mt-8 text-sm text-zinc-500">
            <span class="text-zinc-600">{{ $t('gr_v2_secondary_note') }}</span>
          </p>
      </div>
    </section>

    <!-- DEV CONNECTION -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('gr_v2_dev_eyebrow') }}</p>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('gr_v2_dev_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed mb-3">{{ $t('gr_v2_dev_lead') }}</p>
        <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('gr_v2_dev_note') }}</p>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.09),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('gr_v2_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('gr_v2_cta_desc') }}</p>
        <router-link
          to="/kontakt"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
        >
          {{ $t('cta_send_project') }}
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'

const { tm } = useI18n()
const adsItems = computed(() => tm('gr_v2_ads_items') || [])
const seoItems = computed(() => tm('gr_v2_seo_items') || [])
const analyticsItems = computed(() => tm('gr_v2_analytics_items') || [])
</script>

<style scoped>
.gr-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 60% 50% at 78% 22%, black 15%, transparent 70%);
  opacity: 0.35;
}
</style>
