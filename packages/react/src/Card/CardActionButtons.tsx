import React from 'react';
import { CardActionButtons, CardActionButtonsProps } from "@morenobr/guideline-react-unstyled/Card";

interface CardActionButtonsStyledProps extends CardActionButtonsProps{
  className?: string;
}

export default (props:CardActionButtonsStyledProps) => {
  return (
    <CardActionButtons {...props} className={props.className} />
  );
}
