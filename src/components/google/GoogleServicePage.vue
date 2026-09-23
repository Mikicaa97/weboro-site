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
          <span class="text-zinc-400">{{ page.breadcrumb }}</span>
        </nav>

        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('gm_secondary_eyebrow') }}</p>
        <h1 class="text-[2rem] sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.08] mb-5 max-w-3xl">
          {{ page.title }}
        </h1>
        <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
          {{ page.lead }}
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
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-4">
          <h2 class="text-lg font-bold mb-3">{{ $t('gm_page_focus_title') }}</h2>
          <ul class="space-y-2">
            <li v-for="(it, i) in page.focus" :key="i" class="flex gap-2 text-sm text-zinc-400">
              <span class="text-[#ff8a3d] shrink-0">—</span>
              <span>{{ it }}</span>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-8">
          <h2 class="text-lg font-bold mb-4">{{ $t('gm_page_deliver_title') }}</h2>
          <ul class="border-t border-zinc-800/80">
            <li
              v-for="(item, i) in page.deliver"
              :key="i"
              class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-3.5 border-b border-zinc-800/80"
            >
              <span class="sm:col-span-4 text-sm font-medium text-zinc-200">{{ item.title }}</span>
              <span class="sm:col-span-8 text-sm text-zinc-500 leading-relaxed">{{ item.desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40" v-if="page.faq?.length">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xl sm:text-2xl font-bold tracking-tight mb-6">{{ $t('gm_page_faq_title') }}</h2>
        <div class="space-y-3">
          <details
            v-for="(q, i) in page.faq"
            :key="i"
            class="group border border-zinc-800 rounded-xl px-5 py-4 bg-zinc-900/40"
          >
            <summary class="flex items-center justify-between cursor-pointer list-none gap-4">
              <span class="font-medium text-white text-left text-sm sm:text-base">{{ q.q }}</span>
              <span class="text-[#ffb088] group-open:rotate-180 transition-transform shrink-0">▾</span>
            </summary>
            <p class="mt-3 text-sm text-zinc-400 leading-relaxed">{{ q.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-12 px-6 md:px-12 lg:px-20">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
        <router-link
          v-for="(rel, i) in relatedLinks"
          :key="i"
          :to="rel.to"
          class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors"
        >
          {{ rel.label }}
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

const props = defineProps({
  pageKey: { type: String, required: true },
})

const { tm, t } = useI18n()
const page = computed(() => tm(`gm_pages.${props.pageKey}`) || {})

const relatedLinks = computed(() => {
  const raw = Array.isArray(page.value.related) ? page.value.related : []
  const mapped = raw
    .map((rel) => ({
      ...rel,
      to: rel.to === '/usluge/google-marketing' ? '/usluge/growth' : rel.to,
      label: rel.to === '/usluge/google-marketing' ? t('service_growth_page_title') : rel.label,
    }))
    .filter((rel) => rel.to && rel.to !== `/usluge/google/${props.pageKey === 'ga4' ? 'ga4-gtm' : props.pageKey}`)

  const defaults = [
    { to: '/usluge/growth', label: t('service_growth_page_title') },
    { to: '/usluge/google-ads', label: 'Google Ads' },
    { to: '/usluge/google/ga4-gtm', label: 'GA4 / GTM' },
  ]

  const seen = new Set()
  return [...mapped, ...defaults].filter((rel) => {
    if (seen.has(rel.to)) return false
    seen.add(rel.to)
    return true
  }).slice(0, 4)
})
</script>

<style scoped>
details > summary::-webkit-details-marker {
  display: none;
}
</style>
