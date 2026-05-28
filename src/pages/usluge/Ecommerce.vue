<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(255,138,61,0.10),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4">{{ $t('service_web_hub_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
        {{ $t('service_web_hub_subtitle') }}
        </p>
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mt-6">
          {{ $t('service_web_hub_intro') }}
        </p>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white">{{ $t('service_web_hub_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('service_web_hub_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          to="/usluge/magento"
          class="group bg-zinc-900/80 p-7 rounded-2xl border border-zinc-800 hover:border-[#ff8a3d]/40 hover:bg-zinc-900 transition text-left block"
        >
          <h3 class="text-xl font-bold text-[#ffb088] mb-2">{{ $t('service_magento_title') }}</h3>
          <p class="text-sm text-zinc-400">{{ $t('service_magento_desc') }}</p>
          <p class="text-xs uppercase tracking-[0.14em] text-zinc-500 mt-4">Enterprise eCommerce</p>
          <span class="inline-flex mt-5 text-sm text-[#ff8a3d] font-medium">{{ $t('learn_more') }} →</span>
        </router-link>
        <router-link
          to="/usluge/wordpress"
          class="group bg-zinc-900/80 p-7 rounded-2xl border border-zinc-800 hover:border-[#ff8a3d]/40 hover:bg-zinc-900 transition text-left block"
        >
          <h3 class="text-xl font-bold text-[#ffb088] mb-2">{{ $t('service_wordpress_title') }}</h3>
          <p class="text-sm text-zinc-400">{{ $t('service_wordpress_desc') }}</p>
          <p class="text-xs uppercase tracking-[0.14em] text-zinc-500 mt-4">Marketing sites</p>
          <span class="inline-flex mt-5 text-sm text-[#ff8a3d] font-medium">{{ $t('learn_more') }} →</span>
        </router-link>
        <router-link
          to="/usluge/custom-web"
          class="group bg-zinc-900/80 p-7 rounded-2xl border border-zinc-800 hover:border-[#ff8a3d]/40 hover:bg-zinc-900 transition text-left block"
        >
          <h3 class="text-xl font-bold text-[#ffb088] mb-2">{{ $t('service_custom_web_title') }}</h3>
          <p class="text-sm text-zinc-400">{{ $t('service_custom_web_desc') }}</p>
          <p class="text-xs uppercase tracking-[0.14em] text-zinc-500 mt-4">Product engineering</p>
          <span class="inline-flex mt-5 text-sm text-[#ff8a3d] font-medium">{{ $t('learn_more') }} →</span>
        </router-link>
        </div>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ $t('service_web_hub_cta_title') }}</h2>
      <p class="text-zinc-300 mb-8 max-w-xl mx-auto">{{ $t('service_web_hub_cta_subtitle') }}</p>
      <router-link
        to="/kontakt"
        class="inline-block px-8 py-4 bg-[#ff8a3d] text-zinc-950 rounded-full font-semibold hover:bg-[#ff9d5c] transition"
      >
        {{ $t('service_web_hub_cta_button') }}
      </router-link>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
</script>
