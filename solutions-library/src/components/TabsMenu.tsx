import React from "react";

export type TabState = "default" | "selected" | "hover";

export interface AnchorNavTabProps {
  label: string;
  state?: TabState;
}

/** A single tab in an anchor/section navigation bar. */
export function AnchorNavTab({ label, state = "selected" }: AnchorNavTabProps) {
  return <button className={`anchor-nav-tab anchor-nav-tab--${state}`}>{label}</button>;
}

export type NumberTabState = "active" | "default";

export interface NumberTabProps {
  number: number;
  state?: NumberTabState;
}

/** A numbered step tab, e.g. "1", "2", "3" in a stepped flow. */
export function NumberTab({ number, state = "active" }: NumberTabProps) {
  return <button className={`number-tab number-tab--${state}`}>{number}</button>;
}

export type TabTextSize = "desktop" | "mobile";

export interface TabTextProps {
  label: string;
  state?: TabState;
  size?: TabTextSize;
  showNumbers?: boolean;
  number?: number;
  showIconLeft?: boolean;
  icon?: React.ReactNode;
}

/** A text-label tab, optionally prefixed with a number or icon. */
export function TabText({ label, state = "selected", size = "desktop", showNumbers = false, number, showIconLeft = true, icon }: TabTextProps) {
  return (
    <button className={`tab-text tab-text--${state} tab-text--${size}`}>
      {showIconLeft && icon ? <span className="tab-text__icon">{icon}</span> : null}
      {showNumbers && number != null ? <span className="tab-text__number">{number}</span> : null}
      {label}
    </button>
  );
}

export type TabsMenuFeaturesSize = "desktop" | "mobile";

export interface TabsMenuFeaturesProps {
  children: React.ReactNode;
  size?: TabsMenuFeaturesSize;
}

/** Container that lays out a row of feature tabs (desktop) or a stacked list (mobile). */
export function TabsMenuFeatures({ children, size = "desktop" }: TabsMenuFeaturesProps) {
  return <div className={`tabs-menu-features tabs-menu-features--${size}`}>{children}</div>;
}

export type TabContentType = "link" | "logo";
export type TabContentSize = "desktop" | "mobile";

export interface TabContentProps {
  type?: TabContentType;
  state?: TabState;
  size?: TabContentSize;
  children: React.ReactNode;
}

/** A single content slot within a tab — either a text link or a logo. */
export function TabContent({ type = "link", state = "default", size = "desktop", children }: TabContentProps) {
  return <div className={`tab-content tab-content--${type} tab-content--${state} tab-content--${size}`}>{children}</div>;
}

export type TabsMenuTextSize = "desktop" | "mobile";

export interface TabsMenuTextProps {
  children: React.ReactNode;
  size?: TabsMenuTextSize;
}

/** Container that lays out a row of text tabs. */
export function TabsMenuText({ children, size = "desktop" }: TabsMenuTextProps) {
  return <div className={`tabs-menu-text tabs-menu-text--${size}`}>{children}</div>;
}

export type TabsMenuLogoSize = "desktop" | "mobile";

export interface TabsMenuLogoProps {
  children: React.ReactNode;
  size?: TabsMenuLogoSize;
}

/** Container that lays out a row of logo tabs. */
export function TabsMenuLogo({ children, size = "desktop" }: TabsMenuLogoProps) {
  return <div className={`tabs-menu-logo tabs-menu-logo--${size}`}>{children}</div>;
}
