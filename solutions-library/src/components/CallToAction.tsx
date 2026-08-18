import React from "react";

export type CTAAlign = "vertical" | "horizontal";
export type CTASize = "desktop" | "mobile";
export type CTAProperty = "primary" | "secondary";

export interface CallToActionProps {
  align?: CTAAlign;
  size?: CTASize;
  property?: CTAProperty;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function CallToAction({ align = "horizontal", size = "desktop", property = "primary", title, description, children }: CallToActionProps) {
  return (
    <div className={`cta cta--${align} cta--${size} cta--${property}`}>
      <h3 className="cta__title">{title}</h3>
      {description ? <p className="cta__description">{description}</p> : null}
      {children ? <div className="cta__actions">{children}</div> : null}
    </div>
  );
}
