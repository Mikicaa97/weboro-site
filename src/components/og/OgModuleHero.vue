<template>
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(250,204,21,0.08),transparent_70%)]"></div>

    <div class="relative max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <div class="max-w-3xl">
        <p class="text-xs uppercase tracking-[0.22em] text-yellow-400/80 mb-4">{{ eyebrow }}</p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight mb-5">
          {{ title }}
        </h1>
        <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed">
          {{ lead }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, required: true },
})
</script>
