import { MarginProps, PaddingProps } from "../../../typings";

type OverlayImageCardDirectionType = "row" | "row-reverse";

type OverlayImageCardGradientType = "orange" | "blue" | "indigo";

export type OverlayImageCardProps = MarginProps &
  PaddingProps & {
    direction?: OverlayImageCardDirectionType;
    gradient?: OverlayImageCardGradientType;
    imageUrl?: string;
    noShadow?: boolean;
    noImagePadding?: boolean;
  };
