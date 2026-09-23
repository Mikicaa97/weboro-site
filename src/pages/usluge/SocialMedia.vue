<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-32 pb-14 lg:pb-16 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_76%_16%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/growth" class="hover:text-zinc-300 transition-colors">{{ $t('service_growth_page_title') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('service_social_title') }}</span>
        </nav>

        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('gm_secondary_eyebrow') }}</p>
        <h1 class="text-[2rem] sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.08] mb-5 max-w-3xl">
          {{ $t('meta_secondary_title') }}
        </h1>
        <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
          {{ $t('meta_secondary_lead') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-3">
          <router-link
            to="/kontakt"
            class="inline-flex items-center justify-center px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
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
    </section>

    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xl sm:text-2xl font-bold tracking-tight mb-4">{{ $t('meta_secondary_focus_title') }}</h2>
        <ul class="space-y-2 mb-8">
          <li v-for="(item, i) in tm('meta_secondary_focus')" :key="i" class="flex gap-2 text-sm text-zinc-400">
            <span class="text-[#ff8a3d] shrink-0">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('meta_secondary_note') }}</p>
      </div>
    </section>

    <section class="py-12 px-6 md:px-12 lg:px-20">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
        <router-link
          to="/usluge/growth"
          class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors"
        >
          {{ $t('service_growth_page_title') }}
        </router-link>
        <router-link
          to="/usluge/google-ads"
          class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors"
        >
          Google Ads
        </router-link>
        <router-link
          to="/usluge/google/ga4-gtm"
          class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors"
        >
          GA4 / GTM
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
</script>
