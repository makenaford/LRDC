import React from "react";

export type SearchSize = "small" | "xl" | "large";
export type SearchTheme = "dark" | "light";

export interface SearchProps {
  placeholder?: string;
  size?: SearchSize;
  theme?: SearchTheme;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}

export function Search({ placeholder = "Search...", size = "small", theme = "dark", value, onChange, onSubmit }: SearchProps) {
  return (
    <form
      className={`search search--${size} search--${theme}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <input
        className="search__field"
        type="search"
        placeholder={placeholder}
        defaultValue={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button type="submit" className="search__button" aria-label="Search">
        🔍
      </button>
    </form>
  );
}
