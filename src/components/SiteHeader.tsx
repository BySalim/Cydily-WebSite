import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/cydily-logo.png";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/formations", label: "Formations" },
  { to: "/entreprises", label: "Entreprises" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-cydily flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="CYDILY CBC accueil">
          <img src={logo} alt="CYDILY CBC" className="h-11 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-accent text-sm">S'inscrire · gratuit ★</Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-primary"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-cydily py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent mt-3">
              S'inscrire · gratuit ★
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
