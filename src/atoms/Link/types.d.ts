import { LinkProps, RelativeRoutingType } from "react-router-dom"

export type LinkProps = Omit<LinkProps, 'relative'> & {
  relative: RelativeRoutingType | 'full',
  underline?: boolean;
}