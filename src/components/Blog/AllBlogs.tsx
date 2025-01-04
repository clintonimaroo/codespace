import { BlogsAPIResponse } from "@/types";
import Pagination from "./Pagination";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function AllBlogs({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  return (
    <div className="px-2 xs:px-4 sm:px-8 md:px-14 max-w-7xl mx-auto">
      <div className="gap-8 max-w-3xl mx-auto">
        {blogs?.docs.map((blog) => (
          <div key={blog.id} className="relative">
            {blog.featuredImage && (
              <Image
                className="h-96 bg-[#f8f8f8] rounded-[10px] w-full object-cover"
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

              <h3 className="text-xl font-medium">{blog.title}</h3>
              <p className="text-lg text-neutral">
                {blog.excerpt ||
                  "A practical guide for Gen Z coders on the most popular tools used in the industry."}
              </p>

              <Link
                href={`/blog/${blog.id}`}
                className="bg-primary px-5 py-4 text-white w-fit rounded-full mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-[#A6A6A6]/30 my-14" />
      <Pagination />
    </div>
  );
}
