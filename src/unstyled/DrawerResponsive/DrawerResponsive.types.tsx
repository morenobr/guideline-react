export interface DrawerResponsiveProps {
  minWidthDesktop: number;
  className?: string
  children: JSX.Element | Array<JSX.Element>;
  title?: string;
  subtitle?: string;
  animate?: boolean;
  open?: boolean;
  onClose?: () => void;
  appContent: JSX.Element
}
