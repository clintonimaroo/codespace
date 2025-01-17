import React from "react";
import ImageCard from "./image-card";
import { cn } from "@/lib/utils";

const HeroImageCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full relative h-full", className)}>
      <ImageCard
        id="card-1"
        src="https://i.postimg.cc/PqjdXyS9/IMG-0324.jpg"
        className="w-2/5 bottom-0 right-[15%] md:right-0 absolute rotate-[8deg] shadow-2xl"
      />
      <ImageCard
        id="card-2"
        src="https://i.postimg.cc/6pmGMyfY/IMG-0282.jpg"
        className="w-2/5 absolute top-0 right-1/2 md:right-1/3 -rotate-6 shadow-2xl"
      />
    </div>
  );
};

const JoinUsImageCards = () => (
  <div className="w-56 relative h-[400px] mx-auto md:left-20 mt-10 md:mt-0">
    <ImageCard className="w-full right-1/3 absolute -bottom-16 -rotate-[4deg] shadow-lg" />
    <ImageCard className="w-full left-1/3 absolute rotate-[4deg] top-1/2 -translate-y-1/2 shadow-lg" />
    <ImageCard className="w-full absolute right-1/3 -top-16 -rotate-[4deg] shadow-lg" />
  </div>
);

export { HeroImageCards, JoinUsImageCards };
