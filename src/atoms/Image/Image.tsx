import React from "react";
import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = (props: ImageProps) => {

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
    imageUrl,
    aspectRatio,
    aspectRatioHeight,
    aspectRatioWidth,
    altText,
    altTextMaxLength,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    opacity,
    display,
  } = props

  return (
    <img
      src={imageUrl}
      alt={(altText && altTextMaxLength)?altText.length<=altTextMaxLength?altText:altText.slice(0,altTextMaxLength) + "...":altText}
      style={{
          width: width,
          height: height,
          margin: `${marginTop?marginTop:marginY?marginY:margin} ${marginRight?marginRight:marginX?marginX:margin} ${marginBottom?marginBottom:marginY?marginY:margin} ${marginLeft?marginLeft:marginX?marginX:margin}`,
          padding: `${paddingTop?paddingTop:paddingY?paddingY:padding} ${paddingRight?paddingRight:paddingX?paddingX:padding} ${paddingBottom?paddingBottom:paddingY?paddingY:padding} ${paddingLeft?paddingLeft:paddingX?paddingX:padding}`,
          aspectRatio: `${aspectRatio?aspectRatio:aspectRatioHeight?aspectRatioWidth+"/"+aspectRatioHeight:aspectRatioWidth+"/1"}`,
          borderRadius: borderRadius,
          borderTopLeftRadius: borderTopLeftRadius,
          borderTopRightRadius: borderTopRightRadius,
          borderBottomLeftRadius: borderBottomLeftRadius,
          borderBottomRightRadius: borderBottomRightRadius,
          opacity: opacity,
          display: display,
    }}
    />
  );
};

export default Image;

//aspect ratio