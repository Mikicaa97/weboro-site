<template>
  <div class="bg-black text-white font-sans">
    <header-weboro />
    <hero-line />

    <HomeCoreAreas />

    <HomeFeaturedWork />

    <HomeApproachTrust />

    <!-- Final CTA -->
    <section
      id="kontakt"
      v-scroll-animate
      class="relative py-14 sm:py-20 lg:py-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden"
    >
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_40%,rgba(255,138,61,0.07),transparent_65%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <div class="rounded-2xl border border-zinc-700/70 bg-zinc-950/80 px-6 py-10 sm:px-10 sm:py-12 text-center shadow-[0_0_60px_-28px_rgba(255,138,61,0.2)]">
          <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-bold mb-4 max-w-2xl mx-auto leading-snug tracking-tight">
            {{ $t('contact_title') }}
          </h2>
          <p class="mb-8 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {{ $t('contact_desc') }}
          </p>
          <router-link
            to="/kontakt"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-6px_rgba(255,138,61,0.4)] transition-all"
          >
            {{ $t('contact_cta') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import HeroLine from '@/components/HeroLine.vue'
import HomeCoreAreas from '@/components/HomeCoreAreas.vue'
import HomeFeaturedWork from '@/components/HomeFeaturedWork.vue'
import HomeApproachTrust from '@/components/HomeApproachTrust.vue'
import Footer from '@/components/Footer.vue'

/**
 * Scroll reveal — kept from previous homepage for continuity.
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
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
  },
}
</script>

<style>
.before-reveal {
  opacity: 0;
  transform: translateY(40px);
}
.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .before-reveal {
    opacity: 1;
    transform: none;
  }
  .reveal {
    transition: none;
  }
}
</style>
