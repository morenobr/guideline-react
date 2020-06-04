import React from 'react';
import IconButton, { IconButtonProps } from "../unstyled/IconButton";
import useFontRoboto from '../hooks/useFontRoboto';
import "../styles/IconButton.scss";

interface IconButtonStyledProps extends IconButtonProps{
  className?: string;
}

export default (props:IconButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButton {...props} className={`mg-icon-button${props.className?` ${props.className}`:''}`} />
  );
}
