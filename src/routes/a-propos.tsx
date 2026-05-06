import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import founder from "@/assets/founder.jpg";
import iconLogo from "@/assets/cydily-icon.png";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos · CYDILY CBC · Mme CISSE Yatera" },
      { name: "description", content: "L'histoire de CYDILY CBC et de sa fondatrice Mme CISSE Yatera : 20 ans au service de l'humain, du travail social aux ressources humaines." },
      { property: "og:title", content: "À propos de CYDILY CBC" },
      { property: "og:description", content: "20 ans d'expérience humaine au service de la dignité du travail." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-10">
        <div className="container-cydily grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="eyebrow">★ Notre histoire</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[var(--primary-deep)] leading-[1.05]">
              CYDILY est née d'une <span className="display">conviction.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              « CYDILY » porte les noms de ses parents. C'est une marque profondément intime, qui porte l'idée
              de transmission familiale. Création légale en 2022/2023. Démarrage effectif des activités fin 2025.
              Accréditation 3FPT obtenue en décembre 2025.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Aujourd'hui, CYDILY CBC réunit 4 personnes en support, 10 formateurs et formatrices,
              et un projet : faire des métiers de service un vrai standard d'excellence en Afrique de l'Ouest.
            </p>
          </div>
          <div className="lg:col-span-2 relative">
            <div className="rounded-[24px] overflow-hidden shadow-[var(--shadow-lifted)]">
              <img src={founder} alt="Mme CISSE Yatera, fondatrice" loading="lazy" className="w-full h-auto" />
            </div>
            <img
              src={iconLogo}
              alt=""
              aria-hidden
              className="absolute -top-8 -right-6 w-24 h-24 opacity-90 animate-float hidden md:block"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-[var(--primary-deep)]">Mme CISSE Yatera</strong> · Fondatrice & CEO
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--primary-deep)] text-white">
        <div className="container-cydily max-w-4xl">
          <p className="eyebrow text-[var(--accent)]">★ La fondatrice</p>
          <blockquote className="display text-2xl md:text-4xl mt-6 leading-snug">
            « J'ai voulu agir là où tout commence : dans la considération de ceux qui œuvrent
            chaque jour pour le bien commun. »
          </blockquote>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-white/85">
            <p>
              Plus de <strong className="text-[var(--accent)]">vingt ans</strong> consacrés à l'humain : d'abord dans le travail social
              auprès de l'enfance maltraitée, puis dans les ressources humaines comme DRH, cheffe de projet,
              formatrice et auditrice qualité.
            </p>
            <p>
              Sa conviction : <em>« La vraie transformation commence par la conscience de sa propre valeur. »</em>
              C'est cette idée qui devient le cœur du projet CYDILY.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-cydily">
          <p className="eyebrow">★ Vision</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] max-w-3xl">
            Faire de CYDILY un <span className="display">label d'Excellence.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { t: "Déploiement régional", d: "Extension progressive aux principales villes du Sénégal puis aux capitales d'Afrique de l'Ouest." },
              { t: "Partenariats institutionnels", d: "Alliances avec ministères, grandes entreprises, organisations africaines et internationales." },
              { t: "Programmes certifiants", d: "Démarches en cours auprès du Ministère pour des diplômes officiels (CAP, BEP, BDS, BTP)." },
            ].map((x, i) => (
              <div key={x.t} className="card-cydily">
                <span className="display text-5xl text-[var(--accent)]">0{i + 1}</span>
                <h3 className="font-semibold mt-3 text-[var(--primary-deep)]">{x.t}</h3>
                <p className="text-sm text-foreground/70 mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--primary-mist)]/40">
        <div className="container-cydily max-w-4xl text-center">
          <p className="display text-2xl md:text-4xl text-[var(--primary-deep)] leading-snug">
            « Nous construisons aujourd'hui <span className="text-[var(--accent-deep)]">le standard de demain.</span> »
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">
            Rejoignez-nous <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
