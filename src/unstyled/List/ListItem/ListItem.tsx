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
    [`${className}--selected`]: selected,
    [`${className}--disabled`]: disabled,
    [`${className}--activated`]: activated,
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
      {contentLeft && <span className={`${className}__graphic`}>{contentLeft}</span>}
      <TextTag className={`${className}__text`} htmlFor={labelFor}>
        {text && !secondaryText && text}
        {text && secondaryText && (
          <>
            <span className={`${className}__primary-text`}>{text}</span>
            <span className={`${className}__secondary-text`}>{secondaryText}</span>
          </>
        )}
      </TextTag>
      {contentRight && <span className={`${className}__meta`}>{contentRight}</span>}
    </li>
  );
}

export default ListItem;
