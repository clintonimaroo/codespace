"use client";

import BrandsSection from "@/components/brands-section";
import GoalsCard from "@/components/goals-card";
import { HeroImageCards } from "@/components/image-cards";
import ImageCard from "@/components/image-card";
import JoinSection from "@/components/join-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stats, upcoming_events, what_we_do } from "@/data";
import { CirclePlayIcon } from "lucide-react";
import SpaceBadge from "@/components/space-badge";
import { EventType } from "@/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/container";
import Image from "next/image";

interface Stat {
  name: string;
  value: number | string;
  suffix: string;
  description?: string;
}

interface AnimatedValueProps {
  value: number | string;
  suffix?: string;
}

const AnimatedValue = ({ value, suffix = "" }: AnimatedValueProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = Number(value);
    const duration = 2000;
    const increment = (end / duration) * 16;

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span ref={ref} className="inline-flex">
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Container className="container grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 md:py-20 content-center">
        <div className="space-y-3 md:space-y-5 flex-col flex  justify-center">
          <SpaceBadge>Version 2.0</SpaceBadge>
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl leading-normal">
            Connecting African Gen Zs for <br /> Growth, Impact, and Success.
          </h1>
          <p className="text-base sm:text-lg md:text-xl subtitle">
            At Code Space, we unite Gen Zs in tech across Africa, creating a
            vibrant community where you can thrive. Here, you can connect with
            like-minded peers, share insights, and gain the support you need to
            grow, build, and accelerate your career. Don’t navigate your tech
            career alone.
          </p>
          <div className="flex items-center gap-5 md:flex-row flex-col">
            <Button className="w-full md:w-fit">Join the Community</Button>
            <Button
              variant={"ghost"}
              className="[&_svg]:size-6 w-full md:w-fit"
            >
              <CirclePlayIcon strokeWidth={1.5} size={30} />
              Watch 2024 Events
            </Button>
          </div>
        </div>
        <div className="w-full relative aspect-[16/10] mt-8 lg:mt-0">
          <HeroImageCards />
        </div>
      </Container>

      {/* what we do */}
      <Container className="container space-y-5 py-20">
        <Badge>
          <div className="size-1.5 rounded-full bg-primary" />
          WHAT DO WE DO?
        </Badge>
        <h1 className="sm:text-2xl text-xl leading-normal sm:w-4/5">
          At Code Space, we unite Gen&nbsp;Zs in tech across Africa, fostering a
          vibrant community where you can connect, share insights, and grow.
          Don&apos;t navigate your tech career alone—thrive with us.
        </h1>
        <Button>Join us</Button>
      </Container>

      <section className="min-h-screen bg-[#5c5ad1]">
        <Container className=" h-full flex flex-col justify-between bg-cover py-20 bg-top bg-no-repeat bg-[url('/images/what-we-do-bg.svg')]">
          <div className="space-y-4 w-full md:max-w-sm lg:max-w-md">
            <h3 className="text-3xl text-white font-normal">Our Mission</h3>
            <p className="text-white w-full sm:text-lg">
              We are a nonprofit community empowering Gen Z through mentorship,
              education, and global tech opportunities. We believe in the power
              of technology to change the world, and we are here to help the
              next generation lead the charge.
            </p>
            <Button variant={"white"}>Get Involved</Button>
          </div>

          <div className="space-y-4 w-full md:max-w-sm lg:max-w-md self-end mt-16">
            <h3 className="text-3xl text-white font-normal">
              NETWORK. GROW. BUILD.
            </h3>
            <p className="text-white w-full sm:text-lg">
              We&apos;re all about empowering Code Spacers to thrive beyond
              Africa. By connecting you to global opportunities and equipping
              you with essential resources such as job opportunities,
              mentorship, tech upskilling, data, laptops, and more, we help you
              unlock your full potential and propel your career forward.
            </p>
            <Button variant={"white"}>Get Involved</Button>
          </div>
        </Container>
      </section>
      <Container className="container py-20 w-full">
        <div className="space-y-5">
          <Badge>
            <div className="size-1.5 rounded-full bg-primary" />
            CODE SPACE
          </Badge>
          <h1 className="font-medium text-2xl leading-normal sm:w-4/5 ">
            What We Do
          </h1>
          <p className="text-lg sm:w-4/5">
            We are driving the future forward by ensuring that Gen Z tech
            talents across Africa can access the resources they need to thrive.
            We are on a mission to connect, empower, and accelerate the careers
            of Africa&apos;s next generation of tech leaders.
          </p>
          <p className="text-lg">
            {" "}
            Here&apos;s how we&apos;re making that happen:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {what_we_do.map((item) => (
              <GoalsCard {...item} key={item.title} />
            ))}
          </div>
          <div className="!my-20 w-full flex justify-center">
            <Button className="mx-auto">Explore more</Button>
          </div>
        </div>
      </Container>
      {/* Goals */}
      <Container className="container grid grid-cols-1 md:grid-cols-3 gap-5">
        <h1 className="md:text-5xl text-4xl col-span-1">Our Goals</h1>
        <div className="flex col-span-2">
          <svg
            className="inline flex-shrink-0 md:scale-100 scale-50"
            width={44}
            height={39}
            viewBox="0 0 44 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.3073 26.5394C41.6247 21.8601 38.511 19.1986 33.9421 19.2595C32.2878 17.2195 30.142 12.3965 34.793 3.21808C25.8023 9.59195 17.034 36.9141 34.793 35.7998C39.1164 35.5285 42.99 31.2188 42.3073 26.5394Z"
              stroke="#989898"
              strokeWidth={3}
            />
            <path
              d="M19.5587 28.9339C19.5756 24.2048 16.8898 21.1094 12.3625 20.4897C11.0282 18.2262 9.98222 10.3848 15.9389 2C6.10522 6.96549 -6.96916 35.433 10.7581 36.9737C15.0738 37.3488 19.5418 33.6631 19.5587 28.9339Z"
              stroke="#989898"
              strokeWidth={3}
            />
          </svg>

          <p className="p-2 text-lg md:text-2xl">
            Our goal is to create a unified platform that connects tech-savvy
            teenagers from all over Africa. We aim to provide a space where they
            can come together to share opportunities, collaborate on impressive
            projects, and forge meaningful relationships. By fostering this
            community, we strive to empower young african tech enthusiasts and
            nurture their passion for innovation and growth.
          </p>

          <svg
            className="inline flex-shrink-0 md:scale-100 scale-50 self-end"
            width="44"
            height="37"
            viewBox="0 0 44 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.91287 11.0323C2.58806 15.6605 5.66778 18.2929 10.1868 18.2327C11.8231 20.2504 14.787 25.2871 10.1868 34.3653C19.0794 28.061 26.9104 0.770927 9.34526 1.87303C5.06901 2.14135 1.23769 6.40405 1.91287 11.0323Z"
              stroke="#989898"
              strokeWidth="3"
            />
            <path
              d="M24.5167 9.81324C24.5001 14.4907 27.1565 17.5523 31.6344 18.1652C32.9542 20.404 34.1208 26.955 28.229 35.2482C37.9555 30.3369 50.7551 3.38517 33.2212 1.86133C28.9527 1.49035 24.5334 5.13578 24.5167 9.81324Z"
              stroke="#989898"
              strokeWidth="3"
            />
          </svg>
        </div>
      </Container>
      {/* Upcoming Events */}
      <Container className="container space-y-2 py-20">
        <SpaceBadge>UPCOMING</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Upcoming Events</h1>
        <p className="text-xl subtitle sm:w-1/2">
          Join us for our upcoming events at Code Space, where you can connect,
          learn, and elevate your tech journey!
        </p>
        <div className="w-full space-y-10 !mt-10">
          {upcoming_events.map((event) => (
            <EventCard
              key={event.action_link}
              {...event}
              stats={event.stats || []}
            />
          ))}
        </div>
      </Container>

      {/* <div className="!my-18 w-full flex justify-center">
        <Button className="mx-auto">View Events</Button>
      </div> */}

      {/* milestones */}
      <Container className="container py-20 space-y-20">
        <div className="space-y-3 relative flex flex-col items-center justify-center text-center w-full  sm:w-1/2  mx-auto">
          <svg
            className="absolute -right-10 sm:right-0 top-0 scale-50 sm:scale-75"
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2439 63.4598C35.5513 61.1617 41.9779 51.1104 42.78 50.6427C45.1561 49.2566 78.4211 50.3359 82.9727 53.0965C84.7606 54.1807 91.686 67.3308 91.686 68.9246C91.686 69.9315 74.772 70.745 71.8444 70.8909C68.4657 71.0596 61.1207 70.5906 53.7591 68.9246C47.7268 67.559 41.8206 65.6756 35.5513 64.9489C35.4025 64.9314 39.0821 71.0664 42.78 76.3756C44.5048 78.8531 56.2282 101.145 57.8509 101.877C59.4733 102.61 88.2072 71.7216 91.9629 69.0504"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M71.5878 71.4255C67.6849 79.7273 60.6737 95.5743 59.4731 100.325"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M54.7012 71.03C55.9345 80.7992 57.6083 90.6223 58.7393 100.325"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M57.2706 49.2566C54.9771 55.7514 55.6567 63.0853 54.7012 69.8421"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70.4866 50.8401C71.119 56.706 70.3159 67.5324 72.3222 71.4256"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M25.0928 49.2563C22.4589 47.4749 20.134 45.7661 19.825 45.6936"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M41.8516 34.213C40.7808 32.085 41.8516 32.3729 40.1155 29.4038"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M69.0313 36.1926C68.6069 33.6173 69.0355 30.8256 69.1883 28.2749"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M89.9434 42.1307C91.9626 40.5473 92.5398 39.818 93.9815 38.9639"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M106.463 65.4874C108.299 64.9928 108.915 65.0952 110.135 64.4978"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M96.9192 95.1782C97.861 96.1418 98.6524 97.2771 99.489 98.3454"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.503384"
              d="M21.6605 74.7883C21.1568 75.3854 20.434 75.5849 19.825 75.9808"
              stroke="#5B5AD1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <SpaceBadge>MILESTONES</SpaceBadge>
          <h3 className="text-2xl sm:text-3xl font-medium">Our Reach So Far</h3>
          <p>
            Your Tech Journey is much <br /> Smoother with Us!{" "}
          </p>
          <Button>Become a Member</Button>
        </div>
        {/* milestones */}

        {stats.map((stat: Stat) => (
          <div
            key={stat.name}
            className="w-full flex flex-col gap-5 md:flex-row border-b py-5 justify-between items-baseline"
          >
            <div>
              <h4 className="text-3xl sm:text-5xl font-light">
                <AnimatedValue value={stat.value} suffix={stat.suffix} /> <br />
                {stat.name}
              </h4>
            </div>
            <p className="sm:w-1/3 sm:text-right text-balance">
              {stat.description}
            </p>
          </div>
        ))}
      </Container>
      {/* sponsor */}
      <Container className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <h1 className="text-3xl text-center sm:text-left sm:text-5xl">
            Sponsor a Code Spacer Today!
          </h1>
          <Button>Donate Today</Button>
        </div>
        <div>
          <p className="md:text-right text-lg text-balance">
            A lack of resources should never stand in the way of reaching
            one&apos;s full potential. But for many tech talents, it does. When
            you sponsor a Code Spacer you break that barrier and help someone to
            become a step closer to fulfilling their dreams. Wouldn&apos;t you
            like to take that chance? If you donate as little as $5, you help a
            Code Spacer get access to data for a month. A $150 - $200 donation
            opens the door to tech training and mentorship, allowing a Code
            Spacer to thrive. And with your continued generosity, we can get
            Code Spacers laptops to ensure their careers are not put on hold
            because of a lack of essential resources. Together, we can keep a
            Code Spacer&apos;s dream alive!
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2 aspect-video relative mt-20">
          <ImageCard
            src={"/images/hackathon.png"}
            className="w-1/2 absolute top-1/2 right-14 aspect-[6/4] -mt-20 rotate-[9deg] [&>#image-card]:h-[90%]"
          />
          <ImageCard
            src={"/images/hackathon.png"}
            className="w-1/2 absolute top-0 left-14 aspect-[6/4] -rotate-3 [&>#image-card]:h-[90%]"
          />
        </div>
      </Container>
      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default Home;

const EventCard = ({
  title,
  date,
  description,
  action_link,
  action_text,
  location,
  image,
  stats = [],
}: EventType & { stats?: Stat[] }) => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10">
      <div className="w-full max-w-sm mx-auto flex-shrink-0 drop-shadow-md shadow-gray-50/45 aspect-square bg-white p-3">
        <div className="w-full h-full relative">
          <Image src={image} alt={title} fill className="object-cover" />
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
                className={cn("flex-grow", {
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
