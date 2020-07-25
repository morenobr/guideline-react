import React from 'react';
import IconButtonToogle, { IconButtonToogleProps } from "@morenobr/guideline-react-unstyled/IconButtonToogle";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

interface CardIconButtonToogleStyledProps extends IconButtonToogleProps{
  className?: string;
}

export default (props:CardIconButtonToogleStyledProps) => {
  useFontRoboto();
  
  return (
    <IconButtonToogle {...props} className={`mg-icon-button-toogle __action --icon${props.className?` ${props.className}`:''}`} />
  );
}
