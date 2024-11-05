import { ButtonProps } from "./types";
import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Button_2 = (props: ButtonProps) => {
  const {
    appearence = "default",
    size = "sm",
    height,
    width,
    maxHeight,
    minHeight,
    minWidth,
    maxWidth,
    margin,
    mt,
    mb,
    disabled,
    loading,
    startIcon, // need to verify
    endIcon,
    toolTip,
    className,
    children,
    style,
    onClick,
    // need to add mouse and keyboard event as well
    ...rest
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={cx(
        className,
        "button",
        `${height ? `height-${height}` : ""}`,
        `${width ? `width-${width}` : ""}`,
        `${maxHeight ? `max-height-${maxHeight}` : ""}`,
        `${minHeight ? `min-height-${minHeight}` : ""}`,
        `${maxWidth ? `max-width-${maxWidth}` : ""}`,
        `${minWidth ? `min-width-${minWidth}` : ""}`,
        `${margin ? `margin-${margin}` : ""}`,
        `${mt ? `margin-top-${mt}` : ""}`,
        `${mb ? `margin-bottom-${mb}` : ""}`,
        `${appearence ? `appearence-${appearence}` : ""}`,
        `${size ? `size-${size}` : ""}`,
        `${disabled ? "disabled" : ""}`
      )}
      {...rest}
    >
      {loading ? <span className={cx("loading")} /> : null}
      {startIcon ? <span className={cx("start-icon")}>{startIcon}</span> : null}
      {children}
      {endIcon ? <span className={cx("end-icon")}>{endIcon}</span> : null}
      {toolTip ? <span className={cx("tool-tip")}>{toolTip}</span> : null}
    </button>
  );
};

export default Button_2;
