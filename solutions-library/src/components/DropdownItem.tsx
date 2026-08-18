import React from "react";

export type DropdownItemType = "action" | "group-title" | "checkbox" | "radio-button" | "drilldown" | "divider";
export type DropdownItemState = "default" | "hover" | "focus" | "active" | "disabled";

export interface DropdownItemProps {
  type?: DropdownItemType;
  state?: DropdownItemState;
  label?: string;
  groupTitle?: string;
  hasDivider?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/** A single row inside a Dropdown menu. */
export function DropdownItem({
  type = "action",
  state = "default",
  label = "Option",
  groupTitle,
  hasDivider = false,
  iconLeft,
  iconRight,
}: DropdownItemProps) {
  if (type === "divider") return <hr className="dropdown-item__divider" />;
  if (type === "group-title") return <div className="dropdown-item__group-title">{groupTitle}</div>;
  return (
    <div className={`dropdown-item dropdown-item--${type} dropdown-item--${state}`}>
      {iconLeft ? <span className="dropdown-item__icon dropdown-item__icon--left">{iconLeft}</span> : null}
      <span className="dropdown-item__label">{label}</span>
      {iconRight ? <span className="dropdown-item__icon dropdown-item__icon--right">{iconRight}</span> : null}
      {hasDivider ? <hr className="dropdown-item__divider" /> : null}
    </div>
  );
}
