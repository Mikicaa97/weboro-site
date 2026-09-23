<template>
  <NotFound v-if="!valid" />
  <OutreachGenieCase v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import OutreachGenieCase from '@/components/portfolio/OutreachGenieCase.vue'
import NotFound from '@/pages/NotFound.vue'
import { isCaseStudySlug } from '@/data/portfolio.js'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const valid = computed(() => isCaseStudySlug(slug.value))
</script>
