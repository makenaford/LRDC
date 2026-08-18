import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
}

/** Simple notification badge, e.g. a count or dot indicator. */
export function Badge({ children }: BadgeProps) {
  return <span className="badge">{children}</span>;
}
