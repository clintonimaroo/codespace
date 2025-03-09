import { formatDate } from "@/lib/utils";
import { BlogsAPIResponse, BlogDoc } from "@/types";
import Image from "next/image";
import Link from "next/link";

const formatAuthors = (blog: BlogDoc) => {
  const authors = [blog.author];
  if (blog.collaborators && blog.collaborators.length > 0) {
    authors.push(...blog.collaborators);
  }

  if (authors.length === 1) {
    return authors[0].name;
  } else if (authors.length === 2) {
    return `${authors[0].name} and ${authors[1].name}`;
  } else {
    const lastAuthor = authors[authors.length - 1];
    const otherAuthors = authors.slice(0, -1).map(a => a.name).join(", ");
    return `${otherAuthors}, and ${lastAuthor.name}`;
  }
};

export default function AllBlogs({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  return (
    <div className="mt-8 md:mt-20">
      <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-10">
        All Blogs
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-20">
        {blogs?.docs?.length ? (
          blogs.docs.map((blog) => (
            <div key={blog.id} className="relative">
              {blog.featuredImage && (
                <Image
                  className="aspect-[16/9] bg-[#f8f8f8] rounded-[20px] w-full object-cover"
                  src={blog.featuredImage.url}
                  width={800}
                  height={600}
                  alt={blog.featuredImage.alt || blog.title}
                />
              )}
              <div className="flex flex-col gap-y-1 mt-4 md:mt-6">
                <div className="flex items-center gap-x-[5.5px] text-neutral text-base">
                  <p>{formatAuthors(blog)}</p>
                  <div className="h-[3px] w-[3px] rounded-full bg-neutral" />
                  <p>{formatDate(blog.createdAt)}</p>
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-2xl md:text-[28px] font-bold hover:text-primary line-clamp-2 md:leading-tight group"
                  >
                    {blog.title}
                  </Link>
                  <p className={`text-base text-neutral md:text-lg mt-3 ${blog.title.length < 50 ? 'line-clamp-3' : 'line-clamp-2'}`}>
                    {blog.excerpt ||
                      "A practical guide for Gen Z coders on the most popular tools used in the industry."}
                  </p>
                </div>
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
