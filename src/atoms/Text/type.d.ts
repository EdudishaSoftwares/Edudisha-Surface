import { Colors, Sizes, Styleguide } from "../../typings/index";
import React from "react";

export type TextProps = {
  as?: React.ElementType;
  to?: string;
  color?: Colors;
  styleguide: Styleguide;
  underline?: boolean;
  strikeThrough?: boolean;
  mt?: Sizes;
  mb?: Sizes;
  ml?: Sizes;
  mr?: Sizes;
  ellipsis?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  copiable?: CopiableType;
  breakWord?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  dangerouslySetInnerHTML?: { __html: string };
  align?: 'left' | 'center' | 'right';
  ellipsisClamp?: number;
}

export type CopiableType = {
  text: string
}