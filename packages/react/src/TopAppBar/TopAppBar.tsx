import React from 'react';
import TopAppBar, { TopAppBarProps } from "@morenobr/guideline-react-unstyled/TopAppBar";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface TopAppBarStyledProps extends TopAppBarProps{
  className?: string;
}

export default (props:TopAppBarStyledProps) => {
  useFontRoboto();
  
  return (
    <TopAppBar {...props} className={`mg-top-app-bar${props.className?` ${props.className}`:''}`} />
  );
}
