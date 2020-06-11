import React from 'react';
import IconButtonToogle, { IconButtonToogleProps } from "@morenobr/guideline-react-unstyled/IconButtonToogle";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface IconButtonToogleStyledProps extends IconButtonToogleProps{
  className?: string;
}

export default (props:IconButtonToogleStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButtonToogle {...props} className={`mg-icon-button-toogle${props.className?` ${props.className}`:''}`} />
  );
}
