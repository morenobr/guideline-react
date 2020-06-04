import React from 'react';
import DrawerResponsive, { DrawerResponsiveProps } from "../unstyled/DrawerResponsive";
import '../Drawer';

export default (props:DrawerResponsiveProps) => { 
  return (
    <DrawerResponsive {...props} classNameDrawer="mg-drawer" className={props.className} />
  );
}
