import React from 'react';

interface SvgElement extends React.DOMElement<React.SVGAttributes<SVGElement>, SVGElement> {
  type: 'svg';
}
interface ImageElement extends React.DOMElement<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  type: 'img';
}
export interface IconButtonToogleProps {
  iconOn: string | SvgElement | ImageElement;
  iconOff: string | SvgElement | ImageElement;
  labelOn?: string;
  labelOff?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}
