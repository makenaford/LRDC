import React from "react";

export interface CountrySelectorProps {
  value?: string;
  onChange?: (value: string) => void;
}

/** Compact flag + dial-code dropdown, typically embedded in a phone Input. */
export function CountrySelector({ value = "US", onChange }: CountrySelectorProps) {
  return (
    <select className="country-selector" value={value} onChange={(e) => onChange?.(e.target.value)}>
      <option value="US">🇺🇸 +1</option>
      <option value="GB">🇬🇧 +44</option>
      <option value="ES">🇪🇸 +34</option>
    </select>
  );
}
