<template>
  <HeaderWeboro/>
  <div class="bg-black text-white font-sans">

    <!-- Hero -->
    <section class="relative h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('portfolio_title')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('portfolio_subtitle')}}
      </p>
    </section>

    <!-- Kategorije -->
    <section class="py-16 px-6 md:px-20">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        <button
            v-for="(cat,i) in categories"
            :key="i"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2 rounded-full text-sm font-medium border transition',
              activeCategory === cat ? 'bg-yellow-400 text-black border-yellow-400' : 'border-zinc-700 hover:border-yellow-400 hover:text-yellow-400'
            ]"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Projekti -->
    <section class="py-10 px-6 md:px-20">
      <div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(project,i) in filteredProjects"
            :key="i"
            class="bg-zinc-900 rounded-xl overflow-hidden hover:scale-[1.02] transition group"
        >
          <div class="h-48 bg-zinc-800 flex items-center justify-center text-gray-500 text-sm group-hover:opacity-75 transition">
            Slika / mockup
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-yellow-400 mb-2">{{ project.title }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ project.desc }}</p>
            <a :href="project.link" target="_blank" class="text-sm text-yellow-400 hover:underline">{{$t('portfolio_view_project')}}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-6 md:px-20 text-center">
      <h2 class="text-3xl font-bold mb-4">{{$t('portfolio_cta_title')}}</h2>
      <p class="text-gray-300 mb-8">{{$t('portfolio_cta_desc')}}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{$t('portfolio_cta_btn')}}
      </router-link>
    </section>

  </div>
  <Footer/>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Footer from "@/components/Footer.vue";
import HeaderWeboro from "@/components/HeaderWeboro.vue";

const { tm } = useI18n()

const categories = tm('portfolio_categories')
const activeCategory = ref(categories[0])

const projects = tm('portfolio_projects').map(p => ({
  ...p,
  link: '#'
}))

const filteredProjects = computed(() => {
  if (activeCategory.value === categories[0]) return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>
