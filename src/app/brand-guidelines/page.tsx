import { Logo as LogoSvg } from "@/components/brand";
import SpaceBadge from "@/components/space-badge";
import Image from "next/image";
import React from "react";

import LogoLarge from "@/assets/images/logo-large.png";
import LogoLargeWhite from "@/assets/images/logo-large-white.png";
import LogoLargeBlack from "@/assets/images/logo-large-black.png";

import Logo from "@/assets/images/logo.png";
import LogoWhite from "@/assets/images/logo-white.png";
import LogoBlack from "@/assets/images/logo-black.png";
import Container from "@/components/container";
import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";

const Brand = () => {
  return (
    <>
      <div className="container mx-auto py-10 md:py-20 px-6 md:px-0">
        <div className="space-y-5 flex-col flex justify-center items-center text-center w-full md:w-1/2 mx-auto">
          <LogoSvg className="scale-75" />
          <SpaceBadge>Code Space Brand Guidelines</SpaceBadge>
          <div className="flex justify-center">
            <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl leading-snug">
              Code Space Brand Guidelines
            </h1>
          </div>
          <p className="text-lg md:text-xl subtitle font-normal">
            Maintaining consistency and authenticity in every interaction.
          </p>
        </div>
      </div>

      <Container className="py-10 md:py-20 space-y-10 md:space-y-20 px-6 md:px-0">
        {/* Logo Usage */}
        <div className="space-y-5">
          <SpaceBadge>Logo usage</SpaceBadge>
          <h1 className="font-normal text-xl md:text-2xl leading-normal">Our Logo</h1>
          <p className="text-lg md:text-xl subtitle w-full sm:w-4/5">
            The Code Space logo represents our vision to connect and empower the
            next generation of tech innovators. To ensure consistency, follow
            the guidelines below for proper usage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
            <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-5 md:p-10">
              <div className="w-4/5 h-full relative">
                <Image
                  width={560}
                  height={71}
                  alt="logo-large"
                  className="object-contain w-full h-full"
                  src={LogoLarge}
                />
              </div>
            </div>
            <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-primary p-5 md:p-10">
              <div className="w-4/5 h-full relative">
                <Image
                  width={920}
                  height={200}
                  alt="logo-large-white"
                  className="object-contain w-full h-full"
                  src={LogoLargeWhite}
                />
              </div>
            </div>
            <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-5 md:p-10">
              <div className="w-4/5 h-full relative">
                <Image
                  width={920}
                  height={200}
                  alt="logo-large-black"
                  className="object-contain w-full h-full"
                  src={LogoLargeBlack}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Icons Usage */}
        <div className="space-y-5">
          <SpaceBadge>Icons usage</SpaceBadge>
          <h1 className="font-normal text-xl md:text-2xl leading-normal">
            Icons Variation
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
            <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-5 md:p-10">
              <div className="w-4/5 h-full relative">
                <Image
                  width={280}
                  height={280}
                  alt="logo"
                  className="object-contain w-full h-full"
                  src={Logo}
                />
              </div>
            </div>
            <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-primary p-5 md:p-10">
              <div className="w-4/5 h-full relative">
                <Image
                  width={280}
                  height={280}
                  alt="logo-white"
                  className="object-contain w-full h-full"
                  src={LogoWhite}
                />
              </div>
            </div>
            <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-5 md:p-10">
              <div className="w-4/5 h-full relative">
                <Image
                  width={280}
                  height={280}
                  alt="logo-black"
                  className="object-contain w-full h-full"
                  src={LogoBlack}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-5">
          <SpaceBadge>color usage</SpaceBadge>
          <h1 className="font-normal text-xl md:text-2xl leading-normal">Our Colors</h1>
          <p className="text-lg md:text-xl subtitle w-full sm:w-4/5">
            Our color palette reflects our bold and vibrant mission. These
            colors are used across all brand assets and communications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
            <div className="w-full aspect-video rounded-xl flex flex-col text-white font-light text-lg md:text-xl text-center items-center justify-center relative bg-[#5B5AD1] p-5 md:p-10">
              <p>#5B5AD1</p>
              <p>Primary</p>
            </div>
            <div className="w-full aspect-video rounded-xl flex flex-col text-white font-light text-lg md:text-xl text-center items-center justify-center relative bg-[#0C0C21] p-5 md:p-10">
              <p>#0C0C21</p>
              <p>Secondary</p>
            </div>
            <div className="w-full aspect-video rounded-xl flex flex-col text-white font-light text-lg md:text-xl text-center items-center justify-center relative bg-[#55B76F] p-5 md:p-10">
              <p>#55B76F</p>
              <p>Tertiary</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-5">
          <SpaceBadge>Typography</SpaceBadge>
          <div className="space-y-10">
            <div>
              <h1 className="font-normal text-xl md:text-2xl leading-normal">
                Font Family
              </h1>
              <p className="text-lg md:text-xl text-black font-light">
                Typography plays a key role in shaping our voice and tone. We
                use clean, modern fonts that are easy to read and align with our
                forward-thinking values.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-normal text-xl md:text-2xl leading-normal">
                Primary Font
              </h2>
              <h3 className="text-lg md:text-xl">SF Pro Display</h3>
              <p className="text-lg md:text-xl text-black font-light">
                SF Pro Display is a modern, sans-serif typeface designed by
                Apple, primarily for use across its platforms like iOS, macOS,
                and watchOS. It&apos;s a part of the San Francisco font family,
                which includes SF Pro Text (for smaller sizes) and SF Compact
                (for tight spaces, like the Apple Watch).
              </p>
            </div>
          </div>
        </div>

        {/* Tone */}
        <div className="space-y-5">
          <SpaceBadge>TONE</SpaceBadge>
          <div className="space-y-10">
            <div>
              <h2 className="font-normal text-xl md:text-2xl leading-normal">
                Tone of Voice
              </h2>
              <p className="text-lg md:text-xl text-black font-light">
                Our tone of voice is friendly, motivational, and empowering. We
                aim to inspire and uplift young technologists.
              </p>
            </div>

            <div>
              <h2 className="font-normal text-xl md:text-2xl leading-normal">
                Guidelines
              </h2>
              <div className="space-y-2 text-lg md:text-xl font-light">
                <p className="text-black">
                  • Be Inclusive: Use language that resonates with a diverse,
                  global audience.
                </p>
                <p className="text-black">
                  • Be Approachable: Avoid overly technical jargon; make content
                  accessible to everyone.
                </p>
                <p className="text-black">
                  • Be Motivational: Always encourage and inspire action.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-normal text-xl md:text-2xl leading-normal">Examples</h2>
              <div className="space-y-2 text-lg md:text-xl font-light">
                <p className="text-black">
                  • Before: &ldquo;Sign up for our program.&rdquo;
                </p>
                <p className="text-black">
                  • After: &ldquo;Join a community where you can learn, grow,
                  and shape the future of tech!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Materials Usage */}
        <div className="bg-[#5b5ad1] rounded-lg">
          <div className="p-6 md:p-10 lg:p-20 space-y-8 md:space-y-10">
            <div className="flex flex-col items-center text-center">
              <SpaceBadge>INFO</SpaceBadge>
              <h3 className="text-2xl md:text-3xl text-white mt-4 font-normal">
                Use Of Our Brand Materials
              </h3>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl text-white font-normal">
                General Guidelines
              </h3>
              <p className="text-white mt-4">
                Please refrain from using our name, logos, or screenshots
                (&ldquo;brand materials&rdquo;) in a manner that could be
                confusing, misleading, or imply sponsorship, endorsement, or
                affiliation with Code Space. For instance, your name and logo
                should be more prominent than that of Code Space. Additionally,
                please do not alter or modify our logo in any way — we prefer it
                as it is!
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl text-white font-normal mb-2">
                  Advertising, Promotional, and Sales Materials
                </h3>
                <p className="text-white">
                  Before utilizing our logo on websites, products, packaging,
                  manuals, or for any commercial or product-related purposes,
                  please consult with us. This is especially important for
                  companies that have collaborated with our community or any of
                  our initiatives.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl text-white font-normal mb-2">
                  Educational and Instructional Use
                </h3>
                <p className="text-white">
                  You may use our brand materials for educational and
                  instructional purposes, but be mindful that it should not
                  create confusion or imply our sponsorship or partnership. We
                  generally do not allow our logos or screenshots to appear on
                  book covers.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl text-white font-normal mb-2">
                  Products, Websites, Names, and Logos
                </h3>
                <p className="text-white">
                  Please do not incorporate our name as part of your company or
                  service name, website name, trade name, or product name. Avoid
                  using our logo or integrating it with yours. Additionally,
                  refrain from using a domain name that includes &ldquo;Code
                  Space&rdquo; or any similar terms. Our official website domain
                  is codespace.org.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
};

export default Brand;