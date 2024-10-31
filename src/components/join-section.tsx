import React from "react";
import { Button } from "./ui/button";
import { JoinUsImageCards } from "./image-cards";

const JoinSection = () => {
  return (
    <section className="container grid grid-cols-2 py-20">
      <div className="space-y-5 flex flex-col ">
        <h3 className="text-xl text-primary font-medium">JOIN CODE SPACE!!</h3>
        <p className="text-gray-800 text-3xl">
          Be a part of our ever growing community by joining our Telegram
          channel and getting periodic updates.
        </p>
        <Button className="w-fit">Join the community</Button>
      </div>
      <div className="w-full aspect-[16/10]">
        <JoinUsImageCards />
      </div>
    </section>
  );
};

export default JoinSection;
