import React from "react";
import { Button } from "./ui/button";
import { JoinUsImageCards } from "./image-cards";
import Container from "@/components/container";

const JoinSection = () => {
  return (
    <Container className="container flex flex-col lg:flex-row items-center py-20 mt-7 mb-20 h-[900px]">
      <div className="space-y-5 flex flex-col max-w-xl">
        <h3 className="text-xl text-primary font-medium">JOIN CODE SPACE!!</h3>
        <p className="text-gray-800 text-2xl sm:text-3xl">
          Be a part of our ever growing community by joining our Telegram
          channel and getting periodic updates.
        </p>
        <Button className="w-fit">Join the community</Button>
      </div>
      <div className="aspect-square min-h-60 md:min-h-96 md:aspect-[16/10] lg:mt-0 mt-20">
        <JoinUsImageCards />
      </div>
    </Container>
  );
};

export default JoinSection;
