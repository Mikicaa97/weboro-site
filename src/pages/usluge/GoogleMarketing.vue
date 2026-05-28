<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section
      class="relative pt-32 lg:pt-40 pb-24 lg:pb-32 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer gm-home-shimmer-cool" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(96,165,250,0.10),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('gm_hub_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('gm_hub_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/35 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                {{ $t('gm_hub_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('gm_hub_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('gm_hub_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('gm_hub_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                v-for="(kpi, i) in tm('gm_hub_kpis')"
                :key="i"
                class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-400 text-zinc-950 font-semibold rounded-xl hover:bg-sky-300 hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.55)] transition-all"
              >
                {{ $t('gm_hub_cta_brief') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <a
                href="#gm-services"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-sky-400/45 hover:text-sky-300 transition-all"
              >
                {{ $t('gm_hub_cta_explore') }}
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[420px]">
              <div class="absolute -inset-5 bg-gradient-to-br from-sky-400/15 via-emerald-400/8 to-transparent blur-3xl rounded-[2rem] pointer-events-none"></div>
              <div class="relative rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-5">
                <p class="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">GOOGLE FUNNEL</p>
                <div class="space-y-3">
                  <div class="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm text-zinc-300">{{ $t('gm_hub_flow_traffic') }}</div>
                  <div class="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm text-zinc-300">{{ $t('gm_hub_flow_landing') }}</div>
                  <div class="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm text-zinc-300">{{ $t('gm_hub_flow_conversion') }}</div>
                  <div class="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm text-zinc-300">{{ $t('gm_hub_flow_reporting') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gm-services" class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 scroll-mt-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12 lg:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{{ $t('gm_hub_services_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('gm_hub_services_subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <router-link
            v-for="(svc, i) in tm('gm_hub_services')"
            :key="i"
            :to="svc.to"
            v-scroll-animate
            :style="{ transitionDelay: (i * 60) + 'ms' }"
            class="group relative bg-zinc-900/80 border border-zinc-800 hover:border-sky-400/40 rounded-2xl p-6 lg:p-7 transition-all hover:bg-zinc-900 hover:shadow-[0_0_28px_-10px_rgba(96,165,250,0.28)] block"
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="text-3xl">{{ svc.icon }}</div>
              <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 group-hover:text-sky-300 group-hover:border-sky-400/35 transition-colors whitespace-nowrap">
                {{ svc.tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{{ svc.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ svc.desc }}</p>
            <div class="flex items-center gap-2 text-sm font-medium text-sky-300/80 group-hover:text-sky-300 transition-colors">
              <span>{{ $t('gm_hub_cta_explore') }}</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </router-link>
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
