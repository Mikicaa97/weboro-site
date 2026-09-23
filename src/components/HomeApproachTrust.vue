<template>
  <section
    id="pristup"
    class="relative py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-t border-zinc-800/40 overflow-hidden approach-section"
  >
    <!-- Soft fade into Final CTA — no grid/glow (effect budget: minimal) -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 mb-10 lg:mb-12">
        <div v-scroll-animate class="lg:col-span-5">
          <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('home_approach_eyebrow') }}</p>
          <h2 class="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold tracking-tight leading-[1.15] mb-4">
            {{ $t('home_approach_title') }}
          </h2>
          <p class="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
            {{ $t('home_approach_lead') }}
          </p>
        </div>

        <div v-scroll-animate class="lg:col-span-7">
          <ol class="relative approach-process" :aria-label="$t('home_approach_process_aria')">
            <div class="hidden sm:block absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-[#ff8a3d]/40 via-zinc-700 to-zinc-800" aria-hidden="true"></div>
            <div class="hidden sm:block absolute left-[13px] top-3 w-1.5 h-1.5 rounded-full bg-[#ff8a3d] approach-flow-dot" aria-hidden="true"></div>

            <li
              v-for="(step, i) in steps"
              :key="i"
              class="relative flex gap-4 sm:gap-5 pb-5 last:pb-0 group/step"
            >
              <div class="relative z-10 shrink-0 w-8 h-8 rounded-full border border-zinc-700 bg-black flex items-center justify-center text-[11px] font-bold text-[#ffb088] group-hover/step:border-[#ff8a3d]/50 transition-colors">
                {{ step.num }}
              </div>
              <div
                class="pt-0.5 min-w-0 flex-1"
                :class="i < steps.length - 1 ? 'border-b border-zinc-800/60 pb-5' : ''"
              >
                <h3 class="text-base font-semibold text-white mb-1 tracking-tight">
                  {{ step.title }}
                </h3>
                <p class="text-sm text-zinc-400 leading-relaxed max-w-md">
                  {{ step.desc }}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <aside
        v-scroll-animate
        class="mb-10 lg:mb-12 rounded-xl border border-zinc-800/90 bg-zinc-950/60 px-5 py-5 sm:px-7 sm:py-6"
      >
        <p class="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-2">{{ $t('home_rebuild_eyebrow') }}</p>
        <p class="text-base sm:text-lg font-semibold text-white leading-snug max-w-3xl">
          {{ $t('home_rebuild_statement') }}
        </p>
        <p class="text-sm text-zinc-500 leading-relaxed max-w-2xl mt-2">
          {{ $t('home_rebuild_support') }}
        </p>
      </aside>

      <div v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4">{{ $t('home_trust_eyebrow') }}</p>
        <ul class="border-t border-zinc-800/80" :aria-label="$t('home_trust_aria')">
          <li
            v-for="(point, i) in proofPoints"
            :key="i"
            class="group grid sm:grid-cols-12 gap-1 sm:gap-6 py-4 border-b border-zinc-800/80"
          >
            <div class="sm:col-span-4 flex items-baseline gap-3">
              <span class="text-[11px] font-mono text-[#ff8a3d]/60 shrink-0">{{ point.num }}</span>
              <h3 class="text-sm font-semibold text-white">{{ point.title }}</h3>
            </div>
            <div class="sm:col-span-8 pl-7 sm:pl-0">
              <p class="text-sm text-zinc-400 leading-relaxed">{{ point.desc }}</p>
              <router-link
                v-if="point.link"
                :to="point.link.to"
                class="inline-flex items-center gap-1.5 mt-1.5 text-sm text-[#ffb088]/90 hover:text-[#ff8a3d] transition-colors"
              >
                {{ point.link.label }}
                <span aria-hidden="true">→</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const steps = computed(() => {
  const list = tm('home_approach_steps')
  return Array.isArray(list) ? list : []
})

const proofPoints = computed(() => {
  const list = tm('home_trust_points')
  if (!Array.isArray(list)) return []
  return list.map((item) => {
    if (!item || typeof item !== 'object') return item
    if (item.linkKey) {
      return {
        ...item,
        link: {
          to: item.linkTo || '/portfolio/outreachgenie',
          label: t(item.linkKey),
        },
      }
    }
    return item
  })
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
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
  },
}
</script>

<style scoped>
.approach-section {
  background: #000000;
}

.approach-flow-dot {
  animation: approach-flow 7s ease-in-out infinite;
}

@keyframes approach-flow {
  0% { top: 0.75rem; opacity: 0.35; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { top: calc(100% - 1.5rem); opacity: 0.2; }
}

.before-reveal {
  opacity: 0;
  transform: translateY(20px);
}
.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .before-reveal {
    opacity: 1;
    transform: none;
  }
  .reveal {
    transition: none;
  }
  .approach-flow-dot {
    animation: none;
    display: none;
  }
}
</style>
