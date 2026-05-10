<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section
        ref="mgFeHeroRef"
        class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_18%,rgba(255,138,61,0.10),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_42%_at_12%_82%,rgba(250,204,21,0.045),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('mg_fe_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/magento" class="hover:text-zinc-300 transition-colors">{{ $t('mg_fe_breadcrumb_hub') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('mg_fe_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_fe_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_fe_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('mg_fe_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_fe_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_fe_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-5px_rgba(255,138,61,0.5)] transition-all"
              >
                {{ $t('mg_fe_cta_audit') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <router-link
                  to="/usluge/magento"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_fe_cta_back_hub') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[420px]">
              <div class="absolute -inset-6 bg-gradient-to-br from-[#ff8a3d]/18 via-yellow-500/8 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <svg
                  ref="mgFeSvgRef"
                  viewBox="0 0 360 320"
                  class="relative w-full h-auto"
                  role="img"
                  :aria-label="$t('mg_fe_flow_aria')"
              >
                <defs>
                  <linearGradient id="mg-fe-gauge" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fbbf24"/>
                    <stop offset="50%" stop-color="#ff8a3d"/>
                    <stop offset="100%" stop-color="#ffb088"/>
                  </linearGradient>
                  <filter id="mg-fe-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.4" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <!-- gauge ring -->
                <circle cx="180" cy="150" r="98" fill="none" stroke="rgba(63,63,70,0.6)" stroke-width="14" stroke-linecap="round"
                        stroke-dasharray="461.8 615.7" transform="rotate(-210 180 150)"/>
                <circle cx="180" cy="150" r="98" fill="none" stroke="url(#mg-fe-gauge)" stroke-width="14" stroke-linecap="round"
                        stroke-dasharray="443 615.7" transform="rotate(-210 180 150)" filter="url(#mg-fe-glow)" class="mg-fe-gauge-anim"/>

                <text x="180" y="150" text-anchor="middle" fill="#fafafa" font-size="58" font-weight="800"
                      font-family="ui-sans-serif, system-ui, sans-serif">96</text>
                <text x="180" y="178" text-anchor="middle" fill="#a1a1aa" font-size="11" font-weight="700"
                      font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="3">LIGHTHOUSE</text>

                <!-- ticks -->
                <g stroke="rgba(255,138,61,0.45)" stroke-width="1.4" stroke-linecap="round">
                  <line x1="180" y1="48" x2="180" y2="56" transform="rotate(-150 180 150)"/>
                  <line x1="180" y1="48" x2="180" y2="56" transform="rotate(-90 180 150)"/>
                  <line x1="180" y1="48" x2="180" y2="56" transform="rotate(-30 180 150)"/>
                  <line x1="180" y1="48" x2="180" y2="56" transform="rotate(30 180 150)"/>
                  <line x1="180" y1="48" x2="180" y2="56" transform="rotate(90 180 150)"/>
                </g>

                <!-- CWV cards -->
                <g v-for="(card, i) in mgFeCwv" :key="'cwv-'+i">
                  <rect
                      :x="22 + i * 110"
                      y="248"
                      width="96"
                      height="56"
                      rx="10"
                      fill="#0a0a0a"
                      stroke="rgba(255,138,61,0.30)"
                      stroke-width="1"
                  />
                  <circle :cx="36 + i * 110" cy="262" r="3.4" :fill="card.dot">
                    <animate attributeName="opacity" values="1;0.35;1" :dur="card.pulse" repeatCount="indefinite"/>
                  </circle>
                  <text :x="48 + i * 110" y="266" fill="#a1a1aa" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="1.5">{{ card.metric }}</text>
                  <text :x="36 + i * 110" y="289" fill="#fafafa" font-size="18" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif">{{ card.value }}</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-8">{{ $t('mg_fe_stats_title') }}</p>
        <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
          <div v-for="(s, i) in tm('mg_fe_stats')" :key="i" class="bg-zinc-950 px-5 py-7 text-center">
            <dt class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff8a3d] leading-none">{{ s.value }}</dt>
            <dd class="mt-2 text-xs sm:text-sm text-zinc-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_fe_compare_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_fe_compare_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div v-scroll-animate class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 lg:p-8">
            <div class="flex items-center justify-between mb-5">
              <h3 class="text-2xl font-bold text-white">{{ $t('mg_fe_compare_luma_title') }}</h3>
              <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500">{{ $t('mg_fe_compare_luma_tag') }}</span>
            </div>
            <p class="text-sm text-zinc-400 leading-relaxed mb-6">{{ $t('mg_fe_compare_luma_desc') }}</p>
            <ul class="space-y-2.5">
              <li v-for="(p, i) in tm('mg_fe_compare_luma_points')" :key="i" class="flex gap-2 text-sm text-zinc-300">
                <span class="text-zinc-500 shrink-0">−</span>
                <span>{{ p }}</span>
              </li>
            </ul>
          </div>
          <div v-scroll-animate class="bg-gradient-to-br from-zinc-900 to-zinc-900/40 border border-[#ff8a3d]/30 rounded-2xl p-7 lg:p-8 shadow-[0_0_40px_-15px_rgba(255,138,61,0.35)]">
            <div class="flex items-center justify-between mb-5">
              <h3 class="text-2xl font-bold text-[#ffb088]">{{ $t('mg_fe_compare_hyva_title') }}</h3>
              <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-[#ff8a3d]/40 bg-[#ff8a3d]/10 text-[#ffb088] font-semibold">{{ $t('mg_fe_compare_hyva_tag') }}</span>
            </div>
            <p class="text-sm text-zinc-300 leading-relaxed mb-6">{{ $t('mg_fe_compare_hyva_desc') }}</p>
            <ul class="space-y-2.5">
              <li v-for="(p, i) in tm('mg_fe_compare_hyva_points')" :key="i" class="flex gap-2 text-sm text-zinc-200">
                <span class="text-[#ff8a3d] shrink-0 font-bold">+</span>
                <span>{{ p }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_fe_approaches_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_fe_approaches_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          <div
              v-for="(c, i) in tm('mg_fe_approaches')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 55) + 'ms' }"
              class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/30 transition-colors flex flex-col"
          >
            <div class="text-3xl mb-3">{{ c.icon }}</div>
            <p class="text-[#ff8a3d]/85 text-xs font-semibold uppercase tracking-wider mb-1">{{ c.tag }}</p>
            <h3 class="text-lg font-bold text-white mb-2">{{ c.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">{{ c.desc }}</p>
            <p class="text-xs uppercase tracking-wider text-zinc-500 mb-2">{{ $t('mg_fe_approaches_when') }}</p>
            <p class="text-xs text-zinc-300 leading-relaxed">{{ c.when }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_fe_cwv_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_fe_cwv_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(c, i) in tm('mg_fe_cwv_cards')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 70) + 'ms' }"
              class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <div class="flex items-center justify-between mb-4">
              <p class="text-3xl font-extrabold text-[#ff8a3d]">{{ c.metric }}</p>
              <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] font-semibold">{{ c.target }}</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ c.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ c.desc }}</p>
            <p class="text-xs uppercase tracking-wider text-zinc-500 mb-2">{{ $t('mg_fe_cwv_we_optimize') }}</p>
            <ul class="space-y-1.5">
              <li v-for="(item, j) in c.items" :key="j" class="flex gap-2 text-xs text-zinc-300">
                <span class="text-[#ff8a3d]/80 shrink-0">▸</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_fe_deliverables_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_fe_deliverables_subtitle') }}</p>
          <ul class="space-y-4">
            <li
                v-for="(d, i) in tm('mg_fe_deliverables')"
                :key="i"
                class="flex gap-3 text-sm text-zinc-300 leading-relaxed border border-zinc-800 rounded-xl p-4 bg-zinc-900/40"
            >
              <span class="text-[#ff8a3d] shrink-0 font-bold">✓</span>
              <span><strong class="text-white">{{ d.title }}</strong> — {{ d.desc }}</span>
            </li>
          </ul>
        </div>
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_fe_pages_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_fe_pages_subtitle') }}</p>
          <ul class="space-y-3">
            <li
                v-for="(r, i) in tm('mg_fe_pages')"
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
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_fe_faq_title') }}</h2>
          <p class="text-zinc-400">{{ $t('mg_fe_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
              v-for="(q, i) in tm('mg_fe_faq')"
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
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_fe_related_title') }}</h2>
        <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-2xl">{{ $t('mg_fe_related_subtitle') }}</p>
        <div class="flex flex-wrap gap-3">
          <router-link
              v-for="(rel, i) in tm('mg_fe_related')"
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
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_fe_final_cta_title') }}</h2>
              <p class="text-zinc-400 leading-relaxed max-w-2xl">{{ $t('mg_fe_final_cta_desc') }}</p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all w-full lg:w-auto"
              >
                {{ $t('mg_fe_final_cta_btn') }}
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

const mgFeHeroRef = ref(null)
const mgFeSvgRef = ref(null)
let mgFeIo = null
let mgFeReduceMotion = false

const mgFeCwv = [
  { metric: 'LCP', value: '1.8s', dot: '#22c55e', pulse: '2.4s' },
  { metric: 'INP', value: '120ms', dot: '#22c55e', pulse: '3.0s' },
  { metric: 'CLS', value: '0.04', dot: '#22c55e', pulse: '2.7s' },
]

function setMgFePaused(paused) {
  const svg = mgFeSvgRef.value
  if (!svg || mgFeReduceMotion) return
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
  mgFeReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = mgFeHeroRef.value
    if (!sec) return
    sec.classList.toggle('mg-home-motion-off', mgFeReduceMotion)
    if (mgFeReduceMotion) {
      nextTick(() => setMgFePaused(true))
      return
    }
    if (mgFeIo) mgFeIo.disconnect()
    mgFeIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMgFePaused(!vis)
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    mgFeIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (mgFeIo) {
    mgFeIo.disconnect()
    mgFeIo = null
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

.mg-fe-gauge-anim {
  animation: mg-fe-sweep 3.6s ease-in-out infinite;
  transform-origin: 180px 150px;
}

@keyframes mg-fe-sweep {
  0%, 100% {
    filter: drop-shadow(0 0 4px rgba(255, 138, 61, 0.45));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(255, 138, 61, 0.7));
  }
}

@media (prefers-reduced-motion: reduce) {
  .mg-before-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .mg-fe-gauge-anim {
    animation: none !important;
  }
}

details > summary::-webkit-details-marker {
  display: none;
}
</style>
