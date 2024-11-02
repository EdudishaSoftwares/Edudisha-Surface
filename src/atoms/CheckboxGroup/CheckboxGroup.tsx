import React from "react";
import style from "./CheckboxGroup.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

interface CheckboxGroupProps {
  options: (number | string)[];
  active: (number | string)[];
  onChange: (
    active: (number | string)[],
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  id: string;
  inline?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  active: initialActive,
  onChange,
  id,
  inline = false,
}) => {
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
      <li key={i} className={checkGroupClass}>
        <input
          id={`${id}_${i}`}
          name={item.toString()}
          type="checkbox"
          checked={active.includes(item)}
          onChange={handleChange}
        />
        <label htmlFor={`${id}_${i}`} className={cx("label")}>
          {item}
        </label>
      </li>
    ));
  };

  return <ul className={cx("checkbox")}>{renderOptions()}</ul>;
};

export default CheckboxGroup;
