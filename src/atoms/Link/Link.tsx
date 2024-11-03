import { Link } from "react-router-dom";
import { LinkProps } from "./types";
import classNames from "classnames/bind";
import style from "./Link.module.scss";
const cx = classNames.bind(style);

const Link: React.FC<LinkProps> = ({
  relative = "full",
  underline = true,
  rest,
  target,
  download,
  children,
}) => {
  if (relative === "full")
    return (
      <a
        className={underline ? cx(`underline`) : ``}
        href={rest.to as string}
        target={target}
        download={download}
      >
        {children}
      </a>
    );
  return (
    <Link
      className={underline ? cx(`underline`) : ``}
      target={target}
      children={children}
      {...rest}
    />
  );
};

export default Link;
