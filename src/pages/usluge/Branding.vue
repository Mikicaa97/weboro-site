<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <!-- Hero -->
    <section class="relative h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('service_branding_title')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('service_branding_subtitle')}}
      </p>
    </section>

    <!-- Opis -->
    <section class="py-20 px-6 md:px-20">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-300 text-lg leading-relaxed">
          {{$t('service_branding_intro')}}
        </p>
      </div>
      <div class="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div class="bg-zinc-900 p-6 rounded-xl">
          <h3 class="text-yellow-400 font-semibold text-xl mb-2">{{$t('service_branding_benefit1_title')}}</h3>
          <p class="text-gray-400 text-sm">{{$t('service_branding_benefit1_desc')}}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl">
          <h3 class="text-yellow-400 font-semibold text-xl mb-2">{{$t('service_branding_benefit2_title')}}</h3>
          <p class="text-gray-400 text-sm">{{$t('service_branding_benefit2_desc')}}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl">
          <h3 class="text-yellow-400 font-semibold text-xl mb-2">{{$t('service_branding_benefit3_title')}}</h3>
          <p class="text-gray-400 text-sm">{{$t('service_branding_benefit3_desc')}}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center px-6 md:px-20 bg-zinc-950">
      <h2 class="text-3xl font-bold mb-4">{{$t('service_branding_cta_title')}}</h2>
      <p class="text-gray-300 mb-8">{{$t('service_branding_cta_subtitle')}}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{$t('service_branding_cta_button')}}
      </router-link>
    </section>

    <Footer/>
  </div>
</template>

<script setup>
import HeaderWeboro from "@/components/HeaderWeboro.vue";
import Footer from "@/components/Footer.vue";
</script>
