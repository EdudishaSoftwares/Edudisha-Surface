import { CommmonProps, WithAsProps } from "../../typings/index";
import React from "react";
export interface FlexboxGridProps
  extends WithAsProps,
    React.HTMLAttributes<HTMLDivElement>, CommmonProps {
  direction: "row" | "column";
  align?: "top" | "middle" | "bottom";
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
}

export interface FlexboxGridItemProps
  extends WithAsProps,
    React.HTMLAttributes<HTMLDivElement>, CommmonProps {
  colspan?: number;
  order?: number;
}
