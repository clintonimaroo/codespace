import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest tech insights, community stories, and industry trends through Code Space's blog.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
