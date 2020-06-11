import React from "react";
import { TopAppBarProps } from "./TopAppBar.types";
import { useFontMaterialIcons } from "@morenobr/guideline-react-hooks";
//TODO: change font material-icons control to be defined external

interface TopAppBarPropsWithClassname extends TopAppBarProps {
  className: string
}

const TopAppBar = ({
  className,
  title,
  navigationIconButton,
  iconButtonList,
  short,
  shortCollapsed,
  fixed,
  fixedScrolled,
  fixedTop,
  dense,
  secondary,
  ...otherProps
}: TopAppBarPropsWithClassname) => {
  useFontMaterialIcons();
  const classes = {
    [className]: true,
    short,
    'short-collapsed': shortCollapsed,
    'has-an-action-item': short && iconButtonList && iconButtonList.length === 1,
    'has-two-action-items': short && iconButtonList && iconButtonList.length === 2,
    'has-three-action-items': short && iconButtonList && iconButtonList.length === 3,
    fixed,
    'fixed-scrolled': fixedScrolled,
    'fixed-top': fixedTop,
    dense,
    secondary,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');

  return (
    <header className={classNamesApplied} {...otherProps}>
      <div className="rowPos">
        <div className="row">
          <section className="section align-start">
            {navigationIconButton && <navigationIconButton.type {...navigationIconButton.props} className={`${navigationIconButton.props.className} navigation-icon`}></navigationIconButton.type>}
            <span className="title">{title}</span>
          </section>
          <section className="section align-end" role="toolbar">
            {iconButtonList && iconButtonList.map((iconButton, index) => (
              <iconButton.type {...iconButton.props} key={index} className={`${iconButton.props.className} action-item`}></iconButton.type>
            ))}
          </section>
        </div>
      </div>
    </header>
  );
}

export default TopAppBar;
