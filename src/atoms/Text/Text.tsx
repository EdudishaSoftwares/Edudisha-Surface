import React, { PropsWithChildren } from "react";
import { TextProps } from "./type";
import style from "./Text.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const Text = (props: PropsWithChildren<TextProps>): JSX.Element => {
  const {
    as,
    margin,
    mt,
    mb,
    ml,
    mr,
    fontWeight,
    color,
    styleguide,
    children,
    underline = false,
    underlineOnHover = false,
    strikeThrough = false,
    ellipsis = false,
    ellipsisClamp,
    copiable,
    breakWord,
    textTransform,
    align,
    ...rest
  } = props;

  const As = as ? as : ("p" as React.ElementType);

  const Child = (
    <As
      className={cx([
        `${margin ? `margin-${margin}` : ""}`,
        `${mt ? `margin-top-${mt}` : ""}`,
        `${mb ? `margin-bottom-${mb}` : ""}`,
        `${ml ? `margin-left-${ml}` : ""}`,
        `${mr ? `margin-right-${mr}` : ""}`,
        styleguide,
        `${fontWeight ? `font-weight-${fontWeight}` : ""}`,
        `${color ? `${color}-colored` : ""}`,
        `${underline ? "underline" : ""}`,
        `${underlineOnHover ? "underlineOnHover" : ""}`,
        `${strikeThrough ? "strike-through" : ""}`,
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
