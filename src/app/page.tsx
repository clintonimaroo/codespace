import ImageCard from "@/components/image-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlayIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container grid grid-cols-2 gap-5 py-20 content-center">
        <div className="space-y-5 flex-col flex  justify-center">
          <Badge>
            <div className="size-1.5 rounded-full bg-primary" />
            Version 2.0
          </Badge>
          <h1 className="font-medium text-5xl leading-normal">
            Building a Tech Career <br /> Alone is Hard.
          </h1>
          <p className="text-xl text-gray-600">
            But with us, the journey becomes a lot smoother <br /> for techies
            like you!
          </p>
          <div className="flex items-center gap-5">
            <Button>Join the Community</Button>
            <Button variant={"ghost"}>
              <CirclePlayIcon size={20} />
              Watch 2024 Events
            </Button>
          </div>
        </div>
        <div className="w-full relative aspect-[16/10]">
          <ImageCard className="w-2/5 bottom-0 right-0 absolute rotate-[8deg]" />
          <ImageCard className="w-2/5 absolute top-0 right-1/3 -rotate-6" />
        </div>
      </section>
      <section className="container space-y-5 py-20">
        <Badge>
          <div className="size-1.5 rounded-full bg-primary" />
          WHAT DO WE DO?
        </Badge>
        <h1 className="font-medium text-2xl leading-normal sm:w-4/5 ">
          At Code Space, we unite Gen Zs in tech across Africa, fostering a
          vibrant community where you can connect, share insights, and grow.
          Don’t navigate your tech career alone—thrive with us.
        </h1>
        <Button>Join us</Button>
      </section>
      <section className="h-screen bg-cover py-20 bg-top bg-no-repeat bg-[url('/images/what-we-do-bg.svg')]">
        <div className="container  h-full flex flex-col justify-between">
          <div className="space-y-4 w-full sm:w-1/2">
            <h3 className="text-3xl text-white font-normal">Our Mission</h3>
            <p className="text-white w-full sm:w-4/5">
              We are a nonprofit community empowering Gen Z through mentorship,
              education, and global tech opportunities. We believe in the power
              of technology to change the world, and we are here to help the
              next generation lead the charge.
            </p>
            <Button variant={"white"}>Get Involved</Button>
          </div>
          {/* <div></div>
          <div></div> */}
          <div className="space-y-4 w-full sm:w-2/5 self-end">
            <h3 className="text-3xl text-white font-normal">
              NETWORK. GROW. BUILD.
            </h3>
            <p className="text-white w-full ">
              We’re all about empowering Code Spacers to thrive beyond Africa.
              By connecting you to global opportunities and equipping you with
              essential resources such as job opportunities, mentorship, tech
              upskilling, data, laptops, and more, we help you unlock your full
              potential and propel your career forward.
            </p>
            <Button variant={"white"}>Get Involved</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
