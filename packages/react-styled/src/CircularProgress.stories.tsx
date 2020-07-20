import React, { useState, useEffect } from "react";
import { CircularProgress } from './index';

export default {
  title: "CircularProgress"
};

export const Basic = () => {
  const [percent, setPercent] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setPercent(percent => {
        const newPercent = percent + 5;
        if(newPercent > 100){
          return 0;
        }
        return newPercent;
      })
    }, 500);
    return ()=>{
      clearInterval(interval);
    }
  },[])
  return (
    <div>
      <h3>Determinate {percent}%</h3>
      <div>
        <CircularProgress value={percent} />
      </div>
      <h3>Indeterminate</h3>
      <div>
        <CircularProgress />
      </div>
      <h3>4 colors</h3>
      <div>
        <CircularProgress spinnerFourColors />
      </div>
      <h3>closed</h3>
      <div>
        <CircularProgress closed />
      </div>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div>
      <h3>Normal</h3>
      <div>
        <CircularProgress />
      </div>
      <h3>Small</h3>
      <div>
        <CircularProgress small />
      </div>
      <h3>Medium</h3>
      <div>
        <CircularProgress medium />
      </div>
      <h3>Large</h3>
      <div>
        <CircularProgress large />
      </div>
      <h3>Extra Large</h3>
      <div>
        <CircularProgress extraLarge />
      </div>
    </div>
  );
};

export const ResponsiveFillParent = () => {
  return (
    <div>
      <h3>Normal - Box 300px X 300px</h3>
      <div style={{width:300,height:300}}>
        <CircularProgress fillParent />
      </div>
      <h3>Small - Box 300px X 300px</h3>
      <div style={{width:300,height:300}}>
        <CircularProgress fillParent small />
      </div>
      <h3>Medium - Box 300px X 300px</h3>
      <div style={{width:300,height:300}}>
        <CircularProgress fillParent medium />
      </div>
      <h3>Large - Box 300px X 300px</h3>
      <div style={{width:300,height:300}}>
        <CircularProgress fillParent large />
      </div>
      <h3>Extra Large - Box 300px X 300px</h3>
      <div style={{width:300,height:300}}>
        <CircularProgress fillParent extraLarge />
      </div>
    </div>
  );
};
