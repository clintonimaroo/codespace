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

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPage({ searchParams }: PageProps) {
  const LIMIT = 10;
  const currentPage = Number(searchParams?.page) || 1;

  const blogs = await getBlogs(currentPage, LIMIT);

  return (
    <>
      <Container className="space-y-5">
        <Blog blogs={blogs} currentPage={currentPage} />
      </Container>
      <BrandsSection />
      <JoinSection />
    </>
  );
}
