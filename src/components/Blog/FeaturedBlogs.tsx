import { BlogsAPIResponse } from "@/types";
import { formatDate } from "@/lib/utils";
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
        <h3 className="text-black text-lg md:text-xl font-medium">Featured</h3>
        <Link href="#footer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <span className="text-sm md:text-base font-bold">Subscribe to the Mono blog</span>
          <MailIcon size={20} />
        </Link>
      </div>
      {blogs?.docs?.length ? (
        <div className="mt-6">
          {blogs.docs.slice(0, 1).map((blog) => (
            <div key={blog.id} className="bg-[#FAFAFA] rounded-[22px] p-8 md:p-12">
              <div className="space-y-4">
                <div className="flex items-center gap-x-[5.5px] text-neutral">
                  <p>{formatDate(blog.createdAt)}</p>
                  <div className="h-[3px] w-[3px] rounded-full bg-neutral" />
                  <p>{blog.author?.name || "Anonymous"}</p>
                </div>
                <Link href={`/blog/${blog.id}`} className="block">
                  <h2 className="text-3xl md:text-4xl font-bold hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-neutral text-2xl md:text-[26px] leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                >
                  Read the story →
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