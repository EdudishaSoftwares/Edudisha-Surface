import React from "react";
import { FlexboxGridProps } from "../../atoms/FlexboxGrid";
import { CSSSpacingSizes } from "../../typings/index";

export type FlexboxComponentProps = Omit<FlexboxGridProps, "align"> & {
  direction: "row" | "column";
  nowrap?: boolean;
  onClick?: () => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseOverCapture?: (event: React.MouseEvent) => void;
  onMouseOutCapture?: (event: React.MouseEvent) => void;
  mt?: CSSSpacingSizes;
  mb?: CSSSpacingSizes;
  gutter?: CSSSpacingSizes;
  align?: "middle" | "top" | "bottom" | "stretch" | "end";
};
