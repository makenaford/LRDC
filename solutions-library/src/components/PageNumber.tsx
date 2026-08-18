import React from "react";

export type PageNumberState = "default" | "hover" | "selected";

export interface PageNumberProps {
  page: number;
  state?: PageNumberState;
  onClick?: () => void;
}

/** A single page-number control, used inside Pagination. */
export function PageNumber({ page, state = "default", onClick }: PageNumberProps) {
  return (
    <button className={`page-number page-number--${state}`} onClick={onClick} aria-current={state === "selected"}>
      {page}
    </button>
  );
}
