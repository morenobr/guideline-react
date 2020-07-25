import React from 'react';
import { CardActionIcons, CardActionIconsProps } from "@morenobr/guideline-react-unstyled/Card";

interface CardActionIconsStyledProps extends CardActionIconsProps{
  className?: string;
}

export default (props:CardActionIconsStyledProps) => {
  return (
    <CardActionIcons {...props} className={props.className} />
  );
}
