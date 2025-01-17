import { BlogsAPIResponse } from "@/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import React from "react";

export default function FeaturedBlogs({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  return (
    <div className="mt-8 md:mt-20 px-4 md:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-black text-lg md:text-xl font-medium">Featured</h3>
        <Link
          href="#footer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-sm md:text-base font-bold">
            Subscribe to our blog
          </span>
          <MailIcon size={20} />
        </Link>
      </div>
      {blogs?.docs?.length ? (
        <div className="mt-6">
          {blogs.docs.slice(0, 1).map((blog) => (
            <div
              key={blog.id}
              className="bg-[#FAFAFA] rounded-[22px] p-8 md:p-12"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-x-[5.5px] text-neutral">
                  <p>{formatDate(blog.createdAt)}</p>
                  <div className="h-[3px] w-[3px] rounded-full bg-neutral" />
                  <p>{blog.author?.name || "Anonymous"}</p>
                </div>
                <Link href={`/blog/${blog.id}`} className="block">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-neutral text-lg md:text-2xl lg:text-[26px] leading-relaxed line-clamp-3 md:line-clamp-none">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="group sm:hidden inline-flex items-center text-primary hover:text-primary/90 transition-colors font-bold"
                >
                  Read the story
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 rotate-180 transition-all duration-300 transform group-hover:translate-x-2 stroke-2"
                  >
                    <path
                      strokeWidth="3"
                      d="M13 5.6C13.3314 5.6 13.6 5.33137 13.6 5C13.6 4.66863 13.3314 4.4 13 4.4V5.6ZM0.575736 4.57574C0.341421 4.81005 0.341421 5.18995 0.575736 5.42426L4.39411 9.24264C4.62843 9.47696 5.00833 9.47696 5.24264 9.24264C5.47696 9.00833 5.47696 8.62843 5.24264 8.39411L1.84853 5L5.24264 1.60589C5.47696 1.37157 5.47696 0.991674 5.24264 0.757359C5.00833 0.523045 4.62843 0.523045 4.39411 0.757359L0.575736 4.57574ZM13 4.4H1V5.6H13V4.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No featured blogs available.</p>
      )}
    </div>
  );
}
