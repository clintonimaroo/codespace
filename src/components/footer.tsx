import React from "react";
import { LogoLarge } from "./brand";
import { Button } from "./ui/button";
import { links, other_links, socials } from "@/data";
import Link from "next/link";
import Container from "@/components/container";


const Footer = () => {
  return (
    <Container className="container grid grid-cols-2 md:grid-cols-7 gap-10">
      <div className="col-span-2 w-full space-y-5 ">
        <LogoLarge />
        <p className="text-base text-gray-500">
          We are a vibrant community for the tech-savvy Gen Z developers,
          founders, designers, and tech enthusiasts across Africa.
        </p>
      </div>
      <ul className="space-y-2 col-span-1">
        <li className="text-primary text-lg font-medium mb-3">
          Reach out to us
        </li>
        {socials.map((social) => (
          <li key={social.name} className="hover:text-primary">
            <Link href={social.url} className="capitalize">
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-2">
        <li className="text-primary text-lg font-medium mb-3">Quick Links</li>
        {links.map((social) => (
          <li key={social.name} className="hover:text-primary">
            <Link href={social.href} className="capitalize">
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-2">
        <li className="text-primary text-lg font-medium mb-3">Others</li>
        {other_links.map((social) => (
          <li key={social.name} className="hover:text-primary">
            <Link href={social.href} className="capitalize">
              {social.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="col-span-2 space-y-5">
        <h4 className="text-primary text-lg font-medium">
          Subscribe to our Newsletter
        </h4>
        <div className="gap-4">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <div className="w-full bg-gray-100 relative h-12 p-1 rounded-2xl flex flex-row items-center justify-between">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className=" bg-gray-100 p-2  outline-none h-full w-3/4"
            />
            <Button className="w-1/4 !text-xs !rounded-xl" size={"sm"}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-7 py-5 border-t">
        <p className="text-center text-gray-500 font-normal">
          Code Space | All Rights Reserved | Copyright{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  );
};

export default Footer;
