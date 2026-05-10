<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section
        ref="mgIntHeroRef"
        class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_18%,rgba(255,138,61,0.10),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_42%_at_12%_82%,rgba(250,204,21,0.045),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('mg_int_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/magento" class="hover:text-zinc-300 transition-colors">{{ $t('mg_int_breadcrumb_hub') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('mg_int_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_int_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_int_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('mg_int_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_int_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_int_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-5px_rgba(255,138,61,0.5)] transition-all"
              >
                {{ $t('mg_int_cta_audit') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <router-link
                  to="/usluge/magento"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_int_cta_back_hub') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[440px]">
              <div class="absolute -inset-6 bg-gradient-to-br from-[#ff8a3d]/18 via-yellow-500/8 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <svg
                  ref="mgIntSvgRef"
                  viewBox="0 0 360 360"
                  class="relative w-full h-auto"
                  role="img"
                  :aria-label="$t('mg_int_flow_aria')"
              >
                <defs>
                  <radialGradient id="mg-int-core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0.85"/>
                    <stop offset="55%" stop-color="#ff8a3d" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0"/>
                  </radialGradient>
                  <radialGradient id="mg-int-orbit" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0"/>
                    <stop offset="92%" stop-color="#ff8a3d" stop-opacity="0.18"/>
                    <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0"/>
                  </radialGradient>
                  <filter id="mg-int-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <circle cx="180" cy="180" r="125" fill="none" stroke="rgba(255,138,61,0.18)" stroke-width="0.7" stroke-dasharray="2 4"/>
                <circle cx="180" cy="180" r="95" fill="none" stroke="rgba(255,138,61,0.12)" stroke-width="0.6" stroke-dasharray="2 4"/>

                <g v-for="(s, i) in mgIntSatellites" :key="'spoke-'+i">
                  <line
                      x1="180" y1="180"
                      :x2="s.x" :y2="s.y"
                      stroke="rgba(255,138,61,0.30)"
                      stroke-width="0.9"
                      stroke-dasharray="4 3"
                  />
                </g>

                <circle cx="180" cy="180" r="60" fill="url(#mg-int-core)"/>
                <circle cx="180" cy="180" r="34" fill="#1c1917" stroke="rgba(255,138,61,0.55)" stroke-width="1.5" filter="url(#mg-int-glow)"/>
                <text
                    x="180" y="178"
                    text-anchor="middle"
                    fill="#ffb088"
                    font-size="11"
                    font-weight="800"
                    font-family="ui-sans-serif, system-ui, sans-serif"
                >MAGENTO</text>
                <text
                    x="180" y="190"
                    text-anchor="middle"
                    fill="#a1a1aa"
                    font-size="8"
                    font-weight="600"
                    font-family="ui-sans-serif, system-ui, sans-serif"
                >2.4.x</text>

                <g v-for="(s, i) in mgIntSatellites" :key="'sat-'+i">
                  <circle :cx="s.x" :cy="s.y" r="22" fill="url(#mg-int-orbit)"/>
                  <circle :cx="s.x" :cy="s.y" r="18" fill="#0a0a0a" stroke="rgba(255,138,61,0.35)" stroke-width="1"/>
                  <text
                      :x="s.x" :y="s.y + 3"
                      text-anchor="middle"
                      :fill="s.color || '#e4e4e7'"
                      font-size="8.5"
                      font-weight="700"
                      font-family="ui-sans-serif, system-ui, sans-serif"
                  >{{ $t(s.labelKey) }}</text>
                </g>

                <g v-for="(s, i) in mgIntSatellites" :key="'pulse-'+i">
                  <circle r="2.4" fill="#ff8a3d">
                    <animateMotion :dur="s.dur" repeatCount="indefinite" :begin="s.begin" :path="`M ${s.x} ${s.y} L 180 180`"/>
                  </circle>
                  <circle r="1.8" fill="#fde68a" opacity="0.85">
                    <animateMotion :dur="s.dur" repeatCount="indefinite" :begin="s.beginBack" :path="`M 180 180 L ${s.x} ${s.y}`"/>
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-8">{{ $t('mg_int_stats_title') }}</p>
        <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
          <div v-for="(s, i) in tm('mg_int_stats')" :key="i" class="bg-zinc-950 px-5 py-7 text-center">
            <dt class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff8a3d] leading-none">{{ s.value }}</dt>
            <dd class="mt-2 text-xs sm:text-sm text-zinc-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_int_categories_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_int_categories_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(c, i) in tm('mg_int_categories')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 55) + 'ms' }"
              class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="text-3xl">{{ c.icon }}</div>
              <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 whitespace-nowrap">
                {{ c.tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ c.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ c.desc }}</p>
            <ul class="space-y-1.5">
              <li
                  v-for="(item, j) in c.items"
                  :key="j"
                  class="flex gap-2 text-xs text-zinc-300"
              >
                <span class="text-[#ff8a3d]/80 shrink-0">▸</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_int_patterns_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_int_patterns_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          <div
              v-for="(p, i) in tm('mg_int_patterns')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 50) + 'ms' }"
              class="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <p class="text-[#ff8a3d] text-xs font-semibold uppercase tracking-wider mb-2">{{ p.tag }}</p>
            <h3 class="text-lg font-bold text-white mb-2">{{ p.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_int_deliverables_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_int_deliverables_subtitle') }}</p>
          <ul class="space-y-4">
            <li
                v-for="(d, i) in tm('mg_int_deliverables')"
                :key="i"
                class="flex gap-3 text-sm text-zinc-300 leading-relaxed border border-zinc-800 rounded-xl p-4 bg-zinc-900/40"
            >
              <span class="text-[#ff8a3d] shrink-0 font-bold">✓</span>
              <span><strong class="text-white">{{ d.title }}</strong> — {{ d.desc }}</span>
            </li>
          </ul>
        </div>
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_int_pitfalls_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_int_pitfalls_subtitle') }}</p>
          <ul class="space-y-3">
            <li
                v-for="(r, i) in tm('mg_int_pitfalls')"
                :key="i"
                class="text-sm text-zinc-400 leading-relaxed pl-4 border-l-2 border-[#ff8a3d]/40"
            >
              <span class="text-white font-semibold">{{ r.title }}</span>
              — {{ r.desc }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_int_stack_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_int_stack_subtitle') }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(group, i) in tm('mg_int_stack_groups')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 50) + 'ms' }"
              class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/25 transition-colors"
          >
            <p class="text-xs uppercase tracking-[0.22em] text-[#ff8a3d]/85 mb-4 font-semibold">{{ group.label }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="(t, j) in group.items"
                  :key="j"
                  class="px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-300"
              >{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <div v-scroll-animate class="mb-10 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_int_faq_title') }}</h2>
          <p class="text-zinc-400">{{ $t('mg_int_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
              v-for="(q, i) in tm('mg_int_faq')"
              :key="i"
              v-scroll-animate
              class="group bg-zinc-900/60 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <summary class="flex items-center justify-between cursor-pointer list-none gap-4">
              <span class="font-semibold text-white text-left">{{ q.q }}</span>
              <span class="text-[#ff8a3d] group-open:rotate-180 transition-transform shrink-0">▾</span>
            </summary>
            <p class="mt-4 text-zinc-400 leading-relaxed">{{ q.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_int_related_title') }}</h2>
        <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-2xl">{{ $t('mg_int_related_subtitle') }}</p>
        <div class="flex flex-wrap gap-3">
          <router-link
              v-for="(rel, i) in tm('mg_int_related')"
              :key="i"
              :to="rel.to"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-sm text-zinc-300 hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors"
          >
            {{ rel.label }}
            <span class="text-[#ff8a3d]/80">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="pb-24 lg:pb-32 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <div class="relative rounded-3xl overflow-hidden border border-[#ff8a3d]/25 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 px-6 sm:px-10 lg:px-14 py-12 lg:py-14">
          <div class="absolute -top-16 -right-16 w-72 h-72 bg-[#ff8a3d]/10 blur-3xl rounded-full pointer-events-none"></div>
          <div class="relative grid lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_int_final_cta_title') }}</h2>
              <p class="text-zinc-400 leading-relaxed max-w-2xl">{{ $t('mg_int_final_cta_desc') }}</p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all w-full lg:w-auto"
              >
                {{ $t('mg_int_final_cta_btn') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const { tm } = useI18n()

const mgIntHeroRef = ref(null)
const mgIntSvgRef = ref(null)
let mgIntIo = null
let mgIntReduceMotion = false

// 6 satellites around Magento core (cx 180, cy 180), radius 125
const mgIntSatellites = (() => {
  const cx = 180
  const cy = 180
  const r = 125
  const labels = [
    { labelKey: 'mg_int_sat_erp' },
    { labelKey: 'mg_int_sat_payments' },
    { labelKey: 'mg_int_sat_carriers' },
    { labelKey: 'mg_int_sat_crm' },
    { labelKey: 'mg_int_sat_pim' },
    { labelKey: 'mg_int_sat_api' },
  ]
  return labels.map((l, i) => {
    const angle = (-Math.PI / 2) + (i * (Math.PI * 2) / labels.length)
    const x = +(cx + r * Math.cos(angle)).toFixed(2)
    const y = +(cy + r * Math.sin(angle)).toFixed(2)
    return {
      ...l,
      x,
      y,
      dur: `${4 + (i * 0.35).toFixed(1)}s`,
      begin: `${(-i * 0.55).toFixed(2)}s`,
      beginBack: `${(-i * 0.55 - 1.4).toFixed(2)}s`,
    }
  })
})()

function setMgIntPaused(paused) {
  const svg = mgIntSvgRef.value
  if (!svg || mgIntReduceMotion) return
  try {
    if (paused && typeof svg.pauseAnimations === 'function') svg.pauseAnimations()
    else if (!paused && typeof svg.unpauseAnimations === 'function') svg.unpauseAnimations()
  } catch (_) {
    /* ignore */
  }
}

const vScrollAnimate = {
  mounted(el) {
    el.classList.add('mg-before-reveal')
    const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('mg-reveal')
              obs.unobserve(el)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
  },
}

onMounted(() => {
  mgIntReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = mgIntHeroRef.value
    if (!sec) return
    sec.classList.toggle('mg-home-motion-off', mgIntReduceMotion)
    if (mgIntReduceMotion) {
      nextTick(() => setMgIntPaused(true))
      return
    }
    if (mgIntIo) mgIntIo.disconnect()
    mgIntIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMgIntPaused(!vis)
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    mgIntIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (mgIntIo) {
    mgIntIo.disconnect()
    mgIntIo = null
  }
})
</script>

<style scoped>
.mg-before-reveal {
  opacity: 0;
  transform: translateY(26px);
}
.mg-reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.65s ease-out, transform 0.65s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .mg-before-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

details > summary::-webkit-details-marker {
  display: none;
}
</style>
