import type { ReactNode } from "react";
import { DemoBanner } from "./DemoBanner";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DemoBanner />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
