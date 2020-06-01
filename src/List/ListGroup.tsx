import React from 'react';
import { ListGroup, ListGroupProps } from "../unstyled/List";

interface ListGroupStyledProps extends ListGroupProps{
  className?: string;
}

export default (props:ListGroupStyledProps) => {
  return (
    <ListGroup {...props} className={`mg-list-group${props.className?` ${props.className}`:''}`} />
  );
}
