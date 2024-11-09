import React from "react";
import { ImageProps } from "./types";

const Image = (props: ImageProps) => {
  const { src, alt, style, ...rest } = props;
  const url = React.useMemo(() => {
    if (!src) return "";
    return src;
  }, [src]);

  return <img src={url} alt={alt} style={style} {...rest} />;
};

export default Image;
