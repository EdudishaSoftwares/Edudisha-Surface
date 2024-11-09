import React from "react";
import style from "./FlexboxGrid.module.scss";
import classNames from "classnames/bind";
import { FlexboxGridItemProps } from "./type";
const cx = classNames.bind(style);

const FlexboxGridItem = React.forwardRef((props: FlexboxGridItemProps, ref) => {
  const {
    as: Component = "div",
    margin,
    mt,
    mb,
    ml,
    mr,
    className,
    colspan = 0,
    order = 0,
    ...rest
  } = props;

  const classes = cx(
    className,
    `${margin ? `margin-${margin}` : ""}`,
    `${mt ? `margin-top-${mt}` : ""}`,
    `${mb ? `margin-bottom-${mb}` : ""}`,
    `${ml ? `margin-left-${ml}` : ""}`,
    `${mr ? `margin-right-${mr}` : ""}`,
    "flex-box-grid-item",
    { [`flex-box-grid-item-${colspan}`]: colspan >= 0 },
    { [`flex-box-grid-item-order-${order}`]: order }
  );

  return <Component ref={ref} {...rest} className={classes} />;
});

export default FlexboxGridItem;
