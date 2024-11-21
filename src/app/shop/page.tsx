import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-5 md:py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <SpaceBadge>Shop</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            CodeSpace Shop
          </h1>
          <p className="text-xl subtitle">
            Coming soon! Stay tuned for exciting products and offers.
          </p>
        </div>
      </section>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default Page;
