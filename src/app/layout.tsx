import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
// import localFont from "next/font/local";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],

});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Dunstan Detailing",
  description: "Expert car detailing services in Kent and South London. Paint correction, ceramic coating, interior detailing.",
  icons: {
    icon: "/images/favicon/favicon.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/videos/lambo-hero.web.mp4" />
        <link rel="preload" as="video" href="/videos/car-hero.web.mp4" />
        
        {/* LocalBusiness Schema for Mobile Car Detailing Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDetailing",
              "name": "Dunstan Detailing",
              "@id": "https://www.dunstandetailing.co.uk#organization",
              "url": "https://www.dunstandetailing.co.uk",
              "telephone": "07712811575",
              "email": "dunstan.detailing@gmail.com",
              "description": "Professional mobile car detailing services covering Maidstone, Kent and surrounding areas. Specializing in paint correction, ceramic coating, interior detailing, and vehicle protection services.",
              "logo": "/images/logos/LongLogo-nobg.png",
              "priceRange": "£40-£1000",
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Maidstone"
                },
                {
                  "@type": "Place", 
                  "name": "Kent"
                },
                {
                  "@type": "Place",
                  "name": "[OTHER_AREA_1 - e.g., Medway]"
                },
                {
                  "@type": "Place",
                  "name": "[OTHER_AREA_2 - e.g., Tonbridge]"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday", 
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "[WEEKDAY_OPENING - e.g., 08:00]",
                  "closes": "[WEEKDAY_CLOSING - e.g., 18:00]"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": [
                    "Saturday"
                  ],
                  "opens": "[SATURDAY_OPENING - e.g., 09:00]", 
                  "closes": "[SATURDAY_CLOSING - e.g., 16:00]"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mobile Car Detailing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Detailing",
                      "description": "Professional interior cleaning and detailing services at your location"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paint Correction",
                      "description": "Professional paint correction and enhancement services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Ceramic Coating",
                      "description": "Professional ceramic coating application and long-term protection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Mobile Car Wash",
                      "description": "Professional car washing services at your location"
                    }
                  }
                ]
              },
              "sameAs": [
                "[INSTAGRAM_URL - e.g., https://www.instagram.com/dunstandetailing]",
                "[TIKTOK_URL - e.g., https://www.tiktok.com/@dunstandetailing]"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
