<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 about-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_76%_18%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('nav_about') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('about_v2_eyebrow') }}</p>
            <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('about_v2_title') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
              {{ $t('about_v2_lead') }}
            </p>
          </div>

          <div class="lg:col-span-6 relative">
            <div class="absolute -inset-3 bg-gradient-to-tr from-[#ff8a3d]/10 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden p-4 sm:p-5 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.9)]">
              <svg class="w-full h-auto" viewBox="0 0 460 210" role="img" :aria-label="$t('about_v2_visual_aria')">
                <rect width="460" height="210" fill="#0f0f10"/>
                <text x="230" y="22" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.4" font-family="ui-sans-serif, system-ui, sans-serif">PROBLEM → BUILD → IMPROVE</text>

                <rect x="20" y="48" width="95" height="48" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <text x="67" y="76" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_node_problem') }}</text>

                <path d="M 115 72 L 138 72" stroke="rgba(255,138,61,0.4)" stroke-width="1.5"/>
                <polygon points="138,72 130,68 130,76" fill="#ff8a3d" opacity="0.7"/>

                <rect x="140" y="48" width="95" height="48" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="187" y="76" text-anchor="middle" fill="#e4e4e7" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_node_strategy') }}</text>

                <path d="M 235 72 L 258 72" stroke="rgba(255,138,61,0.4)" stroke-width="1.5"/>
                <polygon points="258,72 250,68 250,76" fill="#ff8a3d" opacity="0.7"/>

                <rect x="260" y="48" width="85" height="48" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="302" y="76" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_node_build') }}</text>

                <path d="M 345 72 L 368 72" stroke="rgba(255,138,61,0.4)" stroke-width="1.5"/>
                <polygon points="368,72 360,68 360,76" fill="#ff8a3d" opacity="0.7"/>

                <rect x="370" y="48" width="70" height="48" rx="8" fill="#1f1610" stroke="rgba(255,138,61,0.4)"/>
                <text x="405" y="76" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_node_improve') }}</text>

                <rect x="40" y="128" width="110" height="42" rx="8" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <text x="95" y="153" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_pill_business') }}</text>
                <rect x="175" y="128" width="110" height="42" rx="8" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <text x="230" y="153" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_pill_product') }}</text>
                <rect x="310" y="128" width="110" height="42" rx="8" fill="#151517" stroke="rgba(255,138,61,0.25)"/>
                <text x="365" y="153" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_pill_eng') }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STORY -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('about_v2_story_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed text-base sm:text-lg mb-4">{{ $t('about_v2_story_p1') }}</p>
        <p class="text-zinc-400 leading-relaxed">{{ $t('about_v2_story_p2') }}</p>
      </div>
    </section>

    <!-- PRINCIPLES -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('about_v2_think_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('about_v2_think_lead') }}</p>
        </div>
        <ul class="border-t border-zinc-800/80">
          <li
            v-for="(item, i) in principles"
            :key="i"
            class="grid sm:grid-cols-12 gap-2 sm:gap-8 py-5 border-b border-zinc-800/80"
          >
            <span class="sm:col-span-1 text-[11px] tabular-nums text-[#ffb088]/70">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="sm:col-span-4">
              <h3 class="text-base sm:text-lg font-semibold text-white">{{ item.title }}</h3>
            </div>
            <p class="sm:col-span-7 text-sm sm:text-base text-zinc-400 leading-relaxed">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('about_v2_do_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('about_v2_do_lead') }}</p>
        </div>
        <div class="border-t border-zinc-800/80">
          <router-link
            v-for="(item, i) in services"
            :key="i"
            :to="item.to"
            class="group grid sm:grid-cols-12 gap-2 sm:gap-6 py-4 border-b border-zinc-800/80 hover:bg-zinc-950/60 transition-colors -mx-2 px-2 rounded-sm"
          >
            <span class="sm:col-span-4 text-base font-semibold text-[#ffb088] group-hover:text-[#ff8a3d] transition-colors">{{ item.title }}</span>
            <span class="sm:col-span-7 text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</span>
            <span class="sm:col-span-1 text-sm text-zinc-600 group-hover:text-[#ff8a3d] transition-colors sm:text-right">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- OWN PRODUCT -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('about_v2_product_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('about_v2_product_title') }}</h2>
          <p class="text-zinc-300 leading-relaxed mb-4">{{ $t('about_v2_product_text') }}</p>
          <p class="text-sm text-zinc-500 leading-relaxed mb-6">{{ $t('about_v2_product_note') }}</p>
          <router-link
            to="/portfolio/outreachgenie"
            class="inline-flex items-center gap-2 text-[#ffb088] hover:text-[#ff8a3d] transition-colors font-medium"
          >
            {{ $t('about_v2_product_cta') }}
            <span aria-hidden="true">→</span>
          </router-link>
        </div>
        <div class="lg:col-span-5">
          <div class="rounded-2xl border border-zinc-800 bg-[#0f0f10] p-5 sm:p-6">
            <svg class="w-full h-auto" viewBox="0 0 320 160" role="img" :aria-label="$t('about_v2_product_visual_aria')">
              <rect width="320" height="160" fill="#0f0f10"/>
              <rect x="24" y="28" width="120" height="104" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
              <rect x="36" y="44" width="70" height="6" rx="2" fill="#3f3f46"/>
              <rect x="36" y="60" width="96" height="28" rx="4" fill="#121214" stroke="rgba(255,138,61,0.25)"/>
              <rect x="36" y="98" width="60" height="6" rx="2" fill="#27272a"/>
              <rect x="36" y="112" width="80" height="6" rx="2" fill="#27272a"/>
              <rect x="160" y="28" width="136" height="104" rx="8" fill="#151517" stroke="rgba(255,138,61,0.28)"/>
              <text x="228" y="62" text-anchor="middle" fill="#ffb088" font-size="11" font-family="ui-sans-serif, system-ui, sans-serif">OutreachGenie</text>
              <text x="228" y="84" text-anchor="middle" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('about_v2_product_viz_label') }}</text>
              <rect x="180" y="100" width="88" height="14" rx="4" fill="#1f1610" stroke="rgba(255,138,61,0.35)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('about_v2_who_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8">{{ $t('about_v2_who_lead') }}</p>

        <div class="border-t border-zinc-800/80 pt-6">
          <p class="text-xl sm:text-2xl font-semibold text-white">{{ $t('about_v2_founder_name') }}</p>
          <p class="text-[#ffb088] text-sm mt-1 mb-4">{{ $t('about_v2_founder_role') }}</p>
          <p class="text-zinc-300 leading-relaxed mb-4">{{ $t('about_v2_founder_bio') }}</p>
          <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('about_v2_team_note') }}</p>
        </div>
      </div>
    </section>

    <!-- ENTRY POINTS -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('about_v2_entry_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-6">{{ $t('about_v2_entry_lead') }}</p>
        <ul class="space-y-2.5">
          <li v-for="(item, i) in entryPoints" :key="i" class="flex gap-3 text-sm sm:text-base text-zinc-300">
            <span class="text-[#ff8a3d] shrink-0">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.08),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('about_v2_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('about_v2_cta_desc') }}</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <router-link
            to="/kontakt"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
          >
            {{ $t('cta_send_project') }}
          </router-link>
          <router-link
            to="/portfolio"
            class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
          >
            {{ $t('web_cta_work') }}
          </router-link>
        </div>
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
const principles = computed(() => tm('about_v2_principles') || [])
const services = computed(() => tm('about_v2_services') || [])
const entryPoints = computed(() => tm('about_v2_entry_points') || [])
</script>

<style scoped>
.about-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.16) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 55% 48% at 76% 22%, black 15%, transparent 70%);
  opacity: 0.32;
}
</style>
