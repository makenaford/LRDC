import React from "react";

export type CheckboxSelected = "yes" | "no" | "indeterminate";
export type CheckboxSize = "default" | "large";

export interface CheckboxProps {
  selected?: CheckboxSelected;
  disabled?: boolean;
  size?: CheckboxSize;
  label?: string;
  onChange?: (selected: boolean) => void;
}

export function Checkbox({ selected = "no", disabled = false, size = "default", label, onChange }: CheckboxProps) {
  return (
    <label className={`checkbox checkbox--${size}`}>
      <input
        type="checkbox"
        checked={selected === "yes"}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        aria-checked={selected === "indeterminate" ? "mixed" : selected === "yes"}
      />
      {label ? <span className="checkbox__label">{label}</span> : null}
    </label>
  );
}
