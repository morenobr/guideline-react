import React from 'react';
import IconButton, { IconButtonProps } from "@morenobr/guideline-react-unstyled/IconButton";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface CardIconButtonStyledProps extends IconButtonProps{
  className?: string;
}

export default (props:CardIconButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButton {...props} className={`mg-icon-button __action --icon${props.className?` ${props.className}`:''}`} />
  );
}
