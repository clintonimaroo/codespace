import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";

import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventType, past_events, upcoming_events } from "@/data";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import Container from "@/components/container";

type StatType = { value: number; suffix: string; name: string };

const Events = () => {
  return (
    <>
      {/* Hero Section */}
      <Container className="container gap-5 py-5 md:py-20 ">
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
      </Container>
      {/* what we do */}
      <Container className="container space-y-2 py-20">
        <SpaceBadge>UPCOMING</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Upcoming Events</h1>
        <p className="text-xl subtitle sm:w-1/2">
          Join us for our upcoming events at Code Space, where you can connect,
          learn, and elevate your tech journey!
        </p>
        <div className="w-full space-y-10 !mt-10">
          {upcoming_events.map((event) => (
            <UpcomingEvent key={event.action_link} {...event} />
          ))}
        </div>
      </Container>

      <Container className="container space-y-2">
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
      </Container>

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
  action_text,
  image,
}: EventType) => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10">
      <div className="w-full max-w-sm flex-shrink-0 drop-shadow-md shadow-gray-50/45 aspect-square bg-white p-3 rounded-sm">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-sm"
          />
        </div>
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

const UpcomingEvent = ({
  title,
  date,
  description,
  action_link,
  action_text,
  location,
  image,
  stats = [],
}: EventType & { stats?: StatType[] }) => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10">
      <div className="w-full md:max-w-sm max-w-full lg:max-h-full mx-auto flex-shrink-0 drop-shadow-md shadow-gray-50/45 aspect-square bg-white p-3 md:max-h-[440px] object-cover">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover h-full w-auto"
          />
        </div>
      </div>
      <div className="py-5 flex flex-col space-y-2 justify-around">
        <h2 className="text-2xl font-normal">{title}</h2>
        <p className="text-xl text-gray-700 font-light">{description}</p>
        <p className="text-lg">
          Date <span className="text-gray-600 ml-2">{date}</span>
        </p>
        <p className="text-lg">
          Location <span className="text-gray-600 ml-2">{location}</span>
        </p>
        {stats && (
          <div className="w-full max-w-xs flex flex-row items-center divide-x">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={classNames("flex-grow", {
                  "flex flex-col items-center justify-center": i !== 0,
                })}
              >
                <div>
                  <h4 className="text-xl font-semibold">
                    {stat.value}{" "}
                    <span className="text-primary text-base">
                      {stat.suffix}
                    </span>
                  </h4>
                  <p className="subtitle">{stat.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <Button asChild className="w-fit">
          <Link href={action_link}>{action_text}</Link>
        </Button>
      </div>
    </div>
  );
};
