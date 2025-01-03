import AllBlogs from "@/components/Blog/AllBlogs";
import FeatureSection from "@/components/Blog/FeatureSection";
// import BlogHeader from "@/components/Blog/Header";
import BrandsSection from "@/components/brands-section";
import Footer from "@/components/footer";
import JoinSection from "@/components/join-section";

export default function BlogPage() {
  return (
    <>
      {/* <BlogHeader /> */}
      <FeatureSection />
      <AllBlogs />
      <BrandsSection />
      <JoinSection />
      <Footer />
    </>
  );
}
