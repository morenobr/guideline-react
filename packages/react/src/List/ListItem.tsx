import React from 'react';
import { ListItem, ListItemProps } from "@morenobr/guideline-react-unstyled/List";

interface ListItemStyledProps extends ListItemProps{
  className?: string;
}

export default (props:ListItemStyledProps) => {
  return (
    <ListItem {...props} className={`mg-list-item${props.className?` ${props.className}`:''}`} />
  );
}
