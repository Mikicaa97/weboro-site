<template>
  <OgPageLayout :current="$t('og_sending_title')">
    <OgModuleHero
        :eyebrow="$t('og_sending_eyebrow')"
        :title="$t('og_sending_title')"
        :lead="$t('og_sending_lead')"
    />
    <OgFeatureGrid
        :title="$t('og_sending_features_title')"
        :items="tm('og_sending_features')"
    />
    <OgHowItWorks
        :title="$t('og_sending_how_title')"
        :text="$t('og_sending_how_text')"
        :tech="tm('og_sending_tech')"
        :tech-label="$t('og_section_tech')"
    />
    <OgRelated :items="tm('og_sending_related')" />
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
