<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-12 lg:pb-14 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 contact-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_72%_12%,rgba(255,138,61,0.07),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('footer_contact') }}</span>
        </nav>

        <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-4">{{ $t('contact_v2_eyebrow') }}</p>
        <h1 class="text-[2rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.08] mb-5 max-w-4xl">
          {{ $t('contact_v2_title') }}
        </h1>
        <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {{ $t('contact_v2_lead') }}
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="py-12 lg:py-16 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14">
        <!-- LEFT -->
        <aside class="lg:col-span-4 space-y-8 order-2 lg:order-1">
          <div>
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('contact_full_email_label') }}</p>
            <a
              href="mailto:kontakt@weboro.io"
              class="text-zinc-200 hover:text-[#ffb088] transition-colors break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8a3d]"
            >
              kontakt@weboro.io
            </a>
          </div>

          <div>
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('contact_full_phone_label') }}</p>
            <a
              href="tel:+381655822552"
              class="text-zinc-200 hover:text-[#ffb088] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8a3d]"
            >
              +381 65 582 2552
            </a>
          </div>

          <div>
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('contact_full_hours_label') }}</p>
            <p class="text-sm text-zinc-400">{{ $t('contact_full_hours_value') }}</p>
          </div>

          <div class="border-t border-zinc-800/80 pt-6">
            <h2 class="text-base font-semibold text-white mb-4">{{ $t('contact_v2_next_title') }}</h2>
            <ol class="space-y-4">
              <li v-for="(step, i) in nextSteps" :key="i" class="grid grid-cols-[auto_1fr] gap-3">
                <span class="text-[11px] tabular-nums text-[#ffb088]/70 pt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
                <div>
                  <p class="text-sm font-medium text-zinc-200 mb-0.5">{{ step.title }}</p>
                  <p class="text-sm text-zinc-500 leading-relaxed">{{ step.desc }}</p>
                </div>
              </li>
            </ol>
          </div>
        </aside>

        <!-- RIGHT: FORM -->
        <div class="lg:col-span-8 order-1 lg:order-2">
          <div class="rounded-2xl border border-zinc-800/90 bg-zinc-950/80 p-5 sm:p-8">
            <div v-if="!success">
              <h2 class="text-xl sm:text-2xl font-bold tracking-tight mb-1">{{ $t('contact_form_heading') }}</h2>
              <p class="text-sm text-zinc-500 mb-6">{{ $t('contact_form_hint') }}</p>

              <form @submit.prevent="onSubmit" class="space-y-5 relative" novalidate :aria-busy="pending">
                <!-- Honeypot -->
                <div class="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label for="website">Website</label>
                  <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm text-zinc-300 mb-1.5" for="fullName">{{ $t('contact_form_full_name') }}</label>
                    <input
                      id="fullName"
                      v-model="form.fullName"
                      type="text"
                      name="name"
                      autocomplete="name"
                      maxlength="120"
                      :disabled="pending"
                      :aria-invalid="!!errors.fullName"
                      :aria-describedby="errors.fullName ? 'err-fullName' : undefined"
                      :class="inputClass(!!errors.fullName)"
                    />
                    <p v-if="errors.fullName" id="err-fullName" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.fullName }}</p>
                  </div>
                  <div>
                    <label class="block text-sm text-zinc-300 mb-1.5" for="company">{{ $t('contact_form_company') }}</label>
                    <input
                      id="company"
                      v-model="form.company"
                      type="text"
                      name="organization"
                      autocomplete="organization"
                      maxlength="160"
                      :disabled="pending"
                      :aria-invalid="!!errors.company"
                      :aria-describedby="errors.company ? 'err-company' : undefined"
                      :class="inputClass(!!errors.company)"
                    />
                    <p v-if="errors.company" id="err-company" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.company }}</p>
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm text-zinc-300 mb-1.5" for="email">{{ $t('contact_form_email_address') }}</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      name="email"
                      autocomplete="email"
                      maxlength="200"
                      :disabled="pending"
                      :aria-invalid="!!errors.email"
                      :aria-describedby="errors.email ? 'err-email' : undefined"
                      :class="inputClass(!!errors.email)"
                    />
                    <p v-if="errors.email" id="err-email" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label class="block text-sm text-zinc-300 mb-1.5" for="phone">
                      {{ $t('contact_form_phone') }}
                      <span class="text-zinc-600">({{ $t('contact_optional') }})</span>
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      name="tel"
                      autocomplete="tel"
                      maxlength="40"
                      :disabled="pending"
                      :aria-invalid="!!errors.phone"
                      :aria-describedby="errors.phone ? 'err-phone' : undefined"
                      :class="inputClass(!!errors.phone)"
                    />
                    <p v-if="errors.phone" id="err-phone" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.phone }}</p>
                  </div>
                </div>

                <div>
                  <label class="block text-sm text-zinc-300 mb-1.5" for="projectType">{{ $t('contact_form_interest') }}</label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    name="projectType"
                    :disabled="pending"
                    :aria-invalid="!!errors.projectType"
                    :aria-describedby="errors.projectType ? 'err-projectType' : undefined"
                    :class="inputClass(!!errors.projectType)"
                  >
                    <option disabled value="">{{ $t('contact_form_interest_placeholder') }}</option>
                    <option v-for="(option, i) in interestOptions" :key="i" :value="option">{{ option }}</option>
                  </select>
                  <p v-if="errors.projectType" id="err-projectType" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.projectType }}</p>
                </div>

                <div>
                  <label class="block text-sm text-zinc-300 mb-1.5" for="message">{{ $t('contact_form_message_label') }}</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    name="message"
                    rows="5"
                    maxlength="5000"
                    :disabled="pending"
                    :aria-invalid="!!errors.message"
                    :aria-describedby="errors.message ? 'err-message' : undefined"
                    :class="inputClass(!!errors.message)"
                    :placeholder="$t('contact_form_message_placeholder')"
                  />
                  <p v-if="errors.message" id="err-message" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.message }}</p>
                </div>

                <div>
                  <label class="flex items-start gap-3 text-sm text-zinc-300 cursor-pointer">
                    <input
                      id="consent"
                      v-model="form.consent"
                      type="checkbox"
                      :disabled="pending"
                      :aria-invalid="!!errors.consent"
                      :aria-describedby="errors.consent ? 'err-consent' : undefined"
                      class="mt-1 h-4 w-4 accent-[#ff8a3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8a3d]"
                    />
                    <span>
                      {{ $t('contact_form_consent') }}
                      <router-link to="/privacy" class="text-[#ffb088] hover:underline">{{ $t('nav_privacy') }}</router-link>.
                    </span>
                  </label>
                  <p v-if="errors.consent" id="err-consent" class="mt-1.5 text-xs text-red-400" role="alert">{{ errors.consent }}</p>
                </div>

                <div
                  v-if="serverError"
                  class="text-sm text-red-300 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3 space-y-2"
                  role="alert"
                >
                  <p>{{ serverError }}</p>
                  <p class="text-zinc-400">
                    {{ $t('contact_err_fallback_prefix') }}
                    <a href="mailto:kontakt@weboro.io" class="text-[#ffb088] hover:underline">kontakt@weboro.io</a>
                  </p>
                </div>

                <button
                  type="submit"
                  :disabled="pending"
                  class="w-full sm:w-auto px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8a3d]"
                >
                  {{ pending ? $t('contact_form_sending') : $t('contact_form_send') }}
                </button>
              </form>
            </div>

            <div v-else class="py-6 sm:py-8" role="status" aria-live="polite">
              <p class="text-xl sm:text-2xl font-semibold text-[#ffb088] mb-3">{{ $t('contact_form_success_title') }}</p>
              <p class="text-zinc-300 leading-relaxed mb-8 max-w-xl">{{ $t('contact_form_success_full') }}</p>
              <div class="flex flex-col sm:flex-row gap-3">
                <router-link
                  to="/"
                  class="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
                >
                  {{ $t('nav_home') }}
                </router-link>
                <router-link
                  to="/portfolio"
                  class="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 bg-zinc-900/40 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
                >
                  {{ $t('web_cta_work') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { ContactApiError, submitContactForm, validateContactForm } from '@/lib/contactApi.js'

const { t, tm } = useI18n()

const interestOptions = computed(() => tm('contact_form_interest_options') || [])
const nextSteps = computed(() => tm('contact_v2_next_steps') || [])

const emptyForm = () => ({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
  consent: false,
  website: '',
})

const form = reactive(emptyForm())
const errors = reactive({})
const pending = ref(false)
const success = ref(false)
const serverError = ref('')

function inputClass(hasError) {
  return [
    'w-full px-4 py-3 bg-zinc-900/80 border rounded-xl text-zinc-100 placeholder:text-zinc-600',
    'focus:outline-none focus:ring-2 focus:ring-[#ff8a3d]/55 focus-visible:ring-2 focus-visible:ring-[#ff8a3d]',
    'disabled:opacity-60 transition-colors',
    hasError ? 'border-red-500/60' : 'border-zinc-700/90 hover:border-zinc-600',
  ]
}

function clearErrors() {
  Object.keys(errors).forEach((k) => delete errors[k])
  serverError.value = ''
}

async function onSubmit() {
  if (pending.value) return
  clearErrors()

  const { valid, errors: next } = validateContactForm(form, t)
  Object.assign(errors, next)
  if (!valid) return

  pending.value = true
  try {
    await submitContactForm({
      fullName: form.fullName.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      projectType: form.projectType,
      message: form.message.trim(),
      consent: form.consent,
      website: form.website,
    })
    success.value = true
    Object.assign(form, emptyForm())
  } catch (err) {
    const code = err instanceof ContactApiError ? err.code : 'server_error'
    const map = {
      network: 'contact_err_network',
      not_configured: 'contact_err_not_configured',
      delivery_failed: 'contact_err_unavailable',
      server_error: 'contact_err_unavailable',
      invalid_email: 'contact_err_email',
      invalid_company: 'contact_err_company',
      invalid_message: 'contact_err_message',
      consent_required: 'contact_err_consent',
    }
    serverError.value = t(map[code] || 'contact_err_unavailable')
  } finally {
    pending.value = false
  }
}
</script>

<style scoped>
.contact-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.14) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 55% 45% at 70% 10%, black 10%, transparent 70%);
  opacity: 0.3;
}
</style>
