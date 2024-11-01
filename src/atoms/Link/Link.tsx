import React from "react";
import { LinkProps } from "./types";
import { ColorMap, FontWeightMap} from "../constants/constants";

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const {
    height,
    width,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginX,
    marginY,
    margin,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingX,
    paddingY,
    padding,
    opacity,
    display,
    color,
    colorOpacity="100%",
    fontSize,
    fontFamily,
    fontStyle,
    fontWeight,
    textDecoration,
    href,
    rel,
    download,
    ping,
    target,
    referrerPolicy,
    children,
  } = props

  const currentColor = color?`rgba${ColorMap[color] + ", " + colorOpacity})`:undefined
  const currentFontWeight = fontWeight?FontWeightMap[fontWeight]:undefined

  return (
    <a
      href={href}
      download={download}
      ping={ping}
      referrerPolicy={referrerPolicy}
      rel={rel}
      target={target}
      style={{
        width: width,
        height: height,
        margin: `${marginTop?marginTop:marginY?marginY:margin} ${marginRight?marginRight:marginX?marginX:margin} ${marginBottom?marginBottom:marginY?marginY:margin} ${marginLeft?marginLeft:marginX?marginX:margin}`,
        padding: `${paddingTop?paddingTop:paddingY?paddingY:padding} ${paddingRight?paddingRight:paddingX?paddingX:padding} ${paddingBottom?paddingBottom:paddingY?paddingY:padding} ${paddingLeft?paddingLeft:paddingX?paddingX:padding}`,
        opacity: opacity,
        display: display,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        textDecoration: textDecoration,
        color: currentColor,
        fontSize: fontSize,
        fontWeight: currentFontWeight,
      }}
    >
      {children}
    </a>
  );
};

export default Link;