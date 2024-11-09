import { Link } from "react-router-dom";
import { LinkProps } from "./types";
import classNames from "classnames/bind";
import style from "./Link.module.scss";
const cx = classNames.bind(style);

const LinkText: React.FC<LinkProps> = ({
  margin,
  mt,
  mb,
  ml,
  mr,
  relative = "full",
  to,
  target,
  download,
  children,
  className,
  onClick,
  ...rest
}) => {
  if (relative === "full")
    return (
      <a
        className={cx(
          className,
          "anchor-link",
          `${margin ? `margin-${margin}` : ""}`,
          `${mt ? `margin-top-${mt}` : ""}`,
          `${mb ? `margin-bottom-${mb}` : ""}`,
          `${ml ? `margin-left-${ml}` : ""}`,
          `${mr ? `margin-right-${mr}` : ""}`,
        )}
        onClick={onClick}
        href={to as string}
        target={target}
        download={download}
      >
        {children}
      </a>
    );
  return (
    <Link
      className={cx(
        className,
        "routing-link",
      )}
      to={to}
      onClick={onClick}
      target={target}
      children={children}
      {...rest}
    />
  );
};

export default LinkText;
