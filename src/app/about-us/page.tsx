import GoalsCard from "@/components/goals-card";
import HeroImageCards from "@/components/hero-image-cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { values, WhatWeDo } from "@/data";

import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="container grid grid-cols-2 gap-5 py-20 content-center">
        <div className="space-y-5 flex-col flex  justify-center">
          <Badge>
            <div className="size-1.5 rounded-full bg-primary" />
            ABOUT US
          </Badge>

          <p className="text-2xl text-gray-800 text-balance leading-normal">
            Code Space is a tech-driven community empowering Gen Z tech talents
            across Africa with resources, mentorship, and global opportunities,
            fostering a supportive ecosystem for growth and career success.
          </p>
        </div>
        <div className="w-full relative aspect-[16/10]">
          <HeroImageCards />
        </div>
      </section>
      <section className="min-h-screen bg-foreground mb-20">
        <section className="container  h-full flex flex-col justify-between bg-cover py-20 bg-top bg-no-repeat ">
          <div className="space-y-4 w-full sm:w-1/2">
            <h3 className="text-3xl text-white font-normal">Our Mission</h3>
            <p className="text-white w-full sm:w-4/5">
              To help Gen Z tech talents across Africa reach their full
              potential by connecting them to resources, mentorship, and a
              supportive community that accelerates their tech careers and
              unlocks global opportunities.
            </p>
            <Button variant={"white"} className="text-foreground">
              Get Involved
            </Button>
          </div>

          <div className="space-y-4 w-full sm:w-2/5 self-end">
            <h3 className="text-3xl text-white font-normal">
              NETWORK. GROW. BUILD.
            </h3>
            <p className="text-white w-full ">
              A thriving ecosystem where every Gen Z tech talent in Africa has
              the support, resources, and global opportunities to build
              impactful careers and drive the future of technology.
            </p>
            <Button variant={"white"} className="text-foreground">
              Get Involved
            </Button>
          </div>
        </section>
        {/* Values */}
        <section className="container py-20 w-full">
          <div className="space-y-5">
            <Badge>
              <div className="size-1.5 rounded-full bg-primary" />
              VALUES
            </Badge>
            <h1 className="font-medium text-2xl leading-normal sm:w-4/5 text-white ">
              Our Values
            </h1>
            <div className="grid grid-cols-3 gap-10">
              {values.map((item) => (
                <GoalsCard
                  variant="dark"
                  {...(item as WhatWeDo)}
                  key={item.title}
                />
              ))}
            </div>
            <div className="!my-20 w-full flex justify-center">
              <Button className="mx-auto">Explore more</Button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
