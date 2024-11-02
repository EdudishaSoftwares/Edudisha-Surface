import React from "react";
import classNames from "classnames/bind";
import style from "./Text.module.scss";
import { TextProps } from "./type";

const cx = classNames.bind(style);

const fontSizeMap = { sm: 12, md: 14, lg: 16, xl: 18, xxl: 20 };

const Text: React.FC<TextProps> = ({
  as: Component = "p",
  color,
  size,
  align,
  weight = "regular",
  transform,
  muted,
  maxLines,
  className,
  style: inlineStyle,
  children,
  ...rest
}) => {
  const classes = cx(
    "text",
    { [`text-${color}`]: color },
    { [`text-${align}`]: align },
    { [`text-${weight}`]: weight },
    { [`text-${transform}`]: transform },
    { "text-muted": muted, "text-ellipsis": maxLines }
  );

  const styles = {
    fontSize: fontSizeMap[size as keyof typeof fontSizeMap] || size,
    WebkitLineClamp: maxLines,
    ...inlineStyle,
  };

  return (
    <Component {...rest} className={classes} style={styles}>
      {children}
    </Component>
  );
};

export default Text;
