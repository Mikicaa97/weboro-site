<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 ec-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_18%,rgba(255,138,61,0.1),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('service_web_hub_title') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('service_web_hub_title') }}</p>
            <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] xl:text-[3.05rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('service_web_hub_headline') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {{ $t('service_web_hub_intro') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-6px_rgba(255,138,61,0.4)] transition-all"
              >
                {{ $t('cta_send_project') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
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
            <div class="absolute -inset-4 bg-gradient-to-tr from-[#ff8a3d]/16 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden shadow-[0_28px_70px_-22px_rgba(0,0,0,0.95)] p-4 sm:p-5">
              <svg class="w-full h-auto" viewBox="0 0 480 280" role="img" :aria-label="$t('web_hero_visual_aria')">
                <rect width="480" height="280" fill="#0f0f10"/>
                <text x="240" y="22" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.4" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_flow_label') }}</text>

                <!-- Customer -->
                <rect x="180" y="36" width="120" height="36" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.4)"/>
                <text x="240" y="58" text-anchor="middle" fill="#ffb088" font-size="11" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_node_customer') }}</text>
                <path d="M 240 72 L 240 90" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>

                <!-- Shop / Catalog -->
                <rect x="140" y="90" width="200" height="44" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                <text x="240" y="117" text-anchor="middle" fill="#e4e4e7" font-size="11" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_node_shop') }}</text>
                <path d="M 240 134 L 240 152" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>

                <!-- Orders / data -->
                <rect x="140" y="152" width="200" height="40" rx="8" fill="#151517" stroke="rgba(63,63,70,0.85)"/>
                <text x="240" y="176" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_node_orders') }}</text>
                <path d="M 180 192 L 120 214" stroke="rgba(255,138,61,0.35)" stroke-width="1.2" stroke-dasharray="3 3"/>
                <path d="M 240 192 L 240 214" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <path d="M 300 192 L 360 214" stroke="rgba(255,138,61,0.35)" stroke-width="1.2" stroke-dasharray="3 3"/>

                <!-- Backend systems -->
                <rect x="40" y="214" width="100" height="40" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="90" y="238" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">ERP</text>
                <rect x="160" y="214" width="100" height="40" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.28)"/>
                <text x="210" y="238" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_node_supplier') }}</text>
                <rect x="280" y="214" width="80" height="40" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="320" y="238" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_node_pay') }}</text>
                <rect x="372" y="214" width="80" height="40" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="412" y="238" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('web_hero_node_ship') }}</text>

                <circle class="ec-dot" r="2.2" fill="#ff8a3d">
                  <animateMotion dur="5s" repeatCount="indefinite" path="M 240 72 L 240 152"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NOT FROM PLATFORM -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('web_not_platform_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed mb-5">{{ $t('web_not_platform_text') }}</p>
        <ul class="space-y-2">
          <li v-for="(item, i) in lookAtItems" :key="i" class="flex gap-3 text-sm text-zinc-400">
            <span class="text-[#ff8a3d] shrink-0">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- EXISTING SYSTEMS -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('web_existing_eyebrow') }}</p>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('web_existing_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed mb-5">{{ $t('web_existing_lead') }}</p>
        <ul class="space-y-2 mb-5">
          <li v-for="(item, i) in existingItems" :key="i" class="flex gap-3 text-sm text-zinc-400">
            <span class="text-[#ff8a3d] shrink-0">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p class="text-sm text-zinc-500 leading-relaxed border-l-2 border-[#ff8a3d]/40 pl-4">{{ $t('web_existing_note') }}</p>
      </div>
    </section>

    <!-- BUSINESS SCENARIOS -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('web_scenarios_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold tracking-tight mb-3">{{ $t('web_scenarios_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('web_scenarios_lead') }}</p>
        </div>
        <ul class="border-t border-zinc-800/80">
          <li
            v-for="(item, i) in scenarios"
            :key="i"
            class="grid sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-zinc-800/80"
          >
            <span class="sm:col-span-1 text-[11px] tabular-nums text-[#ffb088]/70 pt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="sm:col-span-11">
              <h3 class="text-base sm:text-lg font-bold tracking-tight mb-1.5">{{ item.title }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- PLATFORM CHOICE -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold tracking-tight mb-3">{{ $t('web_platforms_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('web_platforms_lead') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-4 lg:gap-5">
          <router-link
            to="/usluge/wordpress"
            class="group block rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-[#ff8a3d]/40 p-6 transition"
          >
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ $t('web_plat_wp_title') }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ $t('web_plat_wp_desc') }}</p>
            <span class="text-sm text-[#ff8a3d]/80">{{ $t('learn_more') }} →</span>
          </router-link>
          <router-link
            to="/usluge/magento"
            class="group block rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-[#ff8a3d]/40 p-6 transition"
          >
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ $t('web_plat_mg_title') }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ $t('web_plat_mg_desc') }}</p>
            <span class="text-sm text-[#ff8a3d]/80">{{ $t('learn_more') }} →</span>
          </router-link>
          <router-link
            to="/usluge/custom-web"
            class="group block rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-[#ff8a3d]/40 p-6 transition"
          >
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ $t('web_plat_custom_title') }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ $t('web_plat_custom_desc') }}</p>
            <span class="text-sm text-[#ff8a3d]/80">{{ $t('learn_more') }} →</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- COMPLEX COMMERCE PATH -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('web_path_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('web_path_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('web_path_lead') }}</p>
        </div>
        <div class="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-7 overflow-x-auto">
          <ol class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 min-w-0" :aria-label="$t('web_path_aria')">
            <li
              v-for="(step, i) in pathSteps"
              :key="i"
              class="flex items-center gap-2 sm:gap-2"
            >
              <span
                class="inline-flex items-center rounded-xl border px-3 py-2.5 text-sm font-medium"
                :class="i === 0 ? 'border-[#ff8a3d]/40 bg-[#ff8a3d]/10 text-[#ffb088]' : 'border-zinc-800 bg-zinc-900/50 text-zinc-300'"
              >{{ step }}</span>
              <span v-if="i < pathSteps.length - 1" class="hidden sm:inline text-zinc-600 px-1" aria-hidden="true">→</span>
              <span v-if="i < pathSteps.length - 1" class="sm:hidden text-zinc-600 pl-3" aria-hidden="true">↓</span>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- PROOF -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('web_work_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed">{{ $t('web_work_lead') }}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4 lg:gap-5 mb-5">
          <a
            v-for="card in workCards"
            :key="card.href"
            :href="card.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group block rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-[#ff8a3d]/35 p-6 transition"
          >
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ card.type }}</p>
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ card.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ card.desc }}</p>
            <span class="text-sm text-[#ffb088]">{{ $t('portfolio_v2_visit_site') }}</span>
          </a>
        </div>
        <div class="rounded-2xl border border-zinc-700/70 bg-zinc-900/50 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div class="max-w-xl">
            <p class="text-[11px] uppercase tracking-[0.18em] text-[#ffb088]/85 mb-2">{{ $t('web_work_magento_note_title') }}</p>
            <h3 class="text-lg font-bold tracking-tight mb-2">{{ $t('web_magento_path_title') }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ $t('web_work_magento_note') }}</p>
          </div>
          <router-link
            to="/usluge/magento"
            class="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-3 rounded-xl border border-[#ff8a3d]/40 bg-[#ff8a3d]/10 text-[#ffb088] text-sm font-semibold hover:bg-[#ff8a3d]/15 transition"
          >
            {{ $t('web_magento_path_cta') }}
            <span aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="relative py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(255,138,61,0.1),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight mb-5">
          {{ $t('service_web_hub_cta_title') }}
        </h2>
        <p class="text-zinc-400 leading-relaxed mb-9 max-w-2xl mx-auto">
          {{ $t('service_web_hub_cta_subtitle') }}
        </p>
        <router-link
          to="/kontakt"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-6px_rgba(255,138,61,0.4)] transition-all"
        >
          {{ $t('service_web_hub_cta_button') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
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

const lookAtItems = computed(() => tm('web_look_at') || [])
const existingItems = computed(() => tm('web_existing_items') || [])
const scenarios = computed(() => tm('web_scenarios') || [])
const pathSteps = computed(() => tm('web_path_steps') || [])

const workCards = computed(() => {
  const projects = tm('portfolio_projects_v2')
  const list = Array.isArray(projects) ? projects : []
  const bleki = list.find((p) => p.id === 'bleki')
  const pa = list.find((p) => p.id === 'prodaj-automobil')
  return [
    bleki && {
      href: bleki.externalUrl || 'https://bleki.co.rs/',
      type: bleki.typeLabel,
      title: bleki.title,
      desc: bleki.desc,
    },
    pa && {
      href: pa.externalUrl || 'https://prodajautomobil.rs/',
      type: pa.typeLabel,
      title: pa.title,
      desc: pa.desc,
    },
  ].filter(Boolean)
})
</script>

<style scoped>
.ec-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.2) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 65% 55% at 78% 22%, black 18%, transparent 72%);
  opacity: 0.4;
}

@media (prefers-reduced-motion: reduce) {
  .ec-dot {
    display: none;
  }
}
</style>
