import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";
import { BlogsAPIResponse } from "@/types";

async function getBlogs(
  currentPage: number,
  limit: number
): Promise<BlogsAPIResponse> {
  const BASE_URL = process.env.BASE_URL;

  const response = await fetch(
    `${BASE_URL}/api/blog?page=${currentPage}&limit=${limit}`
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

  const blogs = await getBlogs(currentPage, LIMIT);

  if (blogs.totalDocs < 1)
    return (
      <>
        <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
          <p>No blogs yet</p>
          <p className="text-xl">We are cooking a masterpiece 🧑🏾‍🍳</p>
        </div>
        <BrandsSection />
        <JoinSection />
      </>
    );
  return (
    <div className="bg-[#F9FBFD]">
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
            <div className="flex flex-col md:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2.5 text-base border border-[#E5E9F2] rounded-lg focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[#4F6484] text-sm mt-2">
              You can unsubscribe at any time. Learn more about our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white">
        <Container className="space-y-5">
          <Blog blogs={blogs} currentPage={currentPage} />
        </Container>
        <BrandsSection />
        <JoinSection />
      </div>
    </div>
  );
}
