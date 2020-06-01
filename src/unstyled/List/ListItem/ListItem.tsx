import React from "react";
import { ListItemProps } from "./ListItem.types";

interface ListItemPropsWithClassname extends ListItemProps {
  className: string
}

const ListItem = ({
  className,
  text,
  secondaryText,
  tabIndex,
  role,
  disabled,
  activated,
  selected,
  withSelection,
  contentLeft,
  contentRight,
  labelFor,
  ...otherProps
}: ListItemPropsWithClassname) => {
  const classes = {
    [className]: true,
    selected: selected,
    disabled: disabled,
    activated: activated,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  const TextTag = (labelFor)?'label':'span';
  return (
    <li
      className={classNamesApplied}
      role={role?role:(withSelection?'option':undefined)}
      aria-selected={withSelection?selected:undefined}
      tabIndex={tabIndex}
      {...otherProps}>
      {contentLeft && <span className="left">{contentLeft}</span>}
      <TextTag className="text" htmlFor={labelFor}>
        {text && !secondaryText && text}
        {text && secondaryText && (
          <>
            <span className="primary-text">{text}</span>
            <span className="secondary-text">{secondaryText}</span>
          </>
        )}
      </TextTag>
      {contentRight && <span className="right">{contentRight}</span>}
    </li>
  );
}

export default ListItem;
