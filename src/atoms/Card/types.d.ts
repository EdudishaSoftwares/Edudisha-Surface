export type CSSSpacingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardProps = React.HTMLAttributes<HTMLElement> & {
  noPadding?: boolean;
  noShadow?: boolean;
  noHorizontalPadding?: boolean;
  noVerticalPadding?: boolean;
  paddingVertical?: CSSSpacingSizes;
  paddingHorizontal?: CSSSpacingSizes;
  mt?: CSSSpacingSizes;
  mb?: CSSSpacingSizes;
}
