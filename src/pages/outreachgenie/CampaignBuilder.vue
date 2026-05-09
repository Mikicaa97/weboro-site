<template>
  <OgPageLayout :current="$t('og_builder_title')">
    <OgModuleHero
        :eyebrow="$t('og_builder_eyebrow')"
        :title="$t('og_builder_title')"
        :lead="$t('og_builder_lead')"
    />
    <OgFeatureGrid
        :title="$t('og_builder_features_title')"
        :items="tm('og_builder_features')"
    />
    <OgHowItWorks
        :title="$t('og_builder_how_title')"
        :text="$t('og_builder_how_text')"
        :tech="tm('og_builder_tech')"
        :tech-label="$t('og_section_tech')"
    />
    <OgRelated :items="tm('og_builder_related')" />
  </OgPageLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import OgPageLayout from '@/components/og/OgPageLayout.vue'
import OgModuleHero from '@/components/og/OgModuleHero.vue'
import OgFeatureGrid from '@/components/og/OgFeatureGrid.vue'
import OgHowItWorks from '@/components/og/OgHowItWorks.vue'
import OgRelated from '@/components/og/OgRelated.vue'

const { tm } = useI18n()
</script>
