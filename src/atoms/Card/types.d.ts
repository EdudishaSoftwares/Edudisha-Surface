import { CommmonProps, Sizes } from "../../typings";

export interface CardProps extends CommmonProps {
  noPadding?: boolean;
  noShadow?: boolean;
  noHorizontalPadding?: boolean;
  noVerticalPadding?: boolean;
  paddingVertical?: Sizes;
  paddingHorizontal?: Sizes;
}
