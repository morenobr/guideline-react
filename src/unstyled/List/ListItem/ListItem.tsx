import React from "react";
import { ListItemProps } from "./ListItem.types";
import useFontMaterialIcons from "../../../hooks/useFontMaterialIcons";
import getClassName from "../../../helpers/getClassName";

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
  useFontMaterialIcons();
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
      {contentLeft && typeof contentLeft === "string" && <i className="material-icons left" aria-hidden="true">{contentLeft}</i>}
      {contentLeft && typeof contentLeft !== "string" && contentLeft.type === 'svg' && <contentLeft.type {...contentLeft.props} className={getClassName([contentLeft.props.className, 'left'])}></contentLeft.type>}
      {contentLeft && typeof contentLeft !== "string" && contentLeft.type !== 'svg' && <span className="left">{contentLeft}</span>}
      <TextTag className="text" htmlFor={labelFor}>
        {text && !secondaryText && text}
        {text && secondaryText && (
          <>
            <span className="primary-text">{text}</span>
            <span className="secondary-text">{secondaryText}</span>
          </>
        )}
      </TextTag>
      {contentRight && typeof contentRight === "string" && <i className="material-icons right" aria-hidden="true">{contentRight}</i>}
      {contentRight && typeof contentRight !== "string" && contentRight.type === 'svg' && <contentRight.type {...contentRight.props} className={getClassName([contentRight.props.className, 'right'])}></contentRight.type>}
      {contentRight && typeof contentRight !== "string" && contentRight.type !== 'svg' && <span className="right">{contentRight}</span>}
    </li>
  );
}

export default ListItem;
