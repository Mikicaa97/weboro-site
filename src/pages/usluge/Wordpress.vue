<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section class="relative min-h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20 pt-24">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">{{ $t('service_wordpress_title') }}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{ $t('service_wordpress_subtitle') }}
      </p>
    </section>

    <section class="py-16 px-6 md:px-20 max-w-4xl mx-auto text-center">
      <p class="text-gray-300 text-lg leading-relaxed">
        {{ $t('service_wordpress_intro') }}
      </p>
    </section>

    <section class="py-16 px-6 md:px-20 bg-zinc-950">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('service_wordpress_benefits_title') }}</h2>
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p class="text-yellow-400 font-semibold text-lg mb-2">{{ $t('service_wordpress_benefit1_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_wordpress_benefit1_desc') }}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p class="text-yellow-400 font-semibold text-lg mb-2">{{ $t('service_wordpress_benefit2_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_wordpress_benefit2_desc') }}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 sm:col-span-2 md:col-span-1">
          <p class="text-yellow-400 font-semibold text-lg mb-2">{{ $t('service_wordpress_benefit3_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_wordpress_benefit3_desc') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('service_wordpress_process_title') }}</h2>
      <div class="max-w-4xl mx-auto space-y-4">
        <div
            v-for="(step, i) in steps"
            :key="i"
            class="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800"
        >
          <p class="text-gray-300 text-lg">{{ step }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ $t('service_wordpress_cta_title') }}</h2>
      <p class="text-gray-300 mb-8 max-w-xl mx-auto">{{ $t('service_wordpress_cta_subtitle') }}</p>
      <router-link
          to="/kontakt"
          class="inline-block px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('service_wordpress_cta_button') }}
      </router-link>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const steps = computed(() => [
  t('service_wordpress_step1'),
  t('service_wordpress_step2'),
  t('service_wordpress_step3'),
  t('service_wordpress_step4'),
])
</script>
