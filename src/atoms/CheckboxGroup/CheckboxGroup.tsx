import React from "react";
import Text from "../Text";
import { CheckboxGroupProps } from "./types";
import style from "./CheckboxGroup.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    options,
    active: initialActive,
    onChange,
    id,
    inline = false,
    ...rest
  } = props;

  const [active, setActive] =
    React.useState<(number | string)[]>(initialActive);

  React.useEffect(() => {
    setActive(initialActive);
  }, [initialActive]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedActive = [...active];

    if (event.target.checked) {
      updatedActive.push(event.target.name);
    } else {
      const index = updatedActive.indexOf(event.target.name);
      if (index > -1) updatedActive.splice(index, 1);
    }

    setActive(updatedActive);
    onChange(updatedActive, event);
  };

  const checkGroupClass = cx({ inline: inline }, "checkbox-item");

  const renderOptions = () => {
    return options.map((item, i) => (
      <li key={i} className={checkGroupClass} {...rest}>
        <input
          id={`${id}_${i}`}
          name={item.toString()}
          type="checkbox"
          checked={active.includes(item)}
          onChange={handleChange}
        />
        <label htmlFor={`${id}_${i}`} className={cx("label")}>
          <Text styleguide="body2" align="center">
            {item}
          </Text>
        </label>
      </li>
    ));
  };

  return <ul className={cx("checkbox")}>{renderOptions()}</ul>;
};

export default CheckboxGroup;
