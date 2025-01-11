"use client";

import { Suspense } from "react";
import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";

function BlogContent() {
  return (
    <>
      <Container className="space-y-5">
        <Blog />
      </Container>
      <BrandsSection />
      <JoinSection />
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}