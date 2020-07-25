import React, { useState } from "react";
import { IconButtonToogleProps } from "./IconButtonToogle.types";
import { useFontMaterialIcons } from "@morenobr/guideline-react-hooks";
import { getClassName } from "../helpers";
//TODO: change font material-icons control to be defined external

interface IconButtonPropsWithClassname extends IconButtonToogleProps {
  className: string
}

const IconButtonToogle = ({
  className,
  iconOn,
  iconOff,
  title,
  ariaLabelOn,
  ariaLabelOff,
  value: valueProp = false,
  onChange,
  primary,
  secondary,
  ...otherProps
}: IconButtonPropsWithClassname) => {
  const [value, setValue] = useState(valueProp);
  useFontMaterialIcons();
  const classes = {
    [className]: true,
    on: value,
    primary: primary,
    secondary: secondary,
  }
  const classNamesApplied = getClassName(classes);
  const onClick = ()=>setValue(value =>{
    const newValue = !value;
    if(onChange){
      onChange(newValue)
    }
    return newValue;
  })
  
  return (
    <button
      className={classNamesApplied}
      title={title}
      aria-label={ariaLabelOn}
      data-aria-label-on={ariaLabelOff}
      data-aria-label-off={ariaLabelOn}
      onClick={onClick}
      {...otherProps}>
      {typeof iconOn === "string" && <i className={`material-icons icon iconOn`}>{iconOn}</i>}
      {typeof iconOn !== "string" && iconOn.type === 'svg' && <iconOn.type {...iconOn.props} className={`icon iconOn ${iconOn.props.className}`}></iconOn.type>}
      {typeof iconOn !== "string" && iconOn.type === 'img' && <iconOn.type {...iconOn.props} className={`icon iconOn ${iconOn.props.className}`}></iconOn.type>}
      {typeof iconOff === "string" && <i className={`material-icons icon`}>{iconOff}</i>}
      {typeof iconOff !== "string" && iconOff.type === 'svg' && <iconOff.type {...iconOff.props} className={`icon ${iconOff.props.className}`}></iconOff.type>}
      {typeof iconOff !== "string" && iconOff.type === 'img' && <iconOff.type {...iconOff.props} className={`icon ${iconOff.props.className}`}></iconOff.type>}
    </button>
  );
}

export default IconButtonToogle;
