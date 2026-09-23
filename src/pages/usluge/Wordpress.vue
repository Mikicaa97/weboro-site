<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 wp-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_78%_20%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/ecommerce" class="hover:text-zinc-300 transition-colors">{{ $t('service_web_hub_title') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('service_wordpress_title') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('wp_v2_eyebrow') }}</p>
            <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('wp_v2_title') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {{ $t('wp_v2_lead') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
              >
                {{ $t('cta_send_project') }}
              </router-link>
              <router-link
                to="/portfolio"
                class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('web_cta_work') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-6 relative">
            <div class="absolute -inset-3 bg-gradient-to-tr from-[#ff8a3d]/12 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden p-4 sm:p-5 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.9)]">
              <svg class="w-full h-auto" viewBox="0 0 460 250" role="img" :aria-label="$t('wp_v2_visual_aria')">
                <rect width="460" height="250" fill="#0f0f10"/>
                <text x="230" y="20" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.3" font-family="ui-sans-serif, system-ui, sans-serif">CONTENT + COMMERCE</text>

                <rect x="24" y="40" width="120" height="170" rx="10" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <rect x="36" y="56" width="70" height="7" rx="2" fill="#3f3f46"/>
                <rect x="36" y="76" width="88" height="6" rx="2" fill="#27272a"/>
                <rect x="36" y="92" width="76" height="6" rx="2" fill="#ff8a3d" opacity="0.45"/>
                <rect x="36" y="108" width="84" height="6" rx="2" fill="#27272a"/>
                <rect x="36" y="124" width="64" height="6" rx="2" fill="#27272a"/>
                <text x="84" y="198" text-anchor="middle" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('wp_v2_viz_content') }}</text>

                <rect x="160" y="40" width="140" height="170" rx="10" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                <rect x="176" y="58" width="108" height="48" rx="6" fill="#121214" stroke="rgba(63,63,70,0.8)"/>
                <rect x="176" y="120" width="48" height="36" rx="5" fill="#121214" stroke="rgba(63,63,70,0.8)"/>
                <rect x="236" y="120" width="48" height="36" rx="5" fill="#121214" stroke="rgba(255,138,61,0.25)"/>
                <text x="230" y="198" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('wp_v2_viz_shop') }}</text>

                <rect x="316" y="40" width="120" height="170" rx="10" fill="#151517" stroke="rgba(63,63,70,0.85)"/>
                <rect x="332" y="60" width="88" height="22" rx="5" fill="#1a1a1d" stroke="rgba(63,63,70,0.8)"/>
                <rect x="332" y="94" width="88" height="22" rx="5" fill="#1a1a1d" stroke="rgba(63,63,70,0.8)"/>
                <rect x="332" y="128" width="88" height="22" rx="5" fill="#1f1610" stroke="rgba(255,138,61,0.3)"/>
                <text x="376" y="198" text-anchor="middle" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('wp_v2_viz_admin') }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHEN IT MAKES SENSE -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('wp_v2_when_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('wp_v2_when_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('wp_v2_when_lead') }}</p>
        </div>
        <ul class="border-t border-zinc-800/80">
          <li
            v-for="(item, i) in whenItems"
            :key="i"
            class="grid sm:grid-cols-12 gap-2 sm:gap-6 py-4 border-b border-zinc-800/80"
          >
            <span class="sm:col-span-1 text-[11px] tabular-nums text-[#ffb088]/70">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="sm:col-span-11 text-sm sm:text-base text-zinc-300 leading-relaxed">{{ item }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- KEEP EXISTING -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('wp_v2_keep_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed mb-5">{{ $t('wp_v2_keep_lead') }}</p>
        <ul class="space-y-2 mb-5">
          <li v-for="(item, i) in keepItems" :key="i" class="flex gap-3 text-sm text-zinc-400">
            <span class="text-[#ff8a3d] shrink-0">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p class="text-sm text-zinc-500 leading-relaxed border-l-2 border-[#ff8a3d]/40 pl-4">{{ $t('wp_v2_keep_note') }}</p>
      </div>
    </section>

    <!-- WOOCOMMERCE -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-5">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('wp_v2_woo_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('wp_v2_woo_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('wp_v2_woo_lead') }}</p>
        </div>
        <div class="lg:col-span-7 space-y-4">
          <div class="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
            <p class="text-sm font-semibold text-[#ffb088] mb-2">{{ $t('wp_v2_woo_good_label') }}</p>
            <ul class="space-y-2">
              <li v-for="(item, i) in wooGood" :key="'g'+i" class="text-sm text-zinc-400 flex gap-2">
                <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
              </li>
            </ul>
          </div>
          <div class="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5">
            <p class="text-sm font-semibold text-zinc-300 mb-2">{{ $t('wp_v2_woo_limit_label') }}</p>
            <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('wp_v2_woo_limit') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('wp_v2_out_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('wp_v2_out_lead') }}</p>
        </div>
        <ul class="grid sm:grid-cols-2 gap-x-10">
          <li
            v-for="(item, i) in outcomes"
            :key="i"
            class="py-3.5 border-b border-zinc-800/80 flex gap-3 text-sm sm:text-base text-zinc-200"
          >
            <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.08),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('wp_v2_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('wp_v2_cta_desc') }}</p>
        <router-link
          to="/kontakt"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
        >
          {{ $t('cta_send_project') }}
        </router-link>
      </div>
    </section>

    <section class="pb-16 px-6 md:px-12 lg:px-20">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
        <router-link to="/usluge/ecommerce" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">{{ $t('service_web_hub_title') }}</router-link>
        <router-link to="/usluge/magento" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">{{ $t('service_magento_title') }}</router-link>
        <router-link to="/usluge/custom-web" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">{{ $t('service_custom_web_title') }}</router-link>
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
const whenItems = computed(() => tm('wp_v2_when_items') || [])
const keepItems = computed(() => tm('wp_v2_keep_items') || [])
const wooGood = computed(() => tm('wp_v2_woo_good') || [])
const outcomes = computed(() => tm('wp_v2_outcomes') || [])
</script>

<style scoped>
.wp-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 60% 50% at 75% 25%, black 15%, transparent 70%);
  opacity: 0.35;
}
</style>
