<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section
        ref="mgPerfHeroRef"
        class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_18%,rgba(255,138,61,0.10),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_42%_at_12%_82%,rgba(250,204,21,0.045),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('mg_perf_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/magento" class="hover:text-zinc-300 transition-colors">{{ $t('mg_perf_breadcrumb_hub') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('mg_perf_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_perf_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_perf_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('mg_perf_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_perf_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_perf_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-5px_rgba(255,138,61,0.5)] transition-all"
              >
                {{ $t('mg_perf_cta_audit') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <router-link
                  to="/usluge/magento"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_perf_cta_back_hub') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[440px]">
              <div class="absolute -inset-6 bg-gradient-to-br from-[#ff8a3d]/18 via-yellow-500/8 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <svg
                  ref="mgPerfSvgRef"
                  viewBox="0 0 360 320"
                  class="relative w-full h-auto"
                  role="img"
                  :aria-label="$t('mg_perf_flow_aria')"
              >
                <defs>
                  <linearGradient id="mg-perf-bar" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#1c1917"/>
                    <stop offset="100%" stop-color="#27272a"/>
                  </linearGradient>
                  <linearGradient id="mg-perf-bar-fast" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0.18"/>
                    <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0.04"/>
                  </linearGradient>
                  <filter id="mg-perf-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="1.6" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <text x="20" y="22" fill="#a1a1aa" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2">REQUEST</text>
                <text x="340" y="22" fill="#a1a1aa" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2" text-anchor="end">RESPONSE</text>

                <line x1="40" y1="36" x2="40" y2="296" stroke="rgba(255,138,61,0.22)" stroke-width="0.8" stroke-dasharray="3 3"/>
                <line x1="320" y1="36" x2="320" y2="296" stroke="rgba(255,138,61,0.22)" stroke-width="0.8" stroke-dasharray="3 3"/>

                <g v-for="(layer, i) in mgPerfLayers" :key="'layer-'+i">
                  <rect
                      x="40"
                      :y="50 + i * 46"
                      width="280"
                      height="34"
                      rx="10"
                      fill="url(#mg-perf-bar)"
                      stroke="rgba(255,138,61,0.30)"
                      stroke-width="1"
                  />
                  <rect
                      x="40"
                      :y="50 + i * 46"
                      :width="layer.fillW"
                      height="34"
                      rx="10"
                      fill="url(#mg-perf-bar-fast)"
                  />
                  <text
                      x="56"
                      :y="50 + i * 46 + 22"
                      fill="#fafafa"
                      font-size="11"
                      font-weight="700"
                      font-family="ui-sans-serif, system-ui, sans-serif"
                  >{{ $t(layer.labelKey) }}</text>
                  <text
                      x="304"
                      :y="50 + i * 46 + 22"
                      text-anchor="end"
                      fill="#ffb088"
                      font-size="10"
                      font-weight="700"
                      font-family="ui-sans-serif, system-ui, sans-serif"
                  >{{ layer.hit }}</text>
                </g>

                <g v-for="(p, i) in mgPerfPulses" :key="'pulse-'+i">
                  <circle r="2.6" :fill="p.color" filter="url(#mg-perf-glow)">
                    <animateMotion :dur="p.dur" repeatCount="indefinite" :begin="p.begin" :path="p.path"/>
                  </circle>
                </g>

                <text x="180" y="312" text-anchor="middle" fill="#a1a1aa" font-size="9" font-weight="600" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2">DEEPER LAYER · SLOWER</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-8">{{ $t('mg_perf_stats_title') }}</p>
        <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
          <div v-for="(s, i) in tm('mg_perf_stats')" :key="i" class="bg-zinc-950 px-5 py-7 text-center">
            <dt class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff8a3d] leading-none">{{ s.value }}</dt>
            <dd class="mt-2 text-xs sm:text-sm text-zinc-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_perf_layers_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_perf_layers_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(c, i) in tm('mg_perf_layer_cards')"
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
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_perf_hosting_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_perf_hosting_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(opt, i) in tm('mg_perf_hosting_options')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 70) + 'ms' }"
              class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 lg:p-7 hover:border-[#ff8a3d]/30 transition-colors flex flex-col"
          >
            <p class="text-[#ff8a3d]/85 text-xs font-semibold uppercase tracking-wider mb-2">{{ opt.tag }}</p>
            <h3 class="text-xl font-bold text-white mb-3">{{ opt.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{{ opt.desc }}</p>
            <p class="text-xs uppercase tracking-wider text-zinc-500 mb-2">{{ $t('mg_perf_hosting_best_for') }}</p>
            <p class="text-sm text-zinc-300 mb-4">{{ opt.bestFor }}</p>
            <p class="text-xs uppercase tracking-wider text-zinc-500 mb-2">{{ $t('mg_perf_hosting_pros') }}</p>
            <ul class="space-y-1.5 mb-4">
              <li v-for="(p, j) in opt.pros" :key="j" class="flex gap-2 text-xs text-zinc-300">
                <span class="text-[#ff8a3d]/80 shrink-0">+</span>
                <span>{{ p }}</span>
              </li>
            </ul>
            <p class="text-xs uppercase tracking-wider text-zinc-500 mb-2">{{ $t('mg_perf_hosting_caveats') }}</p>
            <ul class="space-y-1.5">
              <li v-for="(c, j) in opt.caveats" :key="j" class="flex gap-2 text-xs text-zinc-400">
                <span class="text-zinc-500 shrink-0">−</span>
                <span>{{ c }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_perf_profiling_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_perf_profiling_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          <div
              v-for="(p, i) in tm('mg_perf_profiling')"
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

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_perf_deliverables_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_perf_deliverables_subtitle') }}</p>
          <ul class="space-y-4">
            <li
                v-for="(d, i) in tm('mg_perf_deliverables')"
                :key="i"
                class="flex gap-3 text-sm text-zinc-300 leading-relaxed border border-zinc-800 rounded-xl p-4 bg-zinc-900/40"
            >
              <span class="text-[#ff8a3d] shrink-0 font-bold">✓</span>
              <span><strong class="text-white">{{ d.title }}</strong> — {{ d.desc }}</span>
            </li>
          </ul>
        </div>
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_perf_bottlenecks_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_perf_bottlenecks_subtitle') }}</p>
          <ul class="space-y-3">
            <li
                v-for="(r, i) in tm('mg_perf_bottlenecks')"
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

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <div v-scroll-animate class="mb-10 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_perf_faq_title') }}</h2>
          <p class="text-zinc-400">{{ $t('mg_perf_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
              v-for="(q, i) in tm('mg_perf_faq')"
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
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_perf_related_title') }}</h2>
        <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-2xl">{{ $t('mg_perf_related_subtitle') }}</p>
        <div class="flex flex-wrap gap-3">
          <router-link
              v-for="(rel, i) in tm('mg_perf_related')"
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
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_perf_final_cta_title') }}</h2>
              <p class="text-zinc-400 leading-relaxed max-w-2xl">{{ $t('mg_perf_final_cta_desc') }}</p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all w-full lg:w-auto"
              >
                {{ $t('mg_perf_final_cta_btn') }}
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

const mgPerfHeroRef = ref(null)
const mgPerfSvgRef = ref(null)
let mgPerfIo = null
let mgPerfReduceMotion = false

// Five cache layers stacked vertically; bar y = 50 + i*46, height 34, x range 40..320
const mgPerfLayers = [
  { labelKey: 'mg_perf_layer_cdn', hit: '60%', fillW: 56 },
  { labelKey: 'mg_perf_layer_varnish', hit: '30%', fillW: 90 },
  { labelKey: 'mg_perf_layer_redis', hit: '7%', fillW: 150 },
  { labelKey: 'mg_perf_layer_php', hit: '2.5%', fillW: 220 },
  { labelKey: 'mg_perf_layer_db', hit: '0.5%', fillW: 270 },
]

// Pulses: most return early (cache hit), one goes deep (miss)
// Each path goes from x=20 down through a layer at y=50 + i*46 + 17, then bounces back to x=340
const mgPerfPulses = (() => {
  const enter = 20
  const exit = 340
  const layerY = (i) => 50 + i * 46 + 17
  return [
    { path: `M ${enter} 24 L 60 ${layerY(0)} L ${exit} 24`, dur: '3.4s', begin: '0s', color: '#ff8a3d' },
    { path: `M ${enter} 24 L 80 ${layerY(0)} L ${exit} 24`, dur: '3.6s', begin: '-0.9s', color: '#fbbf24' },
    { path: `M ${enter} 24 L 110 ${layerY(1)} L ${exit} 24`, dur: '4.2s', begin: '-1.6s', color: '#ff8a3d' },
    { path: `M ${enter} 24 L 140 ${layerY(1)} L ${exit} 24`, dur: '4.0s', begin: '-2.4s', color: '#fde68a' },
    { path: `M ${enter} 24 L 170 ${layerY(2)} L ${exit} 24`, dur: '5.2s', begin: '-1.2s', color: '#ff8a3d' },
    { path: `M ${enter} 24 L 220 ${layerY(3)} L ${exit} 24`, dur: '6.4s', begin: '-3.0s', color: '#fbbf24' },
    { path: `M ${enter} 24 L 260 ${layerY(4)} L ${exit} 24`, dur: '8.0s', begin: '-4.5s', color: '#ff8a3d' },
  ]
})()

function setMgPerfPaused(paused) {
  const svg = mgPerfSvgRef.value
  if (!svg || mgPerfReduceMotion) return
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
  mgPerfReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = mgPerfHeroRef.value
    if (!sec) return
    sec.classList.toggle('mg-home-motion-off', mgPerfReduceMotion)
    if (mgPerfReduceMotion) {
      nextTick(() => setMgPerfPaused(true))
      return
    }
    if (mgPerfIo) mgPerfIo.disconnect()
    mgPerfIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMgPerfPaused(!vis)
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    mgPerfIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (mgPerfIo) {
    mgPerfIo.disconnect()
    mgPerfIo = null
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
