<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 cw-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_78%_20%,rgba(255,138,61,0.09),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('service_custom_web_title') }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-6">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('cw_hero_eyebrow') }}</p>
            <h1 class="text-[2.15rem] sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-extrabold tracking-tight leading-[1.08] mb-5">
              {{ $t('cw_hero_title') }}
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {{ $t('cw_hero_lead') }}
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
                to="/portfolio/outreachgenie"
                class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('cw_hero_cta_secondary') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-6 relative">
            <div class="absolute -inset-4 bg-gradient-to-tr from-[#ff8a3d]/16 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
            <div class="relative rounded-2xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden shadow-[0_28px_70px_-22px_rgba(0,0,0,0.95)]">
              <svg class="w-full h-auto cw-motion" viewBox="0 0 480 280" role="img" :aria-label="$t('cw_hero_visual_aria')">
                <rect width="480" height="280" fill="#0f0f10"/>
                <rect x="0" y="0" width="480" height="28" fill="#141416"/>
                <circle cx="16" cy="14" r="3" fill="#3f3f46"/>
                <circle cx="28" cy="14" r="3" fill="#3f3f46"/>
                <circle cx="40" cy="14" r="3" fill="#3f3f46"/>
                <text x="240" y="18" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.2" font-family="ui-sans-serif, system-ui, sans-serif">APPLICATION · ARCHITECTURE</text>

                <rect x="16" y="44" width="120" height="210" rx="10" fill="#18181b" stroke="rgba(63,63,70,0.85)"/>
                <rect x="28" y="60" width="88" height="8" rx="2" fill="#3f3f46"/>
                <rect x="28" y="82" width="70" height="6" rx="2" fill="#27272a"/>
                <rect x="28" y="98" width="76" height="6" rx="2" fill="#ff8a3d" opacity="0.5"/>
                <rect x="28" y="114" width="64" height="6" rx="2" fill="#27272a"/>
                <rect x="28" y="130" width="80" height="6" rx="2" fill="#27272a"/>

                <rect x="148" y="44" width="200" height="120" rx="10" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                <text x="164" y="66" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('cw_hero_mod_app') }}</text>
                <rect x="164" y="78" width="72" height="64" rx="6" fill="#111214" stroke="rgba(63,63,70,0.7)"/>
                <rect x="248" y="78" width="72" height="64" rx="6" fill="#111214" stroke="rgba(250,204,21,0.25)"/>

                <rect x="148" y="176" width="200" height="78" rx="10" fill="#151517" stroke="rgba(63,63,70,0.75)"/>
                <path d="M 172 215 L 260 215 L 320 215" fill="none" stroke="rgba(255,138,61,0.45)" stroke-width="1.6" stroke-linecap="round"/>
                <circle class="cw-dot" r="2.2" fill="#ff8a3d">
                  <animateMotion dur="5.5s" repeatCount="indefinite" path="M 172 215 L 320 215"/>
                </circle>
                <text x="248" y="198" text-anchor="middle" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('cw_hero_mod_flow') }}</text>

                <rect x="360" y="44" width="104" height="210" rx="10" fill="#18181b" stroke="rgba(250,204,21,0.22)"/>
                <text x="412" y="66" text-anchor="middle" fill="#a1a1aa" font-size="9" letter-spacing="1" font-family="ui-sans-serif, system-ui, sans-serif">API</text>
                <rect x="372" y="80" width="80" height="28" rx="6" fill="#111214" stroke="rgba(63,63,70,0.8)"/>
                <text x="412" y="98" text-anchor="middle" fill="#d4d4d8" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">ERP / CRM</text>
                <rect x="372" y="120" width="80" height="28" rx="6" fill="#111214" stroke="rgba(63,63,70,0.8)"/>
                <text x="412" y="138" text-anchor="middle" fill="#d4d4d8" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('cw_hero_mod_data') }}</text>
                <rect x="372" y="160" width="80" height="28" rx="6" fill="#111214" stroke="rgba(255,138,61,0.3)"/>
                <text x="412" y="178" text-anchor="middle" fill="#ffb088" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('cw_hero_mod_logic') }}</text>
                <path d="M 348 104 L 360 104 M 348 134 L 360 134" fill="none" stroke="rgba(255,138,61,0.35)" stroke-width="1.2" stroke-dasharray="3 3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHEN CUSTOM MAKES SENSE -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8 lg:mb-10">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('cw_when_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold tracking-tight mb-3">{{ $t('cw_when_title') }}</h2>
          <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">{{ $t('cw_when_lead') }}</p>
        </div>
        <ul class="border-t border-zinc-800/80">
          <li
            v-for="(item, i) in tm('cw_when_items')"
            :key="i"
            class="grid sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-zinc-800/80"
          >
            <div class="sm:col-span-5 flex items-baseline gap-3">
              <span class="text-[11px] font-mono text-[#ff8a3d]/70 shrink-0">0{{ i + 1 }}</span>
              <h3 class="text-sm sm:text-base font-semibold text-white">{{ item.title }}</h3>
            </div>
            <p class="sm:col-span-7 pl-7 sm:pl-0 text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- WHAT WE BUILD -->
    <section class="py-16 lg:py-24 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/80 mb-3">{{ $t('cw_build_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-tight mb-3">{{ $t('cw_build_title') }}</h2>
          <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">{{ $t('cw_build_lead') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-4 lg:gap-5">
          <!-- SaaS -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-zinc-600 transition-colors">
            <div class="h-28 sm:h-32 border-b border-zinc-800 bg-[#0c0c0e] flex items-center justify-center p-4" aria-hidden="true">
              <svg class="w-full max-w-[260px] h-auto" viewBox="0 0 280 140" fill="none">
                <rect x="20" y="18" width="240" height="72" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <rect x="36" y="34" width="100" height="8" rx="2" fill="#3f3f46"/>
                <rect x="36" y="52" width="70" height="6" rx="2" fill="#ff8a3d" opacity="0.45"/>
                <rect x="36" y="68" width="140" height="6" rx="2" fill="#27272a"/>
                <rect x="40" y="102" width="60" height="28" rx="6" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <rect x="112" y="102" width="60" height="28" rx="6" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <rect x="184" y="102" width="60" height="28" rx="6" fill="#151517" stroke="rgba(250,204,21,0.25)"/>
              </svg>
            </div>
            <div class="p-5 sm:p-6">
              <h3 class="text-lg font-bold text-white mb-2">{{ $t('cw_build_saas_title') }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ $t('cw_build_saas_desc') }}</p>
            </div>
          </article>

          <!-- Apps -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-zinc-600 transition-colors">
            <div class="h-28 sm:h-32 border-b border-zinc-800 bg-[#0c0c0e] flex items-center justify-center p-4" aria-hidden="true">
              <svg class="w-full max-w-[260px] h-auto" viewBox="0 0 280 140" fill="none">
                <rect x="24" y="20" width="56" height="110" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                <rect x="34" y="36" width="36" height="5" rx="1" fill="#3f3f46"/>
                <rect x="34" y="50" width="28" height="5" rx="1" fill="#ff8a3d" opacity="0.45"/>
                <rect x="92" y="20" width="164" height="50" rx="6" fill="#18181b" stroke="rgba(255,138,61,0.25)"/>
                <rect x="92" y="80" width="76" height="50" rx="6" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
                <rect x="180" y="80" width="76" height="50" rx="6" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
              </svg>
            </div>
            <div class="p-5 sm:p-6">
              <h3 class="text-lg font-bold text-white mb-2">{{ $t('cw_build_apps_title') }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ $t('cw_build_apps_desc') }}</p>
            </div>
          </article>

          <!-- Integrations -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-zinc-600 transition-colors">
            <div class="h-28 sm:h-32 border-b border-zinc-800 bg-[#0c0c0e] flex items-center justify-center p-4" aria-hidden="true">
              <svg class="w-full max-w-[260px] h-auto" viewBox="0 0 280 140" fill="none">
                <rect x="20" y="48" width="64" height="40" rx="8" fill="#18181b" stroke="rgba(56,189,248,0.3)"/>
                <rect x="108" y="48" width="64" height="40" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <rect x="196" y="48" width="64" height="40" rx="8" fill="#18181b" stroke="rgba(52,211,153,0.3)"/>
                <path d="M 84 68 L 108 68 M 172 68 L 196 68" stroke="rgba(255,138,61,0.4)" stroke-width="1.5" stroke-dasharray="4 3"/>
                <text x="52" y="72" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">ERP</text>
                <text x="140" y="72" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">API</text>
                <text x="228" y="72" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">CRM</text>
              </svg>
            </div>
            <div class="p-5 sm:p-6">
              <h3 class="text-lg font-bold text-white mb-2">{{ $t('cw_build_int_title') }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ $t('cw_build_int_desc') }}</p>
            </div>
          </article>

          <!-- Automation -->
          <article class="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-zinc-600 transition-colors">
            <div class="h-28 sm:h-32 border-b border-zinc-800 bg-[#0c0c0e] flex items-center justify-center p-4" aria-hidden="true">
              <svg class="w-full max-w-[260px] h-auto" viewBox="0 0 280 140" fill="none">
                <rect x="28" y="36" width="52" height="36" rx="7" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                <rect x="110" y="36" width="52" height="36" rx="7" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                <rect x="192" y="36" width="52" height="36" rx="7" fill="#18181b" stroke="rgba(250,204,21,0.3)"/>
                <path d="M 80 54 L 110 54 M 162 54 L 192 54" stroke="rgba(255,138,61,0.45)" stroke-width="1.5"/>
                <path d="M 40 100 C 80 100, 100 80, 140 88 S 200 110, 260 96" fill="none" stroke="rgba(56,189,248,0.4)" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="p-5 sm:p-6">
              <h3 class="text-lg font-bold text-white mb-2">{{ $t('cw_build_auto_title') }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ $t('cw_build_auto_desc') }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- EXISTING SYSTEMS -->
    <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <aside class="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-6 py-7 sm:px-9 sm:py-8 max-w-4xl">
          <p class="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-3">{{ $t('cw_existing_eyebrow') }}</p>
          <h2 class="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold tracking-tight leading-snug mb-3">
            {{ $t('cw_existing_title') }}
          </h2>
          <p class="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            {{ $t('cw_existing_text') }}
          </p>
        </aside>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-8 lg:mb-10">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('cw_process_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('cw_process_title') }}</h2>
          <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">{{ $t('cw_process_lead') }}</p>
        </div>

        <ol class="relative" :aria-label="$t('cw_process_aria')">
          <div class="hidden md:block absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-[#ff8a3d]/40 via-zinc-700 to-zinc-800" aria-hidden="true"></div>
          <div class="grid md:grid-cols-5 gap-6 md:gap-4">
            <li
              v-for="(step, i) in tm('cw_process_steps')"
              :key="i"
              class="relative"
            >
              <div class="flex md:flex-col gap-3 md:gap-0">
                <div class="relative z-10 w-9 h-9 shrink-0 rounded-full border border-zinc-600 bg-zinc-950 flex items-center justify-center text-[11px] font-bold text-[#ffb088] md:mb-4">
                  {{ step.num }}
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-white mb-1.5 tracking-tight">{{ step.title }}</h3>
                  <p class="text-sm text-zinc-400 leading-relaxed">{{ step.desc }}</p>
                </div>
              </div>
            </li>
          </div>
        </ol>
      </div>
    </section>

    <!-- OUTREACHGENIE PROOF -->
    <section class="py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative rounded-2xl border border-zinc-700/80 bg-zinc-950/80 overflow-hidden">
          <div class="absolute -inset-10 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent blur-3xl opacity-70 pointer-events-none" aria-hidden="true"></div>
          <div class="relative grid lg:grid-cols-12 gap-0 items-stretch">
            <div class="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/90 mb-3">{{ $t('cw_og_marker') }}</p>
              <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{{ $t('cw_og_title') }}</h2>
              <p class="text-sm sm:text-base text-zinc-300 leading-relaxed mb-3">{{ $t('cw_og_lead') }}</p>
              <p class="text-sm text-zinc-500 leading-relaxed mb-6">{{ $t('cw_og_note') }}</p>
              <ul class="flex flex-wrap gap-2 mb-7" :aria-label="$t('cw_og_caps_aria')">
                <li
                  v-for="(cap, i) in tm('cw_og_caps')"
                  :key="i"
                  class="text-[10px] uppercase tracking-[0.12em] text-zinc-500 border border-zinc-800 rounded-md px-2 py-1"
                >
                  {{ cap }}
                </li>
              </ul>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <router-link
                  to="/portfolio/outreachgenie"
                  class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff8a3d] text-zinc-950 text-sm font-semibold hover:bg-[#ff9d5c] transition-colors"
                >
                  {{ $t('cw_og_cta') }}
                  <span aria-hidden="true">→</span>
                </router-link>
                <span
                  class="inline-flex items-center justify-center px-4 py-2 text-sm text-zinc-500 border border-zinc-800 rounded-xl bg-zinc-900/40 cursor-default select-none"
                  aria-disabled="true"
                >
                  {{ $t('portfolio_v2_coming_soon') }}
                </span>
              </div>
            </div>
            <div class="lg:col-span-7 relative min-h-[200px] sm:min-h-[260px] lg:min-h-[320px] bg-[#09090b]">
              <OgProductVisual
                class="absolute inset-0 w-full h-full"
                :aria-label="$t('cw_og_img_alt')"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="relative py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_40%,rgba(255,138,61,0.06),transparent_65%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <div class="rounded-2xl border border-zinc-700/70 bg-zinc-950/80 px-6 py-10 sm:px-10 sm:py-12 text-center shadow-[0_0_60px_-28px_rgba(255,138,61,0.18)]">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 leading-snug tracking-tight">{{ $t('cw_cta_title') }}</h2>
          <p class="mb-8 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">{{ $t('cw_cta_desc') }}</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <router-link
              to="/kontakt"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
            >
              {{ $t('cta_send_project') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </router-link>
            <router-link
              to="/portfolio"
              class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 text-zinc-300 rounded-xl hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-all"
            >
              {{ $t('cw_cta_secondary') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import OgProductVisual from '@/components/portfolio/visuals/OgProductVisual.vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>

<style scoped>
.cw-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.22) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 70% 55% at 70% 20%, black 15%, transparent 72%);
  opacity: 0.4;
}

@media (max-width: 639px) {
  .cw-motion {
    max-height: 180px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cw-dot {
    display: none;
  }
}
</style>
