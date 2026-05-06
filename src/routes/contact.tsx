import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & inscription — CYDILY CBC" },
      { name: "description", content: "Inscrivez-vous gratuitement à une formation CYDILY CBC ou contactez notre équipe pour un projet entreprise. Dakar — +221 78 290 84 79." },
      { property: "og:title", content: "Contact CYDILY CBC" },
      { property: "og:description", content: "Inscription gratuite, devis entreprises, partenariats." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [type, setType] = useState<"particulier" | "entreprise">("particulier");
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="py-16 md:py-24 bg-[var(--primary-mist)]/40">
        <div className="container-cydily max-w-3xl">
          <p className="eyebrow">★ Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[var(--primary-deep)] leading-tight">
            Passez la <span className="display">porte.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            Nous vous répondons en 24h. Inscription accompagnée pour les particuliers, devis sur mesure pour les entreprises.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-cydily grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-2 inline-flex mb-6 border border-border">
              <button
                onClick={() => setType("particulier")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  type === "particulier" ? "bg-[var(--accent)] text-[var(--primary-deep)]" : "text-foreground/70"
                }`}
              >
                ★ Particulier — Gratuit
              </button>
              <button
                onClick={() => setType("entreprise")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  type === "entreprise" ? "bg-[var(--primary)] text-white" : "text-foreground/70"
                }`}
              >
                Entreprise
              </button>
            </div>

            {sent ? (
              <div className="card-cydily p-10 text-center">
                <CheckCircle2 size={48} className="text-[var(--primary)] mx-auto" />
                <h2 className="text-2xl font-bold mt-4 text-[var(--primary-deep)]">Message envoyé. Dieuredieuf 🙏</h2>
                <p className="mt-3 text-foreground/70">Nous vous recontactons sous 24h ouvrées.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="card-cydily p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Prénom & nom" name="name" required />
                  <Field label="Téléphone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                {type === "entreprise" && <Field label="Entreprise" name="company" required />}
                {type === "particulier" && (
                  <div>
                    <label className="text-sm font-medium text-[var(--primary-deep)]">Formation souhaitée</label>
                    <select className="mt-1.5 w-full px-4 py-3 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                      <option>Housekeeping</option>
                      <option>Intendance de cuisine</option>
                      <option>Technicien de surface</option>
                      <option>Excellence comportementale</option>
                      <option>Je ne sais pas encore</option>
                    </select>
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium text-[var(--primary-deep)]">Votre message</label>
                  <textarea
                    rows={5}
                    className="mt-1.5 w-full px-4 py-3 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder={type === "particulier" ? "Parlez-nous de vous, de votre disponibilité…" : "Décrivez votre besoin (audit, formation intra, conseil…)"}
                  />
                </div>
                <button type="submit" className={type === "particulier" ? "btn-accent w-full" : "btn-primary w-full"}>
                  Envoyer ma demande <Send size={16} />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  *Formation prise en charge à 100% par le 3FPT, sous conditions de dossier complet et de places disponibles.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="card-cydily">
              <p className="eyebrow eyebrow-gold">★ Nous joindre</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[var(--primary)] mt-0.5" />
                  <span>Ouest Foire, Cité Sonatel 3<br />Villa 27, Dakar, Sénégal</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[var(--primary)]" />
                  <a href="tel:+221782908479" className="hover:text-[var(--primary)]">+221 78 290 84 79</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[var(--primary)]" />
                  <a href="mailto:cydily.cbc@gmail.com" className="hover:text-[var(--primary)]">cydily.cbc@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="card-cydily bg-[var(--primary-deep)] text-white border-none">
              <p className="display text-2xl text-[var(--accent)]">★</p>
              <p className="mt-3 text-white/90 text-sm leading-relaxed">
                « La compétence au service de la dignité humaine. »
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-[var(--primary-deep)]">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-1.5 w-full px-4 py-3 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      />
    </div>
  );
}
