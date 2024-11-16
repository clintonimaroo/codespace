"use client";
import React from "react";
import { LogoLarge } from "./brand";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="container flex items-center justify-between py-4 md:py-8">
      <Link href={"/"}>
        <LogoLarge />
      </Link>
      <ul className="md:flex flex-row items-center gap-x-5 hidden ">
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
      <Button size={"sm"} className="hidden sm:block">
        Join the Community
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon-sm"} variant={"ghost"} className="md:hidden">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Link href={"/"}>
            <LogoLarge />
          </Link>
          <ul className="flex flex-col  gap-5 my-5">
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
          <Button size={"default"} className="w-full">
            Join the Community
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
