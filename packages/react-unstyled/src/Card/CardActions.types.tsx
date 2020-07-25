import { ButtonElement } from '../Button';
import { IconButtonElement } from '../IconButton';
import { CardActionButtonsElement } from './CardActionButtons.types';
import { CardActionIconsElement } from './CardActionIcons.types';
import { IconButtonToogleElement } from '../IconButtonToogle';

export interface CardActionsProps {
  fullBleed?:boolean;
  children: ButtonElement | IconButtonElement | IconButtonToogleElement
    | CardActionButtonsElement | CardActionIconsElement 
    | Array<ButtonElement | IconButtonElement | IconButtonToogleElement> 
    | [CardActionButtonsElement,CardActionIconsElement] | [CardActionIconsElement, CardActionButtonsElement];
}