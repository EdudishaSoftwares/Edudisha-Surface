import React from "react";
import style from "./Placeholder.module.scss";
import classNames from "classnames/bind";
import { PlaceholderGraphProps } from "./type";

const cx = classNames.bind(style);

const PlaceholderGraph = React.forwardRef<
  HTMLDivElement,
  PlaceholderGraphProps
>(({ height = 200, width = "100%", active, className, ...rest }, ref) => {
  const classes = cx("placeholder-graph", className, {
    "placeholder-active": active,
  });
  return (
    <div {...rest} ref={ref} className={classes} style={{ width, height }} />
  );
});

export default PlaceholderGraph;
