import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import { Doc } from "@/types";

interface Child {
  type: string;
  text: string;
}

interface Block {
  type: string;
  text?: string;
  children?: Child[];
}

interface ContentNode {
  children?: Block[];
}

const formatDate = (dateString: string) => {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");
};

const SubscribeCard = () => {
  return (
    <div
      className="mt-12 rounded-[10px] p-6 md:p-12 text-center min-h-[250px] md:h-[300px] flex flex-col justify-center font-sora"
      style={{
        backgroundImage: "url(https://i.postimg.cc/htZ2Q45M/subscribe-bg.png)",
        backgroundSize: "cover",
      }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Looking to Connect with Other Gen-Zs
        <br className="hidden md:block" /> in Tech?
      </h3>

      <button className="bg-white text-primary px-4 md:px-6 py-3 rounded-full font-medium mt-4 hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto font-sora">
        Join the Community
        <span>↗</span>
      </button>
    </div>
  );
};

const renderContent = (content: ContentNode) => {
  const tableOfContents: string[] = [];

  content.children?.forEach((block) => {
    if (block.type === "heading") {
      const headingText = block.children?.map((child) => child.text).join("");
      if (headingText) {
        tableOfContents.push(headingText);
      }
    }
  });

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 md:shrink-0">
        <div className="sticky top-8 rounded-lg bg-white">
          <h3 className="font-medium mb-4">On this page</h3>
          {tableOfContents.map((heading, i) => (
            <a
              key={i}
              href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-neutral hover:text-primary mb-2"
            >
              {heading}
            </a>
          ))}
        </div>
      </div>

      <div className="font-['DM_Sans',sans-serif]">
        {content.children?.map((block, i) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={i} className="mb-4 text-neutral">
                  {block.children?.map((child) => child.text).join("")}
                </p>
              );
            case "heading":
              const headingText = block.children
                ?.map((child) => child.text)
                .join("");
              const id = headingText?.toLowerCase().replace(/\s+/g, "-");
              return (
                <h2
                  key={i}
                  id={id}
                  className="text-2xl font-medium my-6 text-black"
                >
                  {headingText}
                </h2>
              );
            default:
              return block.children?.map((child, j) => (
                <p key={`${i}-${j}`} className="mb-4 text-neutral">
                  {child.text}
                </p>
              ));
          }
        })}
      </div>
    </div>
  );
};

async function getBlog(id: string): Promise<Doc> {
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}/api/blog/${id}`);
  const data = await response.json();

  return data;
}

export default async function BlogPage({ params }: any) {
  const blog = await getBlog(params.id);

  if (!blog) {
    return "Blog not found";
  }
  return (
    <Container className="container space-y-2 py-8 md:py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto py-4 md:py-8">
        <Link
          href="/blog"
          className="text-neutral text-[15px] flex items-center gap-2 w-fit relative z-10"
        >
          <span>←</span>
          <span className="text-[#667085]">Back</span>
        </Link>

        <div className="mt-6 md:mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {blog.title}
          </h1>
          <div className="flex items-center gap-x-[5.5px] text-gray text-base md:text-lg mt-2">
            <p>{blog.author?.name || "Anonymous"}</p>
            <div className="h-[3px] w-[3px] rounded-full bg-secondary" />
            <p>{formatDate(blog.createdAt)}</p>
          </div>
        </div>

        <div className="mt-6 md:mt-8 h-[300px] md:h-[550px] bg-[#f8f8f8] rounded-[22px] relative overflow-hidden">
          {blog.featuredImage && (
            <Image
              src={blog.featuredImage.url}
              alt={blog.featuredImage.alt || blog.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="mt-6 md:mt-8">
          {renderContent(blog.content.root as ContentNode)}
        </div>

        {/* Share article section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 mt-8 md:mt-12">
          <div className="w-full md:w-[232px]">
            <h4 className="text-[#101828] mt-6 md:mt-10 mb-4">Share article</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:underline">
                Twitter ↗
              </a>
              <a href="#" className="text-primary hover:underline">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="flex-1">
            <SubscribeCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
