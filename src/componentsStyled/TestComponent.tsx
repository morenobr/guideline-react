import React from 'react';
import TestComponent from "../components/TestComponent";
import "../styles/TestComponent.scss";

export default (props:{className?:string}) => (
  <TestComponent {...props} className={`test-component${props.className?` ${props.className}`:''}`} />
);