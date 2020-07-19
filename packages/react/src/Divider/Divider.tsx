import React from 'react';
import Divider, { DividerProps } from "@morenobr/guideline-react-unstyled/Divider";

interface DividerStyledProps extends DividerProps{
  className?: string;
}

export default (props:DividerStyledProps) => {
  return (
    <Divider {...props} className={`mg-divider${props.className?` ${props.className}`:''}`} />
  );
}
