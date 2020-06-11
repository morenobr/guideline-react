import React from 'react';
import { ListDivider, ListDividerProps } from "@morenobr/guideline-react-unstyled/List";

interface ListDividerStyledProps extends ListDividerProps{
  className?: string;
}

export default (props:ListDividerStyledProps) => {
  return (
    <ListDivider {...props} className={`mg-list-divider${props.className?` ${props.className}`:''}`} />
  );
}
