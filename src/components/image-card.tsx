import { cn } from "@/lib/utils";
import React from "react";

const ImageCard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-[280px] bg-white aspect-[10/11] shadow shadow-gray-100 p-2",
        className
      )}
      {...props}
    >
      <div className="w-full aspect-square bg-gray-50"></div>
    </div>
  );
};

export default ImageCard;
