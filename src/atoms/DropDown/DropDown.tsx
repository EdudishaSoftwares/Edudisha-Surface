// Modules
import React from "react";
// Atoms
import Button from "../Button/Button";
import DownArrow from "../icons/DownArrow";
import OutsideClickHandler from "../OutsideClickHandler";
// Styles
import classNames from "classnames/bind";
import style from "./DropDown.module.scss";
const cx = classNames.bind(style);
// Types
import {
  DropDownProps,
  DropDownItemProps,
  DropDownCheckedPropsData,
  Sizes,
} from "./types";

const DropDown = (props: DropDownProps) => {
  const {
    title = "",
    data,
    size = "m",
    maxWidth = "md",
    multiSelect = false,
  } = props;

  // States
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const [resultValue, setResultValue] = React.useState<string[]>([]);
  const [dropDownData, setDropDownData] = React.useState<
    DropDownCheckedPropsData[]
  >([]);

  // Set default value of drop down data
  React.useEffect(() => {
    setDropDownData(
      data.map((el) => {
        return {
          ...el,
          isChecked: false,
        };
      })
    );
  }, []);

  // Handle visibility of drop down data
  const handleUpdateDropDownData = React.useCallback(
    (value: string, isChecked: boolean) => {
      const newData = dropDownData.map((el) => {
        if (el.value === value) {
          return { ...el, isChecked };
        } else {
          if (multiSelect) {
            return el;
          } else {
            return {
              ...el,
              isChecked: false,
            };
          }
        }
      });

      setDropDownData(newData);
    },
    [dropDownData]
  );

  // Add drop down label in the resultant solution
  const addValue = React.useCallback(
    (newValue: string) => {
      if (multiSelect) setResultValue([...resultValue, newValue]);
      else setResultValue([newValue]);
    },
    [dropDownData, resultValue]
  );

  // Remove drop down label in the resultant solution
  const removeValue = React.useCallback(
    (newValue: string) => {
      setResultValue(resultValue.filter((el) => el !== newValue));
    },
    [dropDownData, resultValue]
  );

  const classNameSize = (size: Sizes) => {
    if (size === "sm") return "sm-max-width";
    else if (size === "md") return "md-max-width";
    else if (size === "lg") return "lg-max-width";
    else if (size === "xl") return "xl-max-width";
    else return "";
  };

  return (
    <OutsideClickHandler
      className={cx("outer_dropdown")}
      onClickEvents={() => {
        setOpenDropDown(false);
      }}
    >
      <Button
        onClick={() => setOpenDropDown(!openDropDown)}
        size={size}
        appearence="primary"
      >
        <div className={cx("drop-down-button")}>
          <div className={cx("content-title")}>
            <span
              className={cx(`text-container`, `${classNameSize(maxWidth)}`)}
            >
              {!title && resultValue.length === 0 ? "Select" : title}
              {resultValue.length === 0 ? "" : resultValue.toString()}
            </span>
          </div>
          <div className={cx("content-icon")}>
            <DownArrow />
          </div>
        </div>
      </Button>
      {openDropDown && (
        <div className={cx("drop-down-container")}>
          {dropDownData.map((el, index) => (
            <DropDownItemAtom
              key={index}
              id={index}
              data={el}
              multiSelect={multiSelect}
              handleChange={handleUpdateDropDownData}
              addValue={addValue}
              removeValue={removeValue}
            />
          ))}
        </div>
      )}
    </OutsideClickHandler>
  );
};

const DropDownItemAtom = (props: DropDownItemProps) => {
  const { id, data, handleChange, addValue, removeValue, multiSelect } = props;

  // Handle toggle on click picker
  const handleClickPickerChange = React.useCallback(() => {
    if (multiSelect) {
      handleChange(data.value, !data.isChecked);
      if (!data.isChecked) {
        addValue(data.label);
      } else {
        removeValue(data.label);
      }
    } else {
      handleChange(data.value, true);
      addValue(data.label);
    }
  }, [handleChange, data]);

  return (
    <div key={`checkpicker-${id}`}>
      <button
        className={cx(
          "checkpicker-container",
          data.isChecked
            ? "checkpicker-container-selected"
            : "checkpicker-container-unselected"
        )}
        onClick={handleClickPickerChange}
      >
        {multiSelect && (
          <label className={cx("checkpicker")}>
            <input
              type="checkbox"
              checked={data.isChecked}
              className={cx("checkpicker-input")}
              onChange={() => {}}
            />
          </label>
        )}
        <span className={cx("checkpicker-label")}>{data.label}</span>
      </button>
    </div>
  );
};

export default DropDown;
