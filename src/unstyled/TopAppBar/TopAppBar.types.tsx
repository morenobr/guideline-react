import { IconButtonProps } from '../IconButton';
interface IconButtonPropsWithClassName extends IconButtonProps{
  className?:string;
}
interface IconButton extends React.ReactElement<IconButtonPropsWithClassName> {};
export interface TopAppBarProps {
  title: string;
  navigationIconButton?: IconButton;
  iconButtonList?: Array<IconButton>;
  short?: boolean;
  shortCollapsed?: boolean;
  fixed?: boolean;
  fixedScrolled?: boolean;
  fixedTop?: boolean;
  dense?: boolean;
  secondary?: boolean;
}
