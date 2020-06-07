import React from 'react';
import TopAppBar, { TopAppBarProps } from "../unstyled/TopAppBar";
import useFontRoboto from '../hooks/useFontRoboto';
import "../styles/TopAppBar.scss";

interface TopAppBarStyledProps extends TopAppBarProps{
  className?: string;
}

export default (props:TopAppBarStyledProps) => {
  useFontRoboto();
  
  return (
    <TopAppBar {...props} className={`mg-top-app-bar${props.className?` ${props.className}`:''}`} />
  );
}
