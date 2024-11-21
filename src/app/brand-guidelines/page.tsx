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

const Brand = () => {
  return (
    <>
      <section className="container gap-5 py-5 md:py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <LogoSvg className="scale-75" />
          <SpaceBadge>Code Space Brand Guidelines</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            Code Space Brand Guidelines
          </h1>
          <p className="text-xl subtitle font-normal">
            Maintaining consistency and authenticity in every interaction.
          </p>
        </div>
      </section>
      {/* what we do */}
      <section className="container space-y-2 py-5">
        <SpaceBadge>Logo usage</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Our Logo</h1>
        <p className="text-xl subtitle sm:w-4/5">
          The Code Space logo represents our vision to connect and empower the
          next generation of tech innovators. To ensure consistency, follow the
          guidelines below for proper usage.
        </p>
        <div className="grid grid-cols-3 gap-10 !my-5">
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-10">
            <div className="w-4/5 h-full relative">
              <Image
                layout="fill"
                alt="logo-large"
                className="object-contain w-full h-full"
                src={LogoLarge}
              />
            </div>
          </div>
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-primary p-10">
            <div className="w-4/5 h-full relative">
              <Image
                layout="fill"
                alt="logo-large-white"
                className="object-contain w-full h-full"
                src={LogoLargeWhite}
              />
            </div>
          </div>
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-10">
            <div className="w-4/5 h-full relative">
              <Image
                layout="fill"
                alt="logo-large-black"
                className="object-contain w-full h-full"
                src={LogoLargeBlack}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container space-y-2 py-5">
        <SpaceBadge>Icons usage</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Icons Variation</h1>

        <div className="grid grid-cols-3 gap-10 !my-5">
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-10">
            <div className="w-4/5 h-full relative">
              <Image
                layout="fill"
                alt="logo-large"
                className="object-contain w-full h-full"
                src={Logo}
              />
            </div>
          </div>
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-primary p-10">
            <div className="w-4/5 h-full relative">
              <Image
                layout="fill"
                alt="logo-white"
                className="object-contain w-full h-full"
                src={LogoWhite}
              />
            </div>
          </div>
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative bg-gray-50 p-10">
            <div className="w-4/5 h-full relative">
              <Image
                layout="fill"
                alt="logo-black"
                className="object-contain w-full h-full"
                src={LogoBlack}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container space-y-2 py-5">
        <SpaceBadge>color usage</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Our Colors</h1>
        <p className="text-xl subtitle sm:w-4/5">
          Our color palette reflects our bold and vibrant mission. These colors
          are used across all brand assets and communications.
        </p>
        <div className="grid grid-cols-3 gap-10 !my-10">
          <div className="w-full aspect-video rounded-xl flex flex-col text-white font-light text-xl text-center items-center justify-center relative bg-[#5B5AD1] p-10">
            <p>#5B5AD1</p>
            <p>Primary</p>
          </div>
          <div className="w-full aspect-video rounded-xl flex flex-col text-white font-light text-xl text-center items-center justify-center relative bg-[#0C0C21] p-10">
            <p>#0C0C21</p>
            <p>Secondary</p>
          </div>
          <div className="w-full aspect-video rounded-xl flex flex-col text-white font-light text-xl text-center items-center justify-center relative bg-[#55B76F] p-10">
            <p>#55B76F</p>
            <p>Tertiary</p>
          </div>
        </div>
      </section>
      <section className="container space-y-2 ">
        <SpaceBadge>Typography</SpaceBadge>
        <h1 className="font-normal text-2xl leading-normal">Font Family</h1>
        <p className="text-xl text-black font-light">
          Typography plays a key role in shaping our voice and tone. We use
          clean, modern fonts that are easy to read and align with our
          forward-thinking values.
        </p>

        <div className="space-y-2 !my-5">
          <h1 className="font-normal text-2xl leading-normal">Primary Font</h1>
          <h2 className="text-xl">SF Pro Display</h2>
          <p className="text-xl text-black font-light">
            SF Pro Display is a modern, sans-serif typeface designed by Apple,
            primarily for use across its platforms like iOS, macOS, and watchOS.
            It’s a part of the San Francisco font family, which includes SF Pro
            Text (for smaller sizes) and SF Compact (for tight spaces, like the
            Apple Watch).
          </p>
        </div>
      </section>
      <section className="my-10"></section>
    </>
  );
};

export default Brand;
