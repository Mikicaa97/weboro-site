<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <!-- HERO -->
    <section
        ref="mgHeroRef"
        id="mg-hero"
        class="relative pt-32 lg:pt-40 pb-24 lg:pb-32 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(255,138,61,0.10),transparent_60%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(48%_42%_at_15%_82%,rgba(250,204,21,0.045),transparent_62%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('mg_hub_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('mg_hub_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_hub_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_hub_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('mg_hub_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_hub_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_hub_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_30px_-5px_rgba(255,138,61,0.55)] transition-all"
              >
                {{ $t('mg_hub_cta_brief') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <a
                  href="#mg-services"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_hub_cta_explore') }}
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[440px]">
              <div class="absolute -inset-6 bg-gradient-to-br from-[#ff8a3d]/18 via-yellow-500/8 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <svg
                  ref="mgHeroSvgRef"
                  viewBox="0 0 380 240"
                  class="relative w-full h-auto text-zinc-400"
                  role="img"
                  :aria-label="$t('mg_hub_flow_aria')"
              >
                <defs>
                  <linearGradient id="mg-hub-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
                    <stop offset="50%" stop-color="#ff8a3d" stop-opacity="0.55"/>
                    <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.2"/>
                  </linearGradient>
                  <filter id="mg-hub-node-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.6" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <g opacity="0.13" fill="none" stroke="#ff8a3d" stroke-width="0.6">
                  <path d="M30 198l18-10 18 10-18 10z"/>
                  <path d="M68 208l18-10 18 10-18 10z"/>
                  <path d="M106 198l18-10 18 10-18 10z"/>
                  <path d="M144 208l18-10 18 10-18 10z"/>
                </g>

                <path
                    :d="mgHubFlowPath"
                    fill="none"
                    stroke="url(#mg-hub-flow-grad)"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <line x1="290" y1="158" x2="316" y2="138" stroke="#ff8a3d" stroke-opacity="0.32" stroke-width="0.9" stroke-dasharray="3 3"/>
                <line x1="290" y1="160" x2="316" y2="166" stroke="#ff8a3d" stroke-opacity="0.32" stroke-width="0.9" stroke-dasharray="3 3"/>
                <line x1="290" y1="162" x2="316" y2="194" stroke="#ff8a3d" stroke-opacity="0.32" stroke-width="0.9" stroke-dasharray="3 3"/>

                <g v-for="(box, i) in mgHubFlowBoxes" :key="'mg-node-'+i">
                  <rect
                      :x="box.x"
                      :y="box.y"
                      :width="box.w"
                      :height="box.h"
                      :rx="box.rx || 8"
                      :fill="box.fill || '#18181b'"
                      :stroke="box.stroke || 'rgba(255,138,61,0.32)'"
                      :stroke-width="box.strokeW || 1.2"
                      :filter="box.glow ? 'url(#mg-hub-node-glow)' : null"
                  />
                  <text
                      :x="box.x + box.w / 2"
                      :y="box.y + box.h / 2 + (box.tw || 4)"
                      text-anchor="middle"
                      :fill="box.color || '#d4d4d8'"
                      :font-size="box.fs || 10"
                      font-weight="600"
                      font-family="ui-sans-serif, system-ui, sans-serif"
                  >{{ $t(box.labelKey) }}</text>
                </g>

                <circle r="3.4" fill="#ff8a3d">
                  <animateMotion dur="13s" repeatCount="indefinite" rotate="auto" :path="mgHubFlowPath"/>
                </circle>
                <circle r="2.4" fill="#fbbf24">
                  <animateMotion dur="13s" repeatCount="indefinite" rotate="auto" begin="-4.2s" :path="mgHubFlowPath"/>
                </circle>
                <circle r="2.2" fill="#fde68a" opacity="0.95">
                  <animateMotion dur="13s" repeatCount="indefinite" rotate="auto" begin="-8.4s" :path="mgHubFlowPath"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS STRIP -->
    <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-8">{{ $t('mg_hub_stats_title') }}</p>
        <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
          <div
              v-for="(stat, i) in tm('mg_hub_stats')"
              :key="i"
              class="bg-zinc-950 px-6 py-8 text-center"
          >
            <dt class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ff8a3d] leading-none">{{ stat.value }}</dt>
            <dd class="mt-3 text-xs sm:text-sm text-zinc-400">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- 6 SERVICES OVERVIEW -->
    <section id="mg-services" class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 scroll-mt-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12 lg:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{{ $t('mg_hub_services_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_hub_services_subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <component
              v-for="(svc, i) in tm('mg_hub_services')"
              :key="i"
              :is="svc.to ? 'router-link' : 'a'"
              v-bind="svc.to ? { to: svc.to } : { href: svc.anchor }"
              v-scroll-animate
              :style="{ transitionDelay: (i * 60) + 'ms' }"
              class="group relative bg-zinc-900/80 border border-zinc-800 hover:border-[#ff8a3d]/40 rounded-2xl p-6 lg:p-7 transition-all hover:bg-zinc-900 hover:shadow-[0_0_28px_-10px_rgba(255,138,61,0.28)] block"
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="text-3xl">{{ svc.icon }}</div>
              <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 group-hover:text-[#ffb088] group-hover:border-[#ff8a3d]/35 transition-colors whitespace-nowrap">
                {{ svc.tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ svc.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ svc.desc }}</p>
            <div class="flex items-center gap-2 text-sm font-medium text-[#ff8a3d]/80 group-hover:text-[#ff9d5c] transition-colors">
              <span>{{ $t('mg_hub_cta_explore') }}</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </component>
        </div>
      </div>
    </section>

    <!-- 6 DEEP BLOCKS, alternating bg -->
    <section
        v-for="(line, idx) in tm('mg_hub_lines')"
        :key="line.anchorId"
        :id="line.anchorId"
        class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-800/40 scroll-mt-20"
        :class="idx % 2 === 0 ? 'bg-zinc-950' : 'bg-black'"
    >
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div class="lg:col-span-5 space-y-4">
            <p class="text-7xl sm:text-8xl font-extrabold text-[#ff8a3d]/10 leading-none select-none">{{ line.number }}</p>
            <p class="text-xs uppercase tracking-[0.22em] text-[#ff8a3d]/90 font-semibold">{{ line.tag }}</p>
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{{ line.title }}</h3>
            <p class="text-zinc-400 text-base leading-relaxed max-w-xl">{{ line.desc }}</p>
            <router-link
                v-if="line.detailTo"
                :to="line.detailTo"
                class="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[11px] uppercase tracking-wider text-[#ffb088] font-semibold hover:bg-[#ff8a3d]/15 transition-colors w-fit"
            >
              {{ $t('mg_hub_detail_page') }}
              <span aria-hidden="true">→</span>
            </router-link>
            <span
                v-else
                class="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-zinc-700/80 text-[11px] uppercase tracking-wider text-zinc-400"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
              {{ $t('mg_hub_coming_soon') }}
            </span>
          </div>
          <div class="lg:col-span-7">
            <ul class="grid sm:grid-cols-2 gap-4">
              <li
                  v-for="(b, j) in line.bullets"
                  :key="j"
                  v-scroll-animate
                  :style="{ transitionDelay: (j * 50) + 'ms' }"
                  class="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-[#ff8a3d]/30 hover:bg-zinc-900/90 transition-colors"
              >
                <p class="font-semibold text-white mb-1.5 leading-snug">{{ b.title }}</p>
                <p class="text-sm text-zinc-400 leading-relaxed">{{ b.desc }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12 lg:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{{ $t('mg_hub_process_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_hub_process_subtitle') }}</p>
        </div>
        <ol class="grid md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          <li
              v-for="(step, i) in tm('mg_hub_process')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 70) + 'ms' }"
              class="relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <div class="text-3xl font-extrabold text-[#ff8a3d]/80 mb-3">0{{ i + 1 }}</div>
            <h4 class="text-lg font-bold text-white mb-1.5">{{ step.title }}</h4>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12 lg:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{{ $t('mg_hub_tech_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_hub_tech_subtitle') }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(group, i) in tm('mg_hub_tech_groups')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 60) + 'ms' }"
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

    <!-- FAQ -->
    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-4xl mx-auto">
        <div v-scroll-animate class="mb-10 text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{{ $t('mg_hub_faq_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_hub_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
              v-for="(q, i) in tm('mg_hub_faq')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 40) + 'ms' }"
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

    <!-- FINAL CTA -->
    <section class="py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <div class="relative rounded-3xl overflow-hidden border border-[#ff8a3d]/25 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-[#ff8a3d]/10 blur-3xl rounded-full pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-16 w-80 h-80 bg-yellow-400/5 blur-3xl rounded-full pointer-events-none"></div>
          <div class="relative grid lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                {{ $t('mg_hub_final_cta_title') }}
              </h2>
              <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {{ $t('mg_hub_final_cta_desc') }}
              </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all w-full lg:w-auto"
              >
                {{ $t('mg_hub_final_cta_btn') }}
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

const mgHeroRef = ref(null)
const mgHeroSvgRef = ref(null)
let mgHeroIo = null
let mgHeroReduceMotion = false

const mgHubFlowPath = 'M 44 70 L 112 70 L 182 70 L 252 70 L 252 142'
const mgHubFlowBoxes = [
  { x: 16, y: 54, w: 56, h: 32, labelKey: 'mg_hub_flow_catalog' },
  { x: 84, y: 54, w: 56, h: 32, labelKey: 'mg_hub_flow_cart' },
  { x: 152, y: 54, w: 60, h: 32, labelKey: 'mg_hub_flow_checkout' },
  { x: 224, y: 54, w: 56, h: 32, labelKey: 'mg_hub_flow_order' },
  { x: 212, y: 142, w: 80, h: 36, labelKey: 'mg_hub_flow_erp', glow: true, fs: 11, tw: 4 },
  { x: 316, y: 124, w: 50, h: 22, labelKey: 'mg_hub_flow_wms', fill: '#0a0a0a', stroke: 'rgba(255,138,61,0.22)', strokeW: 0.9, fs: 9, tw: 3, rx: 11, color: '#a1a1aa' },
  { x: 316, y: 152, w: 50, h: 22, labelKey: 'mg_hub_flow_carrier', fill: '#0a0a0a', stroke: 'rgba(255,138,61,0.22)', strokeW: 0.9, fs: 9, tw: 3, rx: 11, color: '#a1a1aa' },
  { x: 316, y: 180, w: 50, h: 22, labelKey: 'mg_hub_flow_crm', fill: '#0a0a0a', stroke: 'rgba(255,138,61,0.22)', strokeW: 0.9, fs: 9, tw: 3, rx: 11, color: '#a1a1aa' },
]

function setMgHeroPaused(paused) {
  const svg = mgHeroSvgRef.value
  if (!svg || mgHeroReduceMotion) return
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
  mgHeroReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = mgHeroRef.value
    if (!sec) return
    sec.classList.toggle('mg-home-motion-off', mgHeroReduceMotion)
    if (mgHeroReduceMotion) {
      nextTick(() => setMgHeroPaused(true))
      return
    }
    if (mgHeroIo) mgHeroIo.disconnect()
    mgHeroIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMgHeroPaused(!vis)
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    mgHeroIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (mgHeroIo) {
    mgHeroIo.disconnect()
    mgHeroIo = null
  }
})
</script>

<style scoped>
.mg-before-reveal {
  opacity: 0;
  transform: translateY(28px);
}
.mg-reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
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
