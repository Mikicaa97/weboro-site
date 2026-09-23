<template>
  <section id="usluge" class="relative py-12 sm:py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-800/50 overflow-hidden bg-black">
    <div class="pointer-events-none absolute inset-0 areas-grid-bg" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div v-scroll-animate class="max-w-2xl mb-6 lg:mb-12">
        <h2 class="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mb-3">
          {{ $t('home_areas_title') }}
        </h2>
        <p class="text-zinc-400 text-[15px] sm:text-lg leading-relaxed max-w-xl">
          {{ $t('home_areas_lead') }}
        </p>
      </div>

      <!-- Asymmetric: Custom (heavy) + Web / Growth -->
      <div class="grid lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
        <!-- CUSTOM — primary weight -->
        <router-link
          to="/usluge/custom-web"
          v-scroll-animate
          class="group relative lg:col-span-7 lg:row-span-2 rounded-2xl border border-zinc-700/80 bg-zinc-900/90 overflow-hidden flex flex-col hover:border-[#ff8a3d]/45 hover:shadow-[0_0_36px_-14px_rgba(255,138,61,0.28)] transition-all"
        >
          <div class="absolute -inset-8 bg-gradient-to-br from-[#ff8a3d]/08 via-transparent to-transparent blur-2xl opacity-50 group-hover:opacity-90 transition-opacity pointer-events-none" aria-hidden="true"></div>

          <div class="relative p-5 sm:p-6 lg:p-7 pb-3 flex-1 flex flex-col">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/80 mb-3">{{ $t('home_area_custom_tag') }}</p>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-[#ffb088] transition-colors">
              {{ $t('home_area_custom_title') }}
            </h3>
            <p class="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg mb-5">
              {{ $t('home_area_custom_desc') }}
            </p>

            <!-- App / SaaS architecture visual -->
            <div class="mt-auto rounded-xl border border-zinc-700/70 bg-[#0f0f10] overflow-hidden shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] max-h-[140px] sm:max-h-none">
              <svg class="w-full h-auto areas-motion" viewBox="0 0 520 220" role="img" :aria-label="$t('home_area_custom_visual_aria')">
                <defs>
                  <linearGradient id="areas-custom-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
                    <stop offset="50%" stop-color="#ff8a3d" stop-opacity="0.55"/>
                    <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.3"/>
                  </linearGradient>
                </defs>
                <!-- chrome -->
                <rect x="0" y="0" width="520" height="220" fill="#0f0f10"/>
                <rect x="0" y="0" width="520" height="26" fill="#141416"/>
                <circle cx="14" cy="13" r="3" fill="#3f3f46"/>
                <circle cx="26" cy="13" r="3" fill="#3f3f46"/>
                <circle cx="38" cy="13" r="3" fill="#3f3f46"/>
                <text x="260" y="17" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.2" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_custom_frame') }}</text>

                <!-- sidebar app -->
                <rect x="12" y="38" width="72" height="168" rx="8" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                <rect x="22" y="52" width="52" height="8" rx="2" fill="#3f3f46"/>
                <rect x="22" y="72" width="40" height="6" rx="2" fill="#27272a"/>
                <rect x="22" y="88" width="44" height="6" rx="2" fill="#27272a"/>
                <rect x="22" y="104" width="36" height="6" rx="2" fill="#ff8a3d" opacity="0.55"/>
                <rect x="22" y="120" width="42" height="6" rx="2" fill="#27272a"/>

                <!-- main dashboard -->
                <rect x="96" y="38" width="250" height="100" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.28)"/>
                <text x="112" y="58" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_custom_dash') }}</text>
                <rect x="112" y="70" width="70" height="48" rx="6" fill="#111214" stroke="rgba(63,63,70,0.7)"/>
                <rect x="192" y="70" width="70" height="48" rx="6" fill="#111214" stroke="rgba(63,63,70,0.7)"/>
                <rect x="272" y="70" width="56" height="48" rx="6" fill="#111214" stroke="rgba(250,204,21,0.25)"/>
                <rect x="120" y="88" width="40" height="5" rx="1.5" fill="#3f3f46"/>
                <rect x="200" y="88" width="40" height="5" rx="1.5" fill="#3f3f46"/>
                <rect x="280" y="88" width="30" height="5" rx="1.5" fill="#fbbf24" opacity="0.5"/>

                <!-- workflow strip -->
                <rect x="96" y="150" width="250" height="56" rx="8" fill="#151517" stroke="rgba(63,63,70,0.75)"/>
                <path d="M 130 178 L 220 178 L 310 178" fill="none" stroke="url(#areas-custom-line)" stroke-width="1.8" stroke-linecap="round"/>
                <rect x="112" y="164" width="36" height="28" rx="6" fill="#18181b" stroke="rgba(255,138,61,0.35)"/>
                <rect x="202" y="164" width="36" height="28" rx="6" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                <rect x="292" y="164" width="36" height="28" rx="6" fill="#18181b" stroke="rgba(250,204,21,0.35)"/>
                <circle class="areas-dot" r="2.4" fill="#ff8a3d">
                  <animateMotion dur="5.5s" repeatCount="indefinite" path="M 130 178 L 310 178"/>
                </circle>

                <!-- API / systems column -->
                <rect x="360" y="38" width="148" height="168" rx="8" fill="#18181b" stroke="rgba(250,204,21,0.22)"/>
                <text x="434" y="58" text-anchor="middle" fill="#a1a1aa" font-size="9" letter-spacing="1" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_custom_api') }}</text>
                <rect x="376" y="72" width="116" height="26" rx="6" fill="#111214" stroke="rgba(63,63,70,0.8)"/>
                <text x="434" y="89" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">REST / GraphQL</text>
                <rect x="376" y="110" width="116" height="26" rx="6" fill="#111214" stroke="rgba(63,63,70,0.8)"/>
                <text x="434" y="127" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_custom_int') }}</text>
                <rect x="376" y="148" width="116" height="26" rx="6" fill="#111214" stroke="rgba(255,138,61,0.3)"/>
                <text x="434" y="165" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_custom_logic') }}</text>

                <!-- connection lines app → api -->
                <path d="M 346 88 L 360 88 M 346 123 L 360 123" fill="none" stroke="rgba(255,138,61,0.35)" stroke-width="1.2" stroke-dasharray="3 3"/>
              </svg>
            </div>

            <span class="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff8a3d] group-hover:text-[#ff9d5c]">
              {{ $t('home_area_custom_cta') }}
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
          </div>
        </router-link>

        <!-- WEB & ECOMMERCE -->
        <router-link
          to="/usluge/ecommerce"
          v-scroll-animate
          class="group relative lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden flex flex-col hover:border-[#ff8a3d]/40 hover:bg-zinc-900 transition-all"
        >
          <div class="relative p-5 sm:p-6 flex flex-col h-full">
            <p class="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-2">01</p>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">
              {{ $t('home_area_web_title') }}
            </h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">
              {{ $t('home_area_web_desc') }}
            </p>

            <div class="mt-auto rounded-xl border border-zinc-800 bg-[#0f0f10] overflow-hidden">
              <svg class="w-full h-auto areas-motion" viewBox="0 0 360 132" role="img" :aria-label="$t('home_area_web_visual_aria')">
                <rect width="360" height="132" fill="#0f0f10"/>
                <!-- catalog header -->
                <rect x="10" y="10" width="340" height="18" rx="4" fill="#18181b"/>
                <rect x="18" y="15" width="48" height="8" rx="2" fill="#3f3f46"/>
                <rect x="280" y="14" width="60" height="10" rx="3" fill="#27272a"/>
                <!-- product grid -->
                <g>
                  <rect x="10" y="38" width="78" height="72" rx="6" fill="#18181b" stroke="rgba(255,138,61,0.22)"/>
                  <rect x="18" y="46" width="62" height="36" rx="4" fill="#111214"/>
                  <rect x="18" y="90" width="40" height="5" rx="1.5" fill="#52525b"/>
                  <rect x="18" y="100" width="28" height="4" rx="1.5" fill="#3f3f46"/>

                  <rect x="98" y="38" width="78" height="72" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                  <rect x="106" y="46" width="62" height="36" rx="4" fill="#111214"/>
                  <rect x="106" y="90" width="40" height="5" rx="1.5" fill="#52525b"/>
                  <rect x="106" y="100" width="28" height="4" rx="1.5" fill="#3f3f46"/>

                  <rect x="186" y="38" width="78" height="72" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                  <rect x="194" y="46" width="62" height="36" rx="4" fill="#111214"/>
                  <rect x="194" y="90" width="40" height="5" rx="1.5" fill="#52525b"/>
                  <rect x="194" y="100" width="28" height="4" rx="1.5" fill="#3f3f46"/>

                  <rect x="274" y="38" width="76" height="72" rx="6" fill="#151517" stroke="rgba(255,138,61,0.3)"/>
                  <text x="312" y="68" text-anchor="middle" fill="#ffb088" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">ERP</text>
                  <text x="312" y="84" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">API</text>
                  <path d="M 264 74 L 274 74" stroke="rgba(255,138,61,0.45)" stroke-width="1.2"/>
                </g>
              </svg>
            </div>

            <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#ff8a3d]/85 group-hover:text-[#ff9d5c]">
              {{ $t('home_area_web_cta') }}
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
          </div>
        </router-link>

        <!-- GROWTH -->
        <router-link
          to="/usluge/growth"
          v-scroll-animate
          class="group relative lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col hover:border-[#ff8a3d]/35 hover:bg-zinc-900/90 transition-all"
        >
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(255,138,61,0.07),transparent_60%)] pointer-events-none" aria-hidden="true"></div>
          <div class="relative p-5 sm:p-6 flex flex-col h-full">
            <p class="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-2">02</p>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">
              {{ $t('home_area_growth_title') }}
            </h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">
              {{ $t('home_area_growth_desc') }}
            </p>

            <div class="mt-auto rounded-xl border border-zinc-800 bg-[#0c0f14] overflow-hidden">
              <svg class="w-full h-auto areas-motion" viewBox="0 0 360 132" role="img" :aria-label="$t('home_area_growth_visual_aria')">
                <defs>
                  <linearGradient id="areas-growth-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0.25"/>
                    <stop offset="50%" stop-color="#ffb088" stop-opacity="0.55"/>
                    <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0.3"/>
                  </linearGradient>
                </defs>
                <rect width="360" height="132" fill="#0c0f14"/>
                <!-- funnel nodes -->
                <rect x="16" y="28" width="72" height="36" rx="7" fill="#151a22" stroke="rgba(255,138,61,0.28)"/>
                <text x="52" y="50" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_growth_acq') }}</text>
                <rect x="144" y="28" width="72" height="36" rx="7" fill="#151a22" stroke="rgba(255,138,61,0.35)"/>
                <text x="180" y="50" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_growth_conv') }}</text>
                <rect x="272" y="28" width="72" height="36" rx="7" fill="#151a22" stroke="rgba(255,176,136,0.3)"/>
                <text x="308" y="50" text-anchor="middle" fill="#ffb088" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('home_area_growth_meas') }}</text>
                <path d="M 88 46 L 144 46 M 216 46 L 272 46" fill="none" stroke="url(#areas-growth-line)" stroke-width="1.6" stroke-linecap="round"/>
                <circle class="areas-dot" r="2.2" fill="#ff8a3d">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 88 46 L 272 46"/>
                </circle>
                <!-- abstract sparkline — no numeric claims -->
                <path
                  d="M 24 108 C 60 108, 70 88, 110 92 S 160 118, 200 100 S 260 78, 336 86"
                  fill="none"
                  stroke="rgba(255,138,61,0.55)"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  class="areas-spark"
                />
                <path d="M 24 116 L 336 116" stroke="rgba(63,63,70,0.6)" stroke-width="1"/>
              </svg>
            </div>

            <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#ff8a3d]/90 group-hover:text-[#ff9d5c]">
              {{ $t('home_area_growth_cta') }}
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
/** Parent passes v-scroll-animate via provide? No — re-declare for local use. */
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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
  },
}
</script>

<style scoped>
.areas-grid-bg {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.22) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 70% 60% at 40% 20%, black 10%, transparent 70%);
}

@media (max-width: 639px) {
  .areas-motion {
    max-height: 140px;
  }
}

.areas-spark {
  stroke-dasharray: 280;
  stroke-dashoffset: 0;
  animation: areas-spark-draw 8s ease-in-out infinite alternate;
}

@keyframes areas-spark-draw {
  from { stroke-dashoffset: 40; opacity: 0.55; }
  to { stroke-dashoffset: 0; opacity: 0.9; }
}

.before-reveal {
  opacity: 0;
  transform: translateY(28px);
}
.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.65s ease-out, transform 0.65s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .before-reveal {
    opacity: 1;
    transform: none;
  }
  .reveal {
    transition: none;
  }
  .areas-dot {
    display: none;
  }
  .areas-spark {
    animation: none !important;
  }
}
</style>
