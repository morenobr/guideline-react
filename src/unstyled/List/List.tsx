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
  asNavigation,
  ...otherProps
}: ListPropsWithClassname) => {
  const classes = {
    [className]: true,
    'non-interactive': nonInteractive,
    dense: dense,
    'avatar-list': avatarList,
    'two-line': twoLine,
  }
  const classNamesApplied = Object.keys(classes).filter(k => !!classes[k]).join(' ');
  const TagList = asNavigation?'nav':'ul';
  return (
    <TagList
      className={classNamesApplied}
      role={role?role:(withSelection?'listbox':undefined)}
      {...otherProps}>
      {children}
    </TagList>
  );
}

export default List;
