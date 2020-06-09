import React, { useState, useEffect } from "react";
import { DrawerResponsiveProps } from "./DrawerResponsive.types";
import Drawer from "../Drawer";
import useWindowWidth from "../../hooks/useWindowWidth";

interface DrawerPropsWithClassname extends DrawerResponsiveProps {
  classNameDrawer: string
}

const DrawerResponsive = ({
  classNameDrawer,
  minWidthDesktop,
  className,
  children,
  title,
  subtitle,
  animate,
  open,
  onClose,
  appContent,
  ...otherProps
}: DrawerPropsWithClassname) => {
  const width = useWindowWidth();
  const [drawerAlwaysVisible, setDrawerAlwaysVisible] = useState(width >= minWidthDesktop)
  useEffect(()=>{
    const newDrawerAlwaysVisible= width >= minWidthDesktop;
    if(newDrawerAlwaysVisible !== drawerAlwaysVisible){
      setDrawerAlwaysVisible(newDrawerAlwaysVisible);
    }
  },[drawerAlwaysVisible, width, minWidthDesktop])
  return (
    <Drawer
      classNameDrawer={classNameDrawer}
      className={className}
      title={title}
      subtitle={subtitle}
      children={children}
      onClose={onClose}
      appContent={<appContent.type {...appContent.props} drawerAlwaysVisible={drawerAlwaysVisible}></appContent.type>}
      animate={animate}
      {...otherProps}
      dismissible={drawerAlwaysVisible}
      modal={!drawerAlwaysVisible}
      open={drawerAlwaysVisible || open}
      />
  );
}

export default DrawerResponsive;
