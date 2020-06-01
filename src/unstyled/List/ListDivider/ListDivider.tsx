import React from "react";
import { ListDividerProps } from "./ListDivider.types";

interface ListDividerPropsWithClassname extends ListDividerProps {
  className: string
}

const ListDivider = ({
  className,
  asItem,
  padded,
  inset,
  ...otherProps
}: ListDividerPropsWithClassname) => {
  const classes = {
    [className]: true,
    padded: padded,
    inset: inset,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  if(asItem){
    return (<li role="separator" className={classNamesApplied} {...otherProps}></li>);
  }
  return (<hr className={classNamesApplied} />)
}

export default ListDivider;
