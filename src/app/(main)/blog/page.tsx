import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";
import { BlogsAPIResponse } from "@/types";
import BlogNewsletterForm from "@/components/Blog/BlogNewsletterForm";

async function getBlogs(
  currentPage: number,
  limit: number
): Promise<BlogsAPIResponse> {
  const BASE_URL = process.env.BASE_URL;

  const response = await fetch(
    `${BASE_URL}/api/blog?page=${currentPage}&limit=${limit}`,
    {
      cache: 'no-store',
      next: { revalidate: 0 }
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

      <div className="bg-white mt-8 md:mt-16">
        <Container>
          <Blog blogs={blogs} currentPage={currentPage} />
        </Container>
        <BrandsSection />
        <JoinSection />
      </div>
    </div>
  );
}
