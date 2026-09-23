<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 seo-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_76%_20%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/growth" class="hover:text-zinc-300 transition-colors">{{ $t('service_growth_page_title') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('seo_v2_eyebrow') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('seo_v2_eyebrow') }}</p>
            <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('seo_v2_title') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {{ $t('seo_v2_lead') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
              >
                {{ $t('cta_send_project') }}
              </router-link>
              <router-link
                to="/usluge/growth"
                class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('service_growth_page_title') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-6 relative">
            <div class="absolute -inset-3 bg-gradient-to-tr from-[#ff8a3d]/12 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden p-4 sm:p-5 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.9)]">
              <svg class="w-full h-auto" viewBox="0 0 460 250" role="img" :aria-label="$t('seo_v2_visual_aria')">
                <rect width="460" height="250" fill="#0f0f10"/>
                <text x="230" y="20" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.3" font-family="ui-sans-serif, system-ui, sans-serif">SITE × SEARCH</text>

                <!-- Site structure -->
                <rect x="24" y="40" width="200" height="180" rx="10" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <rect x="40" y="58" width="100" height="8" rx="2" fill="#3f3f46"/>
                <rect x="40" y="80" width="168" height="28" rx="5" fill="#121214" stroke="rgba(255,138,61,0.25)"/>
                <rect x="40" y="118" width="78" height="40" rx="5" fill="#121214" stroke="rgba(63,63,70,0.8)"/>
                <rect x="128" y="118" width="78" height="40" rx="5" fill="#121214" stroke="rgba(63,63,70,0.8)"/>
                <rect x="40" y="168" width="168" height="28" rx="5" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                <text x="124" y="206" text-anchor="middle" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('seo_v2_viz_site') }}</text>

                <!-- Search intent -->
                <rect x="248" y="40" width="188" height="180" rx="10" fill="#151517" stroke="rgba(255,138,61,0.28)"/>
                <rect x="266" y="62" width="152" height="22" rx="6" fill="#1a1a1d" stroke="rgba(63,63,70,0.85)"/>
                <circle cx="278" cy="73" r="5" fill="none" stroke="#ff8a3d" stroke-width="1.2" opacity="0.7"/>
                <rect x="266" y="100" width="120" height="8" rx="2" fill="#3f3f46"/>
                <rect x="266" y="118" width="152" height="8" rx="2" fill="#27272a"/>
                <rect x="266" y="136" width="140" height="8" rx="2" fill="#27272a"/>
                <rect x="266" y="154" width="100" height="8" rx="2" fill="#ff8a3d" opacity="0.35"/>
                <text x="342" y="206" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('seo_v2_viz_intent') }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APPROACH -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('seo_v2_approach_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed text-base sm:text-lg mb-4">{{ $t('seo_v2_approach_text') }}</p>
        <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('seo_v2_value_note') }}</p>
      </div>
    </section>

    <!-- THREE LAYERS -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('seo_v2_layers_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('seo_v2_layers_lead') }}</p>
        </div>
        <div class="space-y-4">
          <article
            v-for="(layer, i) in layers"
            :key="i"
            class="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 grid sm:grid-cols-12 gap-3 sm:gap-6"
          >
            <div class="sm:col-span-4">
              <p class="text-[10px] uppercase tracking-[0.16em] text-[#ffb088]/80 mb-1">{{ String(i + 1).padStart(2, '0') }}</p>
              <h3 class="text-lg font-bold text-white">{{ layer.title }}</h3>
            </div>
            <p class="sm:col-span-8 text-sm text-zinc-400 leading-relaxed">{{ layer.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- DEV CONNECTION -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('seo_v2_dev_eyebrow') }}</p>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('seo_v2_dev_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed mb-3">{{ $t('seo_v2_dev_lead') }}</p>
        <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('seo_v2_dev_note') }}</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.08),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('seo_v2_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('seo_v2_cta_desc') }}</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <router-link
            to="/kontakt"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
          >
            {{ $t('cta_send_project') }}
          </router-link>
          <router-link
            to="/usluge/growth"
            class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
          >
            {{ $t('service_growth_page_title') }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="pb-16 px-6 md:px-12 lg:px-20">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
        <router-link to="/usluge/google-ads" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">Google Ads</router-link>
        <router-link to="/usluge/google/ga4-gtm" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">GA4 / GTM</router-link>
        <router-link to="/usluge/growth" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">{{ $t('service_growth_page_title') }}</router-link>
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
const layers = computed(() => tm('seo_v2_layers') || [])
</script>

<style scoped>
.seo-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 55% 48% at 76% 24%, black 15%, transparent 70%);
  opacity: 0.35;
}
</style>
