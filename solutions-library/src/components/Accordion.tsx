import React, { useState } from "react";

export interface AccordionProps {
  headerText: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function Accordion({ headerText, children, defaultExpanded = false }: AccordionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <div className={`accordion accordion--${expanded ? "expanded" : "closed"}`}>
      <button className="accordion__header" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
        {headerText}
      </button>
      {expanded ? <div className="accordion__body">{children}</div> : null}
    </div>
  );
}
