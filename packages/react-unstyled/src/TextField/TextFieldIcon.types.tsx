import { SvgElement, ImageElement} from '../types'

export interface TextFieldIconProps {
  icon: string | SvgElement | ImageElement;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  leading?: boolean;
  trailing?: boolean;
}
