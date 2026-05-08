import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import aissatouImg from "@/assets/testimonial-aissatou.jpg";
import ibrahimaImg from "@/assets/testimonial-ibrahima.jpg";
import fatouImg from "@/assets/testimonial-fatou.jpg";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  formation: string;
  accent: "primary" | "accent" | "primary-deep";
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aïssatou Diop",
    role: "Femme de chambre",
    location: "Pikine, Dakar",
    formation: "Housekeeping",
    accent: "primary",
    photo: aissatouImg,
    quote:
      "Avant, je nettoyais les chambres comme je pouvais. Aujourd'hui, je connais les vrais protocoles de l'hôtellerie. Quand je présente une chambre, je suis fière.",
  },
  {
    name: "Ibrahima Fall",
    role: "Technicien de surface en clinique",
    location: "Parcelles Assainies, Dakar",
    formation: "Technicien de surface",
    accent: "accent",
    photo: ibrahimaImg,
    quote:
      "Je pensais que nettoyer, c'était juste passer la serpillière. CYDILY m'a appris la méthode, les bons produits, la sécurité. Aujourd'hui je travaille dans une clinique.",
  },
  {
    name: "Fatou Sow",
    role: "Aide-cuisinière",
    location: "Yoff, Dakar",
    formation: "Intendance de cuisine",
    accent: "primary-deep",
    photo: fatouImg,
    quote:
      "Je voulais travailler en cuisine sans avoir de diplôme. Le 3FPT a tout pris en charge. Aujourd'hui je gère le poste froid d'un restaurant aux Almadies.",
  },
];

const ringStyles: Record<Testimonial["accent"], string> = {
  primary: "ring-[var(--primary)]",
  accent: "ring-[var(--accent)]",
  "primary-deep": "ring-[var(--primary-deep)]",
};

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-cydily">
        <div className="max-w-3xl">
          <p className="eyebrow">★ Ils l'ont fait</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[var(--primary-deep)] leading-tight">
            Trois parcours, <span className="display">une même fierté.</span>
          </h2>
          <p className="mt-5 text-foreground/75 text-lg">
            Des hommes et des femmes que CYDILY a formés, attestés et accompagnés vers l'emploi.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 120}
              as="figure"
              className="card-cydily relative flex flex-col justify-between p-6 md:p-7 h-full"
            >
              <Quote
                size={32}
                className="absolute top-6 right-6 text-[var(--accent)]/30"
                aria-hidden
              />
              <blockquote className="text-foreground/85 leading-relaxed">
                « {t.quote} »
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-border/70 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  width={56}
                  height={56}
                  className={`w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-offset-2 ring-offset-white ${ringStyles[t.accent]}`}
                />
                <div>
                  <p className="font-semibold text-[var(--primary-deep)] leading-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-foreground/65 mt-0.5">
                    {t.role} · {t.location}
                  </p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--accent-deep)] mt-1">
                    ★ Formation {t.formation}
                  </p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
