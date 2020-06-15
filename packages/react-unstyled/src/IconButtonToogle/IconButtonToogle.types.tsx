import { SvgElement, ImageElement} from '../types'

export interface IconButtonToogleProps {
  iconOn: string | SvgElement | ImageElement;
  iconOff: string | SvgElement | ImageElement;
  ariaLabelOn?: string;
  ariaLabelOff?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  primary?: boolean;
  secondary?: boolean;
}
