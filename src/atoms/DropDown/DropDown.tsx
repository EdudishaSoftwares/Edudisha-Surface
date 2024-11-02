// Modules
import React from "react";
// Atoms
import Button from "../Button/Button";
// Styles
import "./DropDown.scss";
// Types
import {
  DropDownProps,
  DropDownItemProps,
  DropDownCheckedPropsData,
  Sizes,
} from "./types";

const DropDown = (props: DropDownProps) => {
  const { title = "", data, size = "m", maxWidth = "md" } = props;

  // States
  const [openDropDown, setOpenDropDown] = React.useState<boolean>(false);
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

  React.useEffect(() => {
    console.log("LOGS>>>", resultValue);
  }, [resultValue]);

  // Handle drop down content container
  const toggleDropDown = React.useCallback(() => {
    setOpenDropDown(!openDropDown);
  }, [openDropDown, data]);

  // Handle visibility of drop down data
  const handleUpdateDropDownData = React.useCallback(
    (value: string, isChecked: boolean) => {
      const newData = dropDownData.map((el) => {
        if (el.value === value) {
          return { ...el, isChecked };
        } else {
          return el;
        }
      });

      setDropDownData(newData);
    },
    [dropDownData]
  );

  // Add drop down label in the resultant solution
  const addValue = React.useCallback(
    (newValue: string) => {
      setResultValue([...resultValue, newValue]);
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
    <div className={`outer_dropdown`}>
      <Button onClick={toggleDropDown} size={size} appearence="primary">
        <div className="drop-down-button">
          <div className="content-title">
            <span className={`text-container ${classNameSize(maxWidth)}`}>
              {!title && resultValue.length === 0 ? "Select" : title}
              {resultValue.length === 0 ? "" : resultValue.toString()}
            </span>
          </div>
          <div className="content-icon">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 21 32"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              aria-label="angle down"
              data-category="legacy"
            >
              <path d="M19.196 13.143a.612.612 0 01-.179.411l-8.321 8.321c-.107.107-.268.179-.411.179s-.304-.071-.411-.179l-8.321-8.321c-.107-.107-.179-.268-.179-.411s.071-.304.179-.411l.893-.893a.582.582 0 01.411-.179c.143 0 .304.071.411.179l7.018 7.018 7.018-7.018c.107-.107.268-.179.411-.179s.304.071.411.179l.893.893a.617.617 0 01.179.411z"></path>
            </svg>
          </div>
        </div>
      </Button>
      {openDropDown && (
        <div className="drop-down-container">
          {dropDownData.map((el, index) => (
            <DropDownItemAtom
              key={index}
              id={index}
              data={el}
              handleChange={handleUpdateDropDownData}
              addValue={addValue}
              removeValue={removeValue}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DropDownItemAtom = (props: DropDownItemProps) => {
  const { id, data, handleChange, addValue, removeValue } = props;

  // Handle toggle on click picker
  const handleClickPickerChange = React.useCallback(() => {
    handleChange(data.value, !data.isChecked);
    if (!data.isChecked) {
      addValue(data.label);
    } else {
      removeValue(data.label);
    }
  }, [handleChange, data]);

  return (
    <div key={`checkpicker-${id}`}>
      <button
        className={`checkpicker-container ${
          data.isChecked
            ? "checkpicker-container-selected"
            : "checkpicker-container-unselected"
        }`}
        onClick={handleClickPickerChange}
      >
        <label className="checkpicker">
          <input
            type="checkbox"
            checked={data.isChecked}
            className="checkpicker-input"
            onChange={() => {}}
          />
        </label>
        <span className="checkpicker-label">{data.label}</span>
      </button>
    </div>
  );
};

export default DropDown;
