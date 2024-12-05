import { Input } from "rsuite";
import InputComponentProps from "./types";
import style from "./Input.module.scss";
import classNames from "classnames/bind";
import Text from "../Text";
import FlexboxGrid from "../FlexboxGrid";

const cx = classNames.bind(style);

const InputComponent = (props: InputComponentProps) => {
  const {
    children,
    className,
    mt,
    ml,
    mb,
    mr,
    type,
    setInput,
    label,
    labelSize,
    labelColor,
    ...rest
  } = props;

  console.log("input type number", type == "number");

  const handleOnChange = (value: string) => {
    if (type === "number") {
      console.log("type number", value);
      if (value.length === 0 || /^\d+$/.test(value)) {
        console.log("seting number", value);
        setInput(value);
      }
      return;
    } else {
      setInput(value);
    }
    return;
  };

  return (
    <FlexboxGrid direction="column" align="start" className={cx("input-cover")}>
      {label ? (
        <Text ml="sm" mb="sm" color={labelColor} size={labelSize}>
          {label}
        </Text>
      ) : (
        <></>
      )}
      <Input
        type={type === "number" ? "text" : type}
        {...rest}
        className={cx(
          `${mt ? `mt-${mt}` : ""}`,
          `${ml ? `ml-${ml}` : ""}`,
          `${mb ? `mb-${mb}` : ""}`,
          `${mr ? `mr-${mr}` : ""}`,
          className
        )}
        onChange={handleOnChange}
      >
        {children}
      </Input>
    </FlexboxGrid>
  );
};

export default InputComponent;
