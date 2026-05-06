import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ShieldCheck, Building2, Briefcase, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/entreprises")({
  head: () => ({
    meta: [
      { title: "Entreprises · Audit, conseil & formation sur mesure · CYDILY CBC" },
      { name: "description", content: "Solutions B2B : audit QHSE, conseil amélioration continue, formations intra-entreprise. Convention 3FPT, 90% pris en charge." },
      { property: "og:title", content: "CYDILY CBC pour les entreprises" },
      { property: "og:description", content: "Audit QHSE, conseil et formations sur mesure. 90% financé par le 3FPT." },
    ],
  }),
  component: EntreprisesPage,
});

function EntreprisesPage() {
  return (
    <SiteLayout>
      {/* HERO B2B · registre institutionnel */}
      <section className="bg-[var(--primary-deep)] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border-[40px] border-[var(--accent)]" />
        </div>
        <div className="container-cydily relative max-w-4xl">
          <p className="eyebrow text-[var(--accent)]">★ Solutions Entreprises</p>
          <h1 className="display text-4xl md:text-6xl mt-5 leading-[1.05] text-white">
            Parlons sérieusement de la qualité de vos services.
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl">
            Audit QHSE, conseil en amélioration continue, formation sur mesure de vos équipes.
            Convention privative 3FPT × CYDILY × votre entreprise. <strong className="text-[var(--accent)]">90% pris en charge</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent">Demander un audit</Link>
            <a href="tel:+221782908479" className="btn-on-dark">+221 78 290 84 79</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container-cydily">
          <p className="eyebrow">★ Trois métiers d'expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] max-w-3xl">
            Nous diagnostiquons. Nous formons. Nous transformons.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: ClipboardCheck, t: "Audit QHSE", d: "Diagnostic complet de vos protocoles qualité, hygiène, sécurité, environnement. Conformité HACCP pour la restauration." },
              { icon: Briefcase, t: "Conseil amélioration continue", d: "Stratégies sur mesure pour optimiser vos processus et pérenniser l'excellence opérationnelle." },
              { icon: ShieldCheck, t: "Formation intra-entreprise", d: "Audit + protocole sur mesure + formation dans vos locaux. Vos équipes, votre réalité, nos méthodes." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-cydily">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] text-[var(--primary-deep)] flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-deep)]">{t}</h3>
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-20 md:py-28 bg-[var(--primary-mist)]/40">
        <div className="container-cydily">
          <p className="eyebrow">★ Secteurs d'intervention</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] max-w-3xl">
            Là où l'hygiène et le service font la différence.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Hôtellerie & résidences",
              "Hôpitaux, cliniques, santé",
              "Restauration & agroalimentaire",
              "Conciergerie & domestique",
              "Bureaux & entreprises",
              "Écoles & institutions",
            ].map((s) => (
              <div key={s} className="bg-white rounded-2xl p-5 border border-border flex items-center gap-3">
                <Building2 size={20} className="text-[var(--primary)]" />
                <span className="font-medium text-[var(--primary-deep)]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODÈLE 3FPT */}
      <section className="py-20 md:py-28">
        <div className="container-cydily grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">★ Convention 3FPT</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)]">
              Vous payez 10%. Le 3FPT prend en charge le reste.
            </h2>
            <p className="mt-5 text-foreground/75 text-lg">
              Nous montons la convention privative entre votre entreprise, CYDILY et le 3FPT.
              Vous bénéficiez d'une garantie d'insertion via nos partenaires Judea Universe et Top de GRH.
            </p>
            <Link to="/contact" className="btn-primary mt-8">Demander un devis</Link>
          </div>
          <div className="relative">
            <div className="rounded-[32px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-deep)] text-white p-10 shadow-[var(--shadow-floating)]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="display text-6xl text-[var(--accent)]">90<span className="text-3xl">%</span></p>
                  <p className="mt-2 text-sm text-white/80">pris en charge par le 3FPT</p>
                </div>
                <div>
                  <p className="display text-6xl text-white">10<span className="text-3xl">%</span></p>
                  <p className="mt-2 text-sm text-white/80">à votre charge</p>
                </div>
                <div>
                  <p className="display text-5xl text-[var(--accent)]">+20</p>
                  <p className="mt-2 text-sm text-white/80">ans d'expérience humaine</p>
                </div>
                <div>
                  <p className="display text-5xl text-white">10</p>
                  <p className="mt-2 text-sm text-white/80">formateurs experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--primary-deep)] text-white">
        <div className="container-cydily flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Prêts à élever vos standards ?</h2>
            <p className="mt-3 text-white/80">Réponse en 24h ouvrées.</p>
          </div>
          <Link to="/contact" className="btn-accent">Démarrer un projet <ArrowRight size={16} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
