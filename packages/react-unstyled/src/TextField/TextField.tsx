import React, { useState, useCallback, useEffect } from "react";
import { useUID } from 'react-uid';
import { TextFieldProps } from "./TextField.types";
import { getClassName } from "../helpers";

interface TextFieldPropsWithClassname extends TextFieldProps {
  classNameTextField: string;
  className?: string;
}

const TextField = ({
  classNameTextField,
  className: propClassName,
  value: propValue,
  required,
  label,
  labelShake,
  filled,
  outlined,
  disabled,
  helperText,
  invalidMessage,
  maxLength,
  prefixText,
  suffixText,
  icons,
  fullWidth,
  endAligned,
  ltrText,
  textarea,
  textareaRows = 3,
  textareaCols = 20,
  textareaBodyCharacterCounter,
  ...otherProps
}: TextFieldPropsWithClassname) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(propValue !== undefined?propValue:'');
  useEffect(()=>{
    if(propValue !== undefined){
      setValue(propValue);
    }
  }, [propValue])
  const iconLeading = icons && icons.find(i => i.props.leading);
  const iconTrailing = icons && icons.find(i => i.props.trailing);
  const labelFloating = value || focused;
  const classes = {
    [classNameTextField]: true,
    textarea,
    'no-label': !label,
    filled,
    outlined,
    disabled,
    'label-floating': labelFloating,
    'with-leading-icon': iconLeading,
    'with-trailing-icon': iconTrailing,
    fullwidth: fullWidth,
    'end-aligned': endAligned,
    focused,
    invalid: invalidMessage,
    'ltr-text': ltrText,
  }
  const onFocus = useCallback(()=>setFocused(true),[])
  const onBlur = useCallback(()=>setFocused(false),[])

  const className = getClassName([getClassName(classes), propClassName]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setValue(event.target.value);
  };


  const uid = useUID();
  const labelId = `txtf-lbl-${uid}`;
  const helperId = helperText || invalidMessage?`txtf-hpr-${uid}`:undefined;

  const labelComponent = (label && <span className={getClassName({'floating-label':true, "float-above": labelFloating, shake: labelFloating && labelShake})} id={labelId}>{label}</span>);
  const characterCounterComponent = (maxLength && <span className="character-counter">{value.length} / {maxLength}</span>);
  const mainComponent = (
    <label className={className} {...otherProps}>
      {!outlined && (
        <span className="ripple"></span>
      )}
      {iconLeading}
      {prefixText && <span className="affix prefix">{prefixText}</span>}
      {textareaBodyCharacterCounter && characterCounterComponent}
      {!textarea && (
        <input
          className="input"
          type="text"
          required={required}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={handleChange}
          aria-labelledby={labelId}
          aria-describedby={helperId}
          maxLength={maxLength} />
      )}
      {textarea && (
        <textarea
          className="input"
          required={required}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={handleChange}
          aria-labelledby={labelId}
          aria-describedby={helperId}
          maxLength={maxLength}
          rows={textareaRows}
          cols={textareaCols}></textarea>
      )}
      {suffixText && <span className="affix suffix">{suffixText}</span>}
      {iconTrailing}
      {!outlined && (
        <>
          {labelComponent}
          <span className="line-ripple"></span>
        </>
      )}
      {outlined && (
        <span className={getClassName({'notched-outline':true, notched: labelFloating, 'no-label': !label})}>
          <span className="leading"></span>
          {labelComponent && (
            <span className="notch">
              {labelComponent}
            </span>
          )}
          <span className="trailing"></span>
        </span>
      )}
    </label>
  );
  const helperLineComponent = (
    ((helperText || invalidMessage)||(!textareaBodyCharacterCounter && characterCounterComponent)) && (
      <span className={`${classNameTextField}-helper-line`}>
        {(helperText||invalidMessage) && (
          <span className={getClassName({'helper-text': true, 'validation-msg': invalidMessage })} id={helperId} aria-hidden="true">{invalidMessage || helperText}</span>
        )}
        {!textareaBodyCharacterCounter && characterCounterComponent}
      </span>
    )
  );
  if(!helperLineComponent || fullWidth){
    return (
      <>
        {mainComponent}
        {helperLineComponent}
      </>
    );
  }
  return (
    <span className={`${classNameTextField}-container`}>
      {mainComponent}
      {helperLineComponent}
    </span>
  );
}

export default TextField;
