import { WithAsProps, Colors, CSSSpacingSizes, Styleguide } from "../../typings/index";
import React from "react";

export type TextProps = {
  as?: React.ElementType;
  to?: string;
  color?: Colors;
  styleguide: Styleguide;
  underline?: boolean;
  strikeThrough?: boolean;
  mt?: CSSSpacingSizes;
  mb?: CSSSpacingSizes;
  ml?: CSSSpacingSizes;
  mr?: CSSSpacingSizes;
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