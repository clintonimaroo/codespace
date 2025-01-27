"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  youtubeLink?: string;
}

export default function VideoPlayer({
  src,
  autoPlay = true,
  youtubeLink,
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
      {youtubeLink && (
        <Link href={youtubeLink} target="_blank">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/90 hover:bg-white text-black absolute left-[15px] bottom-[15px] !pl-2"
          >
            <span className="bg-white rounded-full p-2 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="#dc2626"
                viewBox="0 0 256 256"
              >
                <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z" />
              </svg>
            </span>
            Watch on Youtube
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      )}
    </div>
  );
}
