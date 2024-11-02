import React, { useState } from "react";

type BorderRadiusSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

// Mapping border radius sizes to pixel values
const borderRadiusMap: Record<BorderRadiusSize, string> = {
  xxs: "2px",
  xs: "4px",
  s: "6px",
  m: "8px",
  l: "10px",
  xl: "12px",
  xxl: "16px",
};

type BackgroundColorType =
  | "primary"
  | "secondary"
  | "subtle"
  | "success"
  | "warning"
  | "failure";

// Mapping for the background color
const backgroundColorMap: Record<BackgroundColorType, string> = {
  primary: "#317AFE",
  subtle: "none",
  success: "#00B884",
  warning: "yellow",
  failure: "red",
  secondary: "#000000",
};

// Darker shades of colors for predefined colors
const darkenColorMap: Record<BackgroundColorType, string> = {
  primary: "#0056b3",
  subtle: "none",
  success: "#008f6a",
  warning: "#cc9e00",
  failure: "#b30000",
  secondary: "#000000",
};

// Mapping for the text color
type ColorType =
  | "primary"
  | "secondary"
  | "subtle"
  | "success"
  | "warning"
  | "failure";

const colorText: Record<ColorType, string> = {
  primary: "#0056b3",
  secondary: "#000000",
  subtle: "#fff",
  success: "#008f6a",
  warning: "#cc9e00",
  failure: "#b30000",
};
//appearence types
type AppearenceType = "ghost" | "primary" | "subtle";

//Mapping for the button size
type ButtonSize = "s" | "m" | "lg";

const ButtonSizeMap: Record<ButtonSize, string> = {
  s: "8px",
  m: "12px",
  lg: "16px",
};

interface ButtonProps {
  borderRadius?: BorderRadiusSize;
  backgroundColor?: BackgroundColorType;
  color?: ColorType;
  customBackgroundColor?: string;
  appearence?: AppearenceType;
  size?: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  borderRadius = "s",
  backgroundColor = "primary",
  color = "secondary",
  size = "m",
  customBackgroundColor,
  appearence = "primary",
  onClick,
  children,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  // Determine background and text color based on appearance
  const determineBackgroundColor = (): string => {
    if (appearence === "ghost") return "transparent";
    if (appearence === "subtle") return backgroundColorMap["subtle"];
    return customBackgroundColor
      ? isClicked
        ? darkenColor(customBackgroundColor)
        : customBackgroundColor
      : isClicked
      ? darkenColorMap[backgroundColor]
      : backgroundColorMap[backgroundColor];
  };

  const determineTextColor = (): string => {
    if (appearence === "subtle") return colorText["secondary"];
    return colorText[color];
  };

  const currentBackgroundColor = determineBackgroundColor();
  const currentTextColor = determineTextColor();

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={onClick}
      style={{
        backgroundColor: currentBackgroundColor,
        color: currentTextColor,
        padding: ButtonSizeMap[size],
        border:
          appearence === "ghost" ? `1px solid ${colorText[color]}` : "none",
        borderRadius: borderRadiusMap[borderRadius],
        outline: "none",
        cursor: "pointer",
        transform: isClicked ? "scale(0.98)" : "scale(1)",
        transition: "background-color 0.3s ease, transform 0.1s ease",
        boxShadow: isClicked
          ? "0 4px 6px rgba(0, 0, 0, 0.1)"
          : "0 2px 4px rgba(0, 0, 0, 0.15)",
      }}
    >
      {children}
    </button>
  );
};

// Function to darken a given hex color
const darkenColor = (color: string): string => {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  r = Math.max(0, r - 30);
  g = Math.max(0, g - 30);
  b = Math.max(0, b - 30);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export default Button;
