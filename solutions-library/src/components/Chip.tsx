import React from "react";

export type ChipState = "default" | "selected" | "focused" | "disabled" | "dragged";

export interface ChipProps {
  label: string;
  state?: ChipState;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export function Chip({ label, state = "default", iconLeft, iconRight, onClick }: ChipProps) {
  return (
    <div className={`chip chip--${state}`} onClick={onClick}>
      {iconLeft ? <span className="chip__icon chip__icon--left">{iconLeft}</span> : null}
      <span className="chip__label">{label}</span>
      {iconRight ? <span className="chip__icon chip__icon--right">{iconRight}</span> : null}
    </div>
  );
}
