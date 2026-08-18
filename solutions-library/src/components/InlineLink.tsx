import React from "react";

export type InlineLinkColor = "primary" | "neutral";
export type InlineLinkState = "active" | "default" | "disabled" | "hover" | "visited";

export interface InlineLinkProps {
  text: string;
  href?: string;
  color?: InlineLinkColor;
  state?: InlineLinkState;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function InlineLink({ text, href = "#", color = "primary", state = "default", iconLeft, iconRight }: InlineLinkProps) {
  return (
    <a href={href} className={`inline-link inline-link--${color} inline-link--${state}`} aria-disabled={state === "disabled"}>
      {iconLeft ? <span className="inline-link__icon inline-link__icon--left">{iconLeft}</span> : null}
      {text}
      {iconRight ? <span className="inline-link__icon inline-link__icon--right">{iconRight}</span> : null}
    </a>
  );
}
