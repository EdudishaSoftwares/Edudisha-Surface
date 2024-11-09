import React from "react";
import style from "./Placeholder.module.scss";
import classNames from "classnames/bind";
import { PlaceholderParagraphProps } from "./type";

const cx = classNames.bind(style);

const PlaceholderParagraph = React.forwardRef<
  HTMLDivElement,
  PlaceholderParagraphProps
>(({ rows = 2, graph, active, className, ...rest }, ref) => {
  const graphShape = graph === true ? "square" : graph;
  const rowElements = React.useMemo(
    () =>
      Array.from({ length: rows }, (_, i) => (
        <div key={i} className={cx("placeholder-row")} />
      )),
    [rows]
  );

  const classes = cx("placeholder-paragraph", className, {
    "placeholder-active": active,
  });
  return (
    <div {...rest} ref={ref} className={classes}>
      {graphShape && (
        <div
          className={cx(
            `placeholder-paragraph-graph, placeholder-paragraph-graph-${graphShape}`
          )}
        >
          <span className={cx("placeholder-paragraph-graph-inner")} />
        </div>
      )}
      <div className={cx("placeholder-paragraph-group")}>{rowElements}</div>
    </div>
  );
});

export default PlaceholderParagraph;
