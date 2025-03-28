import Container from "@/components/container";
import Image from "next/image";
import { BlogDoc } from "@/types";
import { LexicalRenderer } from "@/components/lexical-renderer";
import { ArrowUpRight } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";

const formatDate = (dateString: string) => {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");
};

const formatAuthors = (blog: BlogDoc, isMobile: boolean = false) => {
  if (isMobile || !blog.collaborators || blog.collaborators.length === 0) {
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
      title: "Blog Not Found | Code Space",
      description: "The requested blog post could not be found on Code Space's blog.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.codespaces.org";

  // Generate keywords based on blog content
  const keywords = [
    "Code Space",
    "African Tech",
    "Tech Community",
    blog.title,
    ...(blog.tags || []),
    blog.category,
  ].filter(Boolean);

  return {
    title: `${blog.title} | Code Space Blog`,
    description: blog.excerpt || `Read "${blog.title}" on Code Space - Africa's Premier Gen Z Tech Community`,
    keywords: keywords,
    authors: blog.author?.name ? [{ name: blog.author.name, url: `${baseUrl}/team/${blog.author.username}` }] : undefined,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || `Read "${blog.title}" on Code Space - Africa's Premier Gen Z Tech Community`,
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: blog.author?.name ? [blog.author.name] : undefined,
      images: [
        blog.featuredImage?.url.startsWith('http')
          ? blog.featuredImage.url
          : `${baseUrl}${blog.featuredImage?.url}`,
        ...previousImages
      ].filter(Boolean),
      url: `${baseUrl}/blog/${blog.id}`,
      siteName: "Code Space Blog",
      locale: "en_US",
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || `Read "${blog.title}" on Code Space - Africa's Premier Gen Z Tech Community`,
      images: [
        blog.featuredImage?.url.startsWith('http')
          ? blog.featuredImage.url
          : `${baseUrl}${blog.featuredImage?.url}`
      ].filter(Boolean),
      creator: "@codespace",
      site: "@CodeSpaceHQ",
    },
    alternates: {
      canonical: `${baseUrl}/blog/${blog.id}`,
    },
  };
}

const SubscribeCard = () => {
  return (
    <div
      className="rounded-[10px] p-6 md:p-12 text-center min-h-[250px] md:h-[300px] flex flex-col justify-center mb-8"
      style={{
        backgroundImage: "url(https://i.postimg.cc/htZ2Q45M/subscribe-bg.png)",
        backgroundSize: "cover",
      }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Looking to Connect with Other&nbsp;Gen Zs&nbsp;
        <br className="hidden md:block" /> in Tech?
      </h3>

      <button className="bg-white text-primary px-4 md:px-6 py-3 rounded-full font-medium mt-4 hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto group">
        <a href="https://forms.gle/hhuLVupnm2F1AGa96" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          Join the Community
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </button>
    </div>
  );
};

async function getBlog(id: string): Promise<BlogDoc> {
  const BASE_URL = process.env.BASE_URL;

  const response = await fetch(`${BASE_URL}/api/blog/${id}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
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
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.codespaces.org";
  const currentUrl = `${baseUrl}/blog/${params.id}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(blog.title || "");
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  // Prepare JSON-LD structured data for blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage?.url,
    datePublished: blog.createdAt,
    author: blog.collaborators?.length ? [
      {
        "@type": "Person",
        name: blog.author.name,
      },
      ...blog.collaborators.map(collaborator => ({
        "@type": "Person",
        name: collaborator.name,
      }))
    ] : {
      "@type": "Person",
      name: blog.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Code Space",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
    keywords: blog.tags?.join(", "),
  };

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="container space-y-2 py-2 px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="mt-2 md:mt-20">
              <div className="text-[#475467] text-[14px] mb-3 md:hidden flex items-center gap-2">
                <span>{formatAuthors(blog, true)}</span>
                <span>•</span>
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[#475467] text-base hidden md:flex gap-2">
                  <span>{formatAuthors(blog)}</span>
                  <span>•</span>
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <h1 className="text-[32px] leading-[1.15] tracking-[-0.02em] md:text-4xl font-bold text-[#101828]">
                  {blog.title}
                </h1>
                <div className="hidden md:block text-[#475467] text-xl">
                  {blog.excerpt}
                </div>
              </div>
              <div className="text-[16px] leading-[1.5] text-[#475467] mt-6 md:hidden line-clamp-2">
                {blog.excerpt}
              </div>
            </div>

            <div className="mt-4 md:mt-8 h-[250px] md:h-[600px] bg-[#f8f8f8] relative overflow-hidden rounded-lg">
              {blog.featuredImage && (
                <Image
                  src={blog.featuredImage.url}
                  alt={blog.featuredImage.alt || blog.title}
                  fill
                  className="object-cover w-full h-full rounded-lg"
                  priority
                />
              )}
            </div>

            <div className="mt-6 md:mt-12 text-[18px] md:text-xl text-[#475467] leading-relaxed">
              <LexicalRenderer content={blog.content} />
            </div>

            {/* Share article and subscribe section */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 mt-6">
              <div className="w-full md:w-[232px]">
                <h4 className="text-[#101828] mb-4 font-medium">
                  Share article
                </h4>
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
                <div className="mb-8">
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-[16px] md:text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <SubscribeCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
