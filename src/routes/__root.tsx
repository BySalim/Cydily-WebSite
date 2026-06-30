import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://cydily-cbc.salimouedz.workers.dev";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CYDILY CBC · Formation ménage & métiers de service · Dakar · 3FPT" },
      {
        name: "description",
        content:
          "CYDILY CBC : formation ménage, housekeeping, intendance de cuisine et métiers de service à Dakar. 100% gratuit, prise en charge 3FPT. Cabinet accrédité.",
      },
      {
        name: "keywords",
        content:
          "cydily, cydily cbc, formation ménage, formation aux métiers de service, formation housekeeping Dakar, formation 3FPT, technicien de surface, intendance de cuisine, formation gratuite Dakar, formation femme de chambre Sénégal",
      },
      { name: "author", content: "CYDILY CBC" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "googlebot", content: "noindex, nofollow" },
      { name: "google-site-verification", content: "O9kfiwTSxVH-onm_PIKuu3L_aGNwQCcKhx0b9sPY4Rk" },
      { property: "og:site_name", content: "CYDILY CBC" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:title", content: "CYDILY CBC · Formation ménage & métiers de service · Dakar" },
      {
        property: "og:description",
        content:
          "Formations gratuites aux métiers de service à Dakar. Housekeeping, ménage, cuisine, comportement. 100% prises en charge par le 3FPT.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4114a9d8-7573-4128-8e3c-5489a9ad8150",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CYDILY CBC · Formation ménage & métiers de service · Dakar" },
      {
        name: "twitter:description",
        content:
          "Formations gratuites aux métiers de service à Dakar. 100% prises en charge par le 3FPT.",
      },
      {
        name: "twitter:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4114a9d8-7573-4128-8e3c-5489a9ad8150",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        defer: true,
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        "data-cf-beacon": '{"token": "96f537d4e8ee404a847081a0c18f0e5f"}',
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
