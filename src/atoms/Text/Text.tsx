import React from "react";

// Mapping for the text color
type ColorType = "primary" | "secondary" | "subtle" | "success" | "warning" | "failure" | "grey" | "violet";

const colorText: Record<ColorType, string> = {
  primary: "#0056b3",
  subtle: "#ffffff",
  secondary: "#000000",
  success: "#008f6a",
  warning: "#cc9e00",
  failure: "#b30000",
  grey: "#989898",
  violet: "7612FA",
};

// Darker shades of colors for predefined colors
// const darkenColorMap: Record<ColorType, string> = {
//     primary: "#0056b3",
//     subtle: "none",
//     success: "#008f6a",
//     warning: "#cc9e00",
//     failure: "#b30000",
//     secondary: "#000000",
//   };

//appearence types
// type AppearenceType = "ghost" | "primary" | "subtle";

// text font family
type FontFamilyType = "montserrat" | "inter"

// text font style
type FontStyleType = "normal" | "italic"

// text decoration
type TextDecorationType = "overline" | "line-through" | "underline" | "none"

// text font weight
type FontWeightType = "light" | "regular" | "medium" | "semibold" | "bold" | "extrabold"
const FontWeightMap: Record<FontWeightType, number> = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
};

//Mapping for the text size
type FontSizeType = "xxs" | "xs" | "s" | "m" | "lg" | "xlg" | "xxlg";
const FontSizeMap: Record<FontSizeType, string> = {
  xxs: "8px",
  xs: "12px",
  s: "16px",
  m: "24px",
  lg: "32px",
  xlg: "36px",
  xxlg: "48px",
};

interface TextProps {
  color?: ColorType;
//   appearence?: AppearenceType;
  fontSize?: FontSizeType;
  fontFamily?: FontFamilyType;
  fontStyle?: FontStyleType;
  textDecoration?: TextDecorationType;
  fontWeight?: FontWeightType;
  display?: string,
  width?: string,
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  color = "grey",
//   appearence = "ghost",
  fontSize = "lg",
  fontFamily= "montserrat",
  fontStyle= "normal",
  textDecoration= "none",
  fontWeight= "regular",
  display= "inline-block",
  width= "300px",
  children,
}) => {

  // Determine background and text color based on appearance
  const determineFontColor = (): string => {
    return colorText[color];
  };

  const currentFontColor = determineFontColor();
  const currentFontFamily = fontFamily;
  const currentFontStyle = fontStyle;
  const currentTextDecoration = textDecoration;
  const currentDisplay = display;
  const currentWidth = width;
  return (
    <span
      style={{
        color: currentFontColor,
        fontSize: FontSizeMap[fontSize],
        fontFamily: currentFontFamily,
        fontStyle: currentFontStyle,
        fontWeight: FontWeightMap[fontWeight],
        textDecoration: currentTextDecoration,
        display: currentDisplay,
        width: currentWidth,
      }}
    >
      {children}
    </span>
  );
};

export default Text;