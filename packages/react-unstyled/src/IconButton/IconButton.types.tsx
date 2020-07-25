import { SvgElement, ImageElement} from '../types'

export interface IconButtonProps {
  icon: string | SvgElement | ImageElement;
  title?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
}

export type IconButtonElement = React.ReactElement<IconButtonProps, 'button'>;