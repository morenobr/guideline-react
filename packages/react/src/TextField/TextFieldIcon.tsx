import React from 'react';
import { TextFieldIcon, TextFieldIconProps } from "@morenobr/guideline-react-unstyled/TextField";

interface TextFieldIconStyledProps extends TextFieldIconProps{
  className?: string;
}

export default (props:TextFieldIconStyledProps) => {
  return (
    <TextFieldIcon {...props} className={`icon${props.className?` ${props.className}`:''}`} />
  );
}
