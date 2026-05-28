<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(52,211,153,0.10),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">{{ $t('service_custom_web_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
          {{ $t('service_custom_web_subtitle') }}
        </p>
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mt-6">
          {{ $t('service_custom_web_intro') }}
        </p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-20 bg-zinc-950">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('service_custom_web_benefits_title') }}</h2>
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-emerald-400/35 transition-colors">
          <p class="text-emerald-300 font-semibold text-lg mb-2">{{ $t('service_custom_web_benefit1_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_custom_web_benefit1_desc') }}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-emerald-400/35 transition-colors">
          <p class="text-emerald-300 font-semibold text-lg mb-2">{{ $t('service_custom_web_benefit2_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_custom_web_benefit2_desc') }}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 sm:col-span-2 md:col-span-1 hover:border-emerald-400/35 transition-colors">
          <p class="text-emerald-300 font-semibold text-lg mb-2">{{ $t('service_custom_web_benefit3_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_custom_web_benefit3_desc') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('service_custom_web_process_title') }}</h2>
      <div class="max-w-4xl mx-auto space-y-4">
        <div
            v-for="(step, i) in steps"
            :key="i"
            class="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800"
        >
          <p class="text-zinc-300 text-lg">{{ step }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ $t('service_custom_web_cta_title') }}</h2>
      <p class="text-zinc-300 mb-8 max-w-xl mx-auto">{{ $t('service_custom_web_cta_subtitle') }}</p>
      <router-link
        to="/kontakt"
        class="inline-block px-8 py-4 bg-[#ff8a3d] text-zinc-950 rounded-full font-semibold hover:bg-[#ff9d5c] transition"
      >
        {{ $t('service_custom_web_cta_button') }}
      </router-link>
    </section>

    <section class="py-16 px-6 md:px-20">
      <div class="max-w-5xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">Related</p>
        <div class="flex flex-wrap justify-center gap-3">
          <router-link to="/usluge/ecommerce" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-emerald-400/40 hover:text-emerald-300 transition-colors">{{ $t('service_ecommerce_title') }}</router-link>
          <router-link to="/usluge/wordpress" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-emerald-400/40 hover:text-emerald-300 transition-colors">{{ $t('service_wordpress_title') }}</router-link>
          <router-link to="/usluge/magento" class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-emerald-400/40 hover:text-emerald-300 transition-colors">{{ $t('service_magento_title') }}</router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const steps = computed(() => [
  t('service_custom_web_step1'),
  t('service_custom_web_step2'),
  t('service_custom_web_step3'),
  t('service_custom_web_step4'),
])
</script>
