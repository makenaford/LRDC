import React from "react";
import { PageNumber } from "./PageNumber";

export type PaginationSize = "desktop" | "mobile";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  size?: PaginationSize;
  onPageChange?: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, size = "desktop", onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className={`pagination pagination--${size}`}>
      {pages.map((p) => (
        <PageNumber
          key={p}
          page={p}
          state={p === currentPage ? "selected" : "default"}
          onClick={() => onPageChange?.(p)}
        />
      ))}
    </nav>
  );
}
