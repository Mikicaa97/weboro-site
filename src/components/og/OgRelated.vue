<template>
  <section class="border-t border-zinc-800/80 pt-16 lg:pt-20 mt-16 lg:mt-20">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('og_section_related') }}</h2>
      <p class="text-zinc-500 text-sm mb-10">Povezani moduli koji se nadovezuju na ono što si upravo pročitao.</p>

      <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
        <router-link
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            class="group bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/40 rounded-2xl p-6 transition-all hover:bg-zinc-900 hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.3)] block"
        >
          <div class="text-2xl mb-3">{{ item.icon }}</div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{{ item.title }}</h3>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ item.desc }}</p>
          <div class="flex items-center gap-2 text-sm font-medium text-yellow-400/80 group-hover:text-yellow-400">
            <span>Otvori</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </router-link>
      </div>

      <div class="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-zinc-800/60">
        <router-link to="/outreachgenie" class="text-sm text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          {{ $t('og_back_to_hub') }}
        </router-link>
        <a
            href="https://outreachgenie.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-all"
        >
          {{ $t('og_cta_open_app') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>
