import React from "react";

export type LabelComponentProps = {
  as?: React.ElementType;
  label: string;
  type: 'primary' | 'secondary';
  state: LabelStates;
  className?: string;
  icon?: JSX.Element;
}

export type LabelStates = 'success' | 'primary' | 'warning' | 'failure' | 'subtle' | 'black';
