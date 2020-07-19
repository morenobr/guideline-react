import React from "react";
import { DividerProps } from "./Divider.types";
import { getClassName } from "../helpers";

interface DividerPropsWithClassname extends DividerProps {
  className: string
}

const Divider = ({
  className,
  tag: TAG = 'hr',
  role = 'separator',
  padded,
  inset,
  drawer,
  ...otherProps
}: DividerPropsWithClassname) => {
  const classes = {
    [className]: true,
    padded,
    inset,
    drawer,
  }
  const classNamesApplied = getClassName(classes);
  return (<TAG {...otherProps} role={role?role:undefined} className={classNamesApplied}></TAG>);
}

export default Divider;
