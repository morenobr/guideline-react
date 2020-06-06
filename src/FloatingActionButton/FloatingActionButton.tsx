import React from 'react';
import FloatingActionButton, { FabProps } from "../unstyled/FloatingActionButton";
import "../styles/FloatingActionButton.scss";
import useEffectResLinkLoader from '../hooks/useEffectResLinkLoader';

interface ButtonStyledProps extends FabProps{
  className?: string;
}

export default (props:ButtonStyledProps) => {
  useEffectResLinkLoader({
    href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", 
    rel: 'stylesheet', 
  });
  
  return (
    <FloatingActionButton {...props} className={`mg-fab${props.className?` ${props.className}`:''}`} />
  );
}
