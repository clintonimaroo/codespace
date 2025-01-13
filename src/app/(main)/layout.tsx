import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smoothscroll";

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
});

export const metadata: Metadata = {
  title: "Code Space",
  description:
    "Building a Tech Career Alone is Hard. But with us, the journey becomes a lot smoother for techies like you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className={`${duplicateSans.className} antialiased`}>
        <SmoothScroll />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
