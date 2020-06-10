import React from "react";
import { IconButtonProps } from "./IconButton.types";
// import useFontMaterialIcons from "../../hooks/useFontMaterialIcons";
//TODO: change font material-icons control to be defined external

interface IconButtonPropsWithClassname extends IconButtonProps {
  className: string
}

const IconButton = ({
  className,
  icon,
  ariaLabel,
  onClick,
  primary,
  secondary,
  ...otherProps
}: IconButtonPropsWithClassname) => {
  // useFontMaterialIcons();
  const classes = {
    'material-icons': typeof icon === "string",
    [className]: true,
    primary: primary,
    secondary: secondary,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  return (
    <button
      className={classNamesApplied}
      aria-label={ariaLabel}
      onClick={onClick}
      {...otherProps}>
      {icon}
    </button>
  );
}

export default IconButton;
