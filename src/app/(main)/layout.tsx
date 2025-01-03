import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smoothscroll";

const sfProDisplay = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/SF-Pro-Display-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/SF-Pro-Display-Semibold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.ttf",
      weight: "700",
      style: "bold",
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
      <body className={`${sfProDisplay.className} antialiased`}>
        <SmoothScroll />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
