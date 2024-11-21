import { brands } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const BrandsSection = () => {
  return (
    <section className="container py-20 space-y-10">
      <div className="space-y-5 flex flex-col items-center justify-center sm:w-2/5 mx-auto text-center">
        <h3 className="text-3xl font-medium">
          Brands we&apos;ve loved working with
        </h3>
        <p className="subtitle text-lg">
          When brands collaborate with us, they empower thousands of young
          African tech talents. Here are the innovative brands that make our
          mission even more rewarding!
        </p>
      </div>
      <div className="flex items-center gap-10 content-center justify-center flex-wrap">
        {brands.map((brand) => (
          <div
            key={brand}
            className={cn("relative w-24 h-16", {
              "w-16 h-10": brand === "aws" || brand === "genztechies"
            })}
          >
            <Image
              src={`/images/brands/${brand}.png`}
              alt={brand}
              className={"w-full h-full object-contain"}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
