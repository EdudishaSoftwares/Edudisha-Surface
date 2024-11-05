import React from "react";
import FlexboxGridItem from "./FlexboxGridItem";
import style from "./FlexboxGrid.module.scss";
import classNames from "classnames/bind";
import { FlexboxGridProps } from "./type";
const cx = classNames.bind(style);

interface FlexboxGridComponent
  extends React.ForwardRefExoticComponent<
    FlexboxGridProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof FlexboxGridItem;
}

const FlexboxGrid = React.forwardRef<HTMLDivElement, FlexboxGridProps>(
  (
    {
      as: Component = "div",
      className,
      align = "top",
      justify = "start",
      direction = "row",
      ...rest
    },
    ref
  ) => {
    const classes = cx(
      className,
      "flex-box-grid",
      `flex-box-grid-${align}`,
      `flex-box-grid-${justify}`,
      `flex-box-grid-direction-${direction}`
    );
    return <Component {...rest} ref={ref} className={classes} />;
  }
) as FlexboxGridComponent;

FlexboxGrid.Item = FlexboxGridItem;

export default FlexboxGrid;
