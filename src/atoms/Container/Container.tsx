import React from "react";

interface ContainerProps {
  width?: string;
  height?: string;
  opacity?: string,
  marginX?: string;
  marginY?: string;
  paddingX?: string;
  paddingY?: string;
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
  boxShadowInset?: boolean;
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
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  width = "400px",
  height = "200px",
  opacity= "1",
  marginX = "10px",
  marginY = "10px",
  paddingX = "10px",
  paddingY = "10px",
  borderRadius = "20px",
  borderWidth = "2px",
  borderColor = "black",
  borderStyle = "Solid",
  boxShadowX = "20px",
  boxShadowY = "20px",
  boxShadowColor = "#000000",
  boxShadowBlur = "20px",
  boxShadowSpread = "20px",
  boxShadowInset = false,
  boxShadowOpacity = "ff",
  backgroundImageUrl= "https//www.codewithrandom.com/wp-content/uploads/2022/10/Number-Guessing-Game-using-JavaScript-3.png",
  backgroundColor= "brown",
  backgroundSize= "contain",
  linearGradiantDeg= "90deg",
  linearGradiantColor1= "#833ab4",
  linearGradiantColorStop1= "60%",
  linearGradiantColor2= "#fd1d1d",
  linearGradiantColorStop2= "80%",
  linearGradiantColor3= "#fcb045",
  linearGradiantColorStop3= "100%",
  children,
}) => {

  const currentWidth = width
  const currentHeight = height
  const currentOpacity = opacity
  const currentMarginX= marginX
  const currentMarginY= marginY
  const currentPaddingX= paddingX
  const currentPaddingY= paddingY
  const currentBorderRadius = borderRadius
  const currentBorderWidth = borderWidth
  const currentBorderColor = borderColor
  const currentBorderStyle = borderStyle
  const currentBoxShadowX= boxShadowX
  const currentBoxShadowY= boxShadowY
  const currentBoxShadowColor= boxShadowColor
  const currentBoxShadowBlur= boxShadowBlur
  const currentBoxShadowSpread= boxShadowSpread
  const currentBoxShadowInset= boxShadowInset
  const currentBoxShadowOpacity= boxShadowOpacity
  const currentBackgroundImageUrl= backgroundImageUrl
  const currentBackgroundColor= backgroundColor
  const currentBackgroundSize= backgroundSize
  const currentLinearGradiantDeg= linearGradiantDeg
  const currentLinearGradiantColor1= linearGradiantColor1
  const currentLinearGradiantColorStop1= linearGradiantColorStop1
  const currentLinearGradiantColor2= linearGradiantColor2
  const currentLinearGradiantColorStop2= linearGradiantColorStop2
  const currentLinearGradiantColor3= linearGradiantColor3
  const currentLinearGradiantColorStop3= linearGradiantColorStop3

  return (
    <div style={{
        width: currentWidth,
        height: currentHeight,
        opacity: currentOpacity,
        marginLeft: currentMarginX,
        marginRight: currentMarginX,
        marginTop: currentMarginY,
        marginBottom: currentMarginY,
        paddingLeft: currentPaddingX,
        paddingRight: currentPaddingX,
        paddingTop: currentPaddingY,
        paddingBottom: currentPaddingY,
        borderRadius: currentBorderRadius,
        borderWidth: currentBorderWidth,
        borderStyle: currentBorderStyle,
        borderColor: currentBorderColor,
        boxShadow: `${currentBoxShadowInset?"inset":""} ${currentBoxShadowX} ${currentBoxShadowY} ${currentBoxShadowBlur} ${currentBoxShadowSpread} ${currentBoxShadowColor + currentBoxShadowOpacity} `,
        backgroundColor: currentBackgroundColor,
        backgroundImage: `url("${currentBackgroundImageUrl}")`,
        backgroundSize: currentBackgroundSize,
        background: `linear-gradient(${currentLinearGradiantDeg}, ${currentLinearGradiantColor1} ${currentLinearGradiantColorStop1}, ${currentLinearGradiantColor2} ${currentLinearGradiantColorStop2}, ${currentLinearGradiantColor3} ${currentLinearGradiantColorStop3})`
    }}>
      {children}
    </div>
  );
};

export default Container;

//remaing: display, onclick, hover, (onMouseDown, onMouseUp, onMouseLeave, onMouseEnter)
