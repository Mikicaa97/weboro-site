<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <!-- Hero -->
    <section class="relative h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('service_ecommerce_title')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('service_ecommerce_subtitle')}}
      </p>
    </section>

    <!-- Intro -->
    <section class="py-20 px-6 md:px-20 max-w-4xl mx-auto text-center">
      <p class="text-gray-300 text-lg leading-relaxed">
        {{$t('service_ecommerce_intro')}}
      </p>
    </section>

    <!-- Benefiti -->
    <section class="py-20 px-6 md:px-20 bg-zinc-950">
      <h2 class="text-4xl font-bold text-center mb-12">{{$t('service_ecommerce_benefits_title')}}</h2>
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div class="bg-zinc-900 p-6 rounded-xl">
          <p class="text-yellow-400 font-semibold text-lg mb-2">⚡ {{$t('service_ecommerce_benefit1')}}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl">
          <p class="text-yellow-400 font-semibold text-lg mb-2">🛡️ {{$t('service_ecommerce_benefit2')}}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl">
          <p class="text-yellow-400 font-semibold text-lg mb-2">🤖 {{$t('service_ecommerce_benefit3')}}</p>
        </div>
      </div>
    </section>

    <!-- Proces rada -->
    <section class="py-24 px-6 md:px-20">
      <h2 class="text-4xl font-bold text-center mb-12">{{$t('service_ecommerce_process_title')}}</h2>
      <div class="max-w-4xl mx-auto space-y-6">
        <div
            class="bg-zinc-900 p-6 rounded-xl text-center"
            v-for="(step, i) in steps"
            :key="i"
        >
          <p class="text-gray-300 text-lg">{{ step }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center px-6 md:px-20 bg-zinc-950">
      <h2 class="text-3xl font-bold mb-4">{{ $t('service_ecommerce_cta_title') }}</h2>
      <p class="text-gray-300 mb-8">{{ $t('service_ecommerce_cta_subtitle') }}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('service_ecommerce_cta_button') }}
      </router-link>
    </section>


  </div>
  <Footer/>
</template>

<script setup>
import HeaderWeboro from "@/components/HeaderWeboro.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const steps = computed(() => [
  t('service_ecommerce_step1'),
  t('service_ecommerce_step2'),
  t('service_ecommerce_step3'),
  t('service_ecommerce_step4')
]);
</script>
