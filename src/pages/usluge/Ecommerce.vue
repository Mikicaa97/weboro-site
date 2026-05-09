<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section class="relative min-h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20 pt-24">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">{{ $t('service_web_hub_title') }}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{ $t('service_web_hub_subtitle') }}
      </p>
    </section>

    <section class="py-16 px-6 md:px-20 max-w-4xl mx-auto text-center">
      <p class="text-gray-300 text-lg leading-relaxed">
        {{ $t('service_web_hub_intro') }}
      </p>
    </section>

    <section class="py-12 px-6 md:px-20">
      <div class="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
        <router-link
            to="/usluge/magento"
            class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-400/40 hover:bg-zinc-800 transition text-center block"
        >
          <h2 class="text-xl font-bold text-yellow-400 mb-2">{{ $t('service_magento_title') }}</h2>
          <p class="text-sm text-zinc-400">{{ $t('service_magento_desc') }}</p>
          <span class="inline-block mt-4 text-sm text-yellow-400 font-medium">{{ $t('learn_more') }} →</span>
        </router-link>
        <router-link
            to="/usluge/wordpress"
            class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-400/40 hover:bg-zinc-800 transition text-center block"
        >
          <h2 class="text-xl font-bold text-yellow-400 mb-2">{{ $t('service_wordpress_title') }}</h2>
          <p class="text-sm text-zinc-400">{{ $t('service_wordpress_desc') }}</p>
          <span class="inline-block mt-4 text-sm text-yellow-400 font-medium">{{ $t('learn_more') }} →</span>
        </router-link>
        <router-link
            to="/usluge/custom-web"
            class="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-400/40 hover:bg-zinc-800 transition text-center block"
        >
          <h2 class="text-xl font-bold text-yellow-400 mb-2">{{ $t('service_custom_web_title') }}</h2>
          <p class="text-sm text-zinc-400">{{ $t('service_custom_web_desc') }}</p>
          <span class="inline-block mt-4 text-sm text-yellow-400 font-medium">{{ $t('learn_more') }} →</span>
        </router-link>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ $t('service_web_hub_cta_title') }}</h2>
      <p class="text-gray-300 mb-8 max-w-xl mx-auto">{{ $t('service_web_hub_cta_subtitle') }}</p>
      <router-link
          to="/kontakt"
          class="inline-block px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('service_web_hub_cta_button') }}
      </router-link>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
</script>
