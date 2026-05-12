# CYDILY CBC — Site Vitrine

Site vitrine de **CYDILY CBC**, organisme de formation professionnelle basé au Sénégal, proposant des formations en alternance et des solutions de conseil RH pour les entreprises.

## Stack Technique

| Catégorie | Technologies |
|---|---|
| **Framework** | [TanStack Start](https://tanstack.com/start) (SSR) |
| **UI** | React 19, [shadcn/ui](https://ui.shadcn.com), Radix UI |
| **Style** | Tailwind CSS v4 |
| **Routing** | TanStack Router (file-based) |
| **Data** | TanStack Query |
| **Formulaires** | React Hook Form + Zod |
| **Icônes** | Lucide React |
| **Build** | Vite 7, TypeScript |
| **Déploiement** | Cloudflare Workers (edge SSR) |

## Structure du projet

```
src/
├── components/
│   ├── ui/              # Composants shadcn/ui
│   ├── Reveal.tsx       # Animations au scroll (IntersectionObserver)
│   ├── SiteHeader.tsx   # Header scroll-aware
│   ├── SiteFooter.tsx   # Footer
│   └── SiteLayout.tsx   # Layout principal
└── routes/
    ├── index.tsx        # Page d'accueil
    ├── a-propos.tsx     # À propos
    ├── formations.tsx   # Nos formations
    ├── entreprises.tsx  # Espace entreprises
    └── contact.tsx      # Contact
```

## Démarrage local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## Déploiement

Le projet est déployé automatiquement sur **Cloudflare Workers** à chaque push sur `main`.

```bash
# Déploiement manuel
npm run build
npx wrangler deploy
```

## SEO

Les meta tags sont configurés par page via l'export `head` de TanStack Router dans chaque fichier de route.
