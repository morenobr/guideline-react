import React from 'react';
import FloatingActionButton, { FabProps } from "../unstyled/FloatingActionButton";
import "../styles/FloatingActionButton.scss";
import useFontRoboto from '../hooks/useFontRoboto';

interface ButtonStyledProps extends FabProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <FloatingActionButton {...props} className={`mg-fab${props.className?` ${props.className}`:''}`} />
  );
}
