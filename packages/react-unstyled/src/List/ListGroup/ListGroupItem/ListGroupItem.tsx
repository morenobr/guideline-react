import React from "react";
import { ListGroupItemProps } from "./ListGroupItem.types";

const ListGroupItem = ({
  header,
  children,
}: ListGroupItemProps) => {
  return (
    <>
      {header && <h3 className="subheader">{header}</h3>}
      {children}
    </>
  );
}

export default ListGroupItem;
