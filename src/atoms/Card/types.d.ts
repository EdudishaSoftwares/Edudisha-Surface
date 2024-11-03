import { Sizes } from "../../typings";

export type CardProps = React.HTMLAttributes<HTMLElement> & {
  noPadding?: boolean;
  noShadow?: boolean;
  noHorizontalPadding?: boolean;
  noVerticalPadding?: boolean;
  paddingVertical?: Sizes;
  paddingHorizontal?: Sizes;
  mt?: Sizes;
  mb?: Sizes;
}
