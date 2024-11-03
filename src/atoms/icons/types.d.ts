export type AlignType = 'top' | 'middle' | 'bottom';

export type ColorType = "black" | "white" | "lightGrey" | "grey" | "primary";

export type SizeType = "s" | "m" | "lg";

export interface IconProps {
  width?: SizeType;
  height?: SizeType;
  fillPath?: string;
  align?: AlignType;
  fill?: ColorType;
  stroke?: ColorType;
}
