import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import fHouse from "@/assets/formation-housekeeping.jpg";
import fCuisine from "@/assets/formation-cuisine.jpg";
import fSurface from "@/assets/formation-surface.jpg";
import fComp from "@/assets/formation-comportement.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/formations")({
  head: () => ({
    meta: [
      { title: "Formations gratuites — CYDILY CBC · 3FPT" },
      { name: "description", content: "4 formations professionnelles 100% prises en charge par le 3FPT : housekeeping, intendance de cuisine, technicien de surface, excellence comportementale." },
      { property: "og:title", content: "Formations CYDILY CBC — 100% prises en charge 3FPT" },
      { property: "og:description", content: "Découvrez les 4 formations CYDILY accréditées 3FPT à Dakar." },
    ],
  }),
  component: FormationsPage,
});

const formations = [
  {
    slug: "housekeeping",
    title: "Housekeeping",
    eyebrow: "Hôtellerie",
    img: fHouse,
    desc: "Femmes et hommes de chambre. Méthodologie professionnelle de l'hôtellerie : entretien des chambres, gestion du linge, normes d'accueil et standards internationaux.",
    points: ["Protocoles d'hôtellerie", "Gestion du linge", "Standards d'accueil", "Hygiène de la chambre"],
  },
  {
    slug: "intendance-cuisine",
    title: "Intendance de cuisine",
    eyebrow: "Restauration",
    img: fCuisine,
    desc: "Aide-cuisinier·ère qualifié·e. Hygiène alimentaire HACCP, organisation du poste, techniques de base, gestion des stocks et des denrées.",
    points: ["Normes HACCP", "Hygiène alimentaire", "Organisation du poste", "Techniques culinaires"],
  },
  {
    slug: "technicien-surface",
    title: "Technicien de surface",
    eyebrow: "Hygiène & propreté",
    img: fSurface,
    desc: "Agents d'entretien professionnels. Méthodologie, choix des produits, dosage, protocoles biosécurité hospitaliers, industriels et résidentiels.",
    points: ["Protocoles biosécurité", "Connaissance des produits", "Méthodologie de nettoyage", "Sécurité au travail"],
  },
  {
    slug: "excellence-comportementale",
    title: "Excellence comportementale",
    eyebrow: "Savoir-être",
    img: fComp,
    desc: "Posture professionnelle transversale, applicable à tous les métiers de service. Communication, ponctualité, écoute, présentation, gestion du stress.",
    points: ["Posture & présentation", "Communication pro", "Gestion du stress", "Esprit d'équipe"],
  },
];

function FormationsPage() {
  return (
    <SiteLayout>
      {/* INTRO */}
      <section className="py-16 md:py-24 bg-[var(--primary-mist)]/40">
        <div className="container-cydily max-w-4xl">
          <p className="eyebrow">★ Nos formations</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[var(--primary-deep)] leading-tight">
            Quatre métiers. <span className="display">Une promesse.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            Toutes nos formations sont <strong className="text-[var(--primary-deep)]">prises en charge à 100% par le 3FPT</strong>.
            Vous ne payez rien. Nous vous accompagnons pour monter votre dossier d'inscription.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent">M'inscrire — c'est gratuit ★</Link>
            <a href="#formations" className="btn-ghost">Voir les 4 formations</a>
          </div>
        </div>
      </section>

      {/* FORMATIONS DETAIL */}
      <section id="formations" className="py-20 md:py-28">
        <div className="container-cydily space-y-20 md:space-y-32">
          {formations.map((f, i) => (
            <article key={f.slug} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-[var(--shadow-lifted)]">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[var(--accent)] text-[var(--primary-deep)] rounded-2xl px-5 py-3 font-bold shadow-[var(--shadow-lifted)]">
                  ★ 100% gratuit
                </div>
              </div>
              <div>
                <p className="eyebrow eyebrow-gold">★ {f.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)]">{f.title}</h2>
                <p className="mt-5 text-lg text-foreground/75 leading-relaxed">{f.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-[var(--primary)] mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-8">
                  Je veux cette formation <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="py-20 md:py-28 bg-[var(--primary-mist)]/40">
        <div className="container-cydily">
          <div className="max-w-3xl">
            <p className="eyebrow">★ Notre méthode</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)]">
              Personne ne reste sur le bord du chemin.
            </h2>
            <p className="mt-5 text-foreground/75 text-lg">
              Notre pédagogie reconnaît que chaque apprenant arrive avec son histoire. Nous adaptons rythme, supports et techniques.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Pédagogie inclusive", d: "Pictogrammes, alphabétisation fonctionnelle, formations en wolof." },
              { n: "02", t: "Évaluations en situation", d: "Tests pratiques en conditions réelles, pas seulement théoriques." },
              { n: "03", t: "Suivi post-formation", d: "Accompagnement sur le terrain, coaching d'intégration." },
              { n: "04", t: "Formation de formateurs", d: "Notre méthode unique, transmise pour démultiplier l'impact." },
            ].map((x) => (
              <div key={x.n} className="card-cydily">
                <span className="display text-5xl text-[var(--accent)]">{x.n}</span>
                <h3 className="font-semibold mt-3 text-[var(--primary-deep)]">{x.t}</h3>
                <p className="text-sm text-foreground/70 mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
