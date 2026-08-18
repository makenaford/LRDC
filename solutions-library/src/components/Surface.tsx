import React from "react";

export type SurfaceStyle = "no-bg" | "glass" | "blue" | "grey" | "gradient-blue" | "gradient-purple";
export type SurfaceState = "default" | "focus" | "hover";

export interface SurfaceProps {
  style?: SurfaceStyle;
  state?: SurfaceState;
  children?: React.ReactNode;
}

/** Background/glass panel primitive used behind cards and hero sections. */
export function Surface({ style = "glass", state = "default", children }: SurfaceProps) {
  return <div className={`surface surface--${style} surface--${state}`}>{children}</div>;
}
