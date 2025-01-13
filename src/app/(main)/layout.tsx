import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smoothscroll";

export const metadata: Metadata = {
  title: "Code Space",
  description:
    "Building a Tech Career Alone is Hard. But with us, the journey becomes a lot smoother for techies like you!",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className={`${dmSans.className} antialiased`}>
        <SmoothScroll />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
