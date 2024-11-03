import { IconProps } from "atoms/icons/types";
import iconify from "hoc/iconify";

const Warning = (props: IconProps): JSX.Element => {
  const { height, width, align, fillPath } = props;
  return (
    <svg
      style={{ verticalAlign: align }}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m1.144 12.467 5.97-9.992a.96.96 0 0 1 1.653-.006l6.085 10.015c.4.659-.06 1.51-.819 1.513-2.233.008-4.133 0-6.033-.009a736.01 736.01 0 0 0-6.02-.009c-.761.003-1.233-.849-.836-1.512zM7.992 5.03c.276 0 .5.171.5.382v3.815c0 .21-.224.381-.5.381s-.5-.17-.5-.381V5.413c0-.21.224-.382.5-.382zm0 6.922a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
        fill={fillPath}
      />
    </svg>
  );
};

Warning.defaultProps = {
  width: 16,
  height: 16,
  align: "middle",
  fillPath: "var(--status-red)",
} as IconProps;

export default iconify(Warning);
