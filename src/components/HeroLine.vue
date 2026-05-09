<template>
  <section class="relative min-h-screen bg-[#0a0908] overflow-hidden">
    <canvas
        ref="canvas"
        class="absolute inset-0 w-full h-full block opacity-70"
        aria-hidden="true"
    ></canvas>

    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_30%,rgba(250,204,21,0.08),transparent_70%)]"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_15%_85%,rgba(255,140,0,0.05),transparent_70%)]"></div>
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div class="lg:col-span-7 text-left">
          <div
              class="hero-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700/70 bg-zinc-900/60 backdrop-blur-sm text-[11px] sm:text-xs uppercase tracking-[0.18em] text-zinc-300 mb-6"
          >
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            {{ $t('hero_eyebrow') }}
          </div>

          <h1
              class="hero-fade-up text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white"
              v-html="$t('hero_title')"
          ></h1>

          <p class="hero-fade-up text-base sm:text-lg lg:text-xl max-w-xl text-zinc-300 mb-8 leading-relaxed">
            {{ $t('hero_desc') }}
          </p>

          <div class="hero-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <router-link
                to="/kontakt"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)] transition-all"
            >
              {{ $t('hero_cta_start') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </router-link>
            <router-link
                to="/portfolio"
                class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm text-zinc-200 rounded-xl hover:border-yellow-400/60 hover:text-yellow-400 hover:bg-zinc-900/70 transition-all"
            >
              {{ $t('hero_cta_portfolio') }}
            </router-link>
          </div>

          <dl class="hero-fade-up grid grid-cols-3 gap-4 sm:gap-8 max-w-xl border-t border-zinc-800/80 pt-6">
            <div>
              <dt class="text-2xl sm:text-3xl font-extrabold text-yellow-400 leading-none">{{ $t('hero_metric1_value') }}</dt>
              <dd class="text-[11px] sm:text-xs text-zinc-500 mt-2 leading-snug">{{ $t('hero_metric1_label') }}</dd>
            </div>
            <div>
              <dt class="text-2xl sm:text-3xl font-extrabold text-yellow-400 leading-none">{{ $t('hero_metric2_value') }}</dt>
              <dd class="text-[11px] sm:text-xs text-zinc-500 mt-2 leading-snug">{{ $t('hero_metric2_label') }}</dd>
            </div>
            <div>
              <dt class="text-2xl sm:text-3xl font-extrabold text-yellow-400 leading-none">{{ $t('hero_metric3_value') }}</dt>
              <dd class="text-[11px] sm:text-xs text-zinc-500 mt-2 leading-snug">{{ $t('hero_metric3_label') }}</dd>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-5 hero-fade-up relative">
          <div class="absolute -inset-6 bg-gradient-to-tr from-yellow-400/20 via-amber-500/10 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>

          <div class="relative rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] hero-float">
            <div class="flex items-center gap-2 px-4 py-3 bg-zinc-950/90 border-b border-zinc-800">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <div class="flex-1 mx-3 px-3 py-1 rounded bg-zinc-800/70 text-[11px] text-zinc-500 truncate flex items-center gap-1.5">
                <svg class="w-3 h-3 text-zinc-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                outreachgenie.com
              </div>
            </div>
            <img
                src="/OutreachGenieHero.png"
                alt="OutreachGenie dashboard preview"
                class="w-full h-auto object-cover block"
                loading="eager"
                fetchpriority="high"
            />
          </div>

          <div class="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-3 py-2 bg-zinc-900/95 backdrop-blur border border-zinc-700 rounded-lg shadow-xl flex items-center gap-2 text-xs text-zinc-200">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span class="font-medium">{{ $t('hero_visual_caption') }}</span>
          </div>

          <div class="hidden xl:block absolute -top-4 -right-4 px-3 py-2 bg-zinc-900/95 backdrop-blur border border-zinc-700 rounded-lg shadow-xl text-xs text-zinc-200">
            <p class="font-semibold text-yellow-400">AI-first SaaS</p>
            <p class="text-zinc-500 text-[11px]">Vue · Supabase · OpenAI</p>
          </div>
        </div>
      </div>

      <div class="hero-fade-up mt-16 lg:mt-24 pt-8 border-t border-zinc-800/70">
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-600 text-center mb-5">{{ $t('hero_clients_label') }}</p>
        <div class="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 text-sm sm:text-base text-zinc-500 font-medium">
          <span class="hover:text-zinc-200 transition-colors">OutreachGenie</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">LumaWear</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">Print Studio</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">Copla Weekend House</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">Magento klijenti</span>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-[0.25em] hero-scroll-indicator">
      <span>{{ $t('hero_scroll') }}</span>
      <span class="block w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent"></span>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let ctx, ro, animId
const lines = []
let reduceMotion = false

function spawnLine() {
  const el = canvas.value
  if (!el) return
  const w = el.clientWidth
  const h = el.clientHeight
  const side = Math.floor(Math.random() * 4)
  let x, y

  if (side === 0) { x = Math.random() * w; y = 0 }
  else if (side === 1) { x = w; y = Math.random() * h }
  else if (side === 2) { x = Math.random() * w; y = h }
  else { x = 0; y = Math.random() * h }

  const angle = Math.atan2(h / 2 - y, w / 2 - x) + (Math.random() * 0.8 - 0.4)
  const speed = 18 + Math.random() * 32
  const length = 60 + Math.random() * 110

  lines.push({ x, y, angle, speed, length, life: 1 })
}

onMounted(() => {
  const el = canvas.value
  if (!el) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ctx = el.getContext('2d', { alpha: true })

  function resize() {
    const { clientWidth: w, clientHeight: h } = el
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    el.width = w * dpr
    el.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  ro = new ResizeObserver(resize)
  ro.observe(el)
  resize()

  if (reduceMotion) {
    return
  }

  for (let i = 0; i < 12; i++) spawnLine()

  let last = performance.now()
  let spawnTimer = 0

  function draw() {
    const now = performance.now()
    const dt = (now - last) / 1000
    last = now
    spawnTimer += dt

    const w = el.clientWidth
    const h = el.clientHeight

    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = 'rgba(10,9,8,0.22)'
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter'
    ctx.lineCap = 'round'

    if (spawnTimer > 0.28) {
      spawnLine()
      spawnTimer = 0
    }

    for (let i = lines.length - 1; i >= 0; i--) {
      const l = lines[i]
      l.x += Math.cos(l.angle) * l.speed * dt
      l.y += Math.sin(l.angle) * l.speed * dt
      l.life -= dt * 0.22

      if (l.life <= 0) {
        lines.splice(i, 1)
        continue
      }

      ctx.strokeStyle = `rgba(255,215,0,${0.14 * l.life})`
      ctx.lineWidth = 1.1
      ctx.shadowColor = `rgba(255,200,80,${0.22 * l.life})`
      ctx.shadowBlur = 12

      const dx = Math.cos(l.angle) * l.length
      const dy = Math.sin(l.angle) * l.length

      ctx.beginPath()
      ctx.moveTo(l.x, l.y)
      ctx.lineTo(l.x - dx, l.y - dy)
      ctx.stroke()
    }

    ctx.shadowBlur = 0
    animId = requestAnimationFrame(draw)
  }

  animId = requestAnimationFrame(draw)
})

onBeforeUnmount(() => {
  if (ro) ro.disconnect()
  if (animId) cancelAnimationFrame(animId)
})
</script>

<style scoped>
@keyframes hero-floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.hero-float {
  animation: hero-floatY 7s ease-in-out infinite;
  will-change: transform;
}

@keyframes hero-scroll-fade {
  0%, 100% { opacity: 0.4; transform: translate(-50%, 0); }
  50% { opacity: 1; transform: translate(-50%, 4px); }
}
.hero-scroll-indicator {
  animation: hero-scroll-fade 2.4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hero-float,
  .hero-scroll-indicator {
    animation: none;
  }
}
</style>
