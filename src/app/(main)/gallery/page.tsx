import BrandsSection from "@/components/brands-section";
import { HeroImageCards } from "@/components/image-cards";
import JoinSection from "@/components/join-section";
import SpaceBadge from "@/components/space-badge";
import React from "react";
import Container from "@/components/container";
import { Galleries } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

async function getAlbums() {
  const BASE_URL = process.env.BASE_URL;

  const response = await fetch(`${BASE_URL}/api/gallery`, {
    next: { revalidate: 0 },
  });
  const data: Galleries = await response.json();

  return data;
}

export default async function GalleryPage() {
  const albums = await getAlbums();

  return (
    <>
      {/* Hero Section */}
      <Container className="container grid grid-cols-1 md:grid-cols-2 gap-5 py-5 md:py-20 content-center">
        <div className="space-y-3 md:space-y-5 flex-col flex justify-center">
          <SpaceBadge>CODE SPACE GALLERY</SpaceBadge>
          <h1 className="font-medium text-2xl md:text-5xl leading-normal">
            Who Can You Spot <br /> Here?
          </h1>
          <p className="text-xl subtitle">
            Events may end, but the fun memories, connections, and friendships
            you built live on. We keep those moments alive, right here.
          </p>
        </div>
        <div className="w-full relative aspect-[16/10] ">
          <HeroImageCards />
        </div>
      </Container>

      <Container className="container gap-5 py-5 md:pb-20 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 relative">
          {albums?.docs?.map((album) => (
            <div
              key={album?.id}
              className="relative bg-cover bg-center rounded-3xl w-full h-[35rem] transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ backgroundImage: `url(${album.coverImage.url})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-black/0 flex flex-col justify-end p-5 rounded-3xl">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white">
                  {album?.event}
                </h1>
                <Link href={album?.albumLink}>
                  <Button variant={"default"} size={"lg"} className="mt-5">
                    View Album{" "}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Brands */}
      <BrandsSection />
      {/* Join the community */}
      <JoinSection />
    </>
  );
}
