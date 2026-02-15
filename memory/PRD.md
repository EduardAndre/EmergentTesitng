# PRD - Catalog Săpunuri Artizanale

## Problem Statement
Catalog web pentru vânzare săpunuri artizanale cu:
- Prima pagină cu toate modelele disponibile
- Selecție cantitate pentru fiecare model
- Pagină de personalizare (culori și parfumuri)
- Trimitere comandă pe WhatsApp

## User Personas
- **Cumpărători români** care caută săpunuri handmade/artizanale
- **Cadouri** - persoane care cumpără pentru altcineva

## Core Requirements
1. ✅ Afișare 15 modele de săpunuri cu imagini, nume și preț
2. ✅ Selecție cantitate (+/-)
3. ✅ 5 culori disponibile: Roz, Portocaliu, Albastru, Alb, Mov
4. ✅ 3 parfumuri: Portocale, Orhidee, Vanilie
5. ✅ Toggle light/dark theme (stânga sus)
6. ✅ Trimitere comandă pe WhatsApp
7. ✅ Footer cu social media (Instagram, TikTok, email, telefon)

## What's Been Implemented (Jan 2026)
- [x] Catalog cu 15 modele de săpunuri
- [x] Sistem de coș cu cantități
- [x] Flow în 3 pași: Catalog → Personalizare → Comandă
- [x] Selecție culori vizuală (swatches colorate)
- [x] Selecție parfumuri (butoane)
- [x] Sumar comandă cu detalii
- [x] Buton WhatsApp cu mesaj pre-completat
- [x] Toggle light/dark theme
- [x] Footer cu contact și social media
- [x] Animații smooth cu framer-motion
- [x] Toast notifications (sonner)
- [x] Design responsive (mobile + desktop)
- [x] Fonturi: Playfair Display (headings) + Manrope (body)

## Technical Stack
- Frontend: React 19 + Tailwind CSS + Shadcn/UI
- Animations: Framer Motion
- Icons: Lucide React
- State: React useState (no external state management needed)

## Editable Configuration in Code (/app/frontend/src/App.js)
- `SOAP_MODELS` - Array cu modele, prețuri, imagini
- `COLORS` - Culori disponibile
- `FRAGRANCES` - Parfumuri disponibile
- `WHATSAPP_NUMBER` - Numărul de WhatsApp (linia 55)
- `SOCIAL_LINKS` - Link-uri social media (linia 58-63)

## Prioritized Backlog

### P0 - Completed ✅
- Catalog produse
- Personalizare culori/parfumuri
- WhatsApp integration
- Theme toggle

### P1 - Future Enhancements
- Imagini proprii pentru produse
- Filtrare/căutare produse
- Persistență coș în localStorage

### P2 - Nice to Have
- Sistem de review-uri
- Galerie foto
- FAQ section
- Blog cu rețete/sfaturi

## Next Tasks
1. Înlocuire imagini placeholder cu fotografii reale ale săpunurilor
2. Actualizare număr WhatsApp real
3. Actualizare link-uri social media reale
4. Adăugare/modificare prețuri finale
