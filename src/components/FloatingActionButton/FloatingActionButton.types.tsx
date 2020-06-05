import React from "react";

export interface FabProps {
  icon: string;
  label?: string;
  labelPosition?: 'before' | 'after';
  mini?: boolean;
  extended?: boolean;
  exited?: boolean;
  touch?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
