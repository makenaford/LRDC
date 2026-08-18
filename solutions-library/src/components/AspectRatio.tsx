import React from "react";

export type AspectRatioValue = "16:10" | "16:9" | "1:1" | "2:1" | "3:1" | "3:2" | "4:3" | "5:2" | "40:33" | "adjustable";
export type AspectRatioOrientation = "horizontal" | "vertical";

export interface AspectRatioProps {
  ratio?: AspectRatioValue;
  orientation?: AspectRatioOrientation;
  children: React.ReactNode;
}

const RATIO_MAP: Record<string, number> = {
  "16:10": 16 / 10,
  "16:9": 16 / 9,
  "1:1": 1,
  "2:1": 2,
  "3:1": 3,
  "3:2": 3 / 2,
  "4:3": 4 / 3,
  "5:2": 5 / 2,
  "40:33": 40 / 33,
};

export function AspectRatio({ ratio = "1:1", orientation = "horizontal", children }: AspectRatioProps) {
  const value = RATIO_MAP[ratio] ?? 1;
  const paddingTop = orientation === "horizontal" ? `${100 / value}%` : `${100 * value}%`;
  return (
    <div className="aspect-ratio" style={{ position: "relative", paddingTop }}>
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
    </div>
  );
}
