import { SvgElement, ImageElement} from '../../types'

export interface IconButtonProps {
  icon: string | SvgElement | ImageElement;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
}
