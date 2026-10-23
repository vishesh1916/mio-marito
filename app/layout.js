import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://miomarito.in"),
  title: "Mio Marito Gelato · Caffè | Authentic Italian Gelato in Hazratganj, Lucknow",
  description:
    "Step into a little corner of Rome in Lucknow. Mio Marito Gelato & Caffè serves authentic artisanal gelato, Italian coffee, shakes and more in a stunning fresco-adorned café in Hazratganj.",
  keywords: [
    "gelato Lucknow",
    "Italian cafe Hazratganj",
    "Mio Marito",
    "gelato Hazratganj",
    "best gelato Lucknow",
    "Italian gelato India",
    "cafe Lucknow",
    "artisanal gelato",
    "Italian desserts Lucknow",
  ],
  openGraph: {
    title: "Mio Marito Gelato · Caffè — A Taste of Italy in Lucknow",
    description:
      "Artisanal Italian gelato, handcrafted coffee, and vintage Roman ambiance. Visit us in Hazratganj, Lucknow.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 1792,
        height: 1024,
        alt: "Interior of Mio Marito Gelato café with Renaissance frescoes and brass chandelier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mio Marito Gelato · Caffè",
    description: "Authentic Italian gelato in the heart of Lucknow's Hazratganj.",
  },
  other: {
    "theme-color": "#C65D3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <head>
        <link rel="icon" href="/logo/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "IceCreamShop",
              name: "Mio Marito Gelato & Caffè",
              image: "/images/hero-interior.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hazratganj",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.8498,
                longitude: 80.9467,
              },
              url: "https://miomarito.in",
              telephone: "+91-9876543210",
              servesCuisine: "Italian, Gelato",
              priceRange: "₹₹",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:00",
                  closes: "23:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
