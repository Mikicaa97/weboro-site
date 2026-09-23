<template>
  <section id="rad" class="relative py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/60 overflow-hidden">
    <div class="pointer-events-none absolute inset-0 work-grid-bg" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_78%_18%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div v-scroll-animate class="mb-10 lg:mb-14 max-w-2xl">
        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('home_work_eyebrow') }}</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('home_work_title') }}
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
          {{ $t('home_work_lead') }}
        </p>
      </div>

      <!-- OUTREACHGENIE — flagship -->
      <article
        v-scroll-animate
        class="group relative rounded-2xl border border-zinc-700/80 bg-zinc-900/90 overflow-hidden mb-5 lg:mb-6 hover:border-[#ff8a3d]/40 hover:shadow-[0_0_50px_-16px_rgba(255,138,61,0.35)] transition-all"
      >
        <div class="absolute -inset-10 bg-gradient-to-br from-emerald-500/10 via-[#ff8a3d]/08 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true"></div>

        <div class="relative grid lg:grid-cols-12 gap-0 items-stretch">
          <div class="lg:col-span-5 xl:col-span-5 flex flex-col justify-center p-6 sm:p-8 lg:p-9 xl:p-10">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/90 mb-3">{{ $t('home_work_og_marker') }}</p>
            <h3 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-white tracking-tight mb-3">
              {{ $t('home_work_og_title') }}
            </h3>
            <p class="text-sm sm:text-base text-zinc-300 leading-relaxed mb-3">
              {{ $t('home_work_og_desc') }}
            </p>
            <p class="text-sm text-zinc-500 leading-relaxed mb-5">
              {{ $t('home_work_og_note') }}
            </p>

            <ul class="flex flex-wrap gap-2 mb-6" :aria-label="$t('home_work_og_caps_aria')">
              <li
                v-for="(cap, i) in ogCaps"
                :key="i"
                class="text-[10px] uppercase tracking-[0.12em] text-zinc-500 border border-zinc-800 bg-zinc-950/40 rounded-md px-2 py-1"
              >
                {{ cap }}
              </li>
            </ul>

            <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <router-link
                to="/portfolio/outreachgenie"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff8a3d] text-zinc-950 text-sm font-semibold hover:bg-[#ff9d5c] transition-colors"
              >
                {{ $t('home_work_og_cta') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <span
                class="inline-flex items-center justify-center px-4 py-2 text-sm text-zinc-500 border border-zinc-800 rounded-xl bg-zinc-950/50 cursor-default select-none"
                aria-disabled="true"
              >
                {{ $t('portfolio_v2_coming_soon') }}
              </span>
            </div>
          </div>

          <div class="lg:col-span-7 xl:col-span-7 relative min-h-[200px] sm:min-h-[280px] lg:min-h-[340px] bg-[#09090b] overflow-hidden">
            <OgProductVisual
              class="absolute inset-0 w-full h-full work-og-shot"
              :aria-label="$t('home_work_og_img_alt')"
            />
          </div>
        </div>
      </article>

      <!-- Client work -->
      <div class="grid md:grid-cols-2 gap-4 lg:gap-5 mb-10 lg:mb-12">
        <a
          href="https://bleki.co.rs/"
          target="_blank"
          rel="noopener noreferrer"
          v-scroll-animate
          class="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden flex flex-col hover:border-[#ff8a3d]/35 transition-colors"
        >
          <div class="relative h-36 sm:h-44 border-b border-zinc-800 overflow-hidden bg-[#f4f4f5]">
            <BlekiCatalogVisual
              class="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
              :aria-label="$t('portfolio_v2_bleki_visual_aria')"
            />
          </div>
          <div class="p-5 sm:p-6 flex flex-col flex-1">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('home_work_bleki_type') }}</p>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ $t('home_work_bleki_title') }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{{ $t('home_work_bleki_desc') }}</p>
            <span class="inline-flex items-center gap-1.5 text-sm font-medium text-[#ffb088]">
              {{ $t('home_work_visit_site') }}
              <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>

        <a
          href="https://prodajautomobil.rs/"
          target="_blank"
          rel="noopener noreferrer"
          v-scroll-animate
          class="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden flex flex-col hover:border-[#ff8a3d]/35 transition-colors"
        >
          <div class="relative h-36 sm:h-44 border-b border-zinc-800 overflow-hidden bg-[#0c0c0e]">
            <PaLeadVisual
              class="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
              :aria-label="$t('portfolio_v2_pa_visual_aria')"
            />
          </div>
          <div class="p-5 sm:p-6 flex flex-col flex-1">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('home_work_pa_type') }}</p>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#ffb088] transition-colors">{{ $t('home_work_pa_title') }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{{ $t('home_work_pa_desc') }}</p>
            <span class="inline-flex items-center gap-1.5 text-sm font-medium text-[#ffb088]">
              {{ $t('home_work_visit_site') }}
              <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      </div>

      <div v-scroll-animate class="flex justify-center sm:justify-start">
        <router-link
          to="/portfolio"
          class="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-[#ffb088] transition-colors"
        >
          {{ $t('home_work_cta') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import OgProductVisual from '@/components/portfolio/visuals/OgProductVisual.vue'
import BlekiCatalogVisual from '@/components/portfolio/visuals/BlekiCatalogVisual.vue'
import PaLeadVisual from '@/components/portfolio/visuals/PaLeadVisual.vue'

const { tm } = useI18n()

const ogCaps = computed(() => {
  const list = tm('home_work_og_caps')
  return Array.isArray(list) ? list : []
})

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
.work-grid-bg {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.22) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 75% 55% at 70% 15%, black 15%, transparent 72%);
  opacity: 0.45;
}

.work-og-shot {
  transition: transform 0.45s ease;
}
.group:hover .work-og-shot {
  transform: scale(1.015);
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
  .work-og-shot,
  .group:hover .work-og-shot {
    transition: none;
    transform: none;
  }
}
</style>
