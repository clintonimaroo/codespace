"use client";
import { LogoLarge } from "./brand";
import Link from "next/link";
import Container from "@/components/container";
import NewsletterForm from "@/components/newsletter-form";
import { other_links, quick_links, socials } from "@/data";
import { usePathname } from "next/navigation";

interface FooterProps {
  variant?: "light" | "dark";
}

const Footer = ({ variant = "light" }: FooterProps) => {
  const pathname = usePathname();

  const isDark = variant === "dark" || pathname === "/about-us";
  const bgColor = isDark ? "bg-foreground" : "bg-white";
  const textColor = isDark ? "text-[#B6B6BC]" : "text-gray-500";
  const linkColor = isDark
    ? "text-white hover:text-primary"
    : "hover:text-primary";

  return (
    <div className={bgColor}>
      <Container
        className={`container grid grid-cols-1  lg:grid-cols-7 gap-10 pt-20 text-[15px]`}
      >
        <div className="col-span-1 md:col-span-2 w-full space-y-5">
          <LogoLarge />
          <p className={`text-base ${textColor}`}>
            Code Space is a nonprofit community fiscally sponsored by The Hack
            Foundation Nonprofit EIN: 81-2908499.
          </p>
        </div>
        <ul className="space-y-2 col-span-1">
          <li className="text-primary font-medium mb-3">Reach out to us</li>
          {socials.map((social) => (
            <li key={social.name} className={linkColor}>
              <Link href={social.url} className="capitalize">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 col-span-1">
          <li className="text-primary font-medium mb-3">Quick Links</li>
          {quick_links.map((social) => (
            <li key={social.name} className={linkColor}>
              <Link href={social.href} className="capitalize">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 col-span-1">
          <li className="text-primary font-medium mb-3">Others</li>
          {other_links.map((social) => (
            <li key={social.name} className={linkColor}>
              <Link href={social.href} className="capitalize">
                {social.name}
              </Link>

              {social.comingSoon ? (
                <span className="ml-2 border text-xs text-primary font-medium bg-primary/10 rounded-full px-2 py-1 border-primary/50 whitespace-nowrap">
                  Soon
                </span>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="col-span-1 md:col-span-2 space-y-5">
          <h4 className="text-primary font-medium">
            Subscribe to our Newsletter
          </h4>
          <NewsletterForm isDark={isDark} />
        </div>
        <div
          className={`col-span-1 md:col-span-7 py-5 border-t ${isDark && "border-[#222235]"}`}
        >
          <p className={`text-center ${textColor} font-normal text-sm`}>
            Copyright © {new Date().getFullYear()} Code Space | All rights
            reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
