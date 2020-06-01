import React from "react";
import { ListProps } from "./List.types";

interface ListPropsWithClassname extends ListProps {
  className: string
}

const List = ({
  className,
  children,
  role,
  withSelection,
  nonInteractive,
  dense,
  avatarList,
  twoLine,
  ...otherProps
}: ListPropsWithClassname) => {
  const classes = {
    [className]: true,
    [`${className}--non-interactive`]: nonInteractive,
    [`${className}--dense`]: dense,
    [`${className}--avatar-list`]: avatarList,
    [`${className}--two-line`]: twoLine,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  return (
    <ul
      className={classNamesApplied}
      role={role?role:(withSelection?'listbox':undefined)}
      {...otherProps}>
      {children}
    </ul>
  );
}

export default List;
