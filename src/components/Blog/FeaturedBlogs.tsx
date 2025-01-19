import { BlogsAPIResponse } from "@/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function FeaturedBlogs({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  // Find the featured blog
  const featuredBlog = blogs?.docs?.find(blog => blog.isFeatured);

  return (
    <div className="w-full">
      {featuredBlog ? (
        <div className="grid grid-cols-1 gap-4">
          <div
            key={featuredBlog.id}
            className="relative bg-primary rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {featuredBlog.category === "tech" ? "Tech & Processes" :
                        featuredBlog.category === "people" ? "People" :
                          featuredBlog.category === "community" ? "Community" :
                            featuredBlog.category === "events" ? "Events" : "Tech & Processes"}
                    </span>
                    {featuredBlog.postType !== "regular" && (
                      <span className="bg-yellow-400/90 text-black px-3 py-1 rounded-full text-sm">
                        {featuredBlog.postType === "top" ? "Top Stories" : "Featured"}
                      </span>
                    )}
                  </div>
                  <Link href={`/blog/${featuredBlog.id}`} className="block">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight hover:opacity-90 transition-opacity">
                      {featuredBlog.title}
                    </h2>
                  </Link>
                  <div className="flex items-center gap-x-2 text-white/80 text-sm">
                    <p>{formatDate(featuredBlog.createdAt)}</p>
                    <div className="h-1 w-1 rounded-full bg-white/80" />
                    <p>by {featuredBlog.author?.name || "Anonymous"}</p>
                  </div>
                </div>
              </div>
              {featuredBlog.featuredImage && (
                <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                  <Image
                    src={featuredBlog.featuredImage.url}
                    alt={featuredBlog.featuredImage.alt || featuredBlog.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>No featured blogs available.</p>
      )}
    </div>
  );
}
