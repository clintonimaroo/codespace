import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import { BlogDoc } from "@/types";
import { LexicalRenderer } from "@/components/lexical-renderer";
import { ArrowUpRight } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

const formatDate = (dateString: string) => {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");
};

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate metadata for social sharing
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const blog = await getBlog(params.id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.excerpt || "Read this article on Code Space",
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "Read this article on Code Space",
      type: "article",
      publishedTime: blog.createdAt,
      authors: blog.author?.name ? [blog.author.name] : undefined,
      images: [blog.featuredImage?.url || "", ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || "Read this article on Code Space",
      images: [blog.featuredImage?.url || ""],
    },
  };
}

const SubscribeCard = () => {
  return (
    <div
      className="mt-12 rounded-[10px] p-6 md:p-12 text-center min-h-[250px] md:h-[300px] flex flex-col justify-center"
      style={{
        backgroundImage: "url(https://i.postimg.cc/htZ2Q45M/subscribe-bg.png)",
        backgroundSize: "cover",
      }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Looking to Connect with Other Gen-Zs
        <br className="hidden md:block" /> in Tech?
      </h3>

      <button className="bg-white text-primary px-4 md:px-6 py-3 rounded-full font-medium mt-4 hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto group">
        Join the Community
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

async function getBlog(id: string): Promise<BlogDoc> {
  const BASE_URL = process.env.BASE_URL;

  const response = await fetch(`${BASE_URL}/api/blog/${id}`);
  const data = await response.json();

  return data;
}

export default async function BlogPage(props: Props) {
  const params = await props.params;
  const blog = await getBlog(params.id);

  if (!blog) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p>Blog not found</p>
      </div>
    );
  }

  // Prepare sharing URLs
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://codespace-psi.vercel.app";
  const currentUrl = `${baseUrl}/blog/${params.id}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(blog.title || "");
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <Container className="container space-y-2 py-4 px-4 md:px-0">
      <div className="mx-auto py-4 md:py-8">
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
          <div className="flex items-center gap-x-[2.5px] text-gray text-base md:text-lg mt-2">
            <p>{blog.author?.name || "Anonymous"}</p>
            <div className="h-[3px] w-[3px] rounded-full bg-secondary" />
            <p>•</p>
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

        <div className="mt-6 md:mt-8 text-lg md:text-xl text-[#475467] leading-relaxed">
          <LexicalRenderer content={blog.content} />
        </div>

        {/* Tags section */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2 ml-[288px]">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Share article and subscribe section */}
        <div className="mt-4 md:mt-12 flex flex-col md:flex-row gap-8 md:gap-14">
          <div className="w-full md:w-[232px]">
            <h4 className="text-[#101828] mb-4">Share article</h4>
            <div className="flex gap-4">
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1 group"
              >
                Twitter
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1 group"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
