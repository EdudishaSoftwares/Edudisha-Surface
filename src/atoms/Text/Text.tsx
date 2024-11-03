import React, { PropsWithChildren } from "react";
import { TextProps } from "./type";
import style from "./Text.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const styleguideToHTMLMapper = {
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  heading7: "p",
  body1: "p",
  body2: "p",
  body3: "p",
};

const Text = (props: PropsWithChildren<TextProps>): JSX.Element => {
  let {
    as,
    color,
    styleguide,
    children,
    underline = false,
    strikeThrough = false,
    mt,
    mb,
    ml,
    mr,
    ellipsis = false,
    ellipsisClamp,
    copiable,
    breakWord,
    textTransform,
    align,
    ...rest
  } = props;

  const As = as
    ? as
    : styleguideToHTMLMapper[styleguide] || ("p" as React.ElementType);

  const Child = (
    <As
      className={cx([
        styleguide,
        `${color ? `${color}-colored` : ""}`,
        `${underline ? "underline" : ""}`,
        `${strikeThrough ? "strike-through" : ""}`,
        `${ml ? `ml-${ml}` : ""}`,
        `${mr ? `mr-${mr}` : ""}`,
        `${mt ? `mt-${mt}` : ""}`,
        `${mb ? `mb-${mb}` : ""}`,
        `${ellipsis ? "ellipsis" : ""}`,
        `${copiable ? "cursor-pointer" : ""}`,
        `${breakWord ? "break-word" : ""}`,
        `${textTransform ? `text-transform-${textTransform}` : ""}`,
        `${align ? `text-align-${align}` : ""}`,
      ])}
      {...rest}
      style={
        ellipsisClamp
          ? {
              display: "-webkit-box",
              WebkitLineClamp: ellipsisClamp,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }
          : {}
      }
    >
      {children}
    </As>
  );

  const content = Child;

  return content;
};

export default Text;
