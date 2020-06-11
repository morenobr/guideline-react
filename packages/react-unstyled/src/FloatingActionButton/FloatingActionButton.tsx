import React from "react";
import { FabProps } from "./FloatingActionButton.types";
import { useFontMaterialIcons } from "@morenobr/guideline-react-hooks";
//TODO: change font material-icons control to be defined external

interface ButtonPropsWithClassname extends FabProps {
  className: string
}

const FloatingActionButton = ({
  className,
  icon,
  label,
  labelPosition = 'after',
  mini,
  extended,
  exited,
  touch,
  onClick,
  ...otherProps
}: ButtonPropsWithClassname) => {
  useFontMaterialIcons();
  const classes = {
    [className]: true,
    mini: mini,
    extended: extended,
    exited: exited,
    touch: touch,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');

  return (
    <button 
        className={classNamesApplied}
        onClick={onClick}
        {...otherProps}>
        <div className="ripple"></div>
        {label && labelPosition === 'before' && <span className="label">{label}</span>}
        <span className="material-icons icon">{icon}</span>
        {label && labelPosition === 'after' && <span className="label">{label}</span>}
        {touch && <div className="touch"></div>}
    </button>
  );
}

export default FloatingActionButton;
