<template>
  <section class="py-12 lg:py-16 bg-zinc-950/60">
    <div class="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div class="lg:col-span-5">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5">
          {{ title }}
        </h2>
        <p class="text-zinc-300 text-base sm:text-lg leading-relaxed">
          {{ text }}
        </p>
      </div>

      <div class="lg:col-span-7" v-if="tech && tech.length">
        <p class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">{{ techLabel }}</p>
        <div class="flex flex-wrap gap-2">
          <span
              v-for="(t, i) in tech"
              :key="i"
              class="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm hover:border-yellow-400/30 hover:text-yellow-400 transition-colors"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  tech: { type: Array, default: () => [] },
  techLabel: { type: String, default: 'Tech & implementacija' },
})
</script>
