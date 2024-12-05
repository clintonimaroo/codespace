import React from "react";
import { Button } from "./ui/button";
import { JoinUsImageCards } from "./image-cards";
import Container from "@/components/container";


const JoinSection = () => {
  return (
    <Container className="container grid grid-cols-1 md:grid-cols-2 py-20">
      <div className="space-y-5 flex flex-col ">
        <h3 className="text-xl text-primary font-medium">JOIN CODE SPACE!!</h3>
        <p className="text-gray-800 text-2xl sm:text-3xl">
          Be a part of our ever growing community by joining our Telegram
          channel and getting periodic updates.
        </p>
        <Button className="w-fit">Join the community</Button>
      </div>
      <div className="w-full aspect-square md:aspect-[16/10] md:mt-0 mt-20">
        <JoinUsImageCards />
      </div>
    </Container>
  );
};

export default JoinSection;
