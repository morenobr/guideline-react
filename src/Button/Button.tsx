import React from 'react';
import Button, { ButtonProps } from "../unstyled/Button";
import "../styles/Button.scss";
import useFontRoboto from '../hooks/useFontRoboto';

interface ButtonStyledProps extends ButtonProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <Button {...props} className={`mg-button${props.className?` ${props.className}`:''}`} />
  );
}
