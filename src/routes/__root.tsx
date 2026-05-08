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

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Ouest Foire, Cité Sonatel 3, Villa 27",
  addressLocality: "Dakar",
  addressRegion: "Dakar",
  addressCountry: "SN",
} as const;

const SOCIAL_PROFILES = [
  "https://www.tiktok.com/@cydily",
  "https://www.instagram.com/cydily.cbc/",
  "https://web.facebook.com/profile.php?id=61583957431231",
  "https://www.linkedin.com/company/cydily/",
  "https://www.google.com/search?kgmid=/g/11yn01tyh_",
];

const GEO = {
  "@type": "GeoCoordinates",
  latitude: 14.736555232007166,
  longitude: -17.472051760341877,
} as const;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CYDILY CBC",
  alternateName: ["CYDILY", "CYDILY Centre de Formation & Cabinet d'Audit"],
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Cabinet de formation, audit et conseil accrédité 3FPT à Dakar. Formations gratuites aux métiers de service : ménage, housekeeping, intendance de cuisine, technicien de surface, excellence comportementale.",
  founder: {
    "@type": "Person",
    name: "Yatera CISSE",
    jobTitle: "Fondatrice & CEO",
  },
  address: ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+221782908479",
    email: "cydily.cbc@gmail.com",
    contactType: "customer service",
    availableLanguage: ["French", "Wolof"],
  },
  sameAs: SOCIAL_PROFILES,
  knowsAbout: [
    "Formation ménage",
    "Formation aux métiers de service",
    "Housekeeping",
    "Intendance de cuisine",
    "Technicien de surface",
    "Excellence comportementale",
    "Audit QHSE",
    "Conseil RH",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "CYDILY CBC",
  alternateName: "CYDILY Centre de Formation & Cabinet d'Audit",
  description:
    "Centre de formation et cabinet d'audit & conseil à Dakar. Formations 100% prises en charge par le 3FPT aux métiers de service.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}/favicon.png`,
  telephone: "+221782908479",
  email: "cydily.cbc@gmail.com",
  priceRange: "Gratuit · prise en charge 3FPT",
  address: ADDRESS,
  geo: GEO,
  hasMap: "https://share.google/jqOZRkeFGF99qqlaa",
  areaServed: [
    { "@type": "City", name: "Dakar" },
    { "@type": "Country", name: "Sénégal" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: SOCIAL_PROFILES,
};

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
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
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
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
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
