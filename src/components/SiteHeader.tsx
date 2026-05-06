import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  // Compact only when scrolled AND not hovered AND mobile menu closed
  const compact = scrolled && !hovered && !open;

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        compact
          ? "bg-background/95 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,70,136,0.06)]"
          : "bg-background/85 backdrop-blur-md"
      } border-b ${compact ? "border-border" : "border-border/50"}`}
    >
      <div
        className={`container-cydily flex items-center justify-between transition-all duration-500 ease-out ${
          compact ? "h-14" : "h-20"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="CYDILY CBC accueil">
          <img
            src={logo}
            alt="CYDILY CBC"
            className={`w-auto transition-all duration-500 ease-out ${
              compact ? "h-8" : "h-11"
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = isActive(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative group px-4 py-2 text-sm transition-colors duration-300 ${
                  active
                    ? "text-[var(--primary)] font-semibold"
                    : "text-foreground/75 font-medium hover:text-[var(--primary)]"
                }`}
              >
                <span className="relative z-10">{n.label}</span>
                <span
                  aria-hidden
                  className={`absolute inset-0 rounded-full bg-[var(--primary-mist)] transition-all duration-300 ${
                    active ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                />
                <span
                  aria-hidden
                  className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-[var(--accent)] transition-all duration-300 ${
                    active
                      ? "opacity-0"
                      : "opacity-0 group-hover:opacity-100 group-hover:bottom-1"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={`btn-accent text-sm transition-all duration-500 ${
              compact ? "py-2 px-4" : ""
            }`}
          >
            S'inscrire · gratuit ★
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[var(--primary)] transition-transform duration-300 active:scale-90"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden border-t border-border bg-background transition-all duration-500 ease-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-cydily py-4 flex flex-col gap-1">
          {nav.map((n, i) => {
            const active = isActive(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`py-3 px-3 rounded-lg text-base transition-all duration-300 ${
                  active
                    ? "bg-[var(--primary-mist)] text-[var(--primary)] font-semibold"
                    : "text-foreground/80 font-medium hover:bg-[var(--primary-mist)] hover:text-[var(--primary)]"
                } ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent mt-3">
            S'inscrire · gratuit ★
          </Link>
        </div>
      </div>
    </header>
  );
}
