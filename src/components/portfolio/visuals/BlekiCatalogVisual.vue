<template>
  <svg class="w-full h-full" viewBox="0 0 520 280" preserveAspectRatio="xMidYMid slice" role="img" :aria-label="ariaLabel">
    <!-- Light product editor surface -->
    <rect width="520" height="280" fill="#f4f4f5"/>
    <rect x="0" y="0" width="520" height="28" fill="#ffffff" stroke="#e4e4e7"/>
    <circle cx="14" cy="14" r="3.5" fill="#d4d4d8"/>
    <circle cx="26" cy="14" r="3.5" fill="#d4d4d8"/>
    <circle cx="38" cy="14" r="3.5" fill="#d4d4d8"/>
    <rect x="54" y="8" width="72" height="12" rx="3" fill="#fff7ed" stroke="#fdba74"/>
    <text x="90" y="17" text-anchor="middle" fill="#ea580c" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Bleki Editor</text>
    <rect x="400" y="7" width="48" height="14" rx="4" fill="#ffffff" stroke="#e4e4e7"/>
    <rect x="454" y="7" width="52" height="14" rx="4" fill="#ff8a3d"/>

    <!-- LEFT TOOLBAR -->
    <rect x="0" y="28" width="48" height="252" fill="#ffffff" stroke="#e4e4e7"/>
    <rect x="10" y="42" width="28" height="28" rx="6" fill="#fff7ed" stroke="#fb923c" class="pf-pulse"/>
    <rect x="18" y="52" width="12" height="8" rx="1" fill="#ff8a3d" opacity="0.8"/>
    <rect x="10" y="80" width="28" height="28" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <rect x="18" y="90" width="12" height="8" rx="1" fill="#a1a1aa"/>
    <rect x="10" y="118" width="28" height="28" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <circle cx="24" cy="132" r="6" fill="none" stroke="#a1a1aa" stroke-width="1.5"/>
    <rect x="10" y="156" width="28" height="28" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <rect x="16" y="164" width="16" height="12" rx="2" fill="none" stroke="#a1a1aa" stroke-width="1.4"/>
    <rect x="10" y="194" width="28" height="28" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <path d="M16 208 L24 202 L32 208 L24 214 Z" fill="none" stroke="#a1a1aa" stroke-width="1.3"/>
    <rect x="10" y="232" width="28" height="28" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <rect x="18" y="242" width="12" height="8" rx="1" fill="#d4d4d8"/>

    <!-- CENTER CANVAS -->
    <rect x="48" y="28" width="340" height="252" fill="#ececef"/>
    <!-- artboard -->
    <rect x="88" y="48" width="260" height="200" rx="4" fill="#ffffff" stroke="#d4d4d8" stroke-width="1.2"/>
    <!-- soft shadow hint -->
    <rect x="92" y="52" width="252" height="192" rx="3" fill="none" stroke="#f4f4f5"/>

    <!-- Product placeholder on canvas -->
    <rect x="150" y="78" width="136" height="100" rx="8" fill="#fafafa" stroke="#e4e4e7"/>
    <rect x="168" y="96" width="100" height="64" rx="4" fill="#fff7ed" stroke="#fdba74"/>
    <rect x="186" y="112" width="64" height="8" rx="2" fill="#fb923c" opacity="0.55"/>
    <rect x="178" y="128" width="80" height="5" rx="1" fill="#fdba74"/>
    <rect x="190" y="140" width="56" height="5" rx="1" fill="#fed7aa"/>

    <!-- Selection handles -->
    <rect x="148" y="76" width="6" height="6" fill="#ff8a3d"/>
    <rect x="282" y="76" width="6" height="6" fill="#ff8a3d"/>
    <rect x="148" y="174" width="6" height="6" fill="#ff8a3d"/>
    <rect x="282" y="174" width="6" height="6" fill="#ff8a3d"/>
    <rect x="148" y="76" width="140" height="104" fill="none" stroke="#ff8a3d" stroke-width="1" stroke-dasharray="3 2" opacity="0.7"/>

    <!-- Bottom options strip -->
    <rect x="100" y="220" width="236" height="18" rx="4" fill="#ffffff" stroke="#e4e4e7"/>
    <rect x="110" y="225" width="40" height="8" rx="2" fill="#fff7ed" stroke="#fdba74"/>
    <rect x="158" y="225" width="40" height="8" rx="2" fill="#f4f4f5" stroke="#e4e4e7"/>
    <rect x="206" y="225" width="40" height="8" rx="2" fill="#f4f4f5" stroke="#e4e4e7"/>
    <rect x="254" y="225" width="40" height="8" rx="2" fill="#f4f4f5" stroke="#e4e4e7"/>

    <!-- RIGHT PAGES / PREVIEW RAIL -->
    <rect x="388" y="28" width="132" height="252" fill="#ffffff" stroke="#e4e4e7"/>
    <text x="400" y="48" fill="#71717a" font-size="8" letter-spacing="0.8" font-family="ui-sans-serif, system-ui, sans-serif">PAGES</text>

    <rect x="400" y="58" width="108" height="56" rx="6" fill="#fff7ed" stroke="#fb923c"/>
    <rect x="412" y="70" width="56" height="5" rx="1" fill="#fb923c" opacity="0.7"/>
    <rect x="412" y="82" width="84" height="20" rx="3" fill="#ffffff" stroke="#fdba74"/>

    <rect x="400" y="124" width="108" height="48" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <rect x="412" y="136" width="48" height="4" rx="1" fill="#d4d4d8"/>
    <rect x="412" y="146" width="72" height="14" rx="3" fill="#f4f4f5" stroke="#e4e4e7"/>

    <rect x="400" y="182" width="108" height="48" rx="6" fill="#fafafa" stroke="#e4e4e7"/>
    <rect x="412" y="194" width="40" height="4" rx="1" fill="#d4d4d8"/>
    <rect x="412" y="204" width="72" height="14" rx="3" fill="#f4f4f5" stroke="#e4e4e7"/>

    <rect x="400" y="242" width="108" height="24" rx="5" fill="#fff7ed" stroke="#fdba74"/>
    <text x="454" y="257" text-anchor="middle" fill="#ea580c" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Preview</text>
  </svg>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Bleki product editor visual' },
})
</script>
