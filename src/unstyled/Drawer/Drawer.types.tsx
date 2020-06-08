export interface DrawerProps {
  children: JSX.Element | Array<JSX.Element>;
  title?: string;
  subtitle?: string;
  dismissible?: boolean;
  animate?: boolean;
  modal?: boolean;
  open?: boolean;
  onClose?: () => void;
  appContent?: JSX.Element
}
