import React from "react";
import { CardActionsProps } from "./CardActions.types";
import { getClassName } from "../helpers";

interface CardActionsPropsWithClassname extends CardActionsProps {
  className?: string
}

const CardActions = ({
  className,
  fullBleed,
  children,
  ...otherProps
}: CardActionsPropsWithClassname) => {
  const classes = {
    '__actions': true,
    '--full-bleed': fullBleed,
  }
  const classNamesApplied = getClassName(classes, className);
  return (
    <div {...otherProps} className={classNamesApplied}>
      {children}
    </div>
  );
}

export default CardActions;
