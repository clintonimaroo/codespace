export default function RecentBlogs() {
  return (
    <>
      <h3 className="text-3xl font-medium mb-6">Recent Blogs</h3>
      <div className="flex flex-col gap-y-8">
        {Array(5)
          .fill(5)
          .map((blog) => (
            <div key={blog} className="flex gap-x-5">
              <div className="bg-[#f8f8f8] rounded-[22px] h-52 w-52 flex-shrink-0" />
              <div className="flex flex-col gap-y-1 mt-5">
                <div className="flex items-center gap-x-[5.5px] text-secondary text-lg">
                  <p>Clinton Imaro</p>
                  <div className="h-[3px] w-[3px] rounded-full bg-secondary" />
                  <p>11 Oct 2024</p>
                </div>

                <h3 className="text-neutral text-xl font-medium">
                  10 Tools Every Young Coder Should Know
                </h3>
                <p className="text-lg text-secondary">
                  A practical guide for Gen Z coders on the most popular tools
                  used in the industry.
                </p>

                <button className="bg-primary px-4 py-3 text-white w-fit rounded-full mt-4 text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
