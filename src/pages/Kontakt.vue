<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(250,204,21,0.08),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('footer_contact') }}</span>
        </nav>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-5">{{ $t('contact_full_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl">{{ $t('contact_full_lead') }}</p>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
        <aside class="lg:col-span-2 space-y-5">
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('contact_full_email_label') }}</p>
            <p class="text-zinc-200">kontakt@weboro.agency</p>
          </div>
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('contact_full_phone_label') }}</p>
            <p class="text-zinc-200">+381 65 582 2552</p>
          </div>
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('contact_full_hours_label') }}</p>
            <p class="text-zinc-300 text-sm">{{ $t('contact_full_hours_value') }}</p>
          </div>
        </aside>

        <div class="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6">{{ $t('contact_form_heading') }}</h2>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-zinc-300 mb-1.5">{{ $t('contact_form_full_name') }}</label>
                <input v-model="form.fullName" type="text" required class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/70" />
              </div>
              <div>
                <label class="block text-sm text-zinc-300 mb-1.5">{{ $t('contact_form_company') }}</label>
                <input v-model="form.company" type="text" class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/70" />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-zinc-300 mb-1.5">{{ $t('contact_form_email_address') }}</label>
                <input v-model="form.email" type="email" required class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/70" />
              </div>
              <div>
                <label class="block text-sm text-zinc-300 mb-1.5">{{ $t('contact_form_phone') }}</label>
                <input v-model="form.phone" type="text" class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/70" />
              </div>
            </div>

            <div>
              <label class="block text-sm text-zinc-300 mb-1.5">{{ $t('contact_form_interest') }}</label>
              <select v-model="form.interest" required class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/70">
                <option disabled value="">{{ $t('contact_form_interest_placeholder') }}</option>
                <option v-for="(option, i) in interestOptions" :key="i" :value="option">{{ option }}</option>
              </select>
            </div>

            <div>
              <label class="block text-sm text-zinc-300 mb-1.5">{{ $t('contact_form_subject') }}</label>
              <input v-model="form.subject" type="text" required class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/70" />
            </div>

            <label class="flex items-start gap-3 text-sm text-zinc-300">
              <input v-model="form.consent" type="checkbox" required class="mt-1 accent-yellow-400" />
              <span>{{ $t('contact_form_consent') }}</span>
            </label>

            <button type="submit" class="w-full sm:w-auto px-8 py-3.5 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
              {{ $t('contact_form_send') }}
            </button>
          </form>

          <p v-if="success" class="text-green-400 mt-5">{{ $t('contact_form_success_full') }}</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>


<script setup>
import { computed, ref } from 'vue'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const interestOptions = computed(() => tm('contact_form_interest_options'))

const form = ref({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  subject: '',
  consent: false,
})
const success = ref(false)

const submitForm = () => {
  console.log('Kontakt forma:', form.value)
  success.value = true

  form.value = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    subject: '',
    consent: false,
  }
  setTimeout(() => (success.value = false), 4000)
}
</script>
