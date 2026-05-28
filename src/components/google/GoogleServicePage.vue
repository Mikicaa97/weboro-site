<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section
      ref="heroRef"
      class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer gm-home-shimmer-cool" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(96,165,250,0.10),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('gm_hub_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/google-marketing" class="hover:text-zinc-300 transition-colors">{{ $t('gm_hub_breadcrumb_self') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ page.breadcrumb }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/35 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                {{ page.badge }}
              </span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ page.title }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ page.lead }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                v-for="(kpi, i) in page.kpis"
                :key="i"
                class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-400 text-zinc-950 font-semibold rounded-xl hover:bg-sky-300 hover:shadow-[0_0_28px_-6px_rgba(96,165,250,0.45)] transition-all"
              >
                {{ $t('gm_page_cta_primary') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </router-link>
              <router-link
                to="/usluge/google-marketing"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-sky-400/45 hover:text-sky-300 transition-all"
              >
                {{ $t('gm_page_cta_secondary') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 lg:p-7">
              <p class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('gm_page_focus_title') }}</p>
              <ul class="space-y-3">
                <li v-for="(it, i) in page.focus" :key="i" class="text-sm text-zinc-300 flex gap-2">
                  <span class="text-sky-300 shrink-0">▸</span>
                  <span>{{ it }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('gm_page_deliver_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('gm_page_deliver_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
            v-for="(item, i) in page.deliver"
            :key="i"
            v-scroll-animate
            :style="{ transitionDelay: (i * 55) + 'ms' }"
            class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-sky-400/30 transition-colors"
          >
            <h3 class="text-lg font-bold text-white mb-2">{{ item.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('gm_page_faq_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('gm_page_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
            v-for="(q, i) in page.faq"
            :key="i"
            v-scroll-animate
            class="group bg-zinc-900/60 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-sky-400/30 transition-colors"
          >
            <summary class="flex items-center justify-between cursor-pointer list-none gap-4">
              <span class="font-semibold text-white text-left">{{ q.q }}</span>
              <span class="text-sky-300 group-open:rotate-180 transition-transform shrink-0">▾</span>
            </summary>
            <p class="mt-4 text-zinc-400 leading-relaxed">{{ q.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('gm_page_related_title') }}</h2>
        <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-2xl">{{ $t('gm_page_related_subtitle') }}</p>
        <div class="flex flex-wrap gap-3">
          <router-link
            v-for="(rel, i) in page.related"
            :key="i"
            :to="rel.to"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-sm text-zinc-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
          >
            {{ rel.label }}
            <span class="text-sky-300/80">→</span>
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
import { computed } from 'vue'

const props = defineProps({
  pageKey: { type: String, required: true },
})

const { tm } = useI18n()
const page = computed(() => tm(`gm_pages.${props.pageKey}`))
</script>

<style scoped>
details > summary::-webkit-details-marker {
  display: none;
}
</style>
