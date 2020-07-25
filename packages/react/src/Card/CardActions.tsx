import React from 'react';
import { CardActions, CardActionsProps } from "@morenobr/guideline-react-unstyled/Card";

interface CardActionsStyledProps extends CardActionsProps{
  className?: string;
}

export default (props:CardActionsStyledProps) => {
  return (
    <CardActions {...props} className={props.className} />
  );
}
