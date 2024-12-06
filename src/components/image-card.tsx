import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

const ImageCard = ({
  className,
  src,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { src?: ImageProps["src"] }) => {
  return (
    <div
      className={cn("w-[280px] bg-white aspect-[10/11] shadow  p-2", className)}
      {...props}
    >
      <div id="image-card" className="w-full h-4/5 bg-gray-50 relative">
        {src && (
          <Image
            src={src}
            fill
            alt="image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ImageCard;
