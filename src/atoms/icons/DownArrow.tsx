import { IconProps } from "./types";

const DownArrow = (props: IconProps): JSX.Element => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 21 32"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      aria-label="angle down"
      data-category="legacy"
      style={{ verticalAlign: props.align }}
    >
      <path d="M19.196 13.143a.612.612 0 01-.179.411l-8.321 8.321c-.107.107-.268.179-.411.179s-.304-.071-.411-.179l-8.321-8.321c-.107-.107-.179-.268-.179-.411s.071-.304.179-.411l.893-.893a.582.582 0 01.411-.179c.143 0 .304.071.411.179l7.018 7.018 7.018-7.018c.107-.107.268-.179.411-.179s.304.071.411.179l.893.893a.617.617 0 01.179.411z"></path>
    </svg>
  );
};

DownArrow.defaultProps = {
  width: 16,
  height: 16,
  fillPath: "white",
  align: "middle",
  rotate: "bottom",
} as IconProps;

export default DownArrow;