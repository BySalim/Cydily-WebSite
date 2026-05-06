import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/cydily-logo-white.png";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--primary-deep)] text-white relative overflow-hidden">
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />
      <div className="container-cydily py-16 relative">
        <p className="display text-3xl md:text-5xl lg:text-6xl text-white/95 max-w-4xl leading-tight">
          « Faire de l'invisible <span className="text-[var(--accent)]">une force visible.</span> »
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logoWhite} alt="CYDILY CBC" className="h-14 w-auto mb-4 opacity-90" />
            <p className="text-sm text-white/70 leading-relaxed">
              Cabinet d'audit, de conseil et de formation spécialisé dans les métiers de service.
            </p>
            <p className="text-xs text-[var(--accent)] mt-3 font-medium tracking-widest uppercase">
              ★ Accrédité 3FPT
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-soft)] mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/formations" className="hover:text-[var(--accent)]">Formations</Link></li>
              <li><Link to="/entreprises" className="hover:text-[var(--accent)]">Entreprises (B2B)</Link></li>
              <li><Link to="/a-propos" className="hover:text-[var(--accent)]">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--accent)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-soft)] mb-4">Nous contacter</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[var(--accent)]" />
                <span>Ouest Foire, Cité Sonatel 3,<br />Villa 27, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[var(--accent)]" />
                <a href="tel:+221782908479" className="hover:text-[var(--accent)]">+221 78 290 84 79</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[var(--accent)]" />
                <a href="mailto:cydily.cbc@gmail.com" className="hover:text-[var(--accent)]">cydily.cbc@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-soft)] mb-4">Suivez-nous</h4>
            <p className="text-sm text-white/70 mb-4">On vous répond en 24h. Dieuredieuf 🙏</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/cydily.cbc/" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--primary-deep)] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@cydily" target="_blank" rel="noreferrer" aria-label="TikTok"
                className="w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--primary-deep)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.27a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.7Z"/></svg>
              </a>
              <a href="https://web.facebook.com/profile.php?id=61583957431231" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--primary-deep)] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--primary-deep)] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} CYDILY CBC · Formation & Conseil. Tous droits réservés.</p>
          <p>Formation prise en charge à 100% par le 3FPT (sous conditions de dossier).</p>
        </div>
      </div>
    </footer>
  );
}
