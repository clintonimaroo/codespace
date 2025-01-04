"use client";
import { BlogsAPIResponse } from "@/types";
import AllBlogs from "./AllBlogs";
import useSwr from "swr";
import { fetcher } from "@/lib/utils";

export default function Blog() {
  const { isLoading, data, error } = useSwr<BlogsAPIResponse>(
    "/api/blog",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <AllBlogs blogs={data} />
    </>
  );
}
