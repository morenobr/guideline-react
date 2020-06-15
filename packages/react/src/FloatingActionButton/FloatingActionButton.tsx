import React from 'react';
import FloatingActionButton, { FabProps } from "@morenobr/guideline-react-unstyled/FloatingActionButton";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface ButtonStyledProps extends FabProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <FloatingActionButton {...props} className={`mg-fab${props.className?` ${props.className}`:''}`} />
  );
}
