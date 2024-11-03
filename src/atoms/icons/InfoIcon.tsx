import iconify from "./Iconify";
import { IconProps } from "./types";

const InfoIcon = (props: IconProps): JSX.Element => {
  const { height, width, fillPath, align, ...rest } = props;
  return (
    <>
      {fillPath === "white" ? (
        <svg
          style={{ verticalAlign: align }}
          width={width}
          height={height}
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 2.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-7 6a7 7 0 1 1 14 0 7 7 0 0 1-14 0z"
            fill="#1D2025"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 12.5c-.276 0-.5-.187-.5-.417V7.917c0-.23.224-.417.5-.417s.5.187.5.417v4.166c0 .23-.224.417-.5.417z"
            fill="#1D2025"
          />
          <path
            d="M7.5 5.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"
            fill="#1D2025"
          />
        </svg>
      ) : (
        <svg
          style={{ verticalAlign: align }}
          width={width}
          height={height}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 3.516a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM7.5 12a.5.5 0 0 0 1 0V7a.5.5 0 1 0-1 0v5z"
            fill={fillPath}
          />
        </svg>
      )}
    </>
  );
};

InfoIcon.defaultProps = {
  width: 16,
  height: 16,
  align: "middle",
} as IconProps;

export default iconify(InfoIcon);
