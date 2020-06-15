import React from 'react';
import Button, { ButtonProps } from "@morenobr/guideline-react-unstyled/Button";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface ButtonStyledProps extends ButtonProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <Button {...props} className={`mg-button${props.className?` ${props.className}`:''}`} />
  );
}
