import React, { useState } from "react";

export type FacetsType = "checkbox" | "default" | "radio";

export interface FacetsProps {
  text: string;
  type?: FacetsType;
  defaultOpen?: boolean;
  showViewAll?: boolean;
  showSearch?: boolean;
  showLinks?: boolean;
  children?: React.ReactNode;
}

/** A single collapsible filter/facet group, e.g. in a search sidebar. */
export function Facets({ text, type = "checkbox", defaultOpen = true, showViewAll = true, showSearch = true, showLinks = true, children }: FacetsProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`facets facets--${type} facets--${open ? "open" : "closed"}`}>
      <button className="facets__header" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {text}
      </button>
      {open ? (
        <div className="facets__body">
          {showSearch ? <input className="facets__search" placeholder="Search" /> : null}
          {children}
          {showViewAll ? <button className="facets__view-all">View all</button> : null}
          {showLinks ? <a href="#" className="facets__link">Clear</a> : null}
        </div>
      ) : null}
    </div>
  );
}
