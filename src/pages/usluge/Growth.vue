<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section class="relative min-h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20 pt-24">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">{{ $t('service_growth_page_title') }}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{ $t('service_growth_page_subtitle') }}
      </p>
    </section>

    <section class="py-16 px-6 md:px-20 max-w-4xl mx-auto text-center">
      <p class="text-gray-300 text-lg leading-relaxed">
        {{ $t('service_growth_page_intro') }}
      </p>
    </section>

    <section class="py-16 px-6 md:px-20 bg-zinc-950">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('service_growth_page_benefits_title') }}</h2>
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p class="text-yellow-400 font-semibold text-lg mb-2">{{ $t('service_growth_page_b1_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_growth_page_b1_desc') }}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p class="text-yellow-400 font-semibold text-lg mb-2">{{ $t('service_growth_page_b2_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_growth_page_b2_desc') }}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 sm:col-span-2 md:col-span-1">
          <p class="text-yellow-400 font-semibold text-lg mb-2">{{ $t('service_growth_page_b3_title') }}</p>
          <p class="text-gray-400 text-sm">{{ $t('service_growth_page_b3_desc') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20">
      <p class="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">{{ $t('service_growth_page_note') }}</p>
      <router-link
          to="/kontakt"
          class="inline-block px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('service_growth_page_cta') }}
      </router-link>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
</script>
