OutreachGenie — kompletan pregled programa
Evo detaljne analize tvog OutreachGenie SaaS proizvoda koju možeš da prebaciš u drugi chat za Weboro Digital portfolio.

1. Šta je OutreachGenie
OutreachGenie je enterprise-grade SaaS platforma za email marketing i cold outreach, sa AI-em ugrađenim u svaki korak. Konkurent je MailerLite-u, Mailchimp-u, Brevo-u i Lemlist-u — ali sa fokusom na AI-driven personalizaciju i multi-channel pristup (email + budući SMS/Viber/WhatsApp).

Tagline (iz index.html): "OutreachGenie — AI alat za pisanje cold emailova"
Domen: outreachgenie.com

Cilj proizvoda: korisnik može da uveze listu kontakata, AI mu generiše ceo email (subject, telo, sliku, CTA), zatim šalje kampanje sa pametnim raspoređivanjem po vremenskim zonama, prati otvaranje/klikove/odgovore i optimizuje sledeće slanje.

2. Ciljna grupa
B2B kompanije koje rade lead generation i cold outreach
B2C marketing timovi (newsletteri, promocije, e-commerce)
Agencije koje upravljaju kampanjama za više klijenata (multi-tenant arhitektura)
Solo osnivači i freelanceri koji žele profesionalan alat bez kompleksnosti Mailchimp-a
Tokom onboardinga korisnik bira B2B vs B2C — što menja celokupan UX i billing flow.

3. Glavni moduli (feature set)
A) Subscribers / Kontakt menadžment
Uvoz kontakata preko CSV-a sa ImportWizard-om (UPSERT logika, batch operacije, 250x brže od standardnog import-a)
Grupe, tagovi, custom fields, segmenti (statički i dinamički)
Engagement Scoring — automatsko bodovanje kontakata (hot/warm/cold) na osnovu otvaranja, klikova, odgovora
Contact Timeline — istorija svih event-a po kontaktu (sent, open, click, reply, bounce, unsubscribe)
Backend pagination — radi sa 5,000+ kontakata u <1s
Cleanup tools — uklanjanje bounced/unsubscribed kontakata
GDPR-spreman (consent tracking)
B) Campaign Builder (najjači deo platforme)
Drag-and-drop email editor baziran na GrapesJS (newsletter preset, MJML, CKEditor, Tailwind, custom code)
Vizuelni Blocks panel sa collapsible kategorijama (Hero, Content, CTA, Footer, AI blocks…)
Style panel sa profesionalnim ikonama (paint/gear/grid)
Auto Footer Signature — automatski popunjava sender info iz onboardinga
Template variables — {first_name}, {last_name}, {email}, {company}, {country} + custom fields
Template Gallery — sačuvane kampanje kao šabloni
Responsive editor optimizovan za 13–14" laptopove i ultrawide monitore
C) AI alati (srce platforme)
AI Assistant (AIPopup) — generiše tekst i slike unutar editor-a
Generate with AI — generiše ceo email iz brief-a
AI Block Generator — generiše pojedinačan blok
AI Multi Block Wizard — generiše više blokova odjednom
AI Email Repair — automatsko popravljanje email problema
Content Analyzer — analiza kvaliteta sadržaja
AI Subject Suggestions — predlozi subject linija
Campaign Diagnostics — dijagnostika problema u kampanji
AI Image Generator sa Image Gallery — DALL-E generisane slike sačuvane po korisniku
AI Credits sistem — billing po kreditima (BillingAICredits.vue, BuyAICreditsModal.vue, AILimitReachedModal.vue)
Sve preko backend proxy-a ka OpenAI-u (API ključ nikad ne ide na front).

D) Sending Engine (sopstveni)
Custom sending-engine/sendWorker.js — node.js worker za slanje
Rate limiting (30s delay između slanja)
Smart Sending — vremenska zona po kontaktu, optimal send time
Tracking sistem:
Open tracking (1x1 piksel, /track/open/:id.png)
Click tracking (/track/click/:trackingId/:encodedUrl)
Reply tracking (Gmail OAuth integracija)
Bounce i spam complaint handling
Slanje preko Gmail OAuth, AWS SES, ili Nodemailer SMTP
Test slanje pre prave kampanje (SendTestEmailModal)
List-Unsubscribe header, SPF/DKIM/DMARC podrška
E) Deliverability Test
AI analiza kampanje pre slanja: subject, content, CTA, spam triggers
Color-coded scoring (green/yellow/red) sa animated progress bar
Predlozi za poboljšanje dostavljivosti
F) Analytics & Reports
Campaign Stats — open rate, click rate, reply rate, bounce rate, conversions
Deliverability Analytics — globalni pregled
Vue Chart.js grafikoni (line, bar, donut)
Per-recipient activity view
Reports stranica sa export-om
G) A/B Testing
Različite varijante subject-a / sadržaja
Auto-winner po metrici
H) Teams & Multi-tenant
Organizacije sa workspace-ovima
Team members sa rolama (owner, admin, member)
Email invitations sa token-based accept flow-om
RLS (Row-Level Security) na svim Supabase tabelama
Workspace switcher u headeru
I) Onboarding
Multi-step wizard (4 koraka)
Step 1: B2B vs B2C
Step 2: Company name + website (+ industry, size, role)
Step 3: Billing country (+ VAT za EU B2B)
Step 4: Channel choice (Email / Viber / SMS)
Persist last_channel — sledeći put ide direktno na taj dashboard
J) Integracije
Gmail OAuth (slanje + reply tracking)
Google APIs (googleapis)
Mailchimp OAuth (import iz Mailchimpa)
Stripe (subscription billing + AI credits)
AWS SES
Supabase (auth + DB + storage)
OpenAI (GPT-4 + DALL-E)
K) Subscription & Billing
Stripe integracija za subscription planove
AI Credits kao zaseban pay-as-you-go billing
DNS Setup Wizard za prilagođene domene
Pricing stranica sa tier-ovima (PricingSection.vue)
L) Sigurnost (Enterprise-grade)
JWT auth middleware na svim /api/* rutama
Backend proxy za sve AI pozive
RLS na svim tabelama (39 policies, 9 tabela)
complete_onboarding() SECURITY DEFINER RPC
Sanitizacija HTML-a (dompurify, sanitize-html)
CORS pravila
4. Tehnološki stack
Frontend:

Vue 3 (Composition API, <script setup>)
Vue Router 4, Pinia (state), Vue I18n (lokalizacija)
Tailwind CSS 3 + custom enterprise dizajn (gradients, backdrop blur, dark theme)
GrapesJS (email editor) sa pluginovima: MJML, CKEditor, Newsletter, Tailwind, Forms, Filestack, Export
Chart.js + vue-chartjs
Vue Toastification
Vite kao build tool
Backend:

Node.js + Express (server.js — 257KB, monolith API)
worker.js + sending-engine/sendWorker.js (slanje email-ova)
JSDOM, Juice (CSS inlining za email-ove)
html2canvas, dom-to-image-more, compressorjs (image processing)
PapaParse (CSV)
Baza & infrastruktura:

Supabase (Postgres + Auth + Storage + RLS + Edge Functions)
Custom SQL migracije, RPC funkcije, materialized views (contact_engagement_scores)
Vercel za hosting (vite-plugin-vercel)
3rd party servisi:

OpenAI (4.29.2)
Stripe (12.18)
AWS SES
Google APIs (Gmail, OAuth)
Nodemailer
5. Arhitektura — ključne odlike
Multi-tenant sa organization_id na svim resursima
Monolith Express server (server.js) sa modularnim router-ima (router/ai/aiGenerate.js)
Background workers za slanje email-ova (decoupled od API-ja)
Materialized views za performance (engagement scoring)
Row-Level Security kao primarni sigurnosni sloj
Backend pagination za sve liste (range queries)
Vue lazy-loaded routes za brže učitavanje
6. Status razvoja (iz MASTER_PLAN.md)
Modul	Spremnost
Security
95%
Subscribers
98%
Onboarding
100%
Teams / Multi-tenant
95%
Campaign Design
95%
A/B Testing
90%
Tracking
85%
Analytics
73%
AI Optimization
10%
Roadmap: dodavanje Viber, SMS i WhatsApp kanala (Channel Hub), napredna AI optimizacija (engagement score, optimal send time, smart segments), GDPR compliance dokumenti, audit logs.

7. Šta čini OutreachGenie posebnim (selling points za portfolio)
AI-first pristup — 10+ različitih AI alata u editor-u, ne samo "generate copy" dugme
Sopstveni sending engine — ne oslanja se na SendGrid/Mailgun, ima sopstvene worker-e sa rate limiting-om i smart scheduling-om
Enterprise multi-tenant od početka — RLS, organizacije, team roles, workspace switcher
GrapesJS drag-and-drop editor sa custom blokovima, MJML preset-om i auto-signature funkcijom
Integrisana deliverability AI analiza pre slanja — sprečava da kampanja završi u spamu
Engagement scoring sa materialized views — radi performantno sa desetinama hiljada kontakata
Stripe subscription + AI credits dual billing
Onboarding wizard sa B2B/B2C račvanjem — dva potpuno različita UX flow-a
Modern enterprise UI — gradijenti, backdrop blur, glow efekti, dark theme, fully responsive
8. Predlog kako možeš ovo pozicionirati na Weboro sajtu
Hero sekcija (case study tile): "AI-powered email marketing platforma — od ideje do produkcije"
Tagovi: SaaS · AI · Email Marketing · Multi-tenant · Vue 3 · Supabase · Stripe · OpenAI
Metrike koje možeš isticati: "10+ AI alata u jednom editor-u", "RLS na 9 tabela / 39 policies", "Custom sending engine sa smart scheduling-om", "Performance: 5,000+ kontakata <1s"
Sekcije: Problem → Rešenje → Tech stack → Ključne funkcije → Screenshots editor-a / dashboard-a / AI alata → Rezultati
Ovo ti je sve što čini OutreachGenie — slobodno kopiraj u drugi chat i reci mi tamo šta tačno treba da uradim na Weboro sajtu.