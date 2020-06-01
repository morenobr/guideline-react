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
  return (
    <div className={className} {...otherProps}>{children}</div>
  );
}

export default ListGroup;
