<template>
  <svg class="w-full h-full" viewBox="0 0 640 320" preserveAspectRatio="xMidYMid slice" role="img" :aria-label="ariaLabel">
    <defs>
      <linearGradient id="ogGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#22c55e" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#0a0a0c" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="640" height="320" fill="#09090b"/>
    <rect width="640" height="320" fill="url(#ogGlow)"/>

    <!-- App chrome -->
    <rect x="0" y="0" width="640" height="30" fill="#121214"/>
    <circle cx="14" cy="15" r="4" fill="#3f3f46"/>
    <circle cx="28" cy="15" r="4" fill="#3f3f46"/>
    <circle cx="42" cy="15" r="4" fill="#3f3f46"/>
    <rect x="58" y="9" width="14" height="12" rx="3" fill="#22c55e" opacity="0.85"/>
    <text x="78" y="19" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">OutreachGenie</text>
    <rect x="480" y="8" width="68" height="14" rx="4" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
    <rect x="556" y="8" width="68" height="14" rx="4" fill="#14532d" stroke="rgba(34,197,94,0.45)"/>

    <!-- LEFT: Campaigns list -->
    <rect x="0" y="30" width="248" height="290" fill="#0e0e10"/>
    <text x="16" y="52" fill="#71717a" font-size="8" letter-spacing="1.1" font-family="ui-sans-serif, system-ui, sans-serif">CAMPAIGNS</text>
    <rect x="148" y="40" width="84" height="18" rx="5" fill="#14532d" stroke="rgba(34,197,94,0.5)"/>
    <text x="190" y="52" text-anchor="middle" fill="#86efac" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">New campaign</text>

    <!-- Filters -->
    <rect x="16" y="64" width="52" height="16" rx="4" fill="#18181b" stroke="rgba(34,197,94,0.35)"/>
    <rect x="74" y="64" width="48" height="16" rx="4" fill="#18181b" stroke="rgba(63,63,70,0.7)"/>
    <rect x="128" y="64" width="48" height="16" rx="4" fill="#18181b" stroke="rgba(63,63,70,0.7)"/>

    <!-- Campaign rows -->
    <rect x="12" y="92" width="224" height="52" rx="8" fill="#161618" stroke="rgba(34,197,94,0.4)" class="pf-pulse"/>
    <rect x="24" y="104" width="110" height="7" rx="2" fill="#d4d4d8"/>
    <rect x="24" y="118" width="72" height="5" rx="1" fill="#52525b"/>
    <rect x="24" y="130" width="40" height="6" rx="3" fill="#14532d"/>
    <circle cx="212" cy="118" r="4" fill="#22c55e"/>

    <rect x="12" y="152" width="224" height="48" rx="8" fill="#141416" stroke="rgba(63,63,70,0.75)"/>
    <rect x="24" y="164" width="96" height="6" rx="2" fill="#71717a"/>
    <rect x="24" y="178" width="64" height="5" rx="1" fill="#3f3f46"/>
    <rect x="24" y="188" width="36" height="6" rx="3" fill="#27272a"/>

    <rect x="12" y="208" width="224" height="48" rx="8" fill="#141416" stroke="rgba(63,63,70,0.75)"/>
    <rect x="24" y="220" width="104" height="6" rx="2" fill="#71717a"/>
    <rect x="24" y="234" width="56" height="5" rx="1" fill="#3f3f46"/>
    <rect x="24" y="244" width="36" height="6" rx="3" fill="#27272a"/>

    <rect x="12" y="264" width="224" height="40" rx="8" fill="#141416" stroke="rgba(63,63,70,0.6)"/>
    <rect x="24" y="278" width="88" height="6" rx="2" fill="#52525b"/>
    <rect x="24" y="290" width="48" height="5" rx="1" fill="#3f3f46"/>

    <!-- Divider -->
    <rect x="248" y="30" width="1" height="290" fill="#27272a"/>

    <!-- RIGHT: Email editor -->
    <rect x="249" y="30" width="391" height="290" fill="#0b0b0d"/>

    <!-- Editor top -->
    <rect x="249" y="30" width="391" height="36" fill="#121214"/>
    <rect x="264" y="40" width="140" height="8" rx="2" fill="#3f3f46"/>
    <rect x="264" y="52" width="80" height="5" rx="1" fill="#27272a"/>
    <rect x="560" y="40" width="60" height="16" rx="4" fill="#22c55e" opacity="0.9"/>

    <!-- Subject / blocks toolbar -->
    <rect x="264" y="78" width="250" height="22" rx="5" fill="#151517" stroke="rgba(63,63,70,0.8)"/>
    <rect x="272" y="85" width="36" height="8" rx="2" fill="#3f3f46"/>
    <rect x="314" y="85" width="28" height="8" rx="2" fill="#27272a"/>
    <rect x="348" y="85" width="28" height="8" rx="2" fill="#27272a"/>
    <rect x="520" y="78" width="88" height="22" rx="5" fill="#18181b" stroke="rgba(34,197,94,0.3)"/>

    <!-- Email canvas -->
    <rect x="264" y="112" width="250" height="186" rx="8" fill="#111113" stroke="rgba(63,63,70,0.85)"/>
    <rect x="280" y="128" width="120" height="8" rx="2" fill="#52525b"/>
    <rect x="280" y="146" width="218" height="54" rx="6" fill="#18181b" stroke="rgba(34,197,94,0.28)"/>
    <rect x="292" y="160" width="100" height="5" rx="1" fill="#71717a"/>
    <rect x="292" y="172" width="180" height="4" rx="1" fill="#3f3f46"/>
    <rect x="292" y="182" width="140" height="4" rx="1" fill="#27272a"/>

    <rect x="280" y="212" width="218" height="48" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.75)"/>
    <rect x="292" y="226" width="88" height="5" rx="1" fill="#52525b"/>
    <rect x="292" y="238" width="160" height="4" rx="1" fill="#3f3f46"/>
    <rect x="292" y="248" width="56" height="4" rx="1" fill="#27272a"/>

    <!-- Side inspector -->
    <rect x="528" y="112" width="92" height="186" rx="8" fill="#141416" stroke="rgba(63,63,70,0.8)"/>
    <text x="540" y="130" fill="#52525b" font-size="7" letter-spacing="0.8" font-family="ui-sans-serif, system-ui, sans-serif">BLOCKS</text>
    <rect x="540" y="140" width="68" height="28" rx="5" fill="#18181b" stroke="rgba(34,197,94,0.35)"/>
    <rect x="548" y="150" width="36" height="4" rx="1" fill="#86efac" opacity="0.7"/>
    <rect x="548" y="158" width="48" height="3" rx="1" fill="#3f3f46"/>
    <rect x="540" y="176" width="68" height="28" rx="5" fill="#18181b" stroke="rgba(63,63,70,0.7)"/>
    <rect x="548" y="186" width="40" height="4" rx="1" fill="#52525b"/>
    <rect x="540" y="212" width="68" height="28" rx="5" fill="#18181b" stroke="rgba(63,63,70,0.7)"/>
    <rect x="548" y="222" width="44" height="4" rx="1" fill="#52525b"/>
    <rect x="540" y="248" width="68" height="28" rx="5" fill="#18181b" stroke="rgba(63,63,70,0.7)"/>
    <rect x="548" y="258" width="32" height="4" rx="1" fill="#52525b"/>
  </svg>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'OutreachGenie product visual' },
})
</script>
