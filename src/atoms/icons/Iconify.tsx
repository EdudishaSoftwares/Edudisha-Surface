import React from "react";
import { IconProps } from "./types";

const iconify = (CustomIcon: React.ElementType) => {
  return (props: IconProps): JSX.Element => {
    return (
      <span style={{ lineHeight: 0 }}>
        &nbsp;
        <CustomIcon {...props} />
        &nbsp;
      </span>
    );
  };
};

export default iconify;
