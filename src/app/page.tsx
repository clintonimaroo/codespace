import ImageCard from "@/components/image-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brands, stats, what_we_do, WhatWeDo } from "@/data";
import { cn } from "@/lib/utils";
import { CirclePlayIcon } from "lucide-react";
import Image from "next/image";

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
      {/* what we do */}
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
      <section className="h-screen bg-[#5c5ad1] ">
        <div className="container  h-full flex flex-col justify-between bg-cover py-20 bg-top bg-no-repeat bg-[url('/images/what-we-do-bg.svg')]">
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
      <section className="container py-20 w-full">
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
            of Africa’s next generation of tech leaders.
          </p>
          <p className="text-lg"> Here’s how we’re making that happen:</p>
          <div className="grid grid-cols-3 gap-5">
            {what_we_do.map((item) => (
              <WhatWeDoCard {...item} key={item.title} />
            ))}
          </div>
          <div className="!my-20 w-full flex justify-center">
            <Button className="mx-auto">Explore more</Button>
          </div>
        </div>
      </section>
      {/* Goals */}
      <section className="container grid grid-cols-2 gap-5">
        <h1 className="text-5xl font-semibold">Our Goals</h1>
        <div className="">
          <p className="">
            <svg
              className="inline flex-shrink-0"
              width="44"
              height="39"
              viewBox="0 0 44 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.3073 26.5394C41.6247 21.8601 38.511 19.1986 33.9421 19.2595C32.2878 17.2195 30.142 12.3965 34.793 3.21808C25.8023 9.59195 17.034 36.9141 34.793 35.7998C39.1164 35.5285 42.99 31.2188 42.3073 26.5394Z"
                stroke="#989898"
                stroke-width="3"
              />
              <path
                d="M19.5587 28.9339C19.5756 24.2048 16.8898 21.1094 12.3625 20.4897C11.0282 18.2262 9.98222 10.3848 15.9389 2C6.10522 6.96549 -6.96916 35.433 10.7581 36.9737C15.0738 37.3488 19.5418 33.6631 19.5587 28.9339Z"
                stroke="#989898"
                stroke-width="3"
              />
            </svg>
            <span className="p-3 text-2xl font-medium">
              Our goal is to create a unified platform that connects tech-savvy
              teenagers from all over Africa. We aim to provide a space where
              they can come together to share opportunities, collaborate on
              impressive projects, and forge meaningful relationships. By
              fostering this community, we strive to empower young african tech
              enthusiasts and nurture their passion for innovation and growth.
            </span>
            <svg
              className="inline flex-shrink-0 self-end"
              width="44"
              height="37"
              viewBox="0 0 44 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91287 11.0323C2.58806 15.6605 5.66778 18.2929 10.1868 18.2327C11.8231 20.2504 14.787 25.2871 10.1868 34.3653C19.0794 28.061 26.9104 0.770927 9.34526 1.87303C5.06901 2.14135 1.23769 6.40405 1.91287 11.0323Z"
                stroke="#989898"
                stroke-width="3"
              />
              <path
                d="M24.5167 9.81324C24.5001 14.4907 27.1565 17.5523 31.6344 18.1652C32.9542 20.404 34.1208 26.955 28.229 35.2482C37.9555 30.3369 50.7551 3.38517 33.2212 1.86133C28.9527 1.49035 24.5334 5.13578 24.5167 9.81324Z"
                stroke="#989898"
                stroke-width="3"
              />
            </svg>
          </p>
        </div>
      </section>
      {/* milestones */}
      <section className="container py-20 space-y-20">
        <div className="space-y-3 relative flex flex-col items-center justify-center text-center w-2/5 mx-auto">
          <svg
            className="absolute right-0 top-0 scale-75"
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2439 63.4598C35.5513 61.1617 41.9779 51.1104 42.78 50.6427C45.1561 49.2566 78.4211 50.3359 82.9727 53.0965C84.7606 54.1807 91.686 67.3308 91.686 68.9246C91.686 69.9315 74.772 70.745 71.8444 70.8909C68.4657 71.0596 61.1207 70.5906 53.7591 68.9246C47.7268 67.559 41.8206 65.6756 35.5513 64.9489C35.4025 64.9314 39.0821 71.0664 42.78 76.3756C44.5048 78.8531 56.2282 101.145 57.8509 101.877C59.4733 102.61 88.2072 71.7216 91.9629 69.0504"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M71.5878 71.4255C67.6849 79.7273 60.6737 95.5743 59.4731 100.325"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M54.7012 71.03C55.9345 80.7992 57.6083 90.6223 58.7393 100.325"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M57.2706 49.2566C54.9771 55.7514 55.6567 63.0853 54.7012 69.8421"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M70.4866 50.8401C71.119 56.706 70.3159 67.5324 72.3222 71.4256"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M25.0928 49.2563C22.4589 47.4749 20.134 45.7661 19.825 45.6936"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M41.8516 34.213C40.7808 32.085 41.8516 32.3729 40.1155 29.4038"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M69.0313 36.1926C68.6069 33.6173 69.0355 30.8256 69.1883 28.2749"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M89.9434 42.1307C91.9626 40.5473 92.5398 39.818 93.9815 38.9639"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M106.463 65.4874C108.299 64.9928 108.915 65.0952 110.135 64.4978"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M96.9192 95.1782C97.861 96.1418 98.6524 97.2771 99.489 98.3454"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.503384"
              d="M21.6605 74.7883C21.1568 75.3854 20.434 75.5849 19.825 75.9808"
              stroke="#5B5AD1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Badge>
            <div className="size-1.5 rounded-full bg-primary" />
            MILESTONES
          </Badge>
          <h3 className="text-3xl font-medium">Our Reach So Far</h3>
          <p>
            Your Tech Journey is much <br /> Smoother with Us!{" "}
          </p>
          <Button>Become a Member</Button>
        </div>
        {stats.map((stat, i) => (
          <div
            key={i}
            className="w-full flex flex-row border-b py-5 justify-between items-baseline"
          >
            <div>
              <h4 className="text-5xl font-light">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span> <br />{" "}
                {stat.name}
              </h4>
            </div>
            <p className="w-1/3 text-right text-balance">{stat.description}</p>
          </div>
        ))}
      </section>
      {/* sponsor */}
      <section className="container py-20 grid grid-cols-2 gap-5">
        <div className="space-y-4">
          <h1 className="text-5xl ">Sponsor a Code Spacer Today!</h1>
          <Button>Donate Today</Button>
        </div>
        <div>
          <p className="text-right text-lg">
            A lack of resources should never stand in the way of reaching one’s
            full potential. But for many tech talents, it does. When you sponsor
            a Code Spacer you break that barrier and help someone to become a
            step closer to fulfilling their dreams. Wouldn’t you like to take
            that chance? If you donate as little as $5, you help a Code Spacer
            get access to data for a month. A $150 - $200 donation opens the
            door to tech training and mentorship, allowing a Code Spacer to
            thrive. And with your continued generosity, we can get Code Spacers
            laptops to ensure their careers are not put on hold because of a
            lack of essential resources. Together, we can keep a Code Spacer’s
            dream alive!
          </p>
        </div>
        <div className="col-span-2 aspect-video relative">
          <ImageCard
            src={"/images/hackathon.png"}
            className="w-1/2 absolute top-1/2 right-14 aspect-[6/4] -mt-20 rotate-[9deg] [&>#image-card]:h-[90%]"
          />
          <ImageCard
            src={"/images/hackathon.png"}
            className="w-1/2 absolute top-0 left-14 aspect-[6/4]  -rotate-3 [&>#image-card]:h-[90%]"
          />
        </div>
      </section>
      {/* Brands */}
      <section className="container py-20 space-y-10">
        <div className="space-y-5 flex flex-col items-center justify-center sm:w-2/5 mx-auto text-center">
          <h3 className="text-3xl font-medium">
            Brands we&apos;ve loved working with
          </h3>
          <p className="text-gray-600 text-lg">
            When brands collaborate with us, they empower thousands of young
            African tech talents. Here are the innovative brands that make our
            mission even more rewarding!
          </p>
        </div>
        <div className="flex-row items-center gap-10 grid grid-cols-2 md:grid-cols-6 content-center">
          {brands.map((brand) => (
            <div key={brand} className="relative w-full aspect-video">
              <Image
                src={`/images/brands/${brand}.png`}
                alt={brand}
                className="w-full h-full object-contain"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

const WhatWeDoCard = (props: WhatWeDo) => (
  <div className="w-full space-y-3  flex flex-col">
    <div className="size-14 text-white flex items-center justify-center bg-primary rounded-lg">
      <props.icon size={30} />
    </div>
    <h3 className="text-xl font-medium">{props.title}</h3>
    <p className="text-gray-600">{props.description}</p>
    <div className="flex-grow" />
    <Badge className="font-normal">{props.date}</Badge>
    <div className="w-full flex flex-row items-center divide-x">
      {props.stats.map((stat, i) => (
        <div
          key={i}
          className={cn("flex-grow", {
            "flex flex-col items-center justify-center": i !== 0
          })}
        >
          <div>
            <h4 className="text-xl font-semibold">
              {stat.value}{" "}
              <span className="text-primary text-base">{stat.suffix}</span>
            </h4>
            <p className="text-gray-600">{stat.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
