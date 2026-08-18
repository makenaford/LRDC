// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16123-189647
// source=src/components/Button.tsx
// component=Button
import figma from "figma";

const instance = figma.selectedInstance;

const color = instance.getEnum("Color", {
  Primary: "primary",
  Neutral: "neutral",
});

const style = instance.getEnum("Style", {
  Solid: "solid",
  Outline: "outline",
  Rounded: "rounded",
});

const size = instance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
  Large: "large",
});

const disabled = instance.getEnum("State", {
  Default: false,
  Hover: false,
  Focus: false,
  Pressed: false,
  Disabled: true,
});

const hasIconLeft = instance.getBoolean("Icon Left");
const hasIconRight = instance.getBoolean("Icon Right");

const iconLeft = hasIconLeft ? instance.getInstanceSwap("↳ Icon Left") : null;
const iconRight = hasIconRight ? instance.getInstanceSwap("↳ Icon Right") : null;

let iconLeftCode;
if (iconLeft && iconLeft.type === "INSTANCE") {
  iconLeftCode = iconLeft.executeTemplate().example;
}

let iconRightCode;
if (iconRight && iconRight.type === "INSTANCE") {
  iconRightCode = iconRight.executeTemplate().example;
}

export default {
  example: figma.code`
    <Button
      color="${color}"
      style="${style}"
      size="${size}"
      ${disabled ? "disabled" : ""}
      ${iconLeftCode ? figma.code`iconLeft={${iconLeftCode}}` : ""}
      ${iconRightCode ? figma.code`iconRight={${iconRightCode}}` : ""}
    >
      Button
    </Button>
  `,
  imports: ['import { Button } from "solutions-library/components"'],
  id: "button",
  metadata: { nestable: true },
};
