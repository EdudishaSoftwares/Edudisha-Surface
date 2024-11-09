import React from "react";
import { Colors, CommmonProps, StyleGuide } from "../../typings/index";

export type CopiableType = {
  text: string
}

export type FontWeightType = "thin" | "regular" | "medium" | "semiBold" | "bold" | "extrabold";

export interface TextProps extends CommmonProps {
  as?: React.ElementType;
  to?: string;
  fontWeight?: FontWeightType;
  color?: Colors;
  styleguide: StyleGuide;
  underline?: boolean;
  underlineOnHover?:boolean;
  strikeThrough?: boolean;
  ellipsis?: boolean;
  copiable?: CopiableType;
  breakWord?: boolean;
  ellipsisClamp?: number;
  dangerouslySetInnerHTML?: { __html: string };
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'left' | 'center' | 'right';
  onClick?: (event: React.SyntheticEvent) => void;
}
