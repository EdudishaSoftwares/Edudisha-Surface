import iconify from "./Iconify";
import { IconProps } from "./types";

const SuccessIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      style={{ verticalAlign: props.align }}
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.816-8.041a.509.509 0 0 0 .071-.71.497.497 0 0 0-.703-.073L6.6 9.956l-1.784-1.47a.497.497 0 0 0-.703.071.509.509 0 0 0 .07.711l1.99 1.64a.67.67 0 0 0 .854 0l4.79-3.949z"
        fill={props.fillPath}
      />
    </svg>
  );
};

SuccessIcon.defaultProps = {
  width: 16,
  height: 16,
  align: "middle",
  fillPath: "var(--status-green)",
} as IconProps;

export default iconify(SuccessIcon);
