<template>
  <svg class="w-full h-full" viewBox="0 0 480 260" preserveAspectRatio="xMidYMid slice" role="img" :aria-label="ariaLabel">
    <rect width="480" height="260" fill="#0c0c0e"/>
    <text x="240" y="20" text-anchor="middle" fill="#52525b" font-size="8" letter-spacing="1.1" font-family="ui-sans-serif, system-ui, sans-serif">LANDING → CONTACT → LEAD</text>

    <!-- Landing -->
    <rect x="18" y="36" width="196" height="184" rx="10" fill="#141416" stroke="rgba(63,63,70,0.9)"/>
    <rect x="34" y="52" width="96" height="7" rx="2" fill="#3f3f46"/>
    <rect x="34" y="70" width="164" height="70" rx="6" fill="#101012" stroke="rgba(63,63,70,0.75)"/>
    <rect x="58" y="96" width="116" height="26" rx="7" fill="#18181b" stroke="rgba(113,113,122,0.45)"/>
    <circle cx="76" cy="128" r="7" fill="#121214" stroke="rgba(82,82,91,0.9)"/>
    <circle cx="156" cy="128" r="7" fill="#121214" stroke="rgba(82,82,91,0.9)"/>
    <rect x="34" y="154" width="76" height="5" rx="2" fill="#27272a"/>
    <rect x="34" y="168" width="118" height="5" rx="2" fill="#27272a"/>
    <rect x="34" y="186" width="60" height="16" rx="5" fill="#1a1a1d" stroke="rgba(113,113,122,0.5)"/>
    <text x="116" y="236" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Landing</text>

    <path d="M 214 128 L 240 128" stroke="rgba(161,161,170,0.45)" stroke-width="1.4"/>
    <polygon points="240,128 233,124 233,132" fill="#a1a1aa" opacity="0.7"/>

    <!-- Contact -->
    <rect x="244" y="44" width="96" height="168" rx="12" fill="#161618" stroke="rgba(82,82,91,0.7)" class="pf-pulse"/>
    <rect x="270" y="54" width="44" height="4" rx="2" fill="#3f3f46"/>
    <text x="292" y="82" text-anchor="middle" fill="#a1a1aa" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Contact</text>
    <rect x="258" y="96" width="68" height="20" rx="5" fill="#121214" stroke="rgba(63,63,70,0.9)"/>
    <text x="292" y="110" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Phone</text>
    <rect x="258" y="124" width="68" height="20" rx="5" fill="#121214" stroke="rgba(63,63,70,0.9)"/>
    <text x="292" y="138" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">WhatsApp</text>
    <rect x="258" y="152" width="68" height="20" rx="5" fill="#121214" stroke="rgba(63,63,70,0.9)"/>
    <text x="292" y="166" text-anchor="middle" fill="#71717a" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Viber</text>
    <rect x="258" y="180" width="68" height="14" rx="4" fill="#1a1a1d" stroke="rgba(82,82,91,0.6)"/>

    <path d="M 340 128 L 366 128" stroke="rgba(161,161,170,0.45)" stroke-width="1.4"/>
    <polygon points="366,128 359,124 359,132" fill="#a1a1aa" opacity="0.7"/>

    <!-- Lead -->
    <rect x="370" y="66" width="90" height="124" rx="10" fill="#18181b" stroke="rgba(82,82,91,0.75)"/>
    <text x="415" y="98" text-anchor="middle" fill="#d4d4d8" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">Lead</text>
    <rect x="386" y="114" width="58" height="6" rx="2" fill="#3f3f46"/>
    <rect x="386" y="128" width="42" height="5" rx="2" fill="#27272a"/>
    <rect x="386" y="148" width="58" height="20" rx="5" fill="#121214" stroke="rgba(63,63,70,0.85)"/>
    <text x="415" y="161" text-anchor="middle" fill="#71717a" font-size="7" font-family="ui-sans-serif, system-ui, sans-serif">Track</text>
  </svg>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Lead generation visual' },
})
</script>
