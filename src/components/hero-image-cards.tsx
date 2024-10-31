import React from "react";
import ImageCard from "./image-card";

const HeroImageCards = () => {
  return (
    <div className="w-full relative h-full">
      <ImageCard className="w-2/5 bottom-0 right-0 absolute rotate-[8deg]" />
      <ImageCard className="w-2/5 absolute top-0 right-1/3 -rotate-6" />
    </div>
  );
};

export default HeroImageCards;
