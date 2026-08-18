import React from "react";

export type LinkStyle = "primary" | "secondary";
export type LinkSize = "small" | "medium" | "large";
export type LinkState = "default" | "visited" | "disabled" | "active" | "hover";

export interface LinkProps {
  text: string;
  href?: string;
  style?: LinkStyle;
  size?: LinkSize;
  state?: LinkState;
  underline?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Link({ text, href = "#", style = "primary", size = "large", state = "default", underline = false, iconLeft, iconRight }: LinkProps) {
  return (
    <a
      href={href}
      className={`link link--${style} link--${size} link--${state} ${underline ? "link--underline" : ""}`}
      aria-disabled={state === "disabled"}
    >
      {iconLeft ? <span className="link__icon link__icon--left">{iconLeft}</span> : null}
      {text}
      {iconRight ? <span className="link__icon link__icon--right">{iconRight}</span> : null}
    </a>
  );
}
