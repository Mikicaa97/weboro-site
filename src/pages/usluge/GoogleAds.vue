<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 ads-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_78%_18%,rgba(255,138,61,0.09),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/growth" class="hover:text-zinc-300 transition-colors">{{ $t('service_growth_page_title') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('ads_v2_eyebrow') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('ads_v2_eyebrow') }}</p>
            <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('ads_v2_title') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {{ $t('ads_v2_lead') }}
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
              <svg class="w-full h-auto" viewBox="0 0 480 220" role="img" :aria-label="$t('ads_v2_visual_aria')">
                <rect width="480" height="220" fill="#0f0f10"/>
                <text x="240" y="22" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.3" font-family="ui-sans-serif, system-ui, sans-serif">ADS → RESULT</text>

                <rect x="18" y="52" width="95" height="52" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <text x="65" y="82" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ads_v2_node_ad') }}</text>

                <path d="M 113 78 L 138 78" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="138,78 130,74 130,82" fill="#ff8a3d" opacity="0.7"/>

                <rect x="140" y="52" width="110" height="52" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="195" y="82" text-anchor="middle" fill="#e4e4e7" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ads_v2_node_landing') }}</text>

                <path d="M 250 78 L 275 78" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="275,78 267,74 267,82" fill="#ff8a3d" opacity="0.7"/>

                <rect x="277" y="52" width="100" height="52" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="327" y="82" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ads_v2_node_action') }}</text>

                <path d="M 377 78 L 402 78" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="402,78 394,74 394,82" fill="#ff8a3d" opacity="0.7"/>

                <rect x="404" y="52" width="58" height="52" rx="8" fill="#1f1610" stroke="rgba(255,138,61,0.4)"/>
                <text x="433" y="82" text-anchor="middle" fill="#ffb088" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ads_v2_node_meas') }}</text>

                <path d="M 433 104 L 433 140 L 65 140 L 65 104" fill="none" stroke="rgba(255,138,61,0.22)" stroke-width="1.2" stroke-dasharray="4 4"/>
                <text x="240" y="168" text-anchor="middle" fill="#71717a" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ads_v2_loop_note') }}</text>
                <text x="240" y="196" text-anchor="middle" fill="#52525b" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ads_v2_channels_note') }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APPROACH -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('ads_v2_approach_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed text-base sm:text-lg">{{ $t('ads_v2_approach_text') }}</p>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('ads_v2_out_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('ads_v2_out_lead') }}</p>
        </div>
        <ul class="border-t border-zinc-800/80">
          <li
            v-for="(item, i) in outcomes"
            :key="i"
            class="grid sm:grid-cols-12 gap-2 sm:gap-6 py-4 border-b border-zinc-800/80"
          >
            <span class="sm:col-span-1 text-[11px] tabular-nums text-[#ffb088]/70">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="sm:col-span-11 text-sm sm:text-base text-zinc-300 leading-relaxed">{{ item }}</p>
          </li>
        </ul>
        <p class="mt-6 text-sm text-zinc-500">{{ $t('ads_v2_channels_detail') }}</p>
      </div>
    </section>

    <!-- DEV CONNECTION -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('ads_v2_dev_eyebrow') }}</p>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('ads_v2_dev_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed mb-3">{{ $t('ads_v2_dev_lead') }}</p>
        <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('ads_v2_dev_note') }}</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.08),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('ads_v2_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('ads_v2_cta_desc') }}</p>
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
        <router-link to="/usluge/seo" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">SEO</router-link>
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
const outcomes = computed(() => tm('ads_v2_outcomes') || [])
</script>

<style scoped>
.ads-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 60% 50% at 78% 22%, black 15%, transparent 70%);
  opacity: 0.35;
}
</style>
