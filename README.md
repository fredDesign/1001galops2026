# 1001 Galops

Site vitrine de **1001 Galops** — balades à cheval, yoga équestre et événements nature dans le Vexin français (Drocourt, 78440), à 45 min de Paris.

**Stack** : Astro 5 · React 19 · Tailwind v4 · shadcn (radix-maia) · TypeScript

---

## Commandes

```bash
pnpm dev          # Serveur local → http://localhost:4321
pnpm build        # Build statique → dist/
pnpm preview      # Prévisualiser le build
pnpm typecheck    # astro check
pnpm lint         # eslint
```

---

## Structure

```
src/
├── layouts/
│   └── main.astro          # Layout global — SEO, schema.org JSON-LD
├── pages/
│   └── index.astro         # Assemblage des sections
├── components/
│   ├── Nav.astro            # Navigation sticky
│   ├── Hero.astro           # Hero plein écran
│   ├── Marquee.astro        # Bande défilante CSS
│   ├── Experiences.astro    # Balades — 4 cartes + carousel lieux
│   ├── Pourquoi.astro       # Événements (EVJF, mariage, sur mesure)
│   ├── Yoga.astro           # Yoga équestre
│   ├── APropos.astro        # Scheherazade Bracht
│   ├── Lieu.astro           # Carte + infos pratiques
│   ├── Galerie.astro        # Grille masonry 8 photos
│   ├── Temoignages.astro    # 9 avis — carousel Embla
│   ├── Contact.astro        # CTA + liens + dialog
│   ├── ContactDialog.tsx    # Formulaire React (client:load)
│   ├── Footer.astro
│   └── ui/                  # Composants shadcn
│       ├── button.tsx · card.tsx · badge.tsx
│       ├── dialog.tsx · input.tsx · textarea.tsx
public/
├── robots.txt
├── site.webmanifest
├── images/
│   ├── og-image.jpg         # 1200×630 — partage social
│   ├── logo.png             # 600×896
│   ├── fav/                 # Favicons toutes tailles
│   ├── gallerie/            # 8 photos galerie
│   └── lieux/               # 5 photos carousel après-balade
```

**Ordre des sections** : Hero → Marquee → Experiences → Pourquoi → Yoga → APropos → Lieu → Galerie → Temoignages → Contact

**Règle clé** : tout est statique Astro sauf `ContactDialog.tsx` (React, `client:load`).

---

## SEO

Le layout `main.astro` expose les props `title`, `description`, `image`, `imageAlt`, `type`, `noindex`.

**Schema.org JSON-LD** — `@graph` de 12 nœuds :
- `LocalBusiness + TouristAttraction + SportsActivityLocation` avec adresse, GPS, horaires, tarifs, `areaServed` (Île-de-France, Yvelines, Val-d'Oise, Paris…)
- `aggregateRating` — 4.9 / 55 avis
- `hasOfferCatalog` — 4 offres avec prix
- `Person` — Scheherazade Bracht, BPJEPS, Tourisme Équestre
- 9 × `Review` liés au business
- `WebSite` · `BreadcrumbList`

**Sitemap** : généré par `@astrojs/sitemap` à chaque build, avec les ancres de navigation (`#balades`, `#yoga`, `#evenements`, `#lieu`, `#apropos`). Nécessite `site: "https://1001galops.fr"` dans `astro.config.mjs`.

---

## Ajouter un composant shadcn

```bash
npx shadcn@latest add <composant>
```

Les fichiers sont placés dans `src/components/ui/`.

---

## Images

Toutes dans `public/images/` — servies en statique. Pour remplacer par les vraies photos, déposer les fichiers avec les mêmes noms.

| Fichier | Usage |
|---------|-------|
| `hero-cheval-foret.jpg` | Hero, Contact (bg décoratif) |
| `balade_2.jpg` · `balade_3.jpg` · `balade_4.jpg` | Cartes balades |
| `cours.jpg` | Carte cours pleine nature |
| `evjf.jpg` · `mariage_2.jpg` · `formule.jpg` | Cartes événements |
| `yoga-nature.jpg` | Section yoga |
| `scheherazade-portrait.jpg` | Section à propos |
| `drocourt.jpg` | Section lieu |
| `og-image.jpg` | OG / Twitter card (1200×630) |

---

## Déploiement

Site statique, compatible Vercel sans configuration. `pnpm build` génère `dist/`.

Prochaines étapes :
- [ ] Brancher `ContactDialog` sur un endpoint (Resend, Formspree…)
- [ ] Ajouter pages dédiées `/balades`, `/yoga-equestre`, `/evenements`
- [ ] Optimiser les images en WebP avec `<Image>` Astro
- [ ] Connecter Google Search Console
