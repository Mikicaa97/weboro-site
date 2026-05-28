<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(244,114,182,0.11),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('service_video_title') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-400/10 border border-pink-400/35 text-pink-300 text-xs font-semibold uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
              {{ $t('video_full_badge') }}
            </span>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
              {{ $t('video_full_title') }}
            </h1>

            <p class="text-lg md:text-xl text-zinc-300 max-w-3xl">
              {{ $t('video_full_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                v-for="(kpi, i) in tm('video_full_kpis')"
                :key="i"
                class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pink-400 text-zinc-950 font-semibold rounded-xl hover:bg-pink-300 transition-all"
              >
                {{ $t('video_full_cta_primary') }}
              </router-link>
              <router-link
                to="/portfolio"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-pink-400/45 hover:text-pink-300 transition-all"
              >
                {{ $t('video_full_cta_secondary') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 lg:p-7">
              <p class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">{{ $t('video_full_scope_title') }}</p>
              <ul class="space-y-3">
                <li v-for="(row, i) in tm('video_full_scope')"
                    :key="i"
                    class="text-sm text-zinc-300 flex gap-2">
                  <span class="text-pink-300 shrink-0">▸</span>
                  <span>{{ row }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-3">{{ $t('video_full_offer_title') }}</h2>
          <p class="text-zinc-400 text-base md:text-lg">{{ $t('video_full_offer_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(card, i) in tm('video_full_offer_cards')"
            :key="i"
            class="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-pink-400/35 transition-colors"
          >
            <p class="text-pink-300 text-xs uppercase tracking-[0.14em] mb-2">{{ card.tag }}</p>
            <h3 class="text-xl font-bold text-white mb-2">{{ card.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-pink-400/35 transition-colors">
          <h3 class="text-pink-300 font-semibold text-xl mb-3">{{ $t('video_full_production_title') }}</h3>
          <p class="text-zinc-400 text-sm mb-5">{{ $t('video_full_production_subtitle') }}</p>
          <ul class="space-y-3">
            <li v-for="(item, i) in tm('video_full_production_items')" :key="i" class="flex gap-3 text-zinc-300 text-sm">
              <span class="text-pink-300 shrink-0">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-pink-400/35 transition-colors">
          <h3 class="text-pink-300 font-semibold text-xl mb-3">{{ $t('video_full_post_title') }}</h3>
          <p class="text-zinc-400 text-sm mb-5">{{ $t('video_full_post_subtitle') }}</p>
          <ul class="space-y-3">
            <li v-for="(item, i) in tm('video_full_post_items')" :key="i" class="flex gap-3 text-zinc-300 text-sm">
              <span class="text-pink-300 shrink-0">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('video_full_process_title') }}</h2>
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(step, i) in tm('video_full_process_steps')"
          :key="i"
          class="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800"
        >
          <p class="text-zinc-300 text-lg">{{ step }}</p>
        </div>
      </div>
    </section>

    <section class="py-24 text-center px-6 md:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-3xl font-bold mb-4">{{ $t('video_full_cta_title') }}</h2>
      <p class="text-gray-300 mb-8">{{ $t('video_full_cta_subtitle') }}</p>
      <router-link
        to="/kontakt"
        class="px-8 py-4 bg-pink-400 text-zinc-950 rounded-full font-semibold hover:bg-pink-300 transition"
      >
        {{ $t('video_full_cta_button') }}
      </router-link>
    </section>

    <section class="py-16 px-6 md:px-20">
      <div class="max-w-5xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">Related</p>
        <div class="flex flex-wrap justify-center gap-3">
          <router-link to="/usluge/branding" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-pink-400/40 hover:text-pink-300 transition-colors">{{ $t('service_branding_title') }}</router-link>
          <router-link to="/portfolio" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-pink-400/40 hover:text-pink-300 transition-colors">{{ $t('nav_portfolio') }}</router-link>
          <router-link to="/kontakt" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-pink-400/40 hover:text-pink-300 transition-colors">{{ $t('footer_contact') }}</router-link>
        </div>
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
