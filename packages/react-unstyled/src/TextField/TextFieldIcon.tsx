import React from "react";
import { TextFieldIconProps } from "./TextFieldIcon.types";
import { useFontMaterialIcons } from "@morenobr/guideline-react-hooks";
import { getClassName } from "../helpers";
//TODO: change font material-icons control to be defined external

interface TextFieldIconPropsWithClassname extends TextFieldIconProps {
  className: string
}

const TextFieldIcon = ({
  className: propClassName,
  tabIndex,
  icon,
  onClick,
  leading,
  trailing,
  ...otherProps
}: TextFieldIconPropsWithClassname) => {
  useFontMaterialIcons();
  const classes = {
    'material-icons': typeof icon === "string",
    icon: true,
    leading,
    trailing,
  }
  const className = getClassName(classes);
  return (
    <i
      className={className}
      tabIndex={tabIndex}
      onClick={onClick}
      {...otherProps}>
      {icon}
    </i>
  );
}

export default TextFieldIcon;
