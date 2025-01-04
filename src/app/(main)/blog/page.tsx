import AllBlogs from "@/components/Blog/AllBlogs";
import FeatureSection from "@/components/Blog/FeatureSection";
// import BlogHeader from "@/components/Blog/Header";
import BrandsSection from "@/components/brands-section";
import SpaceBadge from "@/components/space-badge";
import JoinSection from "@/components/join-section";
import { Logo } from "@/components/brand";
import Container from "@/components/container";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-5 md:py-20 ">
        <div className="space-y-5 flex-col flex  justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <SpaceBadge>Press and Media</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            Press Features
          </h1>
          <p className="text-xl subtitle">
            Stay updated with the latest news, Insights, stories, and updates from the heart of our community.
          </p>
        </div>
      </section>

      {/* <BlogHeader /> */}
      <Container className="container space-y-2 py-20">
        <FeatureSection />
        <AllBlogs />

      </Container>

      <BrandsSection />
      <JoinSection />
    </>
  );
}
