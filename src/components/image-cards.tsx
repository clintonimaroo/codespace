import React from "react";
import ImageCard from "./image-card";
import { cn } from "@/lib/utils";

const HeroImageCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full relative h-full mx-auto", className)}>
      <ImageCard
        id="card-1"
        src="https://i.postimg.cc/PqjdXyS9/IMG-0324.jpg"
        className="w-2/5 lg:w-2/4 lg:top-24 top-40 right-1 lg:right-0 absolute rotate-[8deg] shadow-[0_0_20px_0_rgba(34,34,34,0.1)]"
      />
      <ImageCard
        id="card-2"
        src="https://i.postimg.cc/6pmGMyfY/IMG-0282.jpg"
        className="w-2/5 lg:w-2/4 absolute lg:bottom-24 right-1 lg:right-1/3 -rotate-6 shadow-[0_0_20px_0_rgba(34,34,34,0.1)]"
      />
    </div>
  );
};

export { HeroImageCards };
