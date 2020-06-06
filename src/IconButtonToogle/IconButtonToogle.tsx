import React from 'react';
import IconButtonToogle, { IconButtonToogleProps } from "../unstyled/IconButtonToogle";
import useFontRoboto from '../hooks/useFontRoboto';
import "../styles/IconButtonToogle.scss";

interface IconButtonToogleStyledProps extends IconButtonToogleProps{
  className?: string;
}

export default (props:IconButtonToogleStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButtonToogle {...props} className={`mg-icon-button-toogle${props.className?` ${props.className}`:''}`} />
  );
}
