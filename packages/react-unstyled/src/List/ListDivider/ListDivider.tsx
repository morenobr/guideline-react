import React from "react";
import { ListDividerProps } from "./ListDivider.types";
import { getClassName } from "../../helpers";

interface ListDividerPropsWithClassname extends ListDividerProps {
  className: string
}

const ListDivider = ({
  className,
  asItem,
  padded,
  inset,
  drawer,
  ...otherProps
}: ListDividerPropsWithClassname) => {
  const classes = {
    [className]: true,
    padded,
    inset,
    drawer,
  }
  const classNamesApplied = getClassName(classes);
  if(asItem){
    return (<li role="separator" className={classNamesApplied} {...otherProps}></li>);
  }
  return (<hr className={classNamesApplied} />)
}

export default ListDivider;
