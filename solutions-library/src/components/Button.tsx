import React from "react";

export type ButtonColor = "primary" | "neutral";
export type ButtonStyle = "solid" | "outline" | "rounded";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  /** Button label content */
  children: React.ReactNode;
  /** Visual color treatment */
  color?: ButtonColor;
  /** Visual style treatment */
  style?: ButtonStyle;
  /** Size of the button */
  size?: ButtonSize;
  /** Disables interaction and applies disabled styling */
  disabled?: boolean;
  /** Optional icon rendered before the label */
  iconLeft?: React.ReactNode;
  /** Optional icon rendered after the label */
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  children,
  color = "primary",
  style = "solid",
  size = "medium",
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${color} btn--${style} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft ? <span className="btn__icon btn__icon--left">{iconLeft}</span> : null}
      <span className="btn__label">{children}</span>
      {iconRight ? <span className="btn__icon btn__icon--right">{iconRight}</span> : null}
    </button>
  );
}
