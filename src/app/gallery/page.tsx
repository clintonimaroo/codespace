import BrandsSection from "@/components/brands-section";
import { HeroImageCards } from "@/components/image-cards";
import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import { cn } from "@/lib/utils";
import React from "react";
import Container from "@/components/container";


const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <Container className="container grid grid-cols-1 md:grid-cols-2 gap-5 py-5 md:py-20 content-center">
        <div className="space-y-3 md:space-y-5 flex-col flex  justify-center">
          <SpaceBadge>CODE SPACE GALLERY</SpaceBadge>
          <h1 className="font-medium text-2xl md:text-5xl leading-normal">
            Who Can You Spot <br /> Here?
          </h1>
          <p className="text-xl subtitle">
            Events may end, but the fun memories, connections, and friendships
            you built live on. We keep those moments alive, right here.
          </p>
        </div>
        <div className="w-full relative aspect-[16/10] ">
          <HeroImageCards />
        </div>
      </Container>

      <Container className="container gap-5 py-5 md:py-20 ">
        <h1 className="font-normal text-xl md:text-3xl leading-snug text-center">
          Events Highlight
        </h1>
      </Container>
      <Container className="container">
        <div className="p-5 sm:p-8 bg-gray-50 rounded-lg space-y-10">
          <h1 className="text-2xl font-light">Fusion Tech fest 2024</h1>
          <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <GalleryCard key={i} index={i} />
            ))}
          </div>
          <h1 className="text-xl font-light text-center">View more</h1>
        </div>
      </Container>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default Page;

const GalleryCard = ({ index }: { index: number }) => (
  <div
    className={cn("w-full aspect-square  bg-gray-100 p-2 rounded-md", {
      // "aspect-square": index > 3 && index % 2 === 0,
      // "aspect-video": index > 3 && index % 2 === 1
    })}
  >
    <div className="bg-white w-full h-4/5 rounded-sm flex items-center justify-center font-light text-3xl">
      {index}
    </div>
  </div>
);
