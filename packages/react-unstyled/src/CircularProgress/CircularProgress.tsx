import React, { useState, useMemo, useEffect } from "react";
import { CircularProgressProps } from "./CircularProgress.types";
import { getClassName } from "../helpers";

interface CircularProgressPropsWithClassname extends CircularProgressProps {
  className: string
}
const STROKE_DASH_ARRAY = 113.097;
const STROKE_DASH_OFFSET_INDETERMINATE = 56.549;
const calculateStrokeDashOffsetDeterminate = (percent: number) => {
  let percentUsed = percent;
  if(percentUsed < 0){
    percentUsed = 0;
  }
  if(percentUsed > 100){
    percentUsed = 100;
  }
  return (STROKE_DASH_ARRAY * (1 - (percentUsed/100)));
}

const SvgCircle = ({ className, circleClassName, strokeDashoffset }:{ className: string; circleClassName?: string; strokeDashoffset: number })=>(
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle className={circleClassName} cx="24" cy="24" r="18" strokeDasharray={STROKE_DASH_ARRAY} strokeDashoffset={strokeDashoffset}/>
  </svg>
);
const SvgCircleIndeterminate = ({className}:{className:string;})=>(
  <SvgCircle
    className={className}
    strokeDashoffset={STROKE_DASH_OFFSET_INDETERMINATE}
    />
);
const SpinnerLayer = ({className}:{className?:string;})=>(
  <div className={getClassName(['__spinner-layer', className])}>
    <div className="__circle-clipper __circle-left">
      <SvgCircleIndeterminate className="__indeterminate-circle-graphic" />
    </div>
    <div className="__gap-patch">
      <SvgCircleIndeterminate className="__indeterminate-circle-graphic" />
    </div>
    <div className="__circle-clipper __circle-right">
      <SvgCircleIndeterminate className="__indeterminate-circle-graphic" />
    </div>
  </div>
);

const CircularProgress = ({
  className,
  small,
  medium,
  large,
  extraLarge,
  fillParent,
  closed,
  value,
  spinnerFourColors,
  'aria-label': ariaLabel,
}: CircularProgressPropsWithClassname) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [strokeDashOffsetDeterminate, setStrokeDashOffsetDeterminate] = useState(useMemo(()=>calculateStrokeDashOffsetDeterminate(value || 0), []));
  useEffect(()=>{
    setStrokeDashOffsetDeterminate(calculateStrokeDashOffsetDeterminate(value || 0));
  }, [value])
  const indeterminate = typeof value !== 'number';
  const classes = {
    [className]: true,
    "--small": small,
    "--medium": medium,
    "--large": large,
    "--extra-large": extraLarge,
    "--fill-parent": fillParent,
    "--closed": closed,
    "--indeterminate": indeterminate,
  }
  const classNamesApplied = getClassName(classes);
  return (
    <div className={classNamesApplied} role="progressbar" aria-label={ariaLabel} aria-valuemin={0} aria-valuemax={1}>
      {!indeterminate && (
        <div className="__determinate-container">
          <SvgCircle
            className="__determinate-circle-graphic"
            circleClassName="__determinate-circle"
            strokeDashoffset={strokeDashOffsetDeterminate}
            />
        </div>
      )}
      {indeterminate && (
        <div className="__indeterminate-container">
          {!spinnerFourColors && <SpinnerLayer />}
          {spinnerFourColors && [1,2,3,4].map(n => (
            <SpinnerLayer key={n} className={`__color-${n}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CircularProgress;
