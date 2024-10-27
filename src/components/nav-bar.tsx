import React from "react";
import { LogoLarge } from "./brand";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/data";

const NavBar = () => {
  return (
    <nav className="container flex items-center justify-between py-8">
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
