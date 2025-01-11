import { BlogsAPIResponse } from "@/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "lucide-react";

export default function FeaturedBlogs({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  return (
    <div className="mt-8 md:mt-20 px-4 md:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl md:text-3xl font-medium">Featured</h3>
        <Link href="#footer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <span className="text-sm md:text-base font-bold">Subscribe to the Mono blog</span>
          <MailIcon size={20} />
        </Link>
      </div>
      {blogs?.docs?.length ? (
        <div className="grid grid-cols-1 gap-6 md:gap-8 mt-4 md:mt-6">
          {blogs.docs.slice(0, 1).map((blog) => (
            <div key={blog.id} className="relative rounded-xl md:rounded-[22px] overflow-hidden h-[300px] md:h-[450px]">
              {blog.featuredImage && (
                <Image
                  className="h-full bg-[#f8f8f8] w-full object-cover"
                  src={blog.featuredImage.url}
                  width={1200}
                  height={800}
                  alt={blog.featuredImage.alt || blog.title}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                <div className="flex items-center gap-x-[5.5px] text-base md:text-lg">
                  <p>{blog.author?.name || "Anonymous"}</p>
                  <div className="h-[3px] w-[3px] rounded-full bg-white" />
                  <p>{formatDate(blog.createdAt)}</p>
                </div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-xl md:text-2xl font-bold hover:text-primary block mt-2 line-clamp-2"
                >
                  {blog.title}
                </Link>
                <Link
                  href={`/blog/${blog.id}`}
                  className="bg-primary py-2 md:py-3 px-4 md:px-6 rounded-full group text-white w-fit mt-4 flex items-center space-x-2 text-sm md:text-base"
                >
                  <span>Read More</span>
                  <svg
                    width={14}
                    height={10}
                    viewBox="0 0 14 10"
                    fill="none"
                    className="rotate-180 transition-all duration-300 transform group-hover:translate-x-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
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
