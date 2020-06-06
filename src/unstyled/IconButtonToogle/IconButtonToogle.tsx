import React, { useState } from "react";
import { IconButtonToogleProps } from "./IconButtonToogle.types";
import useFontMaterialIcons from "../../hooks/useFontMaterialIcons";

interface IconButtonPropsWithClassname extends IconButtonToogleProps {
  className: string
}

const IconButtonToogle = ({
  className,
  iconOn,
  iconOff,
  labelOn,
  labelOff,
  value: valueProp = false,
  onChange,
  ...otherProps
}: IconButtonPropsWithClassname) => {
  const [value, setValue] = useState(valueProp);
  useFontMaterialIcons();
  const classes = {
    [className]: true,
    [`${className}--on`]: value,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
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
      aria-label={labelOn}
      data-aria-label-on={labelOff}
      data-aria-label-off={labelOn}
      onClick={onClick}
      {...otherProps}>
      {typeof iconOn === "string" && <i className={`material-icons ${className}__icon ${className}__icon--on`}>{iconOn}</i>}
      {typeof iconOn !== "string" && iconOn.type === 'svg' && <iconOn.type {...iconOn.props} className={`${className}__icon ${className}__icon--on ${iconOn.props.className}`}></iconOn.type>}
      {typeof iconOn !== "string" && iconOn.type === 'img' && <iconOn.type {...iconOn.props} className={`${className}__icon ${className}__icon--on ${iconOn.props.className}`}></iconOn.type>}
      {typeof iconOff === "string" && <i className={`material-icons ${className}__icon`}>{iconOff}</i>}
      {typeof iconOff !== "string" && iconOff.type === 'svg' && <iconOff.type {...iconOff.props} className={`${className}__icon ${iconOff.props.className}`}></iconOff.type>}
      {typeof iconOff !== "string" && iconOff.type === 'img' && <iconOff.type {...iconOff.props} className={`${className}__icon ${iconOff.props.className}`}></iconOff.type>}
    </button>
  );
}

export default IconButtonToogle;
