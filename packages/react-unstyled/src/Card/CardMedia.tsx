import React from "react";
import { CardMediaProps } from "./CardMedia.types";
import { getClassName } from "../helpers";

interface CardMediaPropsWithClassname extends CardMediaProps {
  className?: string
}

const CardMedia = ({
  className,
  square,
  ratio16to9,
  children,
  ...otherProps
}: CardMediaPropsWithClassname) => {
  const classes = {
    '__media': true,
    '--square': square,
    '--ratio16-9': ratio16to9,
  }
  const classNamesApplied = getClassName(classes, className);
  return (
    <div {...otherProps} className={classNamesApplied}>
      {children && <div className={`__content`}>{children}</div>}
    </div>
  );
}

export default CardMedia;
