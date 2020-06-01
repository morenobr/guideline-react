import React from "react";
import { ListGroupProps } from "./ListGroup.types";

interface ListItemPropsWithClassname extends ListGroupProps {
  className: string
}

const ListGroup = ({
  className,
  children,
  ...otherProps
}: ListItemPropsWithClassname) => {
  const classes = {
    [className]: true,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  return (
    <div className={classNamesApplied} {...otherProps}>{children}</div>
  );
}

export default ListGroup;
