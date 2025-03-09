import { BlogsAPIResponse, BlogDoc } from "@/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const formatAuthors = (blog: BlogDoc) => {
  if (!blog.collaborators || blog.collaborators.length === 0) {
    return blog.author.name;
  }

  const collaboratorNames = blog.collaborators.map(c => c.name);
  if (collaboratorNames.length === 1) {
    return `${blog.author.name} and ${collaboratorNames[0]}`;
  } else if (collaboratorNames.length === 2) {
    return `${blog.author.name}, ${collaboratorNames[0]} and ${collaboratorNames[1]}`;
  } else {
    const lastCollaborator = collaboratorNames[collaboratorNames.length - 1];
    const otherCollaborators = collaboratorNames.slice(0, -1).join(", ");
    return `${blog.author.name}, ${otherCollaborators}, and ${lastCollaborator}`;
  }
};

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
                  <div className="flex items-center gap-2 text-white/80">
                    <span>{formatAuthors(featuredBlog)}</span>
                    <span>•</span>
                    <span>{formatDate(featuredBlog.createdAt)}</span>
                  </div>
                  <p className="text-white/80 text-lg line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                {featuredBlog.featuredImage && (
                  <Image
                    src={featuredBlog.featuredImage.url}
                    alt={featuredBlog.featuredImage.alt || featuredBlog.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
