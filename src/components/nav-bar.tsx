"use client";
import React from "react";
import { LogoLarge } from "./brand";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="container flex items-center justify-between py-8">
      <Link href={"/"}>
        <LogoLarge />
      </Link>
      <ul className="flex flex-row items-center gap-x-5">
        {links.map((link) => (
          <li
            key={link.name}
            className={cn({
              "text-primary": pathname.startsWith(link.href)
            })}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Button size={"sm"}>Join the Community</Button>
    </nav>
  );
};

export default NavBar;
