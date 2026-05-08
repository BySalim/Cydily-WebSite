import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { FAQ, faqItems } from "@/components/FAQ";
import heroImg from "@/assets/hero-portrait.jpg";
import iconLogo from "@/assets/cydily-icon.png";
import iconLogoGold from "@/assets/cydily-icon-gold.png";
import founderImg from "@/assets/founder.jpg";
import fHouse from "@/assets/formation-housekeeping.jpg";
import fCuisine from "@/assets/formation-cuisine.jpg";
import fSurface from "@/assets/formation-surface.jpg";
import fComp from "@/assets/formation-comportement.jpg";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Sparkles,
  Shield,
  Award,
  Languages,
  HandHeart,
  Briefcase,
  Star,
} from "lucide-react";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const homeCoursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Course",
      position: 1,
      name: "Formation Housekeeping",
      description:
        "Formation aux métiers de l'hôtellerie : femmes et hommes de chambre, entretien, gestion du linge, standards d'accueil.",
      provider: {
        "@type": "EducationalOrganization",
        name: "CYDILY CBC",
        sameAs: "https://cydily-cbc.salimouedz.workers.dev",
      },
      offers: { "@type": "Offer", price: "0", priceCurrency: "XOF", category: "Free" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
        },
      },
    },
    {
      "@type": "Course",
      position: 2,
      name: "Formation Intendance de cuisine",
      description: "Hygiène HACCP, organisation, techniques culinaires, gestion des stocks.",
      provider: {
        "@type": "EducationalOrganization",
        name: "CYDILY CBC",
        sameAs: "https://cydily-cbc.salimouedz.workers.dev",
      },
      offers: { "@type": "Offer", price: "0", priceCurrency: "XOF", category: "Free" },
    },
    {
      "@type": "Course",
      position: 3,
      name: "Formation Technicien de surface",
      description:
        "Méthodologie, produits, dosage, biosécurité hospitalière, industrielle et résidentielle.",
      provider: {
        "@type": "EducationalOrganization",
        name: "CYDILY CBC",
        sameAs: "https://cydily-cbc.salimouedz.workers.dev",
      },
      offers: { "@type": "Offer", price: "0", priceCurrency: "XOF", category: "Free" },
    },
    {
      "@type": "Course",
      position: 4,
      name: "Formation Excellence comportementale",
      description: "Posture professionnelle, communication, ponctualité, écoute, gestion du stress.",
      provider: {
        "@type": "EducationalOrganization",
        name: "CYDILY CBC",
        sameAs: "https://cydily-cbc.salimouedz.workers.dev",
      },
      offers: { "@type": "Offer", price: "0", priceCurrency: "XOF", category: "Free" },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "CYDILY CBC · Formation ménage & métiers de service · Dakar · 100% gratuit 3FPT",
      },
      {
        name: "description",
        content:
          "CYDILY CBC, cabinet de formation aux métiers de service à Dakar. Formation ménage, housekeeping, cuisine, technicien de surface : 100% gratuit, pris en charge par le 3FPT. Inscription accompagnée.",
      },
      {
        name: "keywords",
        content:
          "cydily, cydily cbc, formation ménage, formation aux métiers de service, formation housekeeping, formation 3FPT Dakar, formation gratuite Sénégal, technicien de surface, intendance de cuisine, formation femme de chambre",
      },
      {
        property: "og:title",
        content: "CYDILY CBC · Formation ménage & métiers de service · Dakar",
      },
      {
        property: "og:description",
        content:
          "Formations gratuites aux métiers de service à Dakar. Housekeeping, ménage, cuisine, comportement. 100% prises en charge par le 3FPT.",
      },
      { property: "og:url", content: "https://cydily-cbc.salimouedz.workers.dev/" },
    ],
    links: [{ rel: "canonical", href: "https://cydily-cbc.salimouedz.workers.dev/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeCoursesJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: HomePage,
});

const formations = [
  {
    slug: "housekeeping",
    title: "Housekeeping",
    desc: "Pour les femmes et hommes de chambre. L'hôtellerie qui prend soin de chaque détail.",
    img: fHouse,
    quote: "« Aujourd'hui je connais mon métier. Je suis fière. »",
    featured: true,
  },
  {
    slug: "intendance-cuisine",
    title: "Intendance de cuisine",
    desc: "Hygiène alimentaire, organisation, technique. Des cuisines qui tiennent debout.",
    img: fCuisine,
    quote: "« HACCP, mise en place, propreté. Tout ça, c'est devenu naturel. »",
  },
  {
    slug: "technicien-surface",
    title: "Technicien de surface",
    desc: "Méthodologie, produits, normes. Le nettoyage devient un savoir-faire.",
    img: fSurface,
    quote: "« Je nettoie maintenant avec la tête, plus juste avec les bras. »",
  },
  {
    slug: "excellence-comportementale",
    title: "Excellence comportementale",
    desc: "Savoir-être, posture, communication. Le socle qui fait la différence.",
    img: fComp,
    quote: "« On m'a appris à me tenir, à parler, à écouter. Ça m'a changé. »",
  },
];

const piliers = [
  {
    icon: Heart,
    title: "Humanité & bienveillance",
    text:
      "Chaque apprenant arrive avec son histoire, ses forces, ses doutes. Nous adaptons le rythme et les supports pour que personne ne reste sur le bord du chemin.",
    accent: true,
  },
  {
    icon: Shield,
    title: "Hygiène & rigueur",
    text: "Protocoles QHSE et normes HACCP appliqués avec exigence, dans chaque atelier, dans chaque geste.",
  },
  {
    icon: Sparkles,
    title: "Responsabilité & engagement",
    text: "Un impact durable sur les vies, sur les métiers, sur la société sénégalaise.",
  },
  {
    icon: Award,
    title: "Excellence & intégrité",
    text: "Des standards élevés pour faire de chaque sortie de formation une vraie promesse tenue.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO · DIPTYQUE AVANT / APRÈS */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55%] h-full bg-[var(--primary-mist)]/60 -skew-x-6 origin-top-right hidden lg:block" />
        </div>
        <div className="container-cydily relative grid lg:grid-cols-12 gap-10 items-center pt-4 pb-16 lg:pt-8 lg:pb-24">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 mb-6 animate-fade-up">
              <Star size={14} className="text-[var(--accent-deep)] fill-[var(--accent-deep)]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--primary-deep)]">
                Accrédité 3FPT · Décembre 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] text-[var(--primary-deep)] animate-fade-up">
              Et si votre métier devenait{" "}
              <span className="relative inline-block">
                <span className="relative z-10">votre fierté</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-[var(--accent)]/55 -z-0" />
              </span>{" "}?
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl animate-fade-up-delay-1">
              CYDILY CBC forme à Dakar les femmes et les hommes des métiers de service.{" "}
              <strong className="text-[var(--primary-deep)]">
                Formation prise en charge à 100% par le 3FPT*
              </strong>
              , en français et en wolof, avec un accompagnement jusqu'à l'emploi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
              <Link to="/formations" className="btn-accent">
                Découvrir les formations <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                M'inscrire maintenant
              </Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-2 text-sm text-foreground/70 animate-fade-up-delay-3">
              {[
                "Inscription accompagnée par CYDILY",
                "Formation en français et en wolof",
                "Attestation reconnue 3FPT",
                "Suivi sur le terrain après la formation",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              *Sous conditions : dossier complet et places disponibles.
            </p>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up-delay-1">
            <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-floating)] aspect-[4/5]">
              <img
                src={heroImg}
                alt="Apprenante CYDILY en uniforme professionnel"
                width={1280}
                height={1600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-deep)]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[var(--shadow-lifted)] p-5 max-w-[260px] hidden md:block">
              <p className="text-3xl font-bold text-[var(--primary)]">
                100<span className="text-[var(--accent)]">%</span>
              </p>
              <p className="text-sm text-foreground/70 mt-1">
                de la formation prise en charge par le 3FPT
              </p>
            </div>
            <img
              src={iconLogo}
              alt=""
              aria-hidden
              className="absolute -top-8 -right-6 w-24 h-24 opacity-90 animate-float hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* BANDEAU DE RÉASSURANCE */}
      <section className="border-y border-[var(--primary)]/10 bg-white">
        <div className="container-cydily py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { big: "100%", small: "pris en charge par le 3FPT", compact: false },
            { big: "4", small: "formations certifiantes", compact: false },
            { big: "Français / Wolof", small: "formation bilingue, formateurs wolophones", compact: true },
            { big: "+ 20", small: "ans d'expérience humaine", compact: false },
          ].map((s, i) => (
            <Reveal key={s.small} delay={i * 80} className="text-center md:text-left">
              <p
                className={`font-bold text-[var(--primary)] leading-tight ${
                  s.compact ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
                }`}
              >
                {s.big}
              </p>
              <p className="text-xs md:text-sm text-foreground/70 mt-1 leading-snug">{s.small}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SLOGAN BAND */}
      <section className="bg-[var(--primary-deep)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <img
            src={iconLogoGold}
            alt=""
            aria-hidden
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px]"
          />
        </div>
        <div className="container-cydily relative">
          <p className="eyebrow text-[var(--accent)]">★ Notre raison d'être</p>
          <h2 className="display text-3xl md:text-5xl lg:text-6xl mt-4 max-w-4xl text-white">
            Faire de l'invisible <span className="text-[var(--accent)]">une force visible.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            CYDILY ne vend pas des formations. Nous rendons visibles des gens qu'on ignore, et nous
            valorisons des métiers qu'on méprise. Chaque apprenant repart avec une compétence
            reconnue, et la conscience de sa propre valeur.
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
            <Link
              to="/formations"
              className="text-sm font-semibold text-[var(--primary)] inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Voir toutes les formations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formations.map((f, i) => (
              <Reveal
                key={f.slug}
                delay={i * 100}
                as="article"
                className={`card-cydily p-0 overflow-hidden ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-deep)]">
                    ★ Gratuit · 3FPT
                  </span>
                  <h3 className="text-lg font-semibold mt-2 text-[var(--primary-deep)]">{f.title}</h3>
                  <p className="text-sm text-foreground/70 mt-2">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <Testimonials />

      {/* MINI-RÉCIT FONDATRICE */}
      <section className="py-20 md:py-28 bg-[var(--primary-mist)]/40">
        <div className="container-cydily grid md:grid-cols-12 gap-10 items-center">
          <Reveal direction="left" className="md:col-span-5 relative">
            <div className="rounded-[28px] overflow-hidden shadow-[var(--shadow-lifted)] aspect-[4/5]">
              <img
                src={founderImg}
                alt="Mme Yatera CISSE, fondatrice de CYDILY CBC"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src={iconLogo}
              alt=""
              aria-hidden
              className="absolute -top-8 -right-6 w-24 h-24 opacity-90 animate-float hidden md:block"
            />
            <div className="absolute -bottom-5 -right-5 bg-[var(--accent)] text-[var(--primary-deep)] rounded-2xl px-5 py-3 shadow-[var(--shadow-lifted)] hidden md:block">
              <p className="text-xs font-bold tracking-widest uppercase">Fondatrice</p>
              <p className="font-semibold">Mme Yatera CISSE</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120} className="md:col-span-7">
            <p className="eyebrow">Notre histoire</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] leading-tight">
              CYDILY, un nom qui dit{" "}
              <span className="display text-[var(--primary)]">d'où ça vient.</span>
            </h2>
            <p className="mt-5 text-foreground/75 text-lg leading-relaxed">
              «&nbsp;Didi&nbsp;» fait référence à mes deux parents. CYDILY est une marque profondément
              personnelle, qui porte l'idée de transmission. Plus de vingt ans à servir l'humain :
              du travail social auprès de l'enfance maltraitée aux ressources humaines comme DRH,
              cheffe de projet, formatrice et auditrice qualité.
            </p>
            <blockquote className="mt-6 pl-5 border-l-4 border-[var(--accent)]">
              <p className="display text-xl md:text-2xl text-[var(--primary-deep)] leading-snug">
                « La vraie transformation commence par la conscience de sa propre valeur. »
              </p>
            </blockquote>
            <Link to="/a-propos" className="btn-ghost mt-8">
              Découvrir notre histoire <ArrowRight size={16} />
            </Link>
          </Reveal>
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
            {piliers.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100} className="card-cydily">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-6 hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-[var(--primary-deep)]">{title}</h3>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES D'INSERTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-cydily">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <p className="eyebrow">Garantie d'insertion</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[var(--primary-deep)] leading-tight">
                On vous forme. <span className="display">Et après, on vous place.</span>
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                CYDILY travaille main dans la main avec des entreprises spécialisées en insertion
                professionnelle. Eux montent les dossiers, déposent au 3FPT, nous formons. Et eux
                placent. Vous n'êtes jamais seul à la sortie.
              </p>
              <Link to="/entreprises" className="btn-ghost mt-8">
                Devenir partenaire <ArrowRight size={16} />
              </Link>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              <Reveal delay={80}>
                <PartnerCard
                  name="Judea Universe"
                  role="Insertion professionnelle"
                  desc="Constitution des dossiers 3FPT, placement des apprenants, suivi terrain."
                  Icon={HandHeart}
                />
              </Reveal>
              <Reveal delay={160}>
                <PartnerCard
                  name="Top de GRH"
                  role="Cabinet RH partenaire"
                  desc="Insertion entreprise, audit qualité post-formation, conseil RH."
                  Icon={Briefcase}
                />
              </Reveal>
              <Reveal delay={240} className="sm:col-span-2 rounded-[20px] bg-gradient-to-br from-[var(--primary-mist)] to-white border border-[var(--primary)]/10 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] text-[var(--primary-deep)] flex items-center justify-center shrink-0">
                  <Languages size={22} />
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  <strong className="text-[var(--primary-deep)]">Formation en wolof</strong>{" "}
                  disponible avec formateurs wolophones, supports visuels, et alphabétisation
                  fonctionnelle intégrée.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* B2C VS B2B */}
      <section className="py-20 md:py-28">
        <div className="container-cydily grid md:grid-cols-2 gap-6">
          <Reveal direction="left" className="card-cydily relative overflow-hidden p-8 md:p-10 bg-gradient-to-br from-[var(--accent-soft)]/40 to-white border-[var(--accent)]/30">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-deep)] inline-flex items-center gap-1">
              <Star size={11} className="fill-[var(--accent)] text-[var(--accent)]" /> Particulier
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 text-[var(--primary-deep)]">
              100% gratuit pour vous.
            </h3>
            <p className="mt-3 text-foreground/75">
              Le 3FPT prend en charge la totalité de votre formation. CYDILY vous accompagne pour
              monter votre dossier, qui est quasi systématiquement accepté.
            </p>
            <Link to="/contact" className="btn-accent mt-6">
              Je m'inscris <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={120} className="card-cydily relative overflow-hidden p-8 md:p-10 bg-gradient-to-br from-[var(--primary-mist)] to-white">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] inline-flex items-center gap-1">
              <Star size={11} className="fill-[var(--primary)] text-[var(--primary)]" /> Entreprise
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 text-[var(--primary-deep)]">
              90% pris en charge.
            </h3>
            <p className="mt-3 text-foreground/75">
              Convention 3FPT × CYDILY × votre entreprise. Vous ne payez que 10%, et bénéficiez de
              notre garantie d'insertion via nos partenaires.
            </p>
            <Link to="/entreprises" className="btn-primary mt-6">
              Solutions B2B <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA FINAL */}
      <section className="py-20 md:py-28">
        <div className="container-cydily">
          <div className="rounded-[32px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-deep)] text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-32 -bottom-32 w-[400px] h-[400px] bg-[var(--accent)]/15 rounded-full blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="eyebrow text-[var(--accent)]">Prochaine session</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Et si votre métier devenait{" "}
                <span className="text-[var(--accent)]">votre fierté ?</span>
              </h2>
              <p className="mt-5 text-white/85 text-lg">
                Inscrivez-vous gratuitement. Nous vous accompagnons à chaque étape.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-accent">
                  M'inscrire, c'est gratuit
                </Link>
                <a href="tel:+221782908479" className="btn-on-dark">
                  Appeler le +221 78 290 84 79
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PartnerCard({
  name,
  role,
  desc,
  Icon,
}: {
  name: string;
  role: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="rounded-[20px] bg-white border border-[var(--primary)]/10 p-6 hover:shadow-[var(--shadow-lifted)] transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>
      <p className="text-xs font-bold tracking-widest uppercase text-foreground/55">{role}</p>
      <h3 className="font-semibold text-[var(--primary-deep)] text-lg mt-1">{name}</h3>
      <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
