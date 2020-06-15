import React from 'react';
import DrawerResponsive, { DrawerResponsiveProps } from "@morenobr/guideline-react-unstyled/DrawerResponsive";

export default (props:DrawerResponsiveProps) => { 
  return (
    <DrawerResponsive {...props} classNameDrawer="mg-drawer" className={props.className} />
  );
}
