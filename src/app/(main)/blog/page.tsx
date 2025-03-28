import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";
import { BlogsAPIResponse } from "@/types";
import BlogNewsletterForm from "@/components/Blog/BlogNewsletterForm";
import { Suspense } from "react";

// Loading fallback component
const BlogListingSkeleton = () => (
  <div className="space-y-6">
    <div className="animate-pulse bg-gray-200 h-48 rounded-lg w-full"></div>
    <div className="animate-pulse bg-gray-200 h-48 rounded-lg w-full"></div>
    <div className="animate-pulse bg-gray-200 h-48 rounded-lg w-full"></div>
  </div>
);

async function getBlogs(
  currentPage: number,
  limit: number
): Promise<BlogsAPIResponse> {
  const BASE_URL = process.env.BASE_URL;

  const response = await fetch(
    `${BASE_URL}/api/blog?page=${currentPage}&limit=${limit}`,
    {
      // Cache data for 10 minutes instead of disabling cache
      next: { revalidate: 600 }
    }
  );
  const data = await response.json();

  return data;
}

type Props = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

export default async function BlogPage(props: Props) {
  const searchParams = await props.searchParams;
  const LIMIT = 10;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <Container className="space-y-5">
          <div className="max-w-2xl">
            <h1 className="font-graphik text-[2rem] md:text-[2.75rem] font-bold text-[#0A1F44] leading-tight mb-3">
              The Code Space Blog
            </h1>
            <p className="text-[#4F6484] text-lg md:text-xl mb-6">
              Dive into our Insights, stories, and updates from the heart of our community.
            </p>
            <BlogNewsletterForm />
            <p className="text-[#4F6484] text-sm mt-2">
              You can unsubscribe at any time. Learn more about our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white pb-20">
        <Container className="mt-12 md:mt-24">
          <Suspense fallback={<BlogListingSkeleton />}>
            <BlogContent currentPage={currentPage} limit={LIMIT} />
          </Suspense>
        </Container>
        <BrandsSection />
        <JoinSection />
      </div>
    </div>
  );
}

// Move blog content fetching into a separate component
// This allows React to suspend while data is loading
async function BlogContent({ currentPage, limit }: { currentPage: number, limit: number }) {
  const blogs = await getBlogs(currentPage, limit);

  if (blogs.totalDocs < 1) {
    return (
      <div className="h-[calc(100vh-500px)] flex flex-col items-center justify-center">
        <p>No blogs yet</p>
        <p className="text-xl">We are cooking a masterpiece 🧑🏾‍🍳</p>
      </div>
    );
  }

  return <Blog blogs={blogs} currentPage={currentPage} />;
}
