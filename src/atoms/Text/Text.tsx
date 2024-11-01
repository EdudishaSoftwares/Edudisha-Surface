import React from "react";
import { TextProps } from "./types";
import { ColorMap, FontWeightMap } from "../constants/constants";

const Text: React.FC<TextProps> = (props: TextProps) => {
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
    children,
  } = props

  const currentColor = color?`rgba${ColorMap[color] + ", " + colorOpacity})`:undefined
  const currentFontWeight = fontWeight?FontWeightMap[fontWeight]:undefined

  return (
    <span
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
    </span>
  );
};

export default Text;