export interface ListItemProps {
  text?: string;
  secondaryText?: string;
  tabIndex?: number;
  role?: string;
  disabled?: boolean;
  activated?: boolean;
  selected?:boolean;
  withSelection?:boolean;
  contentLeft?: JSX.Element;
  contentRight?: JSX.Element;
  labelFor?: string;
}
