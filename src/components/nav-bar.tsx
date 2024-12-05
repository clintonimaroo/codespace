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
import Container from "@/components/container";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Hackfest 2024 Banner */}

      {/* 
      <div className="w-full bg-gradient-to-r from-green-400 via-blue-400 to-[#6d6cd6]">
        <Container>
          <Link
            href="/hackfest-2023"
            className="w-full py-2 text-white text-center block hover:opacity-90 transition-opacity"
          >
            View Hackfest 2023 Official Photos &gt;&gt;
          </Link>
        </Container>
      </div>
      */}

      {/* NavBar */}
      <Container className="container flex items-center justify-between py-4 md:py-8">
        <Link href={"/"}>
          <LogoLarge />
        </Link>
        <ul className="md:flex flex-row items-center gap-x-5 hidden">
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
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild onClick={() => setOpen(true)}>
            <Button size={"icon-sm"} variant={"ghost"} className="md:hidden">
              <MenuIcon size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <Link href={"/"}>
              <LogoLarge />
            </Link>
            <ul className="flex flex-col gap-5 my-5">
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
      </Container>
    </>
  );
};

export default NavBar;