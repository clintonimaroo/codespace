import BrandsSection from "@/components/brands-section";
import SpaceBadge from "@/components/space-badge";
import JoinSection from "@/components/join-section";
import { Logo } from "@/components/brand";
import Container from "@/components/container";
import Blog from "@/components/Blog/Index";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container gap-5 py-5 md:py-20">
        <div className="space-y-5 flex-col flex justify-center items-center text-center sm:w-1/2 mx-auto">
          <Logo className="scale-75" />
          <SpaceBadge>CODE SPACE BLOG</SpaceBadge>
          <h1 className="font-medium text-3xl md:text-5xl leading-snug">
            The Code Space Blog
          </h1>
          <p className="text-xl subtitle max-w-xl">
            Stay updated with the latest news, insights, stories, and updates from the heart of our community.
          </p>
        </div>
      </section>

      <Container className="container space-y-2 pb-10">
        <Blog />
      </Container>

      <BrandsSection />
      <JoinSection />
    </>
  );
}
