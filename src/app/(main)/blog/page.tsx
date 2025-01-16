import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";
import { BlogsAPIResponse } from "@/types";
import { Logo } from "@/components/brand";
import SpaceBadge from "@/components/space-badge";

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
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-5 md:py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <SpaceBadge>Blog</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            Code Space Blog
          </h1>
          <p className="text-xl subtitle">
            Stay updated with the latest news, Insights, stories, and updates from the heart of our community.
          </p>
        </div>
      </section>

      <Container className="space-y-5">
        <Blog blogs={blogs} currentPage={currentPage} />
      </Container>
      <BrandsSection />
      <JoinSection />
    </>
  );
}
