import { SizeType, ColorType, AlignType } from "../commons/commonTypes";

export interface IconProps {
  width?: SizeType;
  height?: SizeType;
  fillPath?: string;
  align?: AlignType;
  fill?: ColorType;
  stroke?: ColorType;
}
