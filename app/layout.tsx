import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Miracle Care Campus | Nursing & Caregiver Courses in Kurunegala, Sri Lanka",
  description:
    "Miracle Care Campus in Kurunegala, Sri Lanka offers Nursing, Caregiver, First Aid, and Pharmacy Assistant courses. With 2+ years of experience, 100+ graduates, and job placement support, we prepare students for healthcare careers.",
  keywords: [
    "Nursing courses in Sri Lanka",
    "Caregiver courses Kurunegala",
    "First Aid training Sri Lanka",
    "Pharmacy Assistant courses Sri Lanka",
    "Healthcare training Kurunegala",
    "Job placement healthcare Sri Lanka",
    "Miracle Care Campus",
  ],
  openGraph: {
    title: "Miracle Care Campus | Healthcare Training in Sri Lanka",
    description:
      "Join Miracle Care Campus in Kurunegala, Sri Lanka for Nursing, Caregiver, First Aid, and Pharmacy Assistant courses. 100+ graduates trained with job placement support.",
    url: "https://miraclecarecampus.com",
    siteName: "Miracle Care Campus",
    images: [
      {
        url: "https://miraclecarecampus.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miracle Care Campus Kurunegala Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracle Care Campus | Nursing, Caregiver & Healthcare Courses",
    description:
      "Healthcare education in Kurunegala, Sri Lanka. Nursing, Caregiver, First Aid, and Pharmacy Assistant training with job placement support.",
    images: ["https://miraclecarecampus.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://miraclecarecampus.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Miracle Care Campus",
    url: "https://miraclecarecampus.com",
    logo: "https://miraclecarecampus.com/logo.png",
    image: "https://miraclecarecampus.com/og-image.jpg",
    description:
      "Miracle Care Campus in Kurunegala, Sri Lanka offers Nursing, Caregiver, First Aid, and Pharmacy Assistant courses with 2+ years of experience and job placement support.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kurunegala",
      addressLocality: "Kurunegala",
      addressRegion: "North Western Province",
      addressCountry: "Sri Lanka",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94-71-234-5678",
      contactType: "Admissions",
      areaServed: "LK",
      availableLanguage: ["English", "Sinhala", "Tamil"],
    },
    alumni: {
      "@type": "EducationalOccupationalProgram",
      name: "Healthcare Graduates",
      description:
        "Over 100+ successful healthcare graduates in nursing, caregiving, and pharmacy assistance.",
    },
    hasCourse: [
      {
        "@type": "Course",
        name: "Nursing Course",
        description:
          "Professional nursing training program in Kurunegala, Sri Lanka.",
      },
      {
        "@type": "Course",
        name: "Caregiver Course",
        description:
          "Comprehensive caregiver training to prepare for healthcare careers locally and abroad.",
      },
      {
        "@type": "Course",
        name: "First Aid Training",
        description:
          "First Aid training for healthcare professionals and the general public.",
      },
      {
        "@type": "Course",
        name: "Pharmacy Assistant Course",
        description:
          "Pharmacy assistant training for entry-level positions in healthcare and retail pharmacies.",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Miracle Care Campus",
    url: "https://miraclecarecampus.com",
    logo: "https://miraclecarecampus.com/logo.png",
    image: "https://miraclecarecampus.com/og-image.jpg",
    description:
      "Miracle Care Campus provides Nursing, Caregiver, First Aid, and Pharmacy Assistant training in Kurunegala, Sri Lanka.",
    telephone: "+94-71-234-5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kurunegala",
      addressLocality: "Kurunegala",
      addressRegion: "North Western Province",
      postalCode: "60000",
      addressCountry: "Sri Lanka",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "7.4863", // Replace with exact campus latitude
      longitude: "80.3623", // Replace with exact campus longitude
    },
    openingHours: "Mo-Sa 09:00-17:00",
    sameAs: [
      "https://facebook.com/miraclecarecampus",
      "https://instagram.com/miraclecarecampus",
      "https://linkedin.com/company/miraclecarecampus",
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld-educational-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(educationalOrgSchema),
          }}
        />
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
