import React from 'react';
import { CardMedia, CardMediaProps } from "@morenobr/guideline-react-unstyled/Card";

interface CardMediaStyledProps extends CardMediaProps{
  className?: string;
}

export default (props:CardMediaStyledProps) => {
  return (
    <CardMedia {...props} className={props.className} />
  );
}
