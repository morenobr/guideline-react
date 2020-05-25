export interface ButtonProps {
  label?: string;
  icon?: string | React.SVGAttributes<SVGElement>;
  outlined?:boolean;
  raised?:boolean;
  touch?: boolean;
}