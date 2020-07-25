import React from 'react';
import { Card, CardProps } from "@morenobr/guideline-react-unstyled/Card";

interface CardStyledProps extends CardProps{
  className?: string;
}

export default (props:CardStyledProps) => {
  return (
    <Card {...props} className={`mg-card${props.className?` ${props.className}`:''}`} />
  );
}
