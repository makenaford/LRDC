import React from "react";

export type BreadcrumbItemState = "default" | "hover" | "active";

export interface BreadcrumbItemProps {
  label: string;
  state?: BreadcrumbItemState;
  href?: string;
}

export function BreadcrumbItem({ label, state = "default", href = "#" }: BreadcrumbItemProps) {
  return (
    <a href={href} className={`breadcrumb-item breadcrumb-item--${state}`}>
      {label}
    </a>
  );
}

export interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
  showIcon?: boolean;
}

/** Breadcrumb trail rendering 2, 3, or 4+ items depending on `items.length`. */
export function Breadcrumb({ items, showIcon = true }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && showIcon ? <span className="breadcrumb__separator">/</span> : null}
          <BreadcrumbItem {...item} />
        </React.Fragment>
      ))}
    </nav>
  );
}
