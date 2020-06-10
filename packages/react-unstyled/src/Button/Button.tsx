import React, { useEffect, useRef, useCallback, useState, CSSProperties } from "react";
import { ButtonProps } from "./Button.types";
// import useFontMaterialIcons from "../../hooks/useFontMaterialIcons";
//TODO: change font material-icons control to be defined external

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
  onClick,
  style,
  ...otherProps
}: ButtonPropsWithClassname) => {
  const [activation, setActivation] = useState({
    state: '',
    styles: {
      '--ripple-fg-translate-start': 0 as number | string,
      '--ripple-fg-translate-end': 0 as number | string,
    }
  });
  // useFontMaterialIcons();
  const ref = useRef(null as HTMLButtonElement|null);
  const classes = {
    [className]: true,
    outlined: outlined,
    raised: raised,
    'fg-activation': activation.state === 'activation',
    'fg-deactivation': activation.state === 'deactivation',
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  useEffectClassNameSvg({
    classIcon: `icon`,
    ref,
    IconSvg: icon && !(icon instanceof String)? (icon as React.SVGAttributes<SVGElement>):undefined,
  })

  const onMouseDownTouchStart = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>)=>{
    const button = (ref.current as HTMLButtonElement);
    const clientRect = button.getBoundingClientRect();
    const documentX = clientRect.left;
    const documentY = clientRect.top;

    
    const start = {x:0,y:0};
    // Determine touch point relative to the ripple container.
    if (event.type === 'touchstart') {
      const touchEvent = event.nativeEvent as TouchEvent;
      start.x = touchEvent.changedTouches[0].pageX - documentX;
      start.y = touchEvent.changedTouches[0].pageY - documentY;
    } else {
      const mouseEvent = event.nativeEvent as MouseEvent;
      start.x = mouseEvent.pageX - documentX;
      start.y = mouseEvent.pageY - documentY;
    }
    // center element
    start.x = start.x - (button.offsetWidth / 2);
    start.y = start.y - (button.offsetHeight / 2);
    const end = {x:button.offsetWidth/2, y:button.offsetHeight/2};

    setActivation({
      state: 'activation', 
      styles: {
        '--ripple-fg-translate-start': `${start.x}px, ${start.y}px`,
        '--ripple-fg-translate-end': `${end.x}px, ${end.y}px`,
      }
    });
  }, []);
  const onMouseUp = useCallback(()=>{
    setActivation(o => ({...o, state: 'deactivation'}));
    setTimeout(()=>{
      setActivation(v => {
        if(v.state !== 'deactivation'){
          return v;
        }
        return {...v, state: ''};
      });
    }, 1000);
  }, []);
  const onMouseOut = useCallback(()=>{
    setActivation(o => ({...o, state: ''}));
  }, []);
  const onFocus = useCallback(()=>{
    const button = (ref.current as HTMLButtonElement);
    const start = {x:0,y:0};
    const end = {x:button.offsetWidth/2,y:button.offsetHeight/2};
    setActivation({
      state: 'activation', 
      styles: {
        '--ripple-fg-translate-start': `${start.x}px, ${start.y}px`,
        '--ripple-fg-translate-end': `${end.x}px, ${end.y}px`,
      }
    });
  }, []);
  const onBlur = useCallback(()=>{
    setActivation(o => ({...o, state: ''}));
  }, []);
  
  return (
    <button ref={ref} className={classNamesApplied}
      onMouseDown={onMouseDownTouchStart}
      onTouchStart={onMouseDownTouchStart}
      onMouseUp={onMouseUp}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      style={{...activation.styles, ...style} as CSSProperties}
      {...otherProps}>
        {icon && typeof icon === "string" && <i className="material-icons icon" aria-hidden="true">{icon}</i>}
        {icon && typeof icon !== "string" && icon}
        <span className="label">{label}</span>
        {touch && <span className="touch" />}
        <span className="ripple" />
    </button>
  );
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
        const svg = Array.from(button.children).find(i => i.tagName === 'svg');
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
