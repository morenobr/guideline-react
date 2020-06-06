import React from 'react';
import IconButton, { IconButtonProps } from "../unstyled/IconButton";
import "../styles/IconButton.scss";
import useFontRoboto from '../hooks/useFontRoboto';

interface ButtonStyledProps extends IconButtonProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButton {...props} className={`mdc-icon-button${props.className?` ${props.className}`:''}`} />
  );
}
