import React from 'react';
import CircularProgress, { CircularProgressProps } from "@morenobr/guideline-react-unstyled/CircularProgress";

interface CircularProgressStyledProps extends CircularProgressProps{
  className?: string;
}

export default (props:CircularProgressStyledProps) => {
  return (
    <CircularProgress {...props} className={`mg-circular-progress${props.className?` ${props.className}`:''}`} />
  );
}
