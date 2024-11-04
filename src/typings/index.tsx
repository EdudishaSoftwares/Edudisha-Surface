import React from "react";

export interface WithAsProps<
  As extends React.ElementType | string = React.ElementType
> {
  as?: As;
  className?: string;
  style?: React.CSSProperties;
}

export type Partial<T> = { [P in keyof T]?: T[P] };

export type Pick<T, K extends keyof T> = { [P in K]: T[P] };

export type Exclude<T, U> = T extends U ? never : T;

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export interface AnimationEventProps {
  onEnter?: (node: HTMLElement) => void;
  onEntering?: (node: HTMLElement) => void;
  onEntered?: (node: HTMLElement) => void;
  onExit?: (node: HTMLElement) => void;
  onExiting?: (node: HTMLElement) => void;
  onExited?: (node: HTMLElement) => void;
}

export type PickerAppearance = "default" | "subtle";

export type ToArray<V> = V extends any[] ? V : V[];

export type Styleguide =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading7"
  | "body1"
  | "body2"
  | "body3";

export type ValueType = string | number;

export type ValueTypes = (string | number)[];

export type ButtonGroupItemDataType<T> = ItemDataType<T> & {
  toolTip?: string;
  isDisabled?: boolean;
};

export type ItemDataType<T> = {
  label?: string | React.ReactNode;
  value?: T;
};

export type AlignType = "top" | "middle" | "bottom";

export type BorderStyleType = "dotted" | "dashed" | "solid" | "double";

export type DisplayType = "inline" | "block" | "inline-block";

export type PositionType = "relative" | "absolute";

export type Colors = "primary" | "subtitles" | "headings" | "white" | "lowlight" | "strokes" | "placeholder";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

export type DegSizes = "tri" | "quad" | "hex" | "right" | "dozen" | "quarterAndHalf" | "full";  //0deg, 45deg, 60deg, 90deg, 120deg, 135deg ,180deg

export interface CommmonProps extends React.HTMLAttributes<HTMLElement> {
    height?: Sizes | "fit-content";
    width?: Sizes | "fit-content";
    maxHeight?: Sizes
    minHeight?: Sizes
    minWidth?: Sizes
    maxWidth?: Sizes
    margin?: Sizes;
    marginTop?: Sizes;
    marginBottom?: Sizes;
    marginLeft?: Sizes;
    marginRight?: Sizes;
    padding?: Sizes;
    paddingTop?: Sizes;
    paddingBottom?: Sizes;
    paddingLeft?: Sizes;
    paddingRight?: Sizes;
}
