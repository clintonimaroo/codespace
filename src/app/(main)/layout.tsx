import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smoothscroll";
import ScrollToTop from "@/components/scroll-to-top";
import Script from "next/script";

const duplicateSans = localFont({
  src: [
    {
      path: "../fonts/DuplicateSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/DuplicateSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DuplicateSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/DuplicateSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/DuplicateSans-Heavy.ttf",
      weight: "800",
      style: "Heavy",
    },
  ],
  variable: "--duplicate-sans",
});

const graphikSans = localFont({
  src: [
    {
      path: "../fonts/Graphik/GraphikLight.otf",
      weight: "300",
      style: "Heavy",
    },
    {
      path: "../fonts/Graphik/GraphikRegular.otf",
      weight: "400",
      style: "light",
    },
    {
      path: "../fonts/Graphik/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Graphik/GraphikSemibold.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "../fonts/Graphik/GraphikBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://www.codespaces.org"
  ),
  title: {
    default: "Code Space - Building Africa's Largest Gen Z Tech Community",
    template: "%s | Code Space",
  },
  description:
    "Code Space is Africa's largest Gen Z tech community, connecting young tech talents for growth, impact, and success. Join our vibrant community to accelerate your tech career.",
  keywords: [
    "Code Space",
    "Tech Community",
    "Gen Z",
    "Africa Tech",
    "Tech Career",
    "Tech Events",
    "Tech Network",
    "Tech Education",
  ],
  authors: [{ name: "Code Space" }],
  creator: "Code Space",
  publisher: "Code Space",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://www.codespaces.org",
    title: "Code Space - Building Africa's Largest Gen Z Tech Community",
    description:
      "Code Space is Africa's largest Gen Z tech community, connecting young tech talents for growth, impact, and success. Join our vibrant community to accelerate your tech career.",
    siteName: "Code Space",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Code Space - Africa's Largest Gen Z Tech Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Space - Building Africa's Largest Gen Z Tech Community",
    description:
      "Code Space is Africa's largest Gen Z tech community, connecting young tech talents for growth, impact, and success. Join our vibrant community to accelerate your tech career.",
    images: ["/images/og-image.jpg"],
    creator: "@codespace",
    site: "@codespace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Code Space",
    description:
      "Africa's largest Gen Z tech community, connecting young tech talents for growth, impact, and success.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://www.codespaces.org",
    logo: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png`,
    foundingDate: "2021",
    founders: [
      {
        "@type": "Person",
        name: "Clinton Imaro",
      },
    ],
    sameAs: [
      "https://x.com/CodeSpaceHQ",
      "https://www.linkedin.com/company/codespacehq",
      "https://instagram.com/codesspace",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
      addressLocality: "Lagos",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@codespaces.org",
    },
    knowsAbout: [
      "Tech Community",
      "Software Development",
      "Tech Events",
      "Tech Education",
      "African Tech",
      "Gen Z Tech",
      "Hackathons",
      "Tech Conferences",
      "Tech Meetups",
      "Tech Workshops",
      "Tech Workshops",
      "Tech Conferences",
      "Tech Meetups",
      "Tech Workshops",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${graphikSans.className} ${duplicateSans.variable} antialiased lenis lenis-smooth`}
      >
        <SmoothScroll />
        <NavBar />
        <ScrollToTop />
        {children}
        <Footer variant="dark" />
      </body>
    </html>
  );
}
