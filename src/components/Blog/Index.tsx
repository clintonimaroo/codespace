"use client";
import { BlogsAPIResponse } from "@/types";
import AllBlogs from "./AllBlogs";
import { useRouter, useSearchParams } from "next/navigation";
import FeaturedBlogs from "./FeaturedBlogs";

export default function Blog({
  blogs,
  currentPage,
}: {
  blogs: BlogsAPIResponse;
  currentPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const renderPagination = () => {
    if (!blogs?.totalPages) return null;

    const pages = [];
    const maxVisible = 7;
    const halfVisible = Math.floor(maxVisible / 2);

    let start = Math.max(1, currentPage - halfVisible);
    const end = Math.min(blogs.totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-11 h-11 rounded-xl ${
            currentPage === i
              ? "bg-primary text-[#F8F8F8]"
              : "border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all bg-[#F8F8F8]"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={!blogs.hasPrevPage}
          className="bg-[#F8F8F8] h-11 py-3 px-6 flex items-center gap-x-3 border border-[#E3E3E3] rounded-lg disabled:opacity-50"
        >
          <svg
            width={14}
            height={10}
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.6C13.3314 5.6 13.6 5.33137 13.6 5C13.6 4.66863 13.3314 4.4 13 4.4V5.6ZM0.575736 4.57574C0.341421 4.81005 0.341421 5.18995 0.575736 5.42426L4.39411 9.24264C4.62843 9.47696 5.00833 9.47696 5.24264 9.24264C5.47696 9.00833 5.47696 8.62843 5.24264 8.39411L1.84853 5L5.24264 1.60589C5.47696 1.37157 5.47696 0.991674 5.24264 0.757359C5.00833 0.523045 4.62843 0.523045 4.39411 0.757359L0.575736 4.57574ZM13 4.4H1V5.6H13V4.4Z"
              fill="currentColor"
            />
          </svg>
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-x-2">{pages}</div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!blogs.hasNextPage}
          className="bg-[#F8F8F8] h-11 py-3 px-6 flex items-center gap-x-3 border border-[#E3E3E3] rounded-lg disabled:opacity-50"
        >
          <span>Next</span>
          <svg
            width={14}
            height={10}
            viewBox="0 0 14 10"
            fill="none"
            className="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.6C13.3314 5.6 13.6 5.33137 13.6 5C13.6 4.66863 13.3314 4.4 13 4.4V5.6ZM0.575736 4.57574C0.341421 4.81005 0.341421 5.18995 0.575736 5.42426L4.39411 9.24264C4.62843 9.47696 5.00833 9.47696 5.24264 9.24264C5.47696 9.00833 5.47696 8.62843 5.24264 8.39411L1.84853 5L5.24264 1.60589C5.47696 1.37157 5.47696 0.991674 5.24264 0.757359C5.00833 0.523045 4.62843 0.523045 4.39411 0.757359L0.575736 4.57574ZM13 4.4H1V5.6H13V4.4Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div>
      <FeaturedBlogs blogs={blogs} />
      <AllBlogs blogs={blogs} />
      <div className="w-full h-px bg-[#A6A6A6]/30 my-14" />
      {renderPagination()}
    </div>
  );
}
