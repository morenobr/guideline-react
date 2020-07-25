import React from "react";
import { CardProps } from "./Card.types";
import { getClassName } from "../helpers";

interface CardPropsWithClassname extends CardProps {
  className: string
}

const Card = ({
  className,
  outlined,
  children,
  ...otherProps
}: CardPropsWithClassname) => {
  const classes = {
    [className]: true,
    '--outlined': outlined,
  }
  const classNamesApplied = getClassName(classes);
  return (
    <div {...otherProps} className={classNamesApplied}>
      {children}
    </div>
  );
}

export default Card;
