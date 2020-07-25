import React from "react";
import { CardActionIconsProps } from "./CardActionIcons.types";
import { getClassName } from "../helpers";

interface CardActionIconsPropsWithClassname extends CardActionIconsProps {
  className?: string
}

//TODO: rename it to CardActionsRight and changed it to accept buttons too
const CardActionIcons = ({
  className,
  children,
  ...otherProps
}: CardActionIconsPropsWithClassname) => {
  const classes = {
    '__action-icons': true,
  }
  const classNamesApplied = getClassName(classes, className);
  return (
    <div {...otherProps} className={classNamesApplied}>
      {children}
    </div>
  );
}

export default CardActionIcons;
