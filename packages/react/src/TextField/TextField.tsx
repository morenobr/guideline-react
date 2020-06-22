import React from 'react';
import TextField, { TextFieldProps } from "@morenobr/guideline-react-unstyled/TextField";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface TextFieldStyledProps extends TextFieldProps{
  className?: string;
}

export default (props:TextFieldStyledProps) => {
  useFontRoboto();
  
  return (
    <TextField {...props} classNameTextField="mg-text-field" className={props.className} />
  );
}
