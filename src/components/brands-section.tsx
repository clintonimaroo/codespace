import { brands } from "@/data";
import Image from "next/image";
import React from "react";

const BrandsSection = () => {
  return (
    <section className="container py-20 space-y-10">
      <div className="space-y-2 flex flex-col items-center justify-center mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-medium font-duplicateSans">
          Brands we&apos;ve{" "}
          <span className="whitespace-nowrap">loved working with</span>
        </h3>
        <p className="subtitle sm:text-base text-sm max-w-lg">
          When brands collaborate with us, they empower thousands of young
          African tech talents. Here are the innovative brands that make our
          mission even more rewarding!
        </p>
      </div>
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex shrink-0">
            {brands.map((brand) => (
              <div key={brand} className="relative flex-shrink-0 h-8 mx-6">
                <Image
                  src={`/images/brands/${brand}`}
                  alt={brand}
                  className="h-full w-auto object-contain"
                  width={170}
                  height={31}
                />
              </div>
            ))}
          </div>
          {/* Second set */}
          <div className="flex shrink-0">
            {brands.map((brand) => (
              <div
                key={`${brand}-2`}
                className="relative flex-shrink-0 h-7 mx-6"
              >
                <Image
                  src={`/images/brands/${brand}`}
                  alt={brand}
                  className="h-7 w-auto object-contain"
                  width={170}
                  height={31}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
