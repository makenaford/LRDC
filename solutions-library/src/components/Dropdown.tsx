import React from "react";
import { DropdownItem } from "./DropdownItem";

export type DropdownVariant = "simple" | "groups" | "drilldown" | "search" | "slot";

export interface DropdownProps {
  variant?: DropdownVariant;
  showFooter?: boolean;
  footerLabel?: string;
  showCaption?: boolean;
  showAlert?: boolean;
  showDrilldownBack?: boolean;
  children?: React.ReactNode;
}

export function Dropdown({
  variant = "simple",
  showFooter = false,
  footerLabel = "Showing 7 of 20 Items",
  showCaption = true,
  showAlert = true,
  showDrilldownBack = false,
  children,
}: DropdownProps) {
  return (
    <div className={`dropdown dropdown--${variant}`}>
      {showDrilldownBack ? <button className="dropdown__back">‹ Back</button> : null}
      <div className="dropdown__items">{children ?? <DropdownItem />}</div>
      {showFooter ? (
        <div className="dropdown__footer">
          {showCaption ? <span className="dropdown__caption">{footerLabel}</span> : null}
          {showAlert ? <span className="dropdown__alert">⚠</span> : null}
        </div>
      ) : null}
    </div>
  );
}
