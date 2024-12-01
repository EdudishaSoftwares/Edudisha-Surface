import React from "react";
import { MarginProps, PaddingProps, Sizes } from "../../../typings";

type ScetionCardDirectionType =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

type ScetionCardTitleLevelType = 1 | 2 | 3 | 4 | 5 | 6;

type ScetionCardDescriptionSizeType = "sm" | "md" | "lg" | "xl" | "xxl";

export type ScetionCardProps = MarginProps &
  PaddingProps & {
    label?: string;
    title?: string;
    titleLevel?: ScetionCardTitleLevelType;
    description?: string;
    link?: string;
    descriptionSize?: ScetionCardDescriptionSizeType;
    noBoldDescription?: boolean;
    button?: string;
    buttonAsideText1?: string;
    buttonAsideText2?: string;
    buttonGradient?: boolean;
    highMargin?: boolean;
    gutter?: Sizes;
    direction?: ScetionCardPropsDirectionType;
    detailsChild?: React.ReactNode;
    children?: React.ReactNode;
  };
