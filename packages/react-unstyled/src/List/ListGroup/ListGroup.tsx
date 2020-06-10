import React from "react";
import { ListGroupProps } from "./ListGroup.types";
import { getClassName } from "../../helpers";

interface ListItemPropsWithClassname extends ListGroupProps {
  className: string
}

const ListGroup = ({
  className,
  drawer,
  children,
  ...otherProps
}: ListItemPropsWithClassname) => {
  const classes = {
    [className]: true,
    drawer,
  }
  return (
    <div className={getClassName(classes)} {...otherProps}>{children}</div>
  );
}

export default ListGroup;
