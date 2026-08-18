import React from "react";

export type RadioSize = "default" | "large";

export interface RadioProps {
  selected?: boolean;
  disabled?: boolean;
  size?: RadioSize;
  label?: string;
  name?: string;
  onChange?: () => void;
}

export function Radio({ selected = false, disabled = false, size = "default", label, name, onChange }: RadioProps) {
  return (
    <label className={`radio radio--${size}`}>
      <input type="radio" checked={selected} disabled={disabled} name={name} onChange={onChange} />
      {label ? <span className="radio__label">{label}</span> : null}
    </label>
  );
}
