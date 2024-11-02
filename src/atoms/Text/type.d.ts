const fontSizeMap = { sm: 12, md: 14, lg: 16, xl: 18, xxl: 20 };
import { WithAsProps, Colors } from "../../typings/index";
import React from "react";

export interface TextProps
  extends WithAsProps,
    React.HTMLAttributes<HTMLDivElement> {
  color?: Colors;
  size?: keyof typeof fontSizeMap | number | string;
  muted?: boolean;
  transform?: "uppercase" | "lowercase" | "capitalize";
  align?: "left" | "center" | "right" | "justify";
  weight?:
    | "thin"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";
  maxLines?: number;
}
