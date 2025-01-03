export default function Pagination() {
  return (
    <div className="flex items-center w-full justify-between">
      <button className="bg-[#F8F8F8] h-11 py-3 px-6 flex items-center gap-x-3 border border-[#E3E3E3] rounded-lg">
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
            fill="black"
          />
        </svg>
        <span className="text-neutral">Previous</span>
      </button>

      <div className="flex items-center gap-x-2">
        <button className="w-11 h-11 rounded-xl bg-primary text-[#F8F8F8]">
          1
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          2
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          3
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          ...
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          7
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          8
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          9
        </button>
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] hover:bg-primary hover:text-white transition-all text-neutral bg-[#F8F8F8]">
          10
        </button>
      </div>

      <button className="bg-[#F8F8F8] h-11 py-3 px-6 flex items-center gap-x-3 border border-[#E3E3E3] rounded-lg">
        <span className="text-neutral">Next</span>
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
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}
