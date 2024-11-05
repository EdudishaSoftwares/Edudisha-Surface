import React from "react";
import { LabelComponentProps } from "./types";
import classNames from "classnames/bind";
import style from "./Label.module.scss";

const cx = classNames.bind(style);

const Label = (props: LabelComponentProps): JSX.Element => {
  const { label, type, state, as, className, icon, ...rest } = props;
  const As = (as || "span") as React.ElementType;

  return (
    <As
      className={cx(
        `label-type-${type}`,
        `label-state-${state}`,
        icon ? "label-container" : "",
        className
      )}
      {...rest}
    >
      {icon && icon}
      {label}
    </As>
  );
};

export default Label;
