import React from "react";
import { IconButtonProps } from "./IconButton.types";
import { useFontMaterialIcons } from "@morenobr/guideline-react-hooks";
import { getClassName } from "../helpers";
//TODO: change font material-icons control to be defined external

interface IconButtonPropsWithClassname extends IconButtonProps {
  className: string
}

const IconButton = ({
  className,
  icon,
  title,
  ariaLabel,
  onClick,
  primary,
  secondary,
  ...otherProps
}: IconButtonPropsWithClassname) => {
  useFontMaterialIcons();
  const classes = {
    'material-icons': typeof icon === "string",
    [className]: true,
    primary: primary,
    secondary: secondary,
  }
  const classNamesApplied = getClassName(classes);
  return (
    <button
      className={classNamesApplied}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      {...otherProps}>
      {icon}
    </button>
  );
}

export default IconButton;
