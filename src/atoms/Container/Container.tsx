import React from "react";

type FlexDirectionType = "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined;
type FlexWrapType = "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit" | undefined;
type PositionType = "relative" | "absolute" | undefined;
type VisibilityType = "hidden" | "visible" | undefined;

interface ContainerProps {
  width?: string;
  height?: string;
  zIndex?: string;
  opacity?: string;
  visibility?: VisibilityType;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  boxShadowX?: string;
  boxShadowY?: string;
  boxShadowColor?: string;
  boxShadowBlur?: string;
  boxShadowSpread?: string;
  boxShadowOpacity?: string;
  boxShadowInset?: string;
  backgroundColor?: string,
  backgroundImageUrl?: string,
  backgroundSize?: string,
  linearGradiantDeg?: string,
  linearGradiantColor1?: string,
  linearGradiantColorStop1?: string,
  linearGradiantColor2?: string,
  linearGradiantColorStop2?: string,
  linearGradiantColor3?: string,
  linearGradiantColorStop3?: string,
  display?: string,
  flexDirection?: FlexDirectionType,
  flexWrap?: FlexWrapType,
  justifyContent?: string,
  alignItems?: string,
  alignContent?: string,
  order?: string,
  flexGrow?: string,
  flexShrink?: string,
  flexBasis?: string,
  alignSelf?: string,
  gap?: string,
  scale?: string,
  position?: PositionType,
  left?: string,
  right?: string,
  top?: string,
  bottom?: string,
  onClick?: () => void,
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  width = "400px",
  height = "200px",
  zIndex = "1",
  opacity= "1",
  visibility= "visible",
  marginLeft = "10px",
  marginRight = "10px",
  marginTop = "10px",
  marginBottom = "10px",
  paddingLeft = "10px",
  paddingRight = "10px",
  paddingTop = "10px",
  paddingBottom = "10px",
  borderRadius = "20px",
  borderWidth = "2px",
  borderColor = "black",
  borderStyle = "Solid",
  boxShadowX = "20px",
  boxShadowY = "20px",
  boxShadowColor = "#000000",
  boxShadowBlur = "20px",
  boxShadowSpread = "20px",
  boxShadowInset = "false",
  boxShadowOpacity = "ff",
  backgroundImageUrl = "https//www.codewithrandom.com/wp-content/uploads/2022/10/Number-Guessing-Game-using-JavaScript-3.png",
  backgroundColor = "brown",
  backgroundSize = "contain",
  linearGradiantDeg = "90deg",
  linearGradiantColor1 = "#833ab4",
  linearGradiantColorStop1 = "60%",
  linearGradiantColor2 = "#fd1d1d",
  linearGradiantColorStop2 = "80%",
  linearGradiantColor3 = "#fcb045",
  linearGradiantColorStop3 = "100%",
  display = "flex",
  flexDirection = "row",
  flexWrap = "wrap",
  justifyContent = "center",
  alignItems = "center",
  alignContent = "center",
  order = "3",
  flexGrow = "2",
  flexShrink = "1",
  flexBasis = "100px",
  alignSelf = "center",
  gap = "20px",
  scale = "1.1",
  position = "relative",
  left = "0px",
  right = "0px",
  top = "0px",
  bottom = "0px",
  onClick,
  children,
}) => {

  const currentWidth = width
  const currentHeight = height
  const currentZIndex = zIndex
  const currentOpacity = opacity
  const currentVisibility = visibility
  const currentMarginLeft = marginLeft
  const currentMarginRight = marginRight
  const currentMarginTop = marginTop
  const currentMarginBottom = marginBottom
  const currentPaddingLeft = paddingLeft
  const currentPaddingRight = paddingRight
  const currentPaddingTop = paddingTop
  const currentPaddingBottom = paddingBottom
  const currentBorderRadius = borderRadius
  const currentBorderWidth = borderWidth
  const currentBorderColor = borderColor
  const currentBorderStyle = borderStyle
  const currentBoxShadowX = boxShadowX
  const currentBoxShadowY = boxShadowY
  const currentBoxShadowColor = boxShadowColor
  const currentBoxShadowBlur = boxShadowBlur
  const currentBoxShadowSpread = boxShadowSpread
  const currentBoxShadowInset = boxShadowInset
  const currentBoxShadowOpacity = boxShadowOpacity
  const currentBackgroundImageUrl = backgroundImageUrl
  const currentBackgroundColor = backgroundColor
  const currentBackgroundSize = backgroundSize
  const currentLinearGradiantDeg = linearGradiantDeg
  const currentLinearGradiantColor1 = linearGradiantColor1
  const currentLinearGradiantColorStop1 = linearGradiantColorStop1
  const currentLinearGradiantColor2 = linearGradiantColor2
  const currentLinearGradiantColorStop2 = linearGradiantColorStop2
  const currentLinearGradiantColor3 = linearGradiantColor3
  const currentLinearGradiantColorStop3 = linearGradiantColorStop3
  const currentDisplay = display
  const currentFlexDirection = flexDirection
  const currentFlexWrap = flexWrap
  const currentJustifyContent = justifyContent
  const currentAlignItems = alignItems
  const currentAlignContent = alignContent
  const currentOrder = order
  const currentFlexGrow = flexGrow
  const currentFlexShrink = flexShrink
  const currentFlexBasis = flexBasis
  const currentAlignSelf = alignSelf
  const currentGap = gap
  const currentScale =scale
  const currentPosition= position
  const currentLeft= left
  const currentRight= right
  const currentTop= top
  const currentBottom= bottom

  return (
    <div
      onClick={onClick}
      style={{
        width: currentWidth,
        height: currentHeight,
        zIndex: currentZIndex,
        opacity: currentOpacity,
        visibility: currentVisibility,
        margin: `${currentMarginTop} ${currentMarginLeft} ${currentMarginBottom} ${currentMarginRight}`,
        padding: `${currentPaddingTop} ${currentPaddingLeft} ${currentPaddingBottom} ${currentPaddingRight}`,
        borderRadius: currentBorderRadius,
        borderWidth: currentBorderWidth,
        borderStyle: currentBorderStyle,
        borderColor: currentBorderColor,
        boxShadow: `${currentBoxShadowInset?"inset":""} ${currentBoxShadowX} ${currentBoxShadowY} ${currentBoxShadowBlur} ${currentBoxShadowSpread} ${currentBoxShadowColor + currentBoxShadowOpacity} `,
        backgroundColor: currentBackgroundColor,
        backgroundImage: `url("${currentBackgroundImageUrl}")`,
        backgroundSize: currentBackgroundSize,
        background: `linear-gradient(${currentLinearGradiantDeg}, ${currentLinearGradiantColor1} ${currentLinearGradiantColorStop1}, ${currentLinearGradiantColor2} ${currentLinearGradiantColorStop2}${currentLinearGradiantColor3?", "+ currentLinearGradiantColor3 + " " + currentLinearGradiantColorStop3:""})`,
        display: currentDisplay,
        flexDirection: currentFlexDirection,
        flexWrap: currentFlexWrap,
        justifyContent: currentJustifyContent,
        alignItems: currentAlignItems,
        alignContent: currentAlignContent,
        order: currentOrder,
        flexGrow: currentFlexGrow,
        flexShrink: currentFlexShrink,
        flexBasis: currentFlexBasis,
        alignSelf: currentAlignSelf,
        gap: currentGap,
        scale: currentScale,
        position: currentPosition,
        left: currentLeft,
        right: currentRight,
        top: currentTop,
        bottom: currentBottom,
    }}>
      {children}
    </div>
  );
};

export default Container;
