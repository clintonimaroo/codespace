import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1400px] mx-auto px-6 sm:px-14 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
