import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";

import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventType, past_events, upcoming_events } from "@/data";
import Link from "next/link";

const Events = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-5 md:py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <SpaceBadge>CODE SPACE EVENTS</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            We Are Always Cooking Something New!
          </h1>
          <p className="text-xl subtitle font-normal">
            When we host tech events, they inspire and transform careers. Save
            the date for upcoming events and catch the live stream replays of
            our past sessions.
          </p>
        </div>
      </section>
      {/* what we do */}
      <section className="container space-y-2 py-20">
        <SpaceBadge>UPCOMING</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Upcoming Events</h1>
        <p className="text-xl subtitle sm:w-1/2">
          Join us for our upcoming events at Code Space, where you can connect,
          learn, and elevate your tech journey!
        </p>
        <div className="w-full space-y-10 !mt-10">
          {upcoming_events.map((event) => (
            <EventCard key={event.action_link} {...event} />
          ))}
        </div>
      </section>

      <section className="container space-y-2">
        <SpaceBadge>PAST</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Past Events</h1>
        <p className="text-xl subtitle sm:w-4/6">
          Relive the excitement of our past events and explore the
          thought-provoking moments that inspired innovation and growth. You
          never know, you might discover a fresh insight or two!
        </p>
        <div className="w-full space-y-10 !mt-10">
          {past_events.map((event) => (
            <EventCard key={event.action_link} {...event} />
          ))}
        </div>
      </section>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default Events;

const EventCard = ({
  title,
  date,
  description,
  action_link,
  action_text
}: EventType) => {
  return (
    <div className="w-full flex gap-10">
      <div className="w-full max-w-sm flex-shrink-0 drop-shadow-md shadow-gray-50/45  aspect-square bg-white p-3 rounded-sm">
        <div className="w-full h-full bg-gray-50"></div>
      </div>
      <div className="py-5 flex flex-col space-y-2 justify-around">
        <h2 className="text-2xl font-normal">{title}</h2>
        <p className="text-xl text-gray-700 font-light">{description}</p>
        <Badge>{new Date(date).getFullYear()}</Badge>
        <Button asChild className="w-fit">
          <Link href={action_link}>{action_text}</Link>
        </Button>
      </div>
    </div>
  );
};
