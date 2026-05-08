import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

export const faqItems = [
  {
    q: "C'est vraiment 100% gratuit ?",
    a: "Pour vous en tant que particulier, oui. Vous ne payez rien. C'est le 3FPT, l'organisme public sénégalais de financement de la formation, qui prend tout en charge. Il faut juste que votre dossier soit complet et qu'il reste de la place dans la session. Pour les entreprises, c'est différent : le 3FPT couvre 90% du coût et l'entreprise paie les 10% restants.",
  },
  {
    q: "Qui peut s'inscrire ?",
    a: "Toute personne entre 18 et 45 ans qui cherche à se former pour trouver un emploi. Pas besoin d'avoir un diplôme avant. Vous parlez français, wolof, ou les deux : la formation peut se faire en wolof avec nos formateurs wolophones si c'est plus simple pour vous.",
  },
  {
    q: "Faut-il savoir lire et écrire ?",
    a: "Non. Si vous ne lisez pas bien, on s'adapte. On utilise beaucoup d'images, de pictogrammes, et la formation se fait à l'oral, en wolof si besoin. Vous recevez aussi un livre de l'apprenant avec des mémos visuels que vous gardez. Personne n'est laissé de côté.",
  },
  {
    q: "Combien de temps dure une formation ?",
    a: "Ça dépend de la formation que vous choisissez. Toutes se passent en présentiel, à Dakar. Le mieux, c'est qu'on vous appelle ou qu'on échange par WhatsApp pour vous donner les dates exactes de la prochaine session selon vos disponibilités.",
  },
  {
    q: "Que se passe-t-il après la formation ?",
    a: "Vous repartez avec une attestation reconnue par le 3FPT. Et on ne vous laisse pas tomber : on suit votre intégration sur le terrain, et on travaille avec des entreprises d'insertion comme Judea Universe et Top de GRH qui aident à vous placer.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-[var(--primary-mist)]/40">
      <div className="container-cydily grid md:grid-cols-12 gap-10 items-start">
        <Reveal direction="left" className="md:col-span-4">
          <p className="eyebrow">★ Questions fréquentes</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[var(--primary-deep)] leading-tight">
            Vos doutes, <span className="display">nos réponses.</span>
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Cinq questions reviennent à chaque fois. Voici les vraies réponses, sans détour.
          </p>
          <p className="mt-6 text-sm text-foreground/65">
            Une autre question ?{" "}
            <a
              href="tel:+221782908479"
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Appelez-nous
            </a>
            .
          </p>
        </Reveal>

        <div className="md:col-span-8 space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <details
                name="cydily-faq"
                className="group rounded-2xl bg-white border border-border/70 shadow-[var(--shadow-subtle)] open:shadow-[var(--shadow-lifted)] transition-shadow"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-6 py-4 md:py-5 select-none">
                  <span className="font-semibold text-[var(--primary-deep)] text-base md:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[var(--primary)] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-foreground/75 leading-relaxed">
                  {item.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
