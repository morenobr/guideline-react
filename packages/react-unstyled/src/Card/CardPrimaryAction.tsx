import React from "react";
import { CardPrimaryActionProps } from "./CardPrimaryAction.types";
import { getClassName } from "../helpers";

interface CardPrimaryActionPropsWithClassname extends CardPrimaryActionProps {
  className?: string
}

const CardPrimaryAction = ({
  className,
  tabIndex,
  children,
  ...otherProps
}: CardPrimaryActionPropsWithClassname) => {
  const classes = {
    '__primary-action': true,
  }
  const classNamesApplied = getClassName(classes, className);
  return (
    <div {...otherProps} className={classNamesApplied} tabIndex={tabIndex}>
      {children}
    </div>
  );
}

export default CardPrimaryAction;
