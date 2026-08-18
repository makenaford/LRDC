import React, { useState } from "react";

export type FAQSize = "large" | "small";
export type FAQDevice = "desktop" | "mobile";

export interface FAQProps {
  dropdownTitle: string;
  description?: string;
  titleSection?: string;
  showTitleSection?: boolean;
  showLink?: boolean;
  size?: FAQSize;
  device?: FAQDevice;
  defaultOpen?: boolean;
}

export function FAQ({
  dropdownTitle,
  description,
  titleSection,
  showTitleSection = false,
  showLink = false,
  size = "large",
  device = "desktop",
  defaultOpen = false,
}: FAQProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq faq--${size} faq--${device} faq--${open ? "opened" : "closed"}`}>
      {showTitleSection && titleSection ? <div className="faq__title-section">{titleSection}</div> : null}
      <button className="faq__question" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {dropdownTitle}
      </button>
      {open ? (
        <div className="faq__answer">
          {description}
          {showLink ? <a href="#" className="faq__link">Learn more</a> : null}
        </div>
      ) : null}
    </div>
  );
}
