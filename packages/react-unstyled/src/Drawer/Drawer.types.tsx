export interface DrawerProps {
  className?: string
  children: JSX.Element | Array<JSX.Element>;
  title?: string;
  subtitle?: string;
  dismissible?: boolean;
  fixed?: boolean;
  animate?: boolean;
  modal?: boolean;
  open?: boolean;
  onClose?: () => void;
  appContent?: JSX.Element
}
