export default function FeaturedBlog() {
  return (
    <div className="max-w-[620px]">
      <h3 className="text-3xl font-medium mb-6">Featured Blog</h3>
      <div className="h-[400px] bg-[#f8f8f8] rounded-[22px]"></div>
      <div className="flex flex-col gap-y-1 mt-5">
        <div className="flex items-center gap-x-[5.5px] text-neutral text-lg">
          <p>Clinton Imaro</p>
          <div className="h-[3px] w-[3px] rounded-full bg-neutral" />
          <p>11 Oct 2024</p>
        </div>

        <h3 className="text-xl font-medium">
          10 Tools Every Young Coder Should Know
        </h3>
        <p className="text-lg text-neutral">
          A practical guide for Gen Z coders on the most popular tools used in
          the industry.
        </p>

        <button className="bg-primary px-5 py-4 text-white w-fit rounded-full mt-4">
          Read More
        </button>
      </div>
    </div>
  );
}
