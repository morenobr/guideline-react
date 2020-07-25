import React from 'react';
import { CardPrimaryAction, CardPrimaryActionProps } from "@morenobr/guideline-react-unstyled/Card";

interface CardPrimaryActionStyledProps extends CardPrimaryActionProps{
  className?: string;
}

export default (props:CardPrimaryActionStyledProps) => {
  return (
    <CardPrimaryAction {...props} className={props.className} />
  );
}
