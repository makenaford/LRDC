import React from "react";

export type AlertType = "danger" | "generic" | "info" | "success" | "warning";
export type AlertStyle = "detailed" | "simple";

export interface AlertProps {
  type?: AlertType;
  style?: AlertStyle;
  title?: string;
  children: React.ReactNode;
}

export function Alert({ type = "warning", style = "simple", title, children }: AlertProps) {
  return (
    <div className={`alert alert--${type} alert--${style}`} role="alert">
      {style === "detailed" && title ? <div className="alert__title">{title}</div> : null}
      <div className="alert__body">{children}</div>
    </div>
  );
}
