import React from "react";
import { ContainerProps } from "./types";
import { ColorMap } from "../constants/constants";

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const {
    width,
    height,
    zIndex,
    opacity="100%",
    color,
    colorOpacity="100%",
    visibility,
    margin,
    marginX,
    marginY,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingX,
    paddingY,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderWidth,
    borderColor,
    borderColorOpacity="100%",
    borderStyle,
    boxShadowX,
    boxShadowY,
    boxShadowColor,
    boxShadowColorOpacity="100%",
    boxShadowBlur,
    boxShadowSpread,
    boxShadowInset,
    backgroundColor,
    backgroundColorOpacity="100%",
    backgroundImageUrl,
    backgroundSize,
    linearGradiantDeg,
    linearGradiantColor1,
    linearGradiantColorOpacity1="100%",
    linearGradiantColorStop1,
    linearGradiantColor2,
    linearGradiantColorOpacity2="100%",
    linearGradiantColorStop2,
    linearGradiantColor3,
    linearGradiantColorOpacity3="100%",
    linearGradiantColorStop3,
    textAlign,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
    gap,
    scale,
    position,
    left,
    right,
    top,
    bottom,
    aspectRatio,
    aspectRatioWidth,
    aspectRatioHeight,
    onClick,
    children,
  } = props

  const currentColor = color?`rgba(${ColorMap[color] + ", " + colorOpacity})`:undefined
  const currentBorderColor = borderColor?`rgba(${ColorMap[borderColor] + ", " + borderColorOpacity})`:undefined
  const currentBoxShadowColor = boxShadowColor?`rgba(${ColorMap[boxShadowColor] + ", " + boxShadowColorOpacity})`:undefined
  const currentBackgroundColor = backgroundColor?`rgba(${ColorMap[backgroundColor] + ", " + backgroundColorOpacity})`:undefined
  const currentLinearGradiantColor1 = linearGradiantColor1?`rgba(${ColorMap[linearGradiantColor1] + ", " + linearGradiantColorOpacity1})`:undefined
  const currentLinearGradiantColor2 = linearGradiantColor2?`rgba(${ColorMap[linearGradiantColor2] + ", " + linearGradiantColorOpacity2})`:undefined
  const currentLinearGradiantColor3 = linearGradiantColor3?`rgba(${ColorMap[linearGradiantColor3] + ", " + linearGradiantColorOpacity3})`:undefined

  return (
    <div
      onClick={onClick}
      style={{
        color: currentColor,
        width: width,
        height: height,
        zIndex: zIndex,
        opacity: opacity,
        visibility: visibility,
        margin: `${marginTop?marginTop:marginY?marginY:margin} ${marginRight?marginRight:marginX?marginX:margin} ${marginBottom?marginBottom:marginY?marginY:margin} ${marginLeft?marginLeft:marginX?marginX:margin}`,
        padding: `${paddingTop?paddingTop:paddingY?paddingY:padding} ${paddingRight?paddingRight:paddingX?paddingX:padding} ${paddingBottom?paddingBottom:paddingY?paddingY:padding} ${paddingLeft?paddingLeft:paddingX?paddingX:padding}`,
        aspectRatio: `${aspectRatio?aspectRatio:aspectRatioHeight?aspectRatioWidth+"/"+aspectRatioHeight:aspectRatioWidth+"/1"}`,
        borderRadius: borderRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: currentBorderColor,
        boxShadow: `${boxShadowInset?"inset":""} ${boxShadowX} ${boxShadowY} ${boxShadowBlur} ${boxShadowSpread} ${currentBoxShadowColor} `,
        backgroundColor: currentBackgroundColor,
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: backgroundSize,
        background: `linear-gradient(${linearGradiantDeg}, ${currentLinearGradiantColor1} ${linearGradiantColorStop1}, ${currentLinearGradiantColor2}  ${linearGradiantColorStop2} ${linearGradiantColor3?", " + currentLinearGradiantColor3 +  " " + linearGradiantColorStop3:""})`,
        textAlign: textAlign,
        display: display,
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
        order: order,
        flexGrow: flexGrow,
        flexShrink: flexShrink,
        flexBasis: flexBasis,
        alignSelf: alignSelf,
        gap: gap,
        scale: scale,
        position: position,
        left: left,
        right: right,
        top: top,
        bottom: bottom,
    }}>
      {children}
    </div>
  );
};

export default Container;
