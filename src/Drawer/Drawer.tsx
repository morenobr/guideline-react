import React from 'react';
import Drawer, { DrawerProps } from "../unstyled/Drawer";
import useFontRoboto from '../hooks/useFontRoboto';
import "../styles/Drawer.scss";
import getClassName from '../helpers/getClassName';

interface DrawerStyledProps extends DrawerProps{
  className?: string;
}

export default (props:DrawerStyledProps) => {
  useFontRoboto();
  
  return (
    <Drawer {...props} className={getClassName(['mg-drawer', props.className])} />
  );
}
