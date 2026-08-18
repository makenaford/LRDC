import React from "react";

export type TagSize = "regular" | "small";
export type TagStyle = "tonal" | "outline";

export interface TagProps {
  text: string;
  size?: TagSize;
  style?: TagStyle;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Tag({ text, size = "regular", style = "tonal", iconLeft, iconRight }: TagProps) {
  return (
    <span className={`tag tag--${size} tag--${style}`}>
      {iconLeft ? <span className="tag__icon tag__icon--left">{iconLeft}</span> : null}
      {text}
      {iconRight ? <span className="tag__icon tag__icon--right">{iconRight}</span> : null}
    </span>
  );
}
