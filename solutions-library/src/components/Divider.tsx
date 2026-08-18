import React from "react";

export type DividerVariant = "normal" | "gradient";
export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
}

export function Divider({ variant = "normal", orientation = "vertical" }: DividerProps) {
  return <hr className={`divider divider--${variant} divider--${orientation}`} />;
}
