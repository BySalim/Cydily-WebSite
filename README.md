# CYDILY CBC — Site Vitrine

> *« Faire de l'invisible, une force visible. »*

Site vitrine officiel de **CYDILY CBC**, cabinet d'audit, de conseil et centre de formation professionnelle spécialisé dans les métiers de service, basé à Dakar, Sénégal.

Réalisé dans le cadre des **Grands Projets 2026 — ISM × Digital Campus** par Salim-Taoufiq OUEDRAOGO.

---

## À propos de CYDILY CBC

CYDILY CBC propose des formations professionnelles certifiées, financées à 100% par le **3FPT** (Fonds de Financement de la Formation Professionnelle et Technique) pour les particuliers, et à 90% pour les entreprises.

### Formations principales
- **Technicien de surface** — Agents d'entretien professionnels
- **Intendance de cuisine** — Aide-cuisinier·ère (normes HACCP)
- **Housekeeping** — Femme/homme de chambre (hôtellerie)
- **Excellence comportementale** — Savoir-être et posture professionnelle

### Contact
- 📍 Ouest Foire, Cité Sonatel 3, Villa 27, Dakar, Sénégal
- 📞 +221 78 290 84 79
- 📧 cydily.cbc@gmail.com

### Réseaux sociaux
- [TikTok](https://www.tiktok.com/@cydily)
- [Instagram](https://www.instagram.com/cydily.cbc/)
- [Facebook](https://web.facebook.com/profile.php?id=61583957431231)

---

## Stack Technique

| Catégorie | Technologies |
|---|---|
| **Framework** | [TanStack Start](https://tanstack.com/start) (SSR) |
| **UI** | React 19, [shadcn/ui](https://ui.shadcn.com), Radix UI |
| **Style** | Tailwind CSS v4 |
| **Routing** | TanStack Router (file-based) |
| **Formulaires** | React Hook Form + Zod |
| **Build** | Vite 7, TypeScript |
| **Déploiement** | Cloudflare Workers (edge SSR) |

## Structure du projet

```
src/
├── components/
│   ├── ui/              # Composants shadcn/ui
│   ├── Reveal.tsx       # Animations au scroll
│   ├── SiteHeader.tsx   # Header scroll-aware
│   ├── SiteFooter.tsx   # Footer
│   └── SiteLayout.tsx   # Layout principal
└── routes/
    ├── index.tsx        # Page d'accueil
    ├── a-propos.tsx     # À propos & équipe
    ├── formations.tsx   # Nos formations
    ├── entreprises.tsx  # Espace entreprises (B2B)
    └── contact.tsx      # Contact
```

## Démarrage local

```bash
npm install
npm run dev
```

## Déploiement

Déploiement automatique sur **Cloudflare Workers** à chaque push sur `main`.

```bash
npm run build
npx wrangler deploy
```
