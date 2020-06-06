import React from 'react';
import IconButton, { IconButtonProps } from "../unstyled/IconButton";
import "../styles/Button.scss";
import useEffectResLinkLoader from '../hooks/useEffectResLinkLoader';

interface ButtonStyledProps extends IconButtonProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useEffectResLinkLoader({
    href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", 
    rel: 'stylesheet', 
  });
  
  return (
    <IconButton {...props} className={`mdc-icon-button${props.className?` ${props.className}`:''}`} />
  );
}
