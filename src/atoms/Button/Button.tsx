import { ButtonProps } from "./types";
import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Button = (props: ButtonProps) => {
  const {
    appearence = "default",
    size = "xl",
    margin,
    mt,
    mb,
    ml,
    mr,
    disabled,
    loading,
    startIcon,
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
        `${margin ? `margin-${margin}` : ""}`,
        `${mt ? `margin-top-${mt}` : ""}`,
        `${mb ? `margin-bottom-${mb}` : ""}`,
        `${ml ? `margin-left-${ml}` : ""}`,
        `${mr ? `margin-right-${mr}` : ""}`,
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

export default Button;
