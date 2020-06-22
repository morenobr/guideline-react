import { TextFieldIconProps } from "./TextFieldIcon.types";

interface TextFieldIconLeadingProps extends TextFieldIconProps {
  leading: true;
  trailing: undefined;
}
interface TextFieldIconTrailingProps extends TextFieldIconProps {
  leading: undefined;
  trailing: true;
}

export interface TextFieldProps {
  value?:string;
  required?: boolean;
  filled?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  label?:string;
  labelShake?:boolean;
  helperText?:string;
  invalidMessage?: string;
  maxLength?: number;
  prefixText?:string;
  suffixText?:string;
  icons?: [React.ReactElement<TextFieldIconLeadingProps, 'i'> | React.ReactElement<TextFieldIconTrailingProps, 'i'>] | [React.ReactElement<TextFieldIconLeadingProps, 'i'>, React.ReactElement<TextFieldIconTrailingProps, 'i'>];
  fullWidth?:boolean;
  endAligned?:boolean;
  ltrText?: boolean;
  textarea?:boolean;
  textareaRows?:number;
  textareaCols?:number;
  textareaBodyCharacterCounter?:boolean;
}
