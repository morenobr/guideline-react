import React from 'react';
import Drawer, { DrawerProps } from "@morenobr/guideline-react-unstyled/Drawer";
import { useFontRoboto } from '@morenobr/guideline-react-hooks';

export default (props:DrawerProps) => {
  useFontRoboto();
  
  return (
    <Drawer {...props} classNameDrawer="mg-drawer" className={props.className} />
  );
}
