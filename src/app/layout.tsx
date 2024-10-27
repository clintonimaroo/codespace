import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";

const sfProDisplay = localFont({
  src: [
    {
      path: "../assets/fonts/SF-Pro-Display-Black.otf",
      weight: "900"
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Bold.otf",
      weight: "700"
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600"
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Medium.otf",
      weight: "500"
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Regular.otf",
      weight: "400"
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Light.otf",
      weight: "300"
    }
  ],
  weight: "300 400 500 600 700 900",
  preload: true
});

export const metadata: Metadata = {
  title: "Code Space",
  description:
    "Building a Tech Career Alone is Hard. But with us, the journey becomes a lot smoother for techies like you!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sfProDisplay.className}  antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
