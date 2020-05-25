import React, { useEffect, useRef } from "react";
import { ButtonProps } from "./Button.types";
import useFontMaterialIcons from "../../hooks/useFontMaterialIcons";

interface ButtonPropsWithClassname extends ButtonProps {
  className: string
}

const Button = ({
  className,
  label,
  icon,
  touch,
  outlined,
  raised,
  ...otherProps
}: ButtonPropsWithClassname) => {
  useFontMaterialIcons();
  const ref = useRef(null as HTMLButtonElement|null);
  const classes = {
    [className]: true,
    [`${className}--outlined`]: outlined,
    [`${className}--raised`]: raised,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  useEffectClassNameSvg({
    classIcon: `${className}__icon`,
    ref,
    IconSvg: icon && !(icon instanceof String)? (icon as React.SVGAttributes<SVGElement>):undefined,
  })
  
  const CompButton = (
    <button ref={ref} className={classNamesApplied} {...otherProps}>
        <div className={`${className}__ripple`}></div>
        {icon && typeof icon === "string" && <i className={`material-icons ${className}__icon`} aria-hidden="true">{icon}</i>}
        {icon && typeof icon !== "string" && icon}
        <span className={`${className}__label`}>{label}</span>
        {touch && <div className={`${className}__touch`}></div>}
    </button>
  );
  if(touch){
    return (
      <div className="mdc-touch-target-wrapper">
        {CompButton}
      </div>
    )
  }
  return CompButton;
}

const useEffectClassNameSvg = ({classIcon, ref, IconSvg}:{
  classIcon: string;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
  IconSvg?: React.SVGAttributes<SVGElement>;
})=>{
  useEffect(()=>{
    let timeout: NodeJS.Timeout;
    if(IconSvg && ref.current){
      const button: HTMLButtonElement = ref.current;
      timeout = setTimeout(()=>{
        const svg = button.querySelector('>svg');
        if(svg?.classList.contains(classIcon)){
          svg?.classList.add(classIcon);
        }
      },100);
    };
    return ()=>{
      if(timeout){
        clearTimeout(timeout);
      }
    }
  },[classIcon, ref, IconSvg]);
};

export default Button;