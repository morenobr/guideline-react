import React from 'react';
import { ListGroupItem, ListGroupItemProps } from "../unstyled/List";

export default (props:ListGroupItemProps) => {
  return (
    <ListGroupItem {...props} classNameGroup="mg-list-group" />
  );
}
