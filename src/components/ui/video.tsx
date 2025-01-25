"use client";

import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
}

export default function VideoPlayer({
  src,
  autoPlay = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [autoPlay]);

  function handlePlay() {
    setIsPlaying(!isPlaying);
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
    } else if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <div className="bg-primary rounded-3xl overflow-hidden relative">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto aspect-video"
        autoPlay={autoPlay}
        controls={false}
        muted
        loop
      />

      <button
        className="absolute right-[15px] top-[15px] rounded-full w-10 h-10 flex flex-col items-center justify-center bg-white border-2 border-[rgba(14, 15, 12, .12)] text-gray-400"
        onClick={handlePlay}
      >
        {isPlaying ? (
          <svg
            className="fill-[#868685]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 12"
            height={12}
            width={8}
          >
            <path d="M5.24237 0C5.23886 0 5.2358 0.00293251 5.2358 0.00653689V11.9934C5.2358 11.9971 5.23886 12 5.24237 12H7.84745C7.85112 12 7.85402 11.9971 7.85402 11.9934V0.00653689C7.85402 0.00293251 7.85112 0 7.84745 0H5.24237Z" />
            <path d="M0 0.00653689C0 0.00293251 0.00293181 0 0.00655146 0H2.61163C2.6153 0 2.6182 0.00293251 2.6182 0.00653689V11.9934C2.6182 11.9971 2.6153 12 2.61163 12H0.00655146C0.00293181 12 0 11.9971 0 11.9934V0.00653689Z" />
          </svg>
        ) : (
          <svg
            className="fill-[#868685]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            height={12}
            width={12}
          >
            <path d="M10.777 5.40424C11.249 5.66114 11.249 6.33892 10.777 6.59582L1.00269 11.9164C0.550661 12.1626 0 11.8354 0 11.3207V0.679336C0 0.164653 0.550661 -0.162556 1.00269 0.0835157L10.777 5.40424Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
