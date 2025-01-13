import BrandsSection from "@/components/brands-section";
import JoinSection from "@/components/join-section";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";
import { BlogsAPIResponse } from "@/types";
import { type NextRequest } from "next/server";

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

export default async function BlogPage(request: NextRequest) {
  const LIMIT = 10;

  const searchParams = request.nextUrl?.searchParams;
  const currentPage = Number(searchParams?.get("page"));
  console.log(searchParams);

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
