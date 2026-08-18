import React from "react";
import { Facets } from "./Facets";

export type DesktopFacetSize = "desktop" | "mobile";

export interface DesktopFacetProps {
  title: string;
  size?: DesktopFacetSize;
  showSearch?: boolean;
  children?: React.ReactNode;
}

/** The full facet sidebar panel containing one or more Facets groups. */
export function DesktopFacet({ title, size = "desktop", showSearch = false, children }: DesktopFacetProps) {
  return (
    <aside className={`desktop-facet desktop-facet--${size}`}>
      <h3 className="desktop-facet__title">{title}</h3>
      {showSearch ? <input className="desktop-facet__search" placeholder="Search" /> : null}
      <div className="desktop-facet__groups">{children ?? <Facets text="FILTER HEADING" />}</div>
    </aside>
  );
}
