import React from "react";

export type LabelCTAStyle = "gradient" | "tonal" | "outline";
export type LabelCTASize = "large" | "small" | "medium";

export interface LabelCTAProps {
  text: string;
  style?: LabelCTAStyle;
  size?: LabelCTASize;
  icon?: React.ReactNode;
}

export function LabelCTA({ text, style = "tonal", size = "large", icon }: LabelCTAProps) {
  return (
    <span className={`label-cta label-cta--${style} label-cta--${size}`}>
      {icon ? <span className="label-cta__icon">{icon}</span> : null}
      {text}
    </span>
  );
}
