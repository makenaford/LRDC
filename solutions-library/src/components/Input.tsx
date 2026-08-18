import React from "react";
import { CountrySelector } from "./CountrySelector";

export type InputType = "text" | "dropdown" | "text-area";
export type InputState = "default" | "active" | "disabled";

export interface InputProps {
  type?: InputType;
  condensed?: boolean;
  state?: InputState;
  filled?: boolean;
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
  helpText?: string;
  showHelpText?: boolean;
  showInfoButton?: boolean;
  showCountrySelector?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Input({
  type = "text",
  condensed = true,
  state = "default",
  filled = false,
  label,
  showLabel = true,
  required = false,
  placeholder = "Placeholder text",
  value,
  helpText,
  showHelpText = true,
  showInfoButton = false,
  showCountrySelector = false,
  iconLeft,
  iconRight,
}: InputProps) {
  const Field = type === "text-area" ? "textarea" : "input";
  return (
    <div className={`input input--${type} input--${condensed ? "condensed" : "expanded"} input--${state} ${filled ? "input--filled" : ""}`}>
      {showLabel && label ? (
        <label className="input__label">
          {label}
          {required ? <span className="input__required">*</span> : null}
          {showInfoButton ? <span className="input__info-button">ⓘ</span> : null}
        </label>
      ) : null}
      <div className="input__field-wrapper">
        {showCountrySelector ? <CountrySelector /> : null}
        {iconLeft ? <span className="input__icon input__icon--left">{iconLeft}</span> : null}
        <Field
          className="input__field"
          placeholder={placeholder}
          defaultValue={value}
          disabled={state === "disabled"}
        />
        {iconRight ? <span className="input__icon input__icon--right">{iconRight}</span> : null}
      </div>
      {showHelpText && helpText ? <div className="input__help-text">{helpText}</div> : null}
    </div>
  );
}
