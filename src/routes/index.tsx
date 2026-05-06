import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-portrait.jpg";
import iconLogo from "@/assets/cydily-icon.png";
import fHouse from "@/assets/formation-housekeeping.jpg";
import fCuisine from "@/assets/formation-cuisine.jpg";
import fSurface from "@/assets/formation-surface.jpg";
import fComp from "@/assets/formation-comportement.jpg";
import { ArrowRight, CheckCircle2, Heart, Sparkles, Shield, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CYDILY CBC — Formations gratuites en métiers de service · 3FPT" },
      { name: "description", content: "Formations 100% prises en charge par le 3FPT : housekeeping, intendance de cuisine, technicien de surface, excellence comportementale. À Dakar." },
      { property: "og:title", content: "CYDILY CBC — Faire de l'invisible une force visible" },
      { property: "og:description", content: "Cabinet d'audit, conseil et formation accrédité 3FPT à Dakar." },
    ],
  }),
  component: HomePage,
});

const formations = [
  { slug: "housekeeping", title: "Housekeeping", desc: "Femmes & hommes de chambre — hôtellerie professionnelle.", img: fHouse },
  { slug: "intendance-cuisine", title: "Intendance de cuisine", desc: "Hygiène alimentaire, organisation, technique en cuisine.", img: fCuisine },
  { slug: "technicien-surface", title: "Technicien de surface", desc: "Méthodologie, produits, normes professionnelles.", img: fSurface },
  { slug: "excellence-comportementale", title: "Excellence comportementale", desc: "Savoir-être et posture pour tous les métiers de service.", img: fComp },
];

const piliers = [
  { icon: Heart, title: "Humanité & bienveillance", text: "Un accompagnement adapté, respectueux, à hauteur d'homme." },
  { icon: Shield, title: "Hygiène & rigueur", text: "Des protocoles professionnels stricts, conformes aux normes QHSE & HACCP." },
  { icon: Sparkles, title: "Responsabilité & engagement", text: "Un impact durable sur la société et sur la dignité du travail." },
  { icon: Award, title: "Excellence & intégrité", text: "Des standards élevés à chaque session, à chaque geste." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[var(--primary-mist)]/60 -skew-x-6 origin-top-right hidden lg:block" />
        <div className="container-cydily relative grid lg:grid-cols-2 gap-12 items-center pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 mb-6 animate-fade-up">
              <span className="text-[var(--accent-deep)]">★</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--primary-deep)]">
                Accrédité 3FPT — Décembre 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[var(--primary-deep)] animate-fade-up">
              Une formation <span className="relative inline-block">
                <span className="relative z-10">100% gratuite</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-[var(--accent)]/50 -z-0" />
              </span>{" "}
              pour faire de votre métier votre fierté.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl animate-fade-up-delay-1">
              CYDILY CBC forme à Dakar les femmes et les hommes des métiers de service —
              housekeeping, cuisine, hygiène, savoir-être. <strong className="text-[var(--primary-deep)]">Prise en charge à 100% par le 3FPT*</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
              <Link to="/formations" className="btn-accent">
                Découvrir les formations <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-ghost">M'inscrire maintenant</Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-2 text-sm text-foreground/70 animate-fade-up-delay-3">
              {["Inscription accompagnée par CYDILY", "Formation en français & en wolof", "Attestation reconnue 3FPT", "Suivi après formation"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              *Sous conditions : dossier complet et places disponibles.
            </p>
          </div>
          <div className="relative animate-fade-up-delay-1">
            <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-floating)] aspect-[4/5]">
              <img src={heroImg} alt="Apprenante CYDILY en uniforme professionnel" width={1280} height={1600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-deep)]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[var(--shadow-lifted)] p-5 max-w-[260px] hidden md:block">
              <p className="text-3xl font-bold text-[var(--primary)]">100<span className="text-[var(--accent)]">%</span></p>
              <p className="text-sm text-foreground/70 mt-1">de la formation prise en charge par le 3FPT</p>
            </div>
            <img src={iconLogo} alt="" aria-hidden className="absolute -top-8 -right-6 w-24 h-24 opacity-90 animate-float hidden md:block" />
          </div>
        </div>
      </section>

      {/* SLOGAN BAND */}
      <section className="bg-[var(--primary-deep)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <img src={iconLogo} alt="" className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px]" />
        </div>
        <div className="container-cydily relative">
          <p className="eyebrow text-[var(--accent)]">★ Notre raison d'être</p>
          <h2 className="display text-3xl md:text-5xl lg:text-6xl mt-4 max-w-4xl text-white">
            Faire de l'invisible <span className="text-[var(--accent)]">une force visible.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            CYDILY ne vend pas des formations. Nous rendons visibles des gens qu'on ignore et nous valorisons des métiers qu'on méprise.
            Chaque apprenant repart avec une compétence reconnue — et la conscience de sa propre valeur.
          </p>
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="py-20 md:py-28">
        <div className="container-cydily">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">★ Nos 4 formations principales</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] max-w-2xl">
                Quatre métiers, une seule exigence : <span className="display">l'excellence.</span>
              </h2>
            </div>
            <Link to="/formations" className="text-sm font-semibold text-[var(--primary)] inline-flex items-center gap-1 hover:gap-2 transition-all">
              Voir toutes les formations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formations.map((f, i) => (
              <article key={f.slug} className={`card-cydily p-0 overflow-hidden ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-deep)]">★ Gratuit · 3FPT</span>
                  <h3 className="text-lg font-semibold mt-2 text-[var(--primary-deep)]">{f.title}</h3>
                  <p className="text-sm text-foreground/70 mt-2">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="py-20 md:py-28 bg-[var(--primary-mist)]/40">
        <div className="container-cydily">
          <p className="eyebrow">★ Notre raison d'être</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] max-w-3xl">
            Quatre piliers qui guident chacune de nos décisions.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {piliers.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-cydily">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-[var(--primary-deep)]">{title}</h3>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2C VS B2B */}
      <section className="py-20 md:py-28">
        <div className="container-cydily grid md:grid-cols-2 gap-6">
          <div className="card-cydily relative overflow-hidden p-8 md:p-10 bg-gradient-to-br from-[var(--accent-soft)]/40 to-white border-[var(--accent)]/30">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-deep)]">★ Particulier</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 text-[var(--primary-deep)]">100% gratuit pour vous.</h3>
            <p className="mt-3 text-foreground/75">
              Le 3FPT prend en charge la totalité de votre formation. CYDILY vous accompagne pour monter votre dossier — quasi systématiquement accepté.
            </p>
            <Link to="/contact" className="btn-accent mt-6">Je m'inscris <ArrowRight size={16} /></Link>
          </div>
          <div className="card-cydily relative overflow-hidden p-8 md:p-10 bg-gradient-to-br from-[var(--primary-mist)] to-white">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--primary)]">★ Entreprise</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 text-[var(--primary-deep)]">90% pris en charge.</h3>
            <p className="mt-3 text-foreground/75">
              Convention 3FPT × CYDILY × votre entreprise. Vous ne payez que 10%, et bénéficiez de notre garantie d'insertion via nos partenaires.
            </p>
            <Link to="/entreprises" className="btn-primary mt-6">Solutions B2B <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 md:py-28 bg-[var(--primary-deep)] text-white">
        <div className="container-cydily max-w-4xl">
          <p className="eyebrow text-[var(--accent)]">★ Mme Yatera CISSE — Fondatrice</p>
          <blockquote className="display text-2xl md:text-4xl mt-6 leading-snug text-white">
            « La vraie transformation commence par la conscience de sa propre valeur. »
          </blockquote>
          <p className="mt-6 text-white/70">
            Plus de 20 ans à servir l'humain — du travail social aux ressources humaines.
          </p>
          <Link to="/a-propos" className="btn-on-dark mt-8">Découvrir notre histoire <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28">
        <div className="container-cydily">
          <div className="rounded-[32px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-deep)] text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-32 -bottom-32 w-[400px] h-[400px] bg-[var(--accent)]/15 rounded-full blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="eyebrow text-[var(--accent)]">★ Prochaine session</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Et si votre métier devenait <span className="text-[var(--accent)]">votre fierté ?</span>
              </h2>
              <p className="mt-5 text-white/85 text-lg">
                Inscrivez-vous gratuitement. Nous vous accompagnons à chaque étape.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-accent">M'inscrire — c'est gratuit</Link>
                <a href="tel:+221782908479" className="btn-on-dark">Appeler le +221 78 290 84 79</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
