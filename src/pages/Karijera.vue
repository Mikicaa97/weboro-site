<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <!-- Hero -->
    <section class="relative h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('career_title')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('career_subtitle')}}
      </p>
    </section>

    <!-- Zašto Weboro -->
    <section class="py-20 px-6 md:px-20 bg-zinc-950">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">{{$t('career_why_title')}}</h2>
        <p class="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          {{$t('career_why_desc')}}
        </p>
      </div>
      <div class="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div class="bg-zinc-900 p-6 rounded-xl">
          <h3 class="text-yellow-400 font-semibold text-xl mb-2">🌍 {{$t('career_why_remote_title')}}</h3>
          <p class="text-gray-400 text-sm">{{$t('career_why_remote_desc')}}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl">
          <h3 class="text-yellow-400 font-semibold text-xl mb-2">🚀 {{$t('career_why_growth_title')}}</h3>
          <p class="text-gray-400 text-sm">{{$t('career_why_growth_desc')}}</p>
        </div>
        <div class="bg-zinc-900 p-6 rounded-xl">
          <h3 class="text-yellow-400 font-semibold text-xl mb-2">📚 {{$t('career_why_learning_title')}}</h3>
          <p class="text-gray-400 text-sm">{{$t('career_why_learning_desc')}}</p>
        </div>
      </div>
    </section>

    <!-- Otvorene pozicije -->
    <section class="py-24 px-6 md:px-20">
      <h2 class="text-4xl font-bold text-center mb-12">{{$t('career_open_title')}}</h2>

      <div class="max-w-4xl mx-auto space-y-8">
        <div v-for="(job,i) in jobs" :key="i"
             class="bg-zinc-900 p-8 rounded-xl hover:scale-[1.02] transition">
          <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
            <h3 class="text-2xl font-semibold text-yellow-400">{{ job.title }}</h3>
            <span class="text-gray-400 text-sm mt-2 sm:mt-0">{{ job.type }}</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-4">{{ job.desc }}</p>
          <button class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            {{$t('career_apply_button')}}
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950">
      <h2 class="text-3xl font-bold mb-4">{{$t('career_no_exp_title')}}</h2>
      <p class="text-gray-300 mb-8">{{$t('career_no_exp_desc')}}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{$t('career_no_exp_button')}}
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

const jobs = computed(() => [
  {
    title: t('career_frontend_title'),
    type: t('career_frontend_type'),
    desc: t('career_frontend_desc')
  },
  {
    title: t('career_marketing_title'),
    type: t('career_marketing_type'),
    desc: t('career_marketing_desc')
  },
  {
    title: t('career_video_title'),
    type: t('career_video_type'),
    desc: t('career_video_desc')
  }
]);
</script>
