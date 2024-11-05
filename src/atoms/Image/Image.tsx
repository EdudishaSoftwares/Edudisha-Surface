import React from "react";
import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({ src, alt, ...rest }) => {
  const url = React.useMemo(() => {
    if (!src) return "";
    return src;
  }, [src]);

  return <img src={url} alt={alt} {...rest} />;
};

export default Image;
