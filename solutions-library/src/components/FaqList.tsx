import React from "react";
import { FAQ, FAQProps } from "./FAQ";

export type FaqListLayout = "large" | "mobile" | "small";

export interface FaqListProps {
  layout?: FaqListLayout;
  items: FAQProps[];
}

/** Renders a list of FAQ items in a given layout. */
export function FaqList({ layout = "large", items }: FaqListProps) {
  return (
    <div className={`faq-list faq-list--${layout}`}>
      {items.map((item, i) => (
        <FAQ key={i} {...item} />
      ))}
    </div>
  );
}
