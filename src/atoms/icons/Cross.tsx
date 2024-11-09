import iconify from "./Iconify";
import { IconProps } from "./types";

const Cross = (props: IconProps): JSX.Element => {
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
        d="m12 4-8 8m8 0L4 4"
        stroke={props.fillPath}
        strokeLinecap="round"
      />
    </svg>
  );
};

Cross.defaultProps = {
  width: 16,
  height: 16,
  fillPath: "#7F8C8D",
  align: "middle",
} as IconProps;

export default iconify(Cross);
