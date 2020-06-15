import React from 'react';
import IconButton, { IconButtonProps } from "@morenobr/guideline-react-unstyled/IconButton";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface IconButtonStyledProps extends IconButtonProps{
  className?: string;
}

export default (props:IconButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButton {...props} className={`mg-icon-button${props.className?` ${props.className}`:''}`} />
  );
}
