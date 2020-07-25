import { CSSProperties } from "react";

export interface CardMediaProps {
  ratio16to9?:boolean;
  square?:boolean;
  children: string | JSX.Element | Array<string | JSX.Element>;
  style?: CSSProperties;
}
