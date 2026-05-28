<template>
  <div class="bg-black text-white font-sans">
    <!-- HEADER & HERO -->
    <header-weboro />
    <hero-line />

    <!-- OutreachGenie — flagship case study -->
    <!-- <section
        id="outreachgenie"
        ref="outreachSectionRef"
        class="relative py-24 lg:py-32 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden"
    >
      
      <div class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(250,204,21,0.07),transparent_70%)]"></div>
      <div class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(50%_50%_at_15%_85%,rgba(255,140,0,0.05),transparent_70%)]"></div>

      
      <canvas
          ref="starsCanvas"
          class="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          aria-hidden="true"
      ></canvas>

      
      <div v-scroll-animate class="relative z-10 max-w-7xl mx-auto">
        
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                {{ $t('og_flagship_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {{ $t('og_section_eyebrow') }}
              </span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
              {{ $t('og_section_title') }}
            </h2>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('og_section_lead') }}
            </p>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                  href="https://outreachgenie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)] transition-all"
              >
                {{ $t('og_section_cta_demo') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
              <router-link
                  to="/outreachgenie"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm text-zinc-200 rounded-xl hover:border-yellow-400/60 hover:text-yellow-400 hover:bg-zinc-900/70 transition-all"
              >
                {{ $t('og_section_cta_hub') }}
              </router-link>
            </div>
          </div>

          
          <div class="lg:col-span-5 relative">
            <div class="absolute -inset-6 bg-gradient-to-tr from-yellow-400/20 via-amber-500/10 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>

            <div class="relative rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <div class="flex items-center gap-2 px-4 py-3 bg-zinc-950/90 border-b border-zinc-800">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                <div class="flex-1 mx-3 px-3 py-1 rounded bg-zinc-800/70 text-[11px] text-zinc-500 truncate">outreachgenie.com</div>
              </div>
              <div class="relative aspect-video bg-zinc-900">
                <div class="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(250,204,21,0.10),transparent_70%)] pointer-events-none"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <div class="w-14 h-14 rounded-full bg-yellow-400/10 border border-yellow-400/40 flex items-center justify-center">
                    <svg class="w-6 h-6 text-yellow-300 translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p class="text-xs uppercase tracking-[0.22em] text-yellow-300/90 font-semibold">
                    {{ $t('og_video_coming_soon_eyebrow') }}
                  </p>
                  <p class="text-zinc-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    {{ $t('og_video_coming_soon_desc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div v-scroll-animate class="mt-16 lg:mt-24">
          <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-6">{{ $t('og_stats_title') }}</p>
          <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
            <div
                v-for="(stat, i) in tm('og_stats')"
                :key="i"
                class="bg-zinc-950 px-6 py-8 text-center"
            >
              <dt class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-400 leading-none">{{ stat.value }}</dt>
              <dd class="mt-3 text-xs sm:text-sm text-zinc-400">{{ stat.label }}</dd>
            </div>
          </dl>
        </div>

        
        <div v-scroll-animate class="mt-20 lg:mt-28">
          <div class="max-w-2xl mb-10">
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">{{ $t('og_modules_title') }}</h3>
            <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('og_modules_subtitle') }}</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <router-link
                v-for="(mod, i) in tm('og_modules')"
                :key="i"
                :to="mod.link"
                v-scroll-animate
                :style="{ transitionDelay: (i * 70) + 'ms' }"
                class="group relative bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/40 rounded-2xl p-6 lg:p-7 transition-all hover:bg-zinc-900 hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.3)] block"
            >
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="text-3xl">{{ mod.icon }}</div>
                <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 group-hover:text-yellow-400 group-hover:border-yellow-400/40 transition-colors whitespace-nowrap">
                  {{ mod.tag }}
                </span>
              </div>
              <h4 class="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{{ mod.title }}</h4>
              <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ mod.desc }}</p>
              <div class="flex items-center gap-2 text-sm font-medium text-yellow-400/70 group-hover:text-yellow-400 transition-colors">
                <span>Otvori modul</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </router-link>
          </div>
        </div>

        
        <div v-scroll-animate class="mt-20 lg:mt-28 relative rounded-3xl overflow-hidden border border-yellow-400/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>
          <div class="relative grid lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8">
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                {{ $t('og_section_cta_inquiry_title') }}
              </h3>
              <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {{ $t('og_section_cta_inquiry_desc') }}
              </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-all w-full lg:w-auto"
              >
                {{ $t('og_section_cta_inquiry_btn') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Magento 2 — commerce flow + catalog grid (homepage flagship) -->
    <section
        id="magento-commerce"
        ref="magentoHomeSectionRef"
        class="relative py-24 lg:py-32 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden bg-zinc-950 border-t border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_72%_18%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_12%_78%,rgba(250,204,21,0.045),transparent_62%)]" aria-hidden="true"></div>

      <div v-scroll-animate class="relative z-10 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_home_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_home_eyebrow') }}</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-white">
              {{ $t('mg_home_title') }}
            </h2>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_home_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_home_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >
                {{ kpi }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/usluge/magento"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-6px_rgba(255,138,61,0.45)] transition-all"
              >
                {{ $t('mg_home_cta_hub') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_home_cta_audit') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[360px]">
              <div class="absolute -inset-4 bg-gradient-to-br from-[#ff8a3d]/15 via-yellow-500/5 to-transparent blur-2xl rounded-3xl pointer-events-none"></div>
              <svg
                  ref="magentoHomeFlowSvgRef"
                  viewBox="0 0 320 248"
                  class="relative w-full h-auto text-zinc-400"
                  role="img"
                  :aria-label="$t('mg_home_flow_aria')"
              >
                <defs>
                  <linearGradient id="mg-home-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
                    <stop offset="50%" stop-color="#ff8a3d" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.2"/>
                  </linearGradient>
                  <filter id="mg-home-node-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <!-- subtle isometric tiles -->
                <g opacity="0.14" fill="none" stroke="#ff8a3d" stroke-width="0.6">
                  <path d="M40 188l18-10 18 10-18 10z"/>
                  <path d="M78 198l18-10 18 10-18 10z"/>
                  <path d="M116 188l18-10 18 10-18 10z"/>
                </g>

                <path
                    :d="magentoHomeFlowPath"
                    fill="none"
                    stroke="url(#mg-home-flow-grad)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <g v-for="(box, i) in magentoHomeFlowBoxes" :key="'n'+i">
                  <rect
                      :x="box.x"
                      :y="box.y"
                      :width="box.w"
                      :height="box.h"
                      rx="8"
                      fill="#18181b"
                      stroke="rgba(255,138,61,0.28)"
                      stroke-width="1.2"
                      filter="url(#mg-home-node-glow)"
                  />
                  <text
                      :x="box.x + box.w / 2"
                      :y="box.y + box.h / 2 + 4"
                      text-anchor="middle"
                      fill="#d4d4d8"
                      font-size="10"
                      font-weight="600"
                      font-family="ui-sans-serif, system-ui, sans-serif"
                  >{{ $t(box.labelKey) }}</text>
                </g>

                <circle r="3.2" fill="#ff8a3d">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" :path="magentoHomeFlowPath"/>
                </circle>
                <circle r="2.4" fill="#fbbf24">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" begin="-4.5s" :path="magentoHomeFlowPath"/>
                </circle>
                <circle r="2.2" fill="#fde68a" opacity="0.95">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" begin="-9s" :path="magentoHomeFlowPath"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>

        <div v-scroll-animate class="mt-20 lg:mt-28">
          <div class="max-w-2xl mb-10">
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">{{ $t('mg_home_modules_title') }}</h3>
            <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_home_modules_subtitle') }}</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <router-link
                v-for="(mod, i) in tm('mg_home_modules')"
                :key="i"
                :to="mod.link"
                v-scroll-animate
                :style="{ transitionDelay: (i * 60) + 'ms' }"
                class="group relative bg-zinc-900/80 border border-zinc-800 hover:border-[#ff8a3d]/40 rounded-2xl p-6 lg:p-7 transition-all hover:bg-zinc-900 hover:shadow-[0_0_28px_-10px_rgba(255,138,61,0.25)] block"
            >
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="text-3xl">{{ mod.icon }}</div>
                <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 group-hover:text-[#ffb088] group-hover:border-[#ff8a3d]/35 transition-colors whitespace-nowrap">
                  {{ mod.tag }}
                </span>
              </div>
              <h4 class="text-xl font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ mod.title }}</h4>
              <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ mod.desc }}</p>
              <div class="flex items-center gap-2 text-sm font-medium text-[#ff8a3d]/80 group-hover:text-[#ff9d5c] transition-colors">
                <span>{{ $t('learn_more') }}</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </router-link>
          </div>
        </div>

        <div v-scroll-animate class="mt-16 lg:mt-20 text-center">
          <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-4">{{ $t('mg_home_trust_title') }}</p>
          <div class="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            <span
                v-for="(chip, i) in tm('mg_home_trust')"
                :key="i"
                class="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-[11px] text-zinc-500"
            >{{ chip }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Marketing — SERP + campaign flow (homepage flagship #3) -->
    <section
        id="google-marketing"
        ref="googleHomeSectionRef"
        class="relative py-24 lg:py-32 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-t border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer gm-home-shimmer-cool" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_72%_18%,rgba(96,165,250,0.10),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_12%_78%,rgba(52,211,153,0.05),transparent_62%)]" aria-hidden="true"></div>

      <div v-scroll-animate class="relative z-10 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/35 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                {{ $t('gm_home_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('gm_home_eyebrow') }}</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-white">
              {{ $t('gm_home_title') }}
            </h2>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('gm_home_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('gm_home_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >
                {{ kpi }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-400 text-zinc-950 font-semibold rounded-xl hover:bg-sky-300 hover:shadow-[0_0_28px_-6px_rgba(96,165,250,0.5)] transition-all"
              >
                {{ $t('gm_home_cta_audit') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <a
                  href="#google-modules"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-sky-400/45 hover:text-sky-300 transition-all"
              >
                {{ $t('gm_home_cta_modules') }}
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[400px]">
              <div class="absolute -inset-4 bg-gradient-to-br from-sky-400/15 via-emerald-400/6 to-transparent blur-2xl rounded-3xl pointer-events-none"></div>
              <svg
                  ref="googleHomeFlowSvgRef"
                  viewBox="0 0 320 320"
                  class="relative w-full h-auto"
                  role="img"
                  :aria-label="$t('gm_home_flow_aria')"
              >
                <defs>
                  <linearGradient id="gm-home-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.25"/>
                    <stop offset="50%" stop-color="#60a5fa" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#34d399" stop-opacity="0.4"/>
                  </linearGradient>
                  <filter id="gm-home-node-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.2" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <!-- SERP frame -->
                <rect x="8" y="6" width="304" height="148" rx="10" fill="#0f0f10" stroke="rgba(96,165,250,0.22)" stroke-width="1"/>

                <!-- Search bar -->
                <rect x="20" y="18" width="280" height="24" rx="12" fill="#18181b" stroke="rgba(63,63,70,0.6)" stroke-width="1"/>
                <circle cx="34" cy="30" r="4" fill="none" stroke="rgba(96,165,250,0.7)" stroke-width="1.4"/>
                <line x1="37" y1="33" x2="41" y2="37" stroke="rgba(96,165,250,0.7)" stroke-width="1.4" stroke-linecap="round"/>
                <text x="50" y="34" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif" font-weight="500">{{ $t('gm_home_serp_query') }}</text>

                <!-- Result 1: Ad -->
                <rect x="20" y="56" width="20" height="11" rx="2" fill="rgba(52,211,153,0.16)" stroke="rgba(52,211,153,0.55)" stroke-width="0.7"/>
                <text x="30" y="65" text-anchor="middle" fill="#34d399" font-size="7.5" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="0.4">Ad</text>
                <rect x="44" y="58" width="232" height="6" rx="2" fill="rgba(82,82,91,0.5)"/>
                <rect x="20" y="72" width="210" height="11" rx="2" fill="rgba(96,165,250,0.62)"/>
                <rect x="20" y="89" width="270" height="5" rx="2" fill="rgba(82,82,91,0.55)"/>
                <rect x="20" y="99" width="200" height="5" rx="2" fill="rgba(82,82,91,0.45)"/>

                <!-- Result 2: organic -->
                <rect x="20" y="115" width="180" height="6" rx="2" fill="rgba(82,82,91,0.5)"/>
                <rect x="20" y="127" width="190" height="11" rx="2" fill="rgba(96,165,250,0.5)"/>
                <rect x="20" y="144" width="240" height="5" rx="2" fill="rgba(82,82,91,0.4)"/>

                <!-- Section label -->
                <text x="20" y="180" fill="rgba(161,161,170,0.7)" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2.2">CAMPAIGN FLOW</text>

                <!-- Flow path -->
                <path
                    :d="googleHomeFlowPath"
                    fill="none"
                    stroke="url(#gm-home-flow-grad)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <!-- Flow boxes -->
                <g v-for="(box, i) in googleHomeFlowBoxes" :key="'gm-n'+i">
                  <rect
                      :x="box.x"
                      :y="box.y"
                      :width="box.w"
                      :height="box.h"
                      rx="8"
                      fill="#18181b"
                      stroke="rgba(96,165,250,0.30)"
                      stroke-width="1.2"
                      filter="url(#gm-home-node-glow)"
                  />
                  <text
                      :x="box.x + box.w / 2"
                      :y="box.y + box.h / 2 + 4"
                      text-anchor="middle"
                      fill="#d4d4d8"
                      font-size="10"
                      font-weight="600"
                      font-family="ui-sans-serif, system-ui, sans-serif"
                  >{{ $t(box.labelKey) }}</text>
                </g>

                <!-- Animated dots traveling the flow -->
                <circle r="3.2" fill="#60a5fa">
                  <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" :path="googleHomeFlowPath"/>
                </circle>
                <circle r="2.4" fill="#34d399">
                  <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="-6s" :path="googleHomeFlowPath"/>
                </circle>

                <!-- Mini KPI strip -->
                <g transform="translate(0, 256)" font-family="ui-sans-serif, system-ui, sans-serif">
                  <rect x="16" y="0" width="88" height="48" rx="9" fill="#0f0f10" stroke="rgba(96,165,250,0.22)" stroke-width="1"/>
                  <text x="60" y="18" text-anchor="middle" fill="#71717a" font-size="8.5" font-weight="700" letter-spacing="1.5">CTR</text>
                  <text x="60" y="38" text-anchor="middle" fill="#fafafa" font-size="16" font-weight="800">4.8%</text>

                  <rect x="116" y="0" width="88" height="48" rx="9" fill="#0f0f10" stroke="rgba(52,211,153,0.28)" stroke-width="1"/>
                  <text x="160" y="18" text-anchor="middle" fill="#71717a" font-size="8.5" font-weight="700" letter-spacing="1.5">CPA</text>
                  <text x="160" y="38" text-anchor="middle" fill="#fafafa" font-size="16" font-weight="800">€12</text>

                  <rect x="216" y="0" width="88" height="48" rx="9" fill="#0f0f10" stroke="rgba(96,165,250,0.22)" stroke-width="1"/>
                  <text x="260" y="18" text-anchor="middle" fill="#71717a" font-size="8.5" font-weight="700" letter-spacing="1.5">ROAS</text>
                  <text x="260" y="38" text-anchor="middle" fill="#fafafa" font-size="16" font-weight="800">3.6×</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div id="google-modules" v-scroll-animate class="mt-20 lg:mt-28 scroll-mt-20">
          <div class="max-w-2xl mb-10">
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">{{ $t('gm_home_modules_title') }}</h3>
            <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('gm_home_modules_subtitle') }}</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <component
                v-for="(mod, i) in tm('gm_home_modules')"
                :key="i"
                :is="mod.link ? 'router-link' : 'div'"
                v-bind="mod.link ? { to: mod.link } : {}"
                v-scroll-animate
                :style="{ transitionDelay: (i * 60) + 'ms' }"
                :class="[
                  'group relative bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 lg:p-7 transition-all block',
                  mod.link ? 'hover:border-sky-400/40 hover:bg-zinc-900 hover:shadow-[0_0_28px_-10px_rgba(96,165,250,0.25)]' : 'hover:border-zinc-700'
                ]"
            >
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="text-3xl">{{ mod.icon }}</div>
                <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 group-hover:text-sky-300 group-hover:border-sky-400/35 transition-colors whitespace-nowrap">
                  {{ mod.tag }}
                </span>
              </div>
              <h4 class="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{{ mod.title }}</h4>
              <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ mod.desc }}</p>

              <div v-if="mod.link" class="flex items-center gap-2 text-sm font-medium text-sky-400/80 group-hover:text-sky-300 transition-colors">
                <span>{{ $t('learn_more') }}</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
              <div v-else class="inline-flex items-center gap-2 text-xs text-zinc-500">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400/70"></span>
                {{ $t('mg_hub_coming_soon') }}
              </div>
            </component>
          </div>
        </div>

        <div v-scroll-animate class="mt-16 lg:mt-20 text-center">
          <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-4">{{ $t('gm_home_trust_title') }}</p>
          <div class="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            <span
                v-for="(chip, i) in tm('gm_home_trust')"
                :key="i"
                class="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-[11px] text-zinc-500"
            >{{ chip }}</span>
          </div>
        </div>
      </div>
    </section>


    <!-- Usluge -->
    <!-- <section v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <h2 class="text-3xl font-bold text-center mb-12">{{$t('services_title')}}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
            v-for="(usluga, i) in tm('services_cards')"
            :key="i"
            v-scroll-animate
            :style="{ transitionDelay: (i * 80) + 'ms' }"
            class="bg-zinc-900 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          <h3 class="text-xl font-semibold mb-2">{{ usluga.title }}</h3>
          <p class="text-gray-400">{{ usluga.desc }}</p>
        </div>
      </div>
    </section> -->


    <!-- Tehnologije -->
    <!-- <section v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <h2 class="text-3xl font-bold text-center mb-12">{{$t('tech_title')}}</h2>
      <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    <span
        v-for="(tech, i) in tm('tech_list')"
        :key="i"
        v-scroll-animate
        :style="{ transitionDelay: (i * 40) + 'ms' }"
        class="bg-zinc-800 px-4 py-2 rounded-full text-sm hover:bg-zinc-700 transition-colors"
    >
      {{ tech }}
    </span>
      </div>
    </section> -->


    <!-- Tim -->
    <!-- <section v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <h2 class="text-3xl font-bold text-center mb-8">{{$t('team_title')}}</h2>
      <div class="max-w-3xl mx-auto text-center text-gray-300 space-y-4">
        <p>{{$t('team_desc1')}}</p>
        <p>{{$t('team_desc2')}}</p>
      </div>
    </section> -->


    <!-- Kontakt -->
    <section
        id="kontakt"
        v-scroll-animate
        class="py-24 px-6 md:px-20 text-center scroll-mt-20"
    >
      <h2 class="text-3xl font-bold mb-6">{{$t('contact_title')}}</h2>
      <p class="mb-8 text-gray-300">{{$t('contact_desc')}}</p>
      <button
          class="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors">
        {{$t('contact_cta')}}
      </button>
    </section>


    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import HeroLine from '@/components/HeroLine.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const { tm } = useI18n()

/** Magento homepage — commerce flow diagram (SVG SMIL) */
const magentoHomeSectionRef = ref(null)
const magentoHomeFlowSvgRef = ref(null)
const magentoHomeFlowPath = 'M 38 94 L 102 94 L 166 94 L 230 94 L 273 168'
const magentoHomeFlowBoxes = [
  { x: 12, y: 78, w: 52, h: 32, labelKey: 'mg_home_flow_catalog' },
  { x: 76, y: 78, w: 52, h: 32, labelKey: 'mg_home_flow_cart' },
  { x: 140, y: 78, w: 52, h: 32, labelKey: 'mg_home_flow_checkout' },
  { x: 204, y: 78, w: 52, h: 32, labelKey: 'mg_home_flow_order' },
  { x: 238, y: 152, w: 70, h: 32, labelKey: 'mg_home_flow_erp' },
]
let magentoHomeIo = null
let magentoHomeReduceMotion = false

function setMagentoHomeMotionPaused(paused) {
  const svg = magentoHomeFlowSvgRef.value
  if (!svg || magentoHomeReduceMotion) return
  try {
    if (paused && typeof svg.pauseAnimations === 'function') svg.pauseAnimations()
    else if (!paused && typeof svg.unpauseAnimations === 'function') svg.unpauseAnimations()
  } catch (_) {
    /* ignore */
  }
}

/** Google Marketing homepage — SERP mock + campaign flow (SVG SMIL) */
const googleHomeSectionRef = ref(null)
const googleHomeFlowSvgRef = ref(null)
const googleHomeFlowPath = 'M 42 209 L 116 209 L 192 209 L 272 209'
const googleHomeFlowBoxes = [
  { x: 12, y: 192, w: 60, h: 34, labelKey: 'gm_home_flow_ad' },
  { x: 84, y: 192, w: 64, h: 34, labelKey: 'gm_home_flow_landing' },
  { x: 160, y: 192, w: 64, h: 34, labelKey: 'gm_home_flow_convert' },
  { x: 236, y: 192, w: 72, h: 34, labelKey: 'gm_home_flow_insight' },
]
let googleHomeIo = null
let googleHomeReduceMotion = false

function setGoogleHomeMotionPaused(paused) {
  const svg = googleHomeFlowSvgRef.value
  if (!svg || googleHomeReduceMotion) return
  try {
    if (paused && typeof svg.pauseAnimations === 'function') svg.pauseAnimations()
    else if (!paused && typeof svg.unpauseAnimations === 'function') svg.unpauseAnimations()
  } catch (_) {
    /* ignore */
  }
}

const outreachSectionRef = ref(null)
const starsCanvas = ref(null)
let starsCtx = null
let starsRo = null
let starsAnimId = null
let starsVisible = false
let starsReduceMotion = false
let starsRafScheduled = false
let starsIo = null
/** Parallax (CSS px), updated on scroll */
let starsParallaxX = 0
let starsParallaxY = 0
let starsScrollCleanup = null
/** @type {HTMLCanvasElement | null} */
let starsStaticCanvas = null
/** @type {CanvasRenderingContext2D | null} */
let starsStaticCtx = null
let starsStaticPadCss = 56
let starsLastDpr = 1
let starsLastCw = 0
let starsLastCh = 0
/** Next performance.now() when a shooting star may spawn */
let starsNextShootAt = 0
/** @type {Array<{ sx: number, sy: number, angle: number, len: number, speed: number, start: number, dur: number, intensity: number }>} */
let starsShoots = []

/** @type {Array<{ nx: number, ny: number, r: number, depth: number, tier: 0|1|2, parallax: number, phase: number, period: number, hue: number, sparkle: boolean, driftA: number, driftB: number, driftC: number, driftD: number }>} */
let stars = []

function randn() {
  let u = 0
  let v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

function rebuildStarsStaticLayer(cw, ch, dpr) {
  const PAD = starsStaticPadCss
  if (!starsStaticCanvas) {
    starsStaticCanvas = document.createElement('canvas')
    starsStaticCtx = starsStaticCanvas.getContext('2d', { alpha: true })
  }
  const W = Math.max(1, Math.floor((cw + PAD * 2) * dpr))
  const H = Math.max(1, Math.floor((ch + PAD * 2) * dpr))
  starsStaticCanvas.width = W
  starsStaticCanvas.height = H
  if (!starsStaticCtx) return
  starsStaticCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
  starsStaticCtx.clearRect(0, 0, cw + PAD * 2, ch + PAD * 2)

  const ox = PAD
  const oy = PAD

  const WARM = [
    [255, 232, 188],
    [255, 220, 150],
    [248, 245, 230],
  ]
  const COOL = [210, 228, 255]

  /**
   * Mix of “just a speck” vs “reads like a tiny star” (static, cheap to draw).
   * @param {number} x
   * @param {number} y
   * @param {number} rr
   * @param {number} gg
   * @param {number} bb
   * @param {'mote'|'soft'|'starlet'} kind
   */
  function paintMicroPoint(x, y, rr, gg, bb, kind, mode = 'field') {
    const boost = mode === 'cluster' ? 1.14 : 1
    if (kind === 'mote') {
      const a = (0.026 + Math.random() * 0.052) * boost
      starsStaticCtx.fillStyle = `rgba(${rr}, ${gg}, ${bb}, ${a})`
      if (Math.random() < 0.55) {
        starsStaticCtx.fillRect(Math.floor(x), Math.floor(y), 1, 1)
      } else {
        const w = 1 + (Math.random() < 0.5 ? 1 : 0)
        const h = w === 1 ? 1 + (Math.random() < 0.4 ? 1 : 0) : 1
        starsStaticCtx.fillRect(Math.floor(x), Math.floor(y), w, h)
      }
      return
    }
    if (kind === 'soft') {
      const a = (0.05 + Math.random() * 0.085) * boost
      const rad = 0.42 + Math.random() * 0.38
      starsStaticCtx.beginPath()
      starsStaticCtx.arc(x + 0.35, y + 0.35, rad, 0, Math.PI * 2)
      starsStaticCtx.fillStyle = `rgba(${rr}, ${gg}, ${bb}, ${a})`
      starsStaticCtx.fill()
      return
    }
    // starlet — soft halo + brighter core; sometimes a faint “+”
    const coreA = (0.1 + Math.random() * 0.14) * boost
    const haloR = 0.9 + Math.random() * 1.1
    const coreR = 0.32 + Math.random() * 0.45
    const g = starsStaticCtx.createRadialGradient(x, y, 0, x, y, haloR * 2.2)
    g.addColorStop(0, `rgba(${rr}, ${gg}, ${bb}, ${coreA * 0.35})`)
    g.addColorStop(0.55, `rgba(${rr}, ${gg}, ${bb}, ${coreA * 0.12})`)
    g.addColorStop(1, `rgba(${rr}, ${gg}, ${bb}, 0)`)
    starsStaticCtx.fillStyle = g
    starsStaticCtx.beginPath()
    starsStaticCtx.arc(x, y, haloR * 2.2, 0, Math.PI * 2)
    starsStaticCtx.fill()
    starsStaticCtx.beginPath()
    starsStaticCtx.arc(x, y, coreR, 0, Math.PI * 2)
    starsStaticCtx.fillStyle = `rgba(${rr}, ${gg}, ${bb}, ${coreA})`
    starsStaticCtx.fill()
    if (Math.random() < 0.45) {
      const L = 1.4 + Math.random() * 2.2
      starsStaticCtx.strokeStyle = `rgba(${rr}, ${gg}, ${bb}, ${coreA * 0.32})`
      starsStaticCtx.lineWidth = 0.32
      starsStaticCtx.beginPath()
      starsStaticCtx.moveTo(x - L, y)
      starsStaticCtx.lineTo(x + L, y)
      starsStaticCtx.moveTo(x, y - L)
      starsStaticCtx.lineTo(x, y + L)
      starsStaticCtx.stroke()
    }
  }

  function pickMicroKind() {
    const u = Math.random()
    if (u < 0.4) return 'mote'
    if (u < 0.72) return 'soft'
    return 'starlet'
  }

  /** Slightly more “star-like” inside galaxy clusters */
  function pickClusterMicroKind() {
    const u = Math.random()
    if (u < 0.28) return 'mote'
    if (u < 0.62) return 'soft'
    return 'starlet'
  }

  // Layer 1 — dense static field: mix of motes vs tiny star shapes (no twinkle)
  const dustCount = Math.min(420, Math.max(280, Math.floor((cw * ch) / 4200)))
  for (let i = 0; i < dustCount; i++) {
    const x = ox + Math.random() * cw
    const y = oy + Math.random() * ch
    const [dr, dg, db] = WARM[Math.floor(Math.random() * WARM.length)]
    paintMicroPoint(x, y, dr, dg, db, pickMicroKind())
  }

  /**
   * Galaxy-like cluster:
   *   - soft radial halo,
   *   - dense gauss dots (variable size + alpha),
   *   - thin filaments (network feel),
   *   - bright "core" stars with mini-halo.
   * @param {number} nx center 0..1 in content rect
   * @param {number} ny
   * @param {number} sigmaX
   * @param {number} sigmaY
   * @param {number} nDots
   * @param {'warm'|'cool'} palette
   */
  function drawCluster(nx, ny, sigmaX, sigmaY, nDots, palette) {
    const cx = ox + nx * cw
    const cy = oy + ny * ch
    const pick = palette === 'cool' ? () => COOL : () => WARM[Math.floor(Math.random() * WARM.length)]
    const haloR = (sigmaX + sigmaY) * 1.0
    const [hr, hg, hb] = pick()
    const g = starsStaticCtx.createRadialGradient(cx, cy, 0, cx, cy, haloR)
    if (palette === 'cool') {
      g.addColorStop(0, `rgba(${hr}, ${hg}, ${hb}, 0.10)`)
      g.addColorStop(0.45, `rgba(${hr}, ${hg}, ${hb}, 0.04)`)
      g.addColorStop(1, `rgba(${hr}, ${hg}, ${hb}, 0)`)
    } else {
      g.addColorStop(0, `rgba(${hr}, ${hg}, ${hb}, 0.12)`)
      g.addColorStop(0.5, `rgba(${hr}, ${hg}, ${hb}, 0.045)`)
      g.addColorStop(1, `rgba(${hr}, ${hg}, ${hb}, 0)`)
    }
    starsStaticCtx.fillStyle = g
    starsStaticCtx.beginPath()
    starsStaticCtx.arc(cx, cy, haloR, 0, Math.PI * 2)
    starsStaticCtx.fill()

    // Sub-layer A — dense varied dots so the cluster reads as a network of stars
    /** @type {Array<{x:number, y:number}>} */
    const placed = []
    for (let i = 0; i < nDots; i++) {
      const x = cx + randn() * sigmaX
      const y = cy + randn() * sigmaY
      if (x < ox || x > ox + cw || y < oy || y > oy + ch) continue
      const [r, gch, b] = pick()
      let kind = pickClusterMicroKind()
      // Occasional “brighter knot” reads clearly as a star
      if (Math.random() < 0.22) kind = 'starlet'
      paintMicroPoint(x, y, r, gch, b, kind, 'cluster')
      placed.push({ x, y })
    }

    // Sub-layer B — filaments: faint thin curves between nearby dots (network feel)
    if (placed.length > 12) {
      const filamentCount = Math.min(14, Math.floor(placed.length / 12))
      const maxDist = Math.max(sigmaX, sigmaY) * 0.8
      starsStaticCtx.lineWidth = 0.45
      for (let i = 0; i < filamentCount; i++) {
        const a = placed[Math.floor(Math.random() * placed.length)]
        // pick another dot that's reasonably close
        let b = null
        for (let tries = 0; tries < 6; tries++) {
          const cand = placed[Math.floor(Math.random() * placed.length)]
          const dx = cand.x - a.x
          const dy = cand.y - a.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d > 6 && d < maxDist) {
            b = cand
            break
          }
        }
        if (!b) continue
        const mx = (a.x + b.x) / 2 + (Math.random() - 0.5) * 12
        const my = (a.y + b.y) / 2 + (Math.random() - 0.5) * 12
        const [fr, fg, fb] = pick()
        starsStaticCtx.strokeStyle = `rgba(${fr}, ${fg}, ${fb}, ${0.035 + Math.random() * 0.03})`
        starsStaticCtx.beginPath()
        starsStaticCtx.moveTo(a.x, a.y)
        starsStaticCtx.quadraticCurveTo(mx, my, b.x, b.y)
        starsStaticCtx.stroke()
      }
    }

    // Sub-layer C — bright "cores": 6–9 dominant stars with mini halo
    const coreCount = 6 + Math.floor(Math.random() * 4)
    for (let i = 0; i < coreCount; i++) {
      const x = cx + randn() * sigmaX * 0.55
      const y = cy + randn() * sigmaY * 0.55
      if (x < ox || x > ox + cw || y < oy || y > oy + ch) continue
      const [cr, cg, cb] = pick()
      const cR = 1.4 + Math.random() * 0.9
      const coreA = palette === 'cool' ? 0.32 + Math.random() * 0.18 : 0.38 + Math.random() * 0.22
      const haloG = starsStaticCtx.createRadialGradient(x, y, 0, x, y, cR * 4.5)
      haloG.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${coreA * 0.55})`)
      haloG.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)
      starsStaticCtx.fillStyle = haloG
      starsStaticCtx.beginPath()
      starsStaticCtx.arc(x, y, cR * 4.5, 0, Math.PI * 2)
      starsStaticCtx.fill()
      starsStaticCtx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${coreA})`
      starsStaticCtx.beginPath()
      starsStaticCtx.arc(x, y, cR, 0, Math.PI * 2)
      starsStaticCtx.fill()
    }
  }

  // Layer 2 — galaxy clusters (one cool / blue-ish)
  drawCluster(0.18, 0.22, cw * 0.17, ch * 0.14, 220, 'warm')
  drawCluster(0.72, 0.28, cw * 0.13, ch * 0.12, 175, 'warm')
  drawCluster(0.42, 0.72, cw * 0.16, ch * 0.13, 200, 'warm')
  drawCluster(0.88, 0.62, cw * 0.13, ch * 0.11, 160, 'cool')
}

function updateStarsParallaxFromScroll() {
  const sec = outreachSectionRef.value
  if (!sec) {
    starsParallaxX = 0
    starsParallaxY = 0
    return
  }
  const rect = sec.getBoundingClientRect()
  const denom = Math.max(rect.height + window.innerHeight, 1)
  const rel = (window.innerHeight * 0.5 - rect.top) / denom
  const t = performance.now() / 1000
  // Scroll-based drift + very slow “zone” sway (~10s period)
  starsParallaxX = (rel - 0.5) * 22 + Math.sin(t / 5.2) * 2.8 + Math.sin(t / 11.0 + 1.1) * 1.6
  starsParallaxY = (rel - 0.5) * 14 + Math.cos(t / 6.1) * 2.2 + Math.cos(t / 9.4) * 1.4
}

function initOutreachStars(w, h) {
  // Three depth tiers: far (small, slow parallax), mid, near (big, strong parallax)
  const total = Math.min(110, Math.max(80, Math.floor((w * h) / 13500)))
  const farN = Math.floor(total * 0.5)
  const midN = Math.floor(total * 0.3)
  const nearN = total - farN - midN
  stars = []

  // FAR
  for (let i = 0; i < farN; i++) {
    stars.push({
      nx: Math.random(),
      ny: Math.random(),
      r: 0.4 + Math.random() * 0.6,
      depth: 0.15 + Math.random() * 0.2,
      tier: 0,
      parallax: 0.25,
      phase: Math.random() * Math.PI * 2,
      period: 9 + Math.random() * 24,
      hue: Math.floor(Math.random() * 3),
      sparkle: false,
      driftA: Math.random() * Math.PI * 2,
      driftB: Math.random() * Math.PI * 2,
      driftC: 0.010 + Math.random() * 0.020,
      driftD: 0.008 + Math.random() * 0.018,
    })
  }
  // MID
  for (let i = 0; i < midN; i++) {
    stars.push({
      nx: Math.random(),
      ny: Math.random(),
      r: 1.0 + Math.random() * 0.8,
      depth: 0.45 + Math.random() * 0.2,
      tier: 1,
      parallax: 0.6,
      phase: Math.random() * Math.PI * 2,
      period: 7 + Math.random() * 18,
      hue: Math.floor(Math.random() * 3),
      sparkle: Math.random() < 0.25,
      driftA: Math.random() * Math.PI * 2,
      driftB: Math.random() * Math.PI * 2,
      driftC: 0.014 + Math.random() * 0.026,
      driftD: 0.011 + Math.random() * 0.020,
    })
  }
  // NEAR
  for (let i = 0; i < nearN; i++) {
    stars.push({
      nx: Math.random(),
      ny: Math.random(),
      r: 1.8 + Math.random() * 1.4,
      depth: 0.7 + Math.random() * 0.3,
      tier: 2,
      parallax: 1.4,
      phase: Math.random() * Math.PI * 2,
      period: 5 + Math.random() * 14,
      hue: Math.floor(Math.random() * 3),
      sparkle: Math.random() < 0.55,
      driftA: Math.random() * Math.PI * 2,
      driftB: Math.random() * Math.PI * 2,
      driftC: 0.018 + Math.random() * 0.030,
      driftD: 0.014 + Math.random() * 0.024,
    })
  }
}

function stopStarsLoop() {
  if (starsAnimId != null) {
    cancelAnimationFrame(starsAnimId)
    starsAnimId = null
  }
  starsRafScheduled = false
}

function startStarsLoop() {
  const el = starsCanvas.value
  if (!el || starsReduceMotion || starsRafScheduled) return
  starsRafScheduled = true

  if (!starsCtx) {
    starsCtx = el.getContext('2d', { alpha: true })
  }

  function resize() {
    const cw = el.clientWidth
    const ch = el.clientHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    el.width = Math.max(1, cw * dpr)
    el.height = Math.max(1, ch * dpr)
    if (starsCtx) starsCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
    starsLastDpr = dpr
    starsLastCw = cw
    starsLastCh = ch
    rebuildStarsStaticLayer(cw, ch, dpr)
    initOutreachStars(cw, ch)
    starsShoots = []
    starsNextShootAt = 0
  }

  if (!starsRo) {
    starsRo = new ResizeObserver(resize)
    starsRo.observe(el)
  }
  resize()

  let t0 = performance.now()
  function frame(now) {
    if (!starsVisible || !starsCtx) {
      starsAnimId = null
      starsRafScheduled = false
      return
    }

    const t = (now - t0) / 1000
    const w = el.clientWidth
    const h = el.clientHeight
    if (w < 2 || h < 2) {
      starsAnimId = requestAnimationFrame(frame)
      return
    }

    updateStarsParallaxFromScroll()

    starsCtx.clearRect(0, 0, w, h)

    // Static sky (dust + galaxy clusters) — blit with parallax crop
    const PAD = starsStaticPadCss
    const dpr = starsLastDpr
    if (starsStaticCanvas && starsStaticCtx) {
      const px = Math.max(-PAD, Math.min(PAD, starsParallaxX))
      const py = Math.max(-PAD, Math.min(PAD, starsParallaxY))
      const sx = (PAD - px) * dpr
      const sy = (PAD - py) * dpr
      const sw = w * dpr
      const sh = h * dpr
      starsCtx.drawImage(starsStaticCanvas, sx, sy, sw, sh, 0, 0, w, h)
    }

    // Shooting stars — more frequent, multiple, all edges; mostly subtle, occasional brighter pop
    if (starsNextShootAt === 0) starsNextShootAt = now + 4500 + Math.random() * 5500
    if (now >= starsNextShootAt && starsShoots.length < 3) {
      // Spawn region: top-left, top-mid, top-right, left, right
      const edge = Math.random()
      let sx
      let sy
      let angle
      if (edge < 0.22) {
        // top-left -> down-right
        sx = Math.random() * w * 0.4 - 30
        sy = -15 - Math.random() * 50
        angle = Math.PI * 0.16 + Math.random() * 0.20
      } else if (edge < 0.44) {
        // top-mid -> down (slight right or left)
        sx = w * 0.25 + Math.random() * w * 0.5
        sy = -15 - Math.random() * 50
        angle = Math.PI * 0.22 + Math.random() * 0.22
      } else if (edge < 0.66) {
        // top-right -> down-left
        sx = w * 0.6 + Math.random() * w * 0.45 + 20
        sy = -15 - Math.random() * 50
        angle = Math.PI * 0.78 + Math.random() * 0.20 // PI - small angle
      } else if (edge < 0.83) {
        // left -> right-down
        sx = -25 - Math.random() * 60
        sy = Math.random() * h * 0.55
        angle = Math.PI * 0.10 + Math.random() * 0.18
      } else {
        // right -> left-down
        sx = w + 25 + Math.random() * 60
        sy = Math.random() * h * 0.55
        angle = Math.PI * 0.84 + Math.random() * 0.18
      }
      const bright = Math.random() < 0.3
      starsShoots.push({
        sx,
        sy,
        angle,
        len: bright ? 110 + Math.random() * 90 : 50 + Math.random() * 70,
        speed: (bright ? w * 0.75 : w * 0.55) + Math.random() * w * 0.3,
        start: now,
        dur: bright ? 620 + Math.random() * 260 : 480 + Math.random() * 220,
        intensity: bright ? 1 : 0.55 + Math.random() * 0.25,
      })
      starsNextShootAt = now + 4500 + Math.random() * 5500
    }
    starsShoots = starsShoots.filter((s) => now - s.start < s.dur)
    for (const s of starsShoots) {
      const u = (now - s.start) / s.dur
      const fade = u < 0.12 ? u / 0.12 : u > 0.88 ? (1 - u) / 0.12 : 1
      const headX = s.sx + Math.cos(s.angle) * s.speed * u
      const headY = s.sy + Math.sin(s.angle) * s.speed * u * 0.42
      const tailX = headX - Math.cos(s.angle) * s.len * 0.45
      const tailY = headY - Math.sin(s.angle) * s.len * 0.22
      const tailA = 0.14 * s.intensity * fade
      const headA = 0.45 * s.intensity * fade
      const lg = starsCtx.createLinearGradient(tailX, tailY, headX, headY)
      lg.addColorStop(0, `rgba(255, 252, 235, 0)`)
      lg.addColorStop(0.55, `rgba(255, 248, 220, ${tailA})`)
      lg.addColorStop(1, `rgba(255, 255, 250, ${headA})`)
      starsCtx.strokeStyle = lg
      starsCtx.lineWidth = s.intensity > 0.85 ? 1.25 : 1.0
      starsCtx.beginPath()
      starsCtx.moveTo(tailX, tailY)
      starsCtx.lineTo(headX, headY)
      starsCtx.stroke()
      // Bright shooting star gets a small head halo
      if (s.intensity > 0.85) {
        const haloR = 4 + s.intensity * 3
        const hg = starsCtx.createRadialGradient(headX, headY, 0, headX, headY, haloR)
        hg.addColorStop(0, `rgba(255, 250, 230, ${0.5 * fade})`)
        hg.addColorStop(1, `rgba(255, 250, 230, 0)`)
        starsCtx.fillStyle = hg
        starsCtx.beginPath()
        starsCtx.arc(headX, headY, haloR, 0, Math.PI * 2)
        starsCtx.fill()
      }
    }

    // Muted white-yellow palette (cream / soft yellow / ivory)
    // Same hue stays the same on every frame, only alpha twinkles.
    const HUES = [
      [255, 232, 188], // warm cream
      [255, 224, 150], // soft yellow
      [248, 245, 230], // ivory white
    ]

    for (const s of stars) {
      const slow = t * 0.11
      const ox = Math.sin(slow + s.driftA) * s.driftC + Math.cos(slow * 0.73 + s.driftB) * s.driftD
      const oy = Math.cos(slow * 0.61 + s.driftB) * s.driftC * 0.85 + Math.sin(slow * 0.41 + s.driftA) * s.driftD * 0.7
      const px = (s.nx + ox * 0.04) * w + starsParallaxX * s.parallax
      const py = (s.ny + oy * 0.04) * h + starsParallaxY * s.parallax

      const tw = 0.5 + 0.5 * Math.sin((t * (Math.PI * 2)) / s.period + s.phase)
      const depthFade = 0.4 + s.depth * 0.6
      const a = (0.12 + tw * 0.32) * depthFade
      const radius = s.r * (0.55 + s.depth * 0.9)
      const [cr, cg, cb] = HUES[s.hue]

      // Soft halo for the brighter ones — "tiny premium star" feel
      if (s.depth > 0.45) {
        const haloA = a * 0.45
        const grad = starsCtx.createRadialGradient(px, py, 0, px, py, radius * 4)
        grad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${haloA})`)
        grad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)
        starsCtx.fillStyle = grad
        starsCtx.beginPath()
        starsCtx.arc(px, py, radius * 4, 0, Math.PI * 2)
        starsCtx.fill()
      }

      // Core dot
      starsCtx.beginPath()
      starsCtx.arc(px, py, radius, 0, Math.PI * 2)
      starsCtx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a})`
      starsCtx.fill()

      // Tiny "+" sparkle on the brightest stars at peak twinkle — makes it feel like a star
      if (s.sparkle && tw > 0.78) {
        const sparkleA = a * (tw - 0.78) * 4.5
        const len = radius * (2.6 + tw * 1.2)
        starsCtx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${Math.min(sparkleA, 0.55)})`
        starsCtx.lineWidth = 0.6
        starsCtx.beginPath()
        starsCtx.moveTo(px - len, py)
        starsCtx.lineTo(px + len, py)
        starsCtx.moveTo(px, py - len)
        starsCtx.lineTo(px, py + len)
        starsCtx.stroke()
      }
    }

    starsAnimId = requestAnimationFrame(frame)
  }

  starsAnimId = requestAnimationFrame(frame)
}

// ucitavanje videa kada se dodje do njega
const videoVisible = ref(false)
const loadVideo = (isVisible) => {
  if (isVisible) videoVisible.value = true
}

const vIntersect = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) binding.value(true)
    })
    observer.observe(el)
  },
}

/**
 * Scroll reveal direktiva – koristi IntersectionObserver
 * Napomena: u <script setup> naziv MORA krenuti sa `v` da bi radio kao direktiva.
 * U templatu se koristi kao v-scroll-animate.
 */
const vScrollAnimate = {
  mounted(el) {
    el.classList.add('before-reveal')

    const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('reveal')
              obs.unobserve(el)
            }
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -10% 0px',
        },
    )

    observer.observe(el)
  },
}

onMounted(() => {
  starsReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (starsReduceMotion) return

  const onScrollOrResize = () => updateStarsParallaxFromScroll()
  window.addEventListener('scroll', onScrollOrResize, { passive: true })
  window.addEventListener('resize', onScrollOrResize, { passive: true })
  starsScrollCleanup = () => {
    window.removeEventListener('scroll', onScrollOrResize)
    window.removeEventListener('resize', onScrollOrResize)
    starsScrollCleanup = null
  }

  nextTick(() => {
    const section = outreachSectionRef.value
    const canvas = starsCanvas.value
    if (!section || !canvas) return

    if (starsIo) starsIo.disconnect()

    starsIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          starsVisible = vis
          if (vis) startStarsLoop()
          else stopStarsLoop()
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    starsIo.observe(section)
    updateStarsParallaxFromScroll()
  })
})

onMounted(() => {
  magentoHomeReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = magentoHomeSectionRef.value
    if (!sec) return

    sec.classList.toggle('mg-home-motion-off', magentoHomeReduceMotion)

    if (magentoHomeReduceMotion) {
      nextTick(() => setMagentoHomeMotionPaused(true))
      return
    }

    if (magentoHomeIo) magentoHomeIo.disconnect()
    magentoHomeIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMagentoHomeMotionPaused(!vis)
        },
        { rootMargin: '100px 0px', threshold: 0 },
    )
    magentoHomeIo.observe(sec)
  })
})

onMounted(() => {
  googleHomeReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = googleHomeSectionRef.value
    if (!sec) return

    sec.classList.toggle('mg-home-motion-off', googleHomeReduceMotion)

    if (googleHomeReduceMotion) {
      nextTick(() => setGoogleHomeMotionPaused(true))
      return
    }

    if (googleHomeIo) googleHomeIo.disconnect()
    googleHomeIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setGoogleHomeMotionPaused(!vis)
        },
        { rootMargin: '100px 0px', threshold: 0 },
    )
    googleHomeIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (magentoHomeIo) {
    magentoHomeIo.disconnect()
    magentoHomeIo = null
  }
  if (googleHomeIo) {
    googleHomeIo.disconnect()
    googleHomeIo = null
  }
  if (starsScrollCleanup) starsScrollCleanup()
  if (starsIo) {
    starsIo.disconnect()
    starsIo = null
  }
  stopStarsLoop()
  if (starsRo) {
    starsRo.disconnect()
    starsRo = null
  }
  starsCtx = null
  starsStaticCanvas = null
  starsStaticCtx = null
})
</script>

<style>
/* Osnovni reveal */
.before-reveal {
  opacity: 0;
  transform: translateY(60px) scale(0.995);
}
.reveal {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
}

/* Ako želiš malo brži ulazak za sitne elemente (badge, pill, tagovi), možeš targetirati dodatno:
.section-pill.before-reveal { transform: translateY(20px); }
*/

/* Magento homepage — catalog grid + shimmer (CSS only; paused off-screen / reduced motion) */
.mg-home-grid-bg {
  background-image:
      linear-gradient(rgba(63, 63, 70, 0.4) 1px, transparent 1px),
      linear-gradient(90deg, rgba(63, 63, 70, 0.4) 1px, transparent 1px);
  background-size: 20px 20px;
  mask-image: radial-gradient(ellipse 85% 75% at 50% 35%, black 15%, transparent 72%);
  opacity: 0.5;
}

.mg-home-grid-shimmer {
  background: linear-gradient(
      118deg,
      transparent 38%,
      rgba(255, 138, 61, 0.045) 48%,
      rgba(250, 204, 21, 0.055) 52%,
      transparent 62%
  );
  background-size: 220% 220%;
  animation: mg-home-shimmer 11s ease-in-out infinite;
  opacity: 0.85;
}

.mg-home-motion-off .mg-home-grid-shimmer {
  animation: none;
}

@keyframes mg-home-shimmer {
  0%,
  100% {
    background-position: 0% 45%;
  }
  50% {
    background-position: 100% 55%;
  }
}

/* Google Marketing — cool variant of the shimmer (sky/emerald) */
.gm-home-shimmer-cool {
  background: linear-gradient(
      118deg,
      transparent 38%,
      rgba(96, 165, 250, 0.05) 48%,
      rgba(52, 211, 153, 0.045) 52%,
      transparent 62%
  );
  background-size: 220% 220%;
  opacity: 0.85;
}

@media (prefers-reduced-motion: reduce) {
  .mg-home-grid-shimmer {
    animation: none !important;
  }
}
</style>
