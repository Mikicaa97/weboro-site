<template>
  <section class="py-12 lg:py-16">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
        {{ title }}
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <article
            v-for="(item, i) in items"
            :key="i"
            class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-zinc-900 transition-all"
        >
          <div class="text-2xl mb-3">{{ item.icon }}</div>
          <h3 class="text-base font-bold text-white mb-2">{{ item.title }}</h3>
          <p class="text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>
