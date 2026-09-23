<template>
  <section class="relative min-h-[80vh] lg:min-h-[88vh] bg-[#0a0908] overflow-hidden">
    <div class="pointer-events-none absolute inset-0 hero-grid-bg" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0 hero-grid-shimmer" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_72%_18%,rgba(255,138,61,0.09),transparent_58%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_12%_78%,rgba(250,204,21,0.04),transparent_62%)]" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-16">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- LEFT: copy -->
        <div class="lg:col-span-6 xl:col-span-6 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff8a3d]/35 bg-[#ff8a3d]/10 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#ffb088] mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]" aria-hidden="true"></span>
            {{ $t('hero_eyebrow') }}
          </div>

          <h1 class="text-[2.35rem] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-extrabold leading-[1.06] tracking-tight mb-5 text-white">
            {{ $t('hero_title') }}
          </h1>

          <p class="text-base sm:text-lg lg:text-xl max-w-xl text-zinc-300 mb-8 leading-relaxed">
            {{ $t('hero_desc') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7">
            <router-link
              to="/kontakt"
              class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-6px_rgba(255,138,61,0.45)] transition-all"
            >
              {{ $t('cta_send_project') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </router-link>
            <router-link
              to="/portfolio"
              class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] hover:bg-zinc-900/70 transition-all"
            >
              {{ $t('cta_view_work') }}
            </router-link>
          </div>

          <!-- Quiet area links — Core Areas below carry the weight -->
          <div class="flex flex-wrap gap-x-4 gap-y-2" :aria-label="$t('hero_areas_aria')">
            <router-link
              v-for="chip in areaChips"
              :key="chip.to"
              :to="chip.to"
              class="text-xs text-zinc-500 hover:text-[#ffb088] transition-colors underline-offset-4 hover:underline"
            >
              {{ $t(chip.labelKey) }}
            </router-link>
          </div>
        </div>

        <!-- RIGHT: system visual -->
        <div class="lg:col-span-6 xl:col-span-6 relative">
          <div class="absolute -inset-5 sm:-inset-6 bg-gradient-to-tr from-[#ff8a3d]/18 via-amber-500/8 to-transparent blur-3xl rounded-[3rem] pointer-events-none" aria-hidden="true"></div>

          <div class="relative rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <!-- Desktop / tablet full diagram -->
            <svg
              class="hidden sm:block w-full h-auto"
              viewBox="0 0 420 360"
              role="img"
              :aria-label="$t('hero_system_aria')"
            >
              <defs>
                <linearGradient id="hero-sys-line" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
                  <stop offset="45%" stop-color="#ff8a3d" stop-opacity="0.55"/>
                  <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.3"/>
                </linearGradient>
                <linearGradient id="hero-sys-branch" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0.45"/>
                  <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.35"/>
                </linearGradient>
                <filter id="hero-node-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="2.2" result="b"/>
                  <feMerge>
                    <feMergeNode in="b"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <rect x="10" y="10" width="400" height="340" rx="14" fill="#0f0f10" stroke="rgba(63,63,70,0.8)" stroke-width="1"/>

              <!-- Header bar (app chrome signal) -->
              <rect x="10" y="10" width="400" height="28" rx="14" fill="#141416"/>
              <rect x="10" y="24" width="400" height="14" fill="#141416"/>
              <circle cx="28" cy="24" r="3.2" fill="#3f3f46"/>
              <circle cx="40" cy="24" r="3.2" fill="#3f3f46"/>
              <circle cx="52" cy="24" r="3.2" fill="#3f3f46"/>
              <text x="210" y="28" text-anchor="middle" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="1.6">{{ $t('hero_system_caption') }}</text>

              <!-- Main vertical spine -->
              <path
                d="M 210 58 L 210 118"
                fill="none"
                stroke="url(#hero-sys-line)"
                stroke-width="2"
                stroke-linecap="round"
              />
              <!-- Branch to improve / build -->
              <path
                d="M 210 148 L 210 168 M 210 168 L 118 198 M 210 168 L 302 198"
                fill="none"
                stroke="url(#hero-sys-branch)"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- Merge to systems -->
              <path
                d="M 118 238 L 118 252 L 210 272 M 302 238 L 302 252 L 210 272 M 210 272 L 210 292"
                fill="none"
                stroke="url(#hero-sys-line)"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <!-- Node: existing / problem -->
              <g filter="url(#hero-node-glow)">
                <rect x="132" y="48" width="156" height="36" rx="9" fill="#18181b" stroke="rgba(255,138,61,0.4)" stroke-width="1.2"/>
              </g>
              <text x="210" y="70" text-anchor="middle" fill="#f4f4f5" font-size="11" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n1') }}</text>

              <!-- Node: analysis -->
              <g filter="url(#hero-node-glow)">
                <rect x="148" y="118" width="124" height="32" rx="9" fill="#18181b" stroke="rgba(255,138,61,0.32)" stroke-width="1.1"/>
              </g>
              <text x="210" y="138" text-anchor="middle" fill="#e4e4e7" font-size="10.5" font-weight="650" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n2') }}</text>

              <!-- Branch nodes -->
              <rect x="58" y="198" width="120" height="40" rx="9" fill="#151517" stroke="rgba(255,138,61,0.28)" stroke-width="1.1"/>
              <text x="118" y="216" text-anchor="middle" fill="#a1a1aa" font-size="8" letter-spacing="0.8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_branch_l') }}</text>
              <text x="118" y="230" text-anchor="middle" fill="#f4f4f5" font-size="10.5" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n3a') }}</text>

              <rect x="242" y="198" width="120" height="40" rx="9" fill="#151517" stroke="rgba(250,204,21,0.28)" stroke-width="1.1"/>
              <text x="302" y="216" text-anchor="middle" fill="#a1a1aa" font-size="8" letter-spacing="0.8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_branch_r') }}</text>
              <text x="302" y="230" text-anchor="middle" fill="#f4f4f5" font-size="10.5" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n3b') }}</text>

              <!-- Outcome systems row -->
              <g>
                <rect x="48" y="292" width="100" height="42" rx="9" fill="#18181b" stroke="rgba(255,138,61,0.3)" stroke-width="1"/>
                <text x="98" y="310" text-anchor="middle" fill="#ffb088" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_web') }}</text>
                <text x="98" y="324" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_web_sub') }}</text>

                <rect x="160" y="292" width="100" height="42" rx="9" fill="#18181b" stroke="rgba(250,204,21,0.32)" stroke-width="1"/>
                <text x="210" y="310" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_custom') }}</text>
                <text x="210" y="324" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_custom_sub') }}</text>

                <rect x="272" y="292" width="100" height="42" rx="9" fill="#18181b" stroke="rgba(255,138,61,0.28)" stroke-width="1"/>
                <text x="322" y="310" text-anchor="middle" fill="#ffb088" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_growth') }}</text>
                <text x="322" y="324" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_growth_sub') }}</text>
              </g>

              <!-- Flow dots (paused via CSS when reduced-motion / offscreen handled by SMIL + media query) -->
              <g class="hero-flow-dots">
                <circle r="3" fill="#ff8a3d">
                  <animateMotion dur="7.5s" repeatCount="indefinite" path="M 210 58 L 210 118"/>
                </circle>
                <circle r="2.4" fill="#fbbf24" opacity="0.9">
                  <animateMotion dur="9s" repeatCount="indefinite" begin="-2s" path="M 210 148 L 210 168 L 118 198"/>
                </circle>
                <circle r="2.4" fill="#ff8a3d" opacity="0.85">
                  <animateMotion dur="9s" repeatCount="indefinite" begin="-4.5s" path="M 210 148 L 210 168 L 302 198"/>
                </circle>
                <circle r="2.2" fill="#fde68a" opacity="0.9">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="-1s" path="M 210 272 L 210 292"/>
                </circle>
              </g>
            </svg>

            <!-- Mobile simplified diagram -->
            <svg
              class="sm:hidden w-full h-auto"
              viewBox="0 0 360 220"
              role="img"
              :aria-label="$t('hero_system_aria')"
            >
              <defs>
                <linearGradient id="hero-sys-line-m" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.3"/>
                  <stop offset="50%" stop-color="#ff8a3d" stop-opacity="0.55"/>
                  <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.3"/>
                </linearGradient>
              </defs>
              <rect x="8" y="8" width="344" height="204" rx="12" fill="#0f0f10" stroke="rgba(63,63,70,0.8)" stroke-width="1"/>
              <text x="180" y="32" text-anchor="middle" fill="#71717a" font-size="9" letter-spacing="1.4" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_system_caption') }}</text>

              <path d="M 50 80 L 310 80" fill="none" stroke="url(#hero-sys-line-m)" stroke-width="2" stroke-linecap="round"/>

              <rect x="28" y="62" width="88" height="36" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.35)" stroke-width="1"/>
              <text x="72" y="84" text-anchor="middle" fill="#f4f4f5" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n1_short') }}</text>

              <rect x="136" y="62" width="88" height="36" rx="8" fill="#18181b" stroke="rgba(255,138,61,0.3)" stroke-width="1"/>
              <text x="180" y="84" text-anchor="middle" fill="#f4f4f5" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n2') }}</text>

              <rect x="244" y="62" width="88" height="36" rx="8" fill="#18181b" stroke="rgba(250,204,21,0.3)" stroke-width="1"/>
              <text x="288" y="84" text-anchor="middle" fill="#f4f4f5" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_n3_short') }}</text>

              <g class="hero-flow-dots">
                <circle r="2.6" fill="#ff8a3d">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 50 80 L 310 80"/>
                </circle>
              </g>

              <rect x="28" y="128" width="96" height="48" rx="9" fill="#18181b" stroke="rgba(255,138,61,0.28)" stroke-width="1"/>
              <text x="76" y="148" text-anchor="middle" fill="#ffb088" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_web') }}</text>
              <text x="76" y="164" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_web_sub') }}</text>

              <rect x="132" y="128" width="96" height="48" rx="9" fill="#18181b" stroke="rgba(250,204,21,0.3)" stroke-width="1"/>
              <text x="180" y="148" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_custom') }}</text>
              <text x="180" y="164" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_custom_sub') }}</text>

              <rect x="236" y="128" width="96" height="48" rx="9" fill="#18181b" stroke="rgba(255,138,61,0.28)" stroke-width="1"/>
              <text x="284" y="148" text-anchor="middle" fill="#ffb088" font-size="10" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_growth') }}</text>
              <text x="284" y="164" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('hero_sys_out_growth_sub') }}</text>
            </svg>
          </div>

          <div class="absolute -bottom-3 left-3 sm:-bottom-4 sm:left-4 px-3 py-2 bg-zinc-900/95 backdrop-blur border border-zinc-700 rounded-lg shadow-xl flex items-center gap-2 text-xs text-zinc-200 max-w-[85%]">
            <span class="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span class="hero-live-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8a3d] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#ff8a3d]"></span>
            </span>
            <span class="font-medium leading-snug">{{ $t('hero_visual_caption') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const areaChips = [
  { labelKey: 'hero_area_web', to: '/usluge/ecommerce' },
  { labelKey: 'hero_area_custom', to: '/usluge/custom-web' },
  { labelKey: 'hero_area_growth', to: '/usluge/growth' },
]
</script>

<style scoped>
.hero-grid-bg {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.4) 1px, transparent 1px);
  background-size: 20px 20px;
  mask-image: radial-gradient(ellipse 85% 75% at 50% 35%, black 15%, transparent 72%);
  opacity: 0.5;
}

.hero-grid-shimmer {
  background: linear-gradient(
    118deg,
    transparent 38%,
    rgba(255, 138, 61, 0.045) 48%,
    rgba(250, 204, 21, 0.055) 52%,
    transparent 62%
  );
  background-size: 220% 220%;
  animation: hero-shimmer 11s ease-in-out infinite;
  opacity: 0.85;
}

@keyframes hero-shimmer {
  0%,
  100% {
    background-position: 0% 45%;
  }
  50% {
    background-position: 100% 55%;
  }
}

.hero-live-ping {
  animation: hero-ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes hero-ping {
  75%,
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-grid-shimmer,
  .hero-live-ping {
    animation: none !important;
  }
  .hero-flow-dots {
    display: none;
  }
}
</style>
