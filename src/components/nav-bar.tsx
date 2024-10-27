import React from "react";
import { LogoLarge } from "./brand";
import { Button } from "./ui/button";
import Link from "next/link";

// About us
// Donate
// Events
// Shop
// Gallery
// Blog
// Contact us

const links = [
  { name: "About us", href: "/about" },
  { name: "Donate", href: "/donate" },
  { name: "Events", href: "/events" },
  { name: "Shop", href: "/shop" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contact" }
];

const NavBar = () => {
  return (
    <nav className="container flex items-center justify-between h-16">
      <LogoLarge />
      <ul className="flex flex-row items-center gap-x-5">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Button size={"sm"}>Join the Community</Button>
    </nav>
  );
};

export default NavBar;
