import React from "react";

//Mapping for the image width
type ImageWidthType = "xxs" | "xs" | "s" | "m" | "lg" | "xlg" | "xxlg" | "full";
const ImageWidthMap: Record<ImageWidthType, string> = {
  xxs: "8px",
  xs: "12px",
  s: "16px",
  m: "24px",
  lg: "32px",
  xlg: "36px",
  xxlg: "480px",
  full: "100%",
};

//Mapping for the image height
type ImageHeightType = "xxs" | "xs" | "s" | "m" | "lg" | "xlg" | "xxlg" | "full";
const ImageHeightMap: Record<ImageHeightType, string> = {
  xxs: "8px",
  xs: "12px",
  s: "16px",
  m: "24px",
  lg: "32px",
  xlg: "36px",
  xxlg: "480px",
  full: "100%",
};

//Mapping for the image size
type ImageBorderRadiusType = "none" | "xxs" | "xs" | "s" | "m" | "lg" | "xlg" | "xxlg" | "full";
const ImageBorderRadiusMap: Record<ImageBorderRadiusType, string> = {
  none: "0px",
  xxs: "8px",
  xs: "12px",
  s: "16px",
  m: "24px",
  lg: "32px",
  xlg: "36px",
  xxlg: "48px",
  full: "100%",
};

interface ImageProps {
  imageURl?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageBorderRadius?: string;
  imageAltText?: string;
}

const Image: React.FC<ImageProps> = ({
  imageURl="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg",
  imageWidth="full",
  imageHeight="full",
  imageBorderRadius = "full",
  imageAltText = "Iamge Not Found"
}) => {
    // Determine background and text color based on appearance
    const determineImageWidth = (): string => {
        return ImageWidthMap[imageWidth];
    };

    const determineImageHeight = (): string => {
        return ImageHeightMap[imageHeight];
    };

    const determineImageBorderRadius = (): string => {
        return ImageBorderRadiusMap[imageBorderRadius];
    };

  const currentImageUrl = imageURl;
  const currentImageWidth = determineImageWidth();
  const currentImageHeight = determineImageHeight();
  const currentBorderRadius = determineImageBorderRadius();
  const currentAltText = imageAltText;

  return (
    <img src={currentImageUrl} alt={currentAltText} style={{
        width: currentImageWidth,
        height: currentImageHeight,
        borderRadius: currentBorderRadius,
    }}/>
  );
};

export default Image;