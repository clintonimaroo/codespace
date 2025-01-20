"use client";
import React from "react";
import { LogoLarge } from "./brand";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
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

      {/* <div className="w-full bg-[#6d6cd6] text-sm">
        <Container>
          <Link
            href="https://photos.app.goo.gl/7rsrtg3xNwd5VFqw5"
            className="w-full py-2 text-white text-center block hover:opacity-90 transition-opacity"
            style={{ fontSize: "14px", lineHeight: "20px", fontWeight: 600 }}
          >
            We&apos;ve rebranded our website 🎉 Discover what&apos;s new here
            👀.
          </Link>
        </Container>
      </div> */}

      {/* NavBar */}
      <Container className="container flex items-center justify-between py-8 md:pb-8 md:pt-4">
        <Link href={"/"}>
          <LogoLarge />
        </Link>

        <ul className="lg:flex flex-row items-center gap-x-5 hidden font-duplicateSans">
          {links.map((link) => (
            <li
              key={link.name}
              className={cn({
                "text-primary": pathname.startsWith(link.href),
              })}
            >
              <Link className="hover:text-primary" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button size={"sm"} className="hidden lg:block">
          Join the Community
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <VisuallyHidden.Root>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden.Root>
          <SheetTrigger asChild onClick={() => setOpen(true)}>
            <Button
              size="icon-sm"
              variant="ghost"
              className="lg:hidden bg-primary hover:bg-primary/95 hover:text-white text-white"
            >
              <MenuIcon size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-[100dvh] border-0 p-0">
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-between items-center p-4">
                <Link href="/" onClick={() => setOpen(false)}>
                  <LogoLarge />
                </Link>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                  className="bg-primary hover:bg-primary/95 hover:text-white text-white"
                >
                  <X size={24} />
                </Button>
              </div>
              <div className="flex flex-col px-4">
                <nav className="space-y-6">
                  {links.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block text-2xl hover:text-primary transition-colors",
                          pathname.startsWith(link.href)
                            ? "text-primary"
                            : "text-black"
                        )}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </nav>
                <Button size="lg" className="w-full rounded-xl mt-8">
                  Join the Community
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </>
  );
};

export default NavBar;
