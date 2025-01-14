import { formatDate } from "@/lib/utils";
import { BlogsAPIResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function AllBlogs({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  return (
    <div className="mt-8 md:mt-20 px-4 md:px-0">
      <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">
        All Blogs
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogs?.docs?.length ? (
          blogs.docs.map((blog) => (
            <div key={blog.id} className="relative">
              {blog.featuredImage && (
                <Image
                  className="aspect-square bg-[#f8f8f8] rounded-xl md:rounded-[10px] w-full object-cover"
                  src={blog.featuredImage.url}
                  width={800}
                  height={600}
                  alt={blog.featuredImage.alt || blog.title}
                />
              )}
              <div className="flex flex-col gap-y-1 mt-4 md:mt-5">
                <div className="flex items-center gap-x-[5.5px] text-neutral text-base md:text-lg">
                  <p>{blog.author?.name || "Anonymous"}</p>
                  <div className="h-[3px] w-[3px] rounded-full bg-neutral" />
                  <p>{formatDate(blog.createdAt)}</p>
                </div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-xl md:text-2xl font-bold hover:text-primary line-clamp-2"
                >
                  {blog.title}
                </Link>
                <p className="text-base md:text-lg text-neutral line-clamp-2">
                  {blog.excerpt ||
                    "A practical guide for Gen Z coders on the most popular tools used in the industry."}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="bg-primary py-2 md:py-3 px-6 md:px-8 rounded-full group text-white w-fit mt-4 flex items-center space-x-2 text-sm md:text-base"
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
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}
