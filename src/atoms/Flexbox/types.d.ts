import React from "react";
import { FlexboxGridProps } from "../../atoms/FlexboxGrid";
import { CommmonProps, Sizes } from "../../typings/index";

export type FlexboxComponentProps = Omit<FlexboxGridProps, "align"> & CommmonProps & {
  direction: "row" | "column";
  nowrap?: boolean;
  onClick?: () => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseOverCapture?: (event: React.MouseEvent) => void;
  onMouseOutCapture?: (event: React.MouseEvent) => void;
  mt?: Sizes;
  mb?: Sizes;
  gutter?: Sizes;
  align?: "middle" | "top" | "bottom" | "stretch" | "end";
};
