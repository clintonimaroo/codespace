import React from "react";
import { Badge } from "./ui/badge";

const SpaceBadge = ({ children = null }: { children?: React.ReactNode }) => {
  return (
    <Badge>
      <div className="size-1.5 rounded-full bg-primary uppercase" />
      <span className="uppercase">{children}</span>
    </Badge>
  );
};

export default SpaceBadge;
