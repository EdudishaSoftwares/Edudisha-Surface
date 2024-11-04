import React from "react";
import { IconProps } from "./types";

const CallIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      style={{ verticalAlign: props.align }}
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill={props.fill}
      stroke={props.stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.18 5.12a2.416 2.416 0 0 1 .527-2.625l.788-.788a2.415 2.415 0 0 1 3.415 0l.803.803a2.415 2.415 0 0 1 0 3.416l-.69.69a12.68 12.68 0 0 0 3.374 3.347l.677-.676a2.415 2.415 0 0 1 3.416 0l.803.803a2.415 2.415 0 0 1 0 3.415l-.788.788a2.416 2.416 0 0 1-2.82.437l-1.06-.492a16.302 16.302 0 0 1-8.073-8.244l-.381-.87.01-.004z"
        fill={props.fill}
      />
    </svg>
  );
};

export default CallIcon;
