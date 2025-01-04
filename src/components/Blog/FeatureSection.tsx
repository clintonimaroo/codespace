import { BlogsAPIResponse } from "@/types";
import FeaturedBlog from "./FeaturedBlog";
import RecentBlogs from "./RecentBlogs";

export default function FeatureSection({
  blogs,
}: {
  blogs: BlogsAPIResponse | undefined;
}) {
  return (
    <div className="flex px-2 xs:px-4 sm:px-8 md:px-14 gap-12 max-w-7xl mx-auto">
      <div className="max-w-[620px]">
        <FeaturedBlog />
      </div>

      <div className="flex-grow">
        <RecentBlogs />
      </div>
    </div>
  );
}
