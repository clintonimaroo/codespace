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

const JoinUsImageCards = () => (
  <div className="w-full relative h-full">
    {/* <ImageCard className="w-1/3 -bottom-[20%] right-1/4 absolute bg-yellow-200 -rotate-[4deg]" />
    <ImageCard className="w-1/3 top-1/3 right-0 absolute rotate-[4deg] bg-blue-50" />
    <ImageCard className="w-1/3 absolute -top-[10%] bg-green-200  right-1/4 -rotate-[4deg]" /> */}
    <ImageCard className="w-40  right-36 absolute  bottom-0 -rotate-[4deg]" />
    <ImageCard className="w-40  right-0 absolute rotate-[4deg]  top-1/2 -translate-y-1/2" />
    <ImageCard className="w-40 absolute   right-32 -top-10   -rotate-[4deg]" />
  </div>
);

export { HeroImageCards, JoinUsImageCards };
