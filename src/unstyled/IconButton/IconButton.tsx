import React from "react";
import { IconButtonProps } from "./IconButton.types";
import useFontMaterialIcons from "../../hooks/useFontMaterialIcons";

interface IconButtonPropsWithClassname extends IconButtonProps {
  className: string
}

const IconButton = ({
  className,
  icon,
  onClick,
  ...otherProps
}: IconButtonPropsWithClassname) => {
  useFontMaterialIcons();
  const classes = {
    [className]: true,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  return (
    <button
      className={`material-icons ${classNamesApplied}`}
      onClick={onClick}
      {...otherProps}>
      {icon}
    </button>
  );
}

export default IconButton;
