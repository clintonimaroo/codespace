import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";

import JoinSection from "@/components/join-section";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <Badge>
            <div className="size-1.5 rounded-full bg-primary" />
            CODE SPACE EVENTS
          </Badge>
          <h1 className="font-medium text-5xl leading-snug">
            We Are Always Cooking Something New!
          </h1>
          <p className="text-xl text-gray-600">
            When we host tech events, they inspire and transform careers. Save
            the date for upcoming events and catch the live stream replays of
            our past sessions.
          </p>
        </div>
      </section>
      {/* what we do */}
      <section className="container space-y-2 py-20">
        <Badge>
          <div className="size-1.5 rounded-full bg-primary" />
          UPCOMING
        </Badge>
        <h1 className="font-normal text-2xl leading-normal">Upcoming Events</h1>
        <p className="text-xl text-gray-600 sm:w-1/2">
          Join us for our upcoming events at Code Space, where you can connect,
          learn, and elevate your tech journey!
        </p>
      </section>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default Home;
