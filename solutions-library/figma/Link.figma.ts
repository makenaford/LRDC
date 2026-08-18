// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=2144-143689
// source=src/components/Link.tsx
// component=Link
import figma from "figma";

const instance = figma.selectedInstance;

const text = instance.getString("Text");
const style = instance.getEnum("Style", { Primary: "primary", Secondary: "secondary" });
const size = instance.getEnum("Size", { Large: "large", Medium: "medium", Small: "small" });
const state = instance.getEnum("State", {
  Default: "default",
  Visited: "visited",
  Disabled: "disabled",
  Active: "active",
  Hover: "hover",
});
const underline = instance.getBoolean("Underline");
const hasIconLeft = instance.getBoolean("Icon Left");
const hasIconRight = instance.getBoolean("Icon Right");

const iconLeft = hasIconLeft ? instance.getInstanceSwap("↳ Icon Left") : null;
const iconRight = hasIconRight ? instance.getInstanceSwap("↳ Icon Right") : null;
let iconLeftCode;
if (iconLeft && iconLeft.type === "INSTANCE") iconLeftCode = iconLeft.executeTemplate().example;
let iconRightCode;
if (iconRight && iconRight.type === "INSTANCE") iconRightCode = iconRight.executeTemplate().example;

export default {
  example: figma.code`
    <Link
      text="${text}"
      style="${style}"
      size="${size}"
      state="${state}"
      ${underline ? "underline" : ""}
      ${iconLeftCode ? figma.code`iconLeft={${iconLeftCode}}` : ""}
      ${iconRightCode ? figma.code`iconRight={${iconRightCode}}` : ""}
    />
  `,
  imports: ['import { Link } from "solutions-library/components"'],
  id: "link",
  metadata: { nestable: true },
};
