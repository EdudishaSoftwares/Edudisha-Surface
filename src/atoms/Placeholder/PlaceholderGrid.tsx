import React from "react";
import style from "./Placeholder.module.scss";
import classNames from "classnames/bind";
import { PlaceholderGridProps } from "./type";

const cx = classNames.bind(style);

const PlaceholderGrid = React.forwardRef<HTMLDivElement, PlaceholderGridProps>(
  ({ rows = 5, columns = 5, active, className, ...rest }, ref) => {
    const classes = cx("placeholder-grid", className, {
      "placeholder-active": active,
    });

    // Create column items
    const colItems = Array.from({ length: columns }, (_, i) => (
      <div key={i} className={cx("placeholder-grid-col")}>
        {Array.from({ length: rows }, (_, j) => (
          <div key={j} className={cx("placeholder-row")} />
        ))}
      </div>
    ));

    return (
      <div {...rest} ref={ref} className={classes}>
        {colItems}
      </div>
    );
  }
);

export default PlaceholderGrid;
