<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 an-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_78%_18%,rgba(255,138,61,0.1),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/growth" class="hover:text-zinc-300 transition-colors">{{ $t('service_growth_page_title') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('an_v2_eyebrow') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('an_v2_eyebrow') }}</p>
            <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('an_v2_title') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {{ $t('an_v2_lead') }}
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
            <div class="absolute -inset-3 bg-gradient-to-tr from-[#ff8a3d]/14 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden p-4 sm:p-5 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.9)]">
              <svg class="w-full h-auto" viewBox="0 0 480 230" role="img" :aria-label="$t('an_v2_visual_aria')">
                <rect width="480" height="230" fill="#0f0f10"/>
                <text x="240" y="20" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.3" font-family="ui-sans-serif, system-ui, sans-serif">MEASURE → DECIDE</text>

                <rect x="16" y="44" width="88" height="44" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <text x="60" y="70" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('an_v2_node_source') }}</text>

                <path d="M 104 66 L 128 66" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="128,66 120,62 120,70" fill="#ff8a3d" opacity="0.7"/>

                <rect x="130" y="44" width="100" height="44" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="180" y="70" text-anchor="middle" fill="#e4e4e7" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('an_v2_node_journey') }}</text>

                <path d="M 230 66 L 254 66" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="254,66 246,62 246,70" fill="#ff8a3d" opacity="0.7"/>

                <rect x="256" y="44" width="100" height="44" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <text x="306" y="70" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('an_v2_node_event') }}</text>

                <path d="M 356 66 L 380 66" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <polygon points="380,66 372,62 372,70" fill="#ff8a3d" opacity="0.7"/>

                <rect x="382" y="44" width="82" height="44" rx="8" fill="#1f1610" stroke="rgba(255,138,61,0.4)"/>
                <text x="423" y="70" text-anchor="middle" fill="#ffb088" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('an_v2_node_decide') }}</text>

                <rect x="40" y="118" width="400" height="78" rx="10" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <text x="240" y="148" text-anchor="middle" fill="#a1a1aa" font-size="11" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('an_v2_flow_line1') }}</text>
                <text x="240" y="172" text-anchor="middle" fill="#71717a" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('an_v2_flow_line2') }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APPROACH — outcomes first -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('an_v2_approach_title') }}</h2>
        <p class="text-zinc-300 leading-relaxed text-base sm:text-lg mb-5">{{ $t('an_v2_approach_text') }}</p>
        <ul class="space-y-2">
          <li v-for="(item, i) in firstQuestions" :key="i" class="flex gap-3 text-sm text-zinc-400">
            <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- WHAT WE MEASURE + PROCESS -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        <div class="lg:col-span-5">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('an_v2_measure_title') }}</h2>
          <p class="text-zinc-400 leading-relaxed mb-5">{{ $t('an_v2_measure_lead') }}</p>
          <ul class="space-y-2">
            <li v-for="(item, i) in measureItems" :key="i" class="flex gap-3 text-sm text-zinc-300">
              <span class="text-[#ff8a3d] shrink-0">—</span>{{ item }}
            </li>
          </ul>
          <p class="mt-5 text-sm text-zinc-500 leading-relaxed">{{ $t('an_v2_measure_note') }}</p>
        </div>
        <div class="lg:col-span-7">
          <h3 class="text-lg font-bold mb-4">{{ $t('an_v2_process_title') }}</h3>
          <ol class="border-t border-zinc-800/80">
            <li
              v-for="(step, i) in processSteps"
              :key="i"
              class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-3.5 border-b border-zinc-800/80"
            >
              <span class="sm:col-span-1 text-[11px] tabular-nums text-[#ffb088]/70">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="sm:col-span-11 text-sm text-zinc-300 leading-relaxed">{{ step }}</p>
            </li>
          </ol>
          <p class="mt-5 text-sm text-zinc-500 leading-relaxed border-l-2 border-[#ff8a3d]/40 pl-4">{{ $t('an_v2_impl_note') }}</p>
        </div>
      </div>
    </section>

    <!-- REPORTING + DEV -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-3xl mx-auto space-y-10">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('an_v2_report_title') }}</h2>
          <p class="text-zinc-300 leading-relaxed">{{ $t('an_v2_report_text') }}</p>
        </div>
        <div>
          <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('an_v2_dev_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('an_v2_dev_title') }}</h2>
          <p class="text-zinc-300 leading-relaxed mb-3">{{ $t('an_v2_dev_lead') }}</p>
          <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('an_v2_dev_note') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.09),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('an_v2_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('an_v2_cta_desc') }}</p>
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
        <router-link to="/usluge/seo" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors">SEO</router-link>
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
const firstQuestions = computed(() => tm('an_v2_first_questions') || [])
const measureItems = computed(() => tm('an_v2_measure_items') || [])
const processSteps = computed(() => tm('an_v2_process_steps') || [])
</script>

<style scoped>
.an-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 60% 50% at 78% 22%, black 15%, transparent 70%);
  opacity: 0.35;
}
</style>
