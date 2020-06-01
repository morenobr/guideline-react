import React from "react";
import { ListGroupItemProps } from "./ListGroupItem.types";

interface ListGroupItemPropsWithClassname extends ListGroupItemProps {
  classNameGroup: string
}

const ListGroupItem = ({
  classNameGroup,
  header,
  children,
}: ListGroupItemPropsWithClassname) => {
  return (
    <>
      {header && <h3 className={`${classNameGroup}__subheader`}>{header}</h3>}
      {children}
    </>
  );
}

export default ListGroupItem;
