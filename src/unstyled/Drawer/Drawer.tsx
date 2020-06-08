import React from "react";
import { DrawerProps } from "./Drawer.types";
import getClassName from "../../helpers/getClassName";

interface DrawerPropsWithClassname extends DrawerProps {
  classNameDrawer: string
}

const Drawer = ({
  classNameDrawer,
  className,
  children,
  title,
  subtitle,
  dismissible,
  animate,
  modal,
  open,
  onClose,
  appContent,
  ...otherProps
}: DrawerPropsWithClassname) => {
  const classes = {
    [classNameDrawer]: true,
    dismissible,
    modal,
    'modal-shadow': modal && open,
    animate,
    open: open || animate,
    opening: animate && open,
    closing: animate && !open,
  }
  const classNamesApplied = getClassName([getClassName(classes), className]);

  return (
    <>
      <aside className={classNamesApplied} {...otherProps}>
        {(title || subtitle) && (
          <div className="header">
            <h3 className="title">{title}</h3>
            {subtitle && (<h6 className="subtitle">{subtitle}</h6>)}
          </div>
        )}
        <div className="content">
          {children}
        </div>
      </aside>
      {modal && open && (<div className={`${classNameDrawer}-scrim`} onClick={()=>{ if(onClose) { onClose(); } } }></div>)}
      {appContent && (<appContent.type {...appContent.props} className={getClassName([appContent.props.className, `${classNameDrawer}-app-content`])}></appContent.type>)}
    </>
  );
}

export default Drawer;
