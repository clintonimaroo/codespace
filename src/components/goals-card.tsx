import { WhatWeDo } from "@/data";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const GoalsCard = ({
  variant = "light",
  ...props
}: WhatWeDo & { variant?: "light" | "dark" }) => (
  <div className="w-full h-full flex flex-col items-baseline">
    <div className="size-14 text-white flex items-center justify-center bg-primary rounded-lg mb-6">
      <props.icon strokeWidth={1} size={30} />
    </div>
    <h3
      className={cn("text-2xl font-medium mb-2", {
        "text-white": variant === "dark",
      })}
    >
      {props.title}
    </h3>
    <p className={variant === "dark" ? "text-gray-400" : "subtitle"}>
      {props.description}
    </p>
    <div className="flex-grow mt-4" />
    {props.date && <Badge className="font-normal">{props.date}</Badge>}
    {props.stats && (
      <div className="w-full flex flex-row items-center divide-x">
        {props.stats.map((stat, i) => (
          <div
            key={i}
            className={cn("flex-grow mt-3", {
              "flex flex-col items-center justify-center": i !== 0,
            })}
          >
            <div>
              <h4 className="text-xl font-semibold">
                {stat.value}{" "}
                <span className="text-primary text-base">{stat.suffix}</span>
              </h4>
              <p className="subtitle">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default GoalsCard;
