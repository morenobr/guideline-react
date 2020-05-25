import React from 'react';
import Button, { ButtonProps } from "../components/Button";
import "../styles/Button.scss";
import useEffectResLinkLoader from '../hooks/useEffectResLinkLoader';

interface ButtonStyledProps extends ButtonProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useEffectResLinkLoader({
    href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", 
    rel: 'stylesheet', 
  });
  
  return (
    <Button {...props} className={`mdc-button${props.className?` ${props.className}`:''}`} />
  );
}