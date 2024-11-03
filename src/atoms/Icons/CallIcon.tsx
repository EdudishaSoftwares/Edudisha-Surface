import React from "react";
import { IconProps } from "./types";
import { SizesMap, ColorsMap } from "../../constants/constants";

const CallIcon: React.FC<IconProps> = ({
  height = "md",
  width = "md",
  fillPath = "none",
  align = "middle",
  fill = "primary",
  stroke = "primary",
  ...rest
}) => {
  const currentHeight = SizesMap[height];
  const currentWidth = SizesMap[width];
  const currentFill = ColorsMap[fill];
  const currentStroke = ColorsMap[stroke];

  return (
    <svg
      style={{ verticalAlign: align }}
      width={currentWidth}
      height={currentHeight}
      viewBox="0 0 16 16"
      fill={fillPath}
      stroke={currentStroke}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.18 5.12a2.416 2.416 0 0 1 .527-2.625l.788-.788a2.415 2.415 0 0 1 3.415 0l.803.803a2.415 2.415 0 0 1 0 3.416l-.69.69a12.68 12.68 0 0 0 3.374 3.347l.677-.676a2.415 2.415 0 0 1 3.416 0l.803.803a2.415 2.415 0 0 1 0 3.415l-.788.788a2.416 2.416 0 0 1-2.82.437l-1.06-.492a16.302 16.302 0 0 1-8.073-8.244l-.381-.87.01-.004z"
        fill={currentFill}
      />
    </svg>
  );
};

export default CallIcon;
