import { ButtonElement } from '../Button';

export interface CardActionButtonsProps {
  children: ButtonElement | Array<ButtonElement>;
}

export type CardActionButtonsElement = React.ReactElement<CardActionButtonsProps, 'div'>;