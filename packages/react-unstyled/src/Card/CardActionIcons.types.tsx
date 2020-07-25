import { IconButtonElement } from '../IconButton';
import { IconButtonToogleElement } from '../IconButtonToogle';

export interface CardActionIconsProps {
  children: IconButtonElement | IconButtonToogleElement | Array<IconButtonElement | IconButtonToogleElement>;
}

export type CardActionIconsElement = React.ReactElement<CardActionIconsProps, 'div'>;