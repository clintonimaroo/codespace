import { Logo } from "@/components/brand";
import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import { socials } from "@/data";
import Link from "next/link";
import Container from "@/components/container";
import MessageForm from "@/components/message-form";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <Container className="container gap-5 py-5 md:py-20">
        <div className="space-y-5 flex-col flex justify-center items-center text-center sm:w-1/2 mx-auto">
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
      </Container>

      <Container className="container px-6 md:px-0 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social) => (
            <div
              key={social.name}
              className="w-full min-h-[380px] bg-[#F9FAFB] rounded-xl p-8 flex flex-col justify-between"
            >
              <social.icon size={24} className="text-black" />
              <div className="space-y-2">
                <h4 className="font-normal text-xl capitalize-first">
                  {social.name === 'twitter' ? 'X (Formerly Twitter)' :
                    social.name.charAt(0).toUpperCase() + social.name.slice(1).toLowerCase()}
                </h4>
                <p className="text-[#6B7280] text-base/relaxed">
                  {social.description}
                </p>
                <Link
                  href={social.url}
                  className="text-black underline font-normal text-base"
                >
                  {social.name === 'email' ? 'hello@codespaces.org' : '@codespace'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Message Form */}
      <MessageForm />

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default ContactUs;