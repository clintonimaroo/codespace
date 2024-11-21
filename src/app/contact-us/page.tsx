import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";

import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import { socials } from "@/data";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-5 md:py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <SpaceBadge>CONTACT CODE SPACE</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            Let&apos;s Stay Connected!
          </h1>
          <p className="text-lg md:text-xl subtitle">
            Code Space is home to all Gen Z tech talents, and we&apos;d love to
            see more of you.
          </p>
        </div>
      </section>
      <section className="container grid grid-cols-2 md:grid-cols-3 gap-10">
        {socials.map((social) => (
          <div
            key={social.name}
            className="w-full bg-gray-100 rounded-xl p-5 flex flex-col justify-between  gap-5 md:h-80 overflow-hidden"
          >
            <social.icon size={20} />
            <div className="space-y-2">
              <h4 className="font-medium text-xl capitalize ">{social.name}</h4>
              <p className="text-gray-500 text-sm md:text-base font-normal">
                {social.description}
              </p>
              <Link
                href={social.url}
                className="underline  font-normal md:text-base text-sm line-clamp-1"
              >
                {social.username}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default ContactUs;
