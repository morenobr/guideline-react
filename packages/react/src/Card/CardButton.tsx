import React from 'react';
import Button, { ButtonProps } from "@morenobr/guideline-react-unstyled/Button";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface CardButtonStyledProps extends ButtonProps{
  className?: string;
}

export default (props:CardButtonStyledProps) => {
  useFontRoboto();
  
  return (
    <Button {...props} className={`mg-button __action --button${props.className?` ${props.className}`:''}`} />
  );
}
