import React from "react";
import { CardActionButtonsProps } from "./CardActionButtons.types";
import { getClassName } from "../helpers";

interface CardActionButtonsPropsWithClassname extends CardActionButtonsProps {
  className?: string
}

//TODO: rename it to CardActionsLeft and changed it to accept icons too
const CardActionButtons = ({
  className,
  children,
  ...otherProps
}: CardActionButtonsPropsWithClassname) => {
  const classes = {
    '__action-buttons': true,
  }
  const classNamesApplied = getClassName(classes, className);
  return (
    <div {...otherProps} className={classNamesApplied}>
      {children}
    </div>
  );
}

export default CardActionButtons;
