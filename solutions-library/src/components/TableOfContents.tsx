import React from "react";

export type TocItemState = "active" | "default";

export interface TocItemProps {
  label: string;
  state?: TocItemState;
  href?: string;
}

/** A single anchor entry within a Table of Contents. */
export function TocItem({ label, state = "default", href = "#" }: TocItemProps) {
  return (
    <a href={href} className={`toc-item toc-item--${state}`}>
      {label}
    </a>
  );
}

export interface TableOfContentsProps {
  items: TocItemProps[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="table-of-contents">
      {items.map((item, i) => (
        <TocItem key={i} {...item} />
      ))}
    </nav>
  );
}
