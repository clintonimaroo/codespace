import { WhatWeDo } from "@/data";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const GoalsCard = ({
  variant = "light",
  ...props
}: WhatWeDo & { variant?: "light" | "dark" }) => (
  <div className="w-full space-y-3  flex flex-col">
    <div className="size-14 text-white flex items-center justify-center bg-primary rounded-lg">
      <props.icon size={30} />
    </div>
    <h3
      className={cn("text-xl font-medium", {
        "text-white": variant === "dark"
      })}
    >
      {props.title}
    </h3>
    <p className={variant === "dark" ? "text-gray-400" : "text-gray-600"}>
      {props.description}
    </p>
    <div className="flex-grow" />
    {props.date && <Badge className="font-normal">{props.date}</Badge>}
    {props.stats && (
      <div className="w-full flex flex-row items-center divide-x">
        {props.stats.map((stat, i) => (
          <div
            key={i}
            className={cn("flex-grow", {
              "flex flex-col items-center justify-center": i !== 0
            })}
          >
            <div>
              <h4 className="text-xl font-semibold">
                {stat.value}{" "}
                <span className="text-primary text-base">{stat.suffix}</span>
              </h4>
              <p className="text-gray-600">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default GoalsCard;
