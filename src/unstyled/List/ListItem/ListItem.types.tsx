export interface ListItemProps {
  text?: string;
  secondaryText?: string;
  tabIndex?: number;
  role?: string;
  disabled?: boolean;
  activated?: boolean;
  selected?:boolean;
  withSelection?:boolean;
  contentLeft?: string | JSX.Element;
  contentRight?: string | JSX.Element;
  labelFor?: string;
  asLink?: boolean;
}
