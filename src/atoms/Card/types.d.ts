import { MarginProps, PaddingProps, Sizes } from "../../typings";

export type CardProps = React.HTMLAttributes<HTMLElement> &
  MarginProps &
  PaddingProps & {
    as?: React.ElementType;
    borderRadius?: Sizes;
  };
