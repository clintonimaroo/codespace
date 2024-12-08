import React from "react";
import ImageCard from "./image-card";
import { cn } from "@/lib/utils";

const HeroImageCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full relative h-full", className)}>
      <ImageCard
        id="card-1"
        src="https://i.postimg.cc/PqjdXyS9/IMG-0324.jpg"
        className="w-2/5 bottom-0 right-[15%] md:right-0 absolute rotate-[8deg]"
      />
      <ImageCard
        id="card-2"
        src="https://i.postimg.cc/6pmGMyfY/IMG-0282.jpg"
        className="w-2/5 absolute top-0 right-1/2 md:right-1/3 -rotate-6"
      />
    </div>
  );
};

const JoinUsImageCards = () => (
  <div className="w-36 md:w-48 relative h-full ml-auto">
    <ImageCard className="w-full right-36 absolute -bottom-16 -rotate-[4deg]" />
    <ImageCard className="w-full right-0 absolute rotate-[4deg] top-1/2 -translate-y-1/2" />
    <ImageCard className="w-full absolute right-24 md:right-32 -top-16 -rotate-[4deg]" />
  </div>
);

export { HeroImageCards, JoinUsImageCards };
