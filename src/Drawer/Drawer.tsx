import React from 'react';
import Drawer, { DrawerProps } from "../unstyled/Drawer";
import useFontRoboto from '../hooks/useFontRoboto';
import "../styles/Drawer.scss";

export default (props:DrawerProps) => {
  useFontRoboto();
  
  return (
    <Drawer {...props} classNameDrawer="mg-drawer" className={props.className} />
  );
}
