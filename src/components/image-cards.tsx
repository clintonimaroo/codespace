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
  <div className="w-full relative h-full">
    <ImageCard className="w-40  right-36 absolute  bottom-0 -rotate-[4deg]" />
    <ImageCard className="w-40  right-0 absolute rotate-[4deg]  top-1/2 -translate-y-1/2" />
    <ImageCard className="w-40 absolute   right-32 -top-10   -rotate-[4deg]" />
  </div>
);

export { HeroImageCards, JoinUsImageCards };
