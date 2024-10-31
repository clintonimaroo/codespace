import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";

import JoinSection from "@/components/join-section";
import { Badge } from "@/components/ui/badge";
import { socials } from "@/data";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <Badge>
            <div className="size-1.5 rounded-full bg-primary" />
            CONTACT CODE SPACE
          </Badge>
          <h1 className="font-medium text-5xl leading-snug">
            Let’s Stay Connected!
          </h1>
          <p className="text-xl text-gray-600">
            Code Space is home to all Gen Z tech talents, and we’d love to see
            more of you.
          </p>
        </div>
      </section>
      <section className="container grid grid-cols-3 gap-10">
        {socials.map((social) => (
          <div
            key={social.name}
            className="w-full bg-gray-100 rounded-xl p-5 flex flex-col justify-between h-80"
          >
            <social.icon size={20} />
            <div className="space-y-2">
              <h4 className="font-medium text-xl capitalize ">{social.name}</h4>
              <p className="text-gray-500 text-base font-normal">
                {social.description}
              </p>
              <Link href={social.url} className="underline  font-normal">
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
