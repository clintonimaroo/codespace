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
    <div className="mt-20">
      <h3 className="text-3xl font-medium mb-6">All Blogs</h3>
      <div className="grid grid-cols-3">
        {blogs?.docs.map((blog) => (
          <div key={blog.id} className="relative">
            {blog.featuredImage && (
              <Image
                className="h-64 bg-[#f8f8f8] rounded-[10px] w-full object-cover"
                src={blog.featuredImage.url}
                width={blog.featuredImage.width}
                height={blog.featuredImage.height}
                alt={blog.featuredImage.alt || blog.title}
              />
            )}
            <div className="flex flex-col gap-y-1 mt-5 max-w-xl">
              <div className="flex items-center gap-x-[5.5px] text-neutral text-lg">
                <p>{blog.author?.name || "Anonymous"}</p>
                <div className="h-[3px] w-[3px] rounded-full bg-neutral" />
                <p>{formatDate(blog.createdAt)}</p>
              </div>

              <Link
                href={`/blog/${blog.id}`}
                className="text-2xl font-medium hover:text-primary"
              >
                {blog.title}
              </Link>
              <p className="text-lg text-neutral">
                {blog.excerpt ||
                  "A practical guide for Gen Z coders on the most popular tools used in the industry."}
              </p>

              <Link
                href={`/blog/${blog.id}`}
                className="bg-primary py-4 px-8 rounded-full group text-white w-fit mt-4 flex items-center space-x-2"
              >
                <span>Read More</span>
                <svg
                  width={14}
                  height={10}
                  viewBox="0 0 14 10"
                  fill="none"
                  className="rotate-180 transition-all  duration-300 transform group-hover:translate-x-2 group-hover:opacity-100"
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
    </div>
  );
}
