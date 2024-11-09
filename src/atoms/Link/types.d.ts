import { LinkProps, RelativeRoutingType } from "react-router-dom"
import { CommmonProps } from "../../typings";

export type LinkProps = Omit<LinkProps, 'relative'> & CommmonProps &{
  relative: RelativeRoutingType | 'full',
  onClick?: (event: React.SyntheticEvent) => void;
}