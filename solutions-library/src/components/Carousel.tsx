import React from "react";

export type CarouselType = "arrows" | "lines";

export interface CarouselProps {
  type?: CarouselType;
  activeIndex?: number;
  count?: number;
  onPrev?: () => void;
  onNext?: () => void;
  onSelect?: (index: number) => void;
}

/** Carousel navigation control — either prev/next arrows or a line/dot indicator. */
export function Carousel({ type = "lines", activeIndex = 0, count = 3, onPrev, onNext, onSelect }: CarouselProps) {
  if (type === "arrows") {
    return (
      <div className="carousel carousel--arrows">
        <button aria-label="Previous" onClick={onPrev}>
          ‹
        </button>
        <button aria-label="Next" onClick={onNext}>
          ›
        </button>
      </div>
    );
  }
  return (
    <div className="carousel carousel--lines">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`carousel__line ${i === activeIndex ? "carousel__line--active" : ""}`}
          onClick={() => onSelect?.(i)}
        />
      ))}
    </div>
  );
}
