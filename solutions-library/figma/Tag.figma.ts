// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16988-69247
// source=src/components/Tag.tsx
// component=Tag
import figma from "figma";

const instance = figma.selectedInstance;

const text = instance.getString("Text");
const size = instance.getEnum("Size", { Regular: "regular", Small: "small" });
const style = instance.getEnum("Style", { Tonal: "tonal", Outline: "outline" });
const hasLeftIcon = instance.getBoolean("Left Icon");
const hasRightIcon = instance.getBoolean("Right Icon");

const leftIcon = hasLeftIcon ? instance.getInstanceSwap("↳ Left Icon") : null;
const rightIcon = hasRightIcon ? instance.getInstanceSwap("↳ Right Icon") : null;

let leftIconCode;
if (leftIcon && leftIcon.type === "INSTANCE") {
  leftIconCode = leftIcon.executeTemplate().example;
}
let rightIconCode;
if (rightIcon && rightIcon.type === "INSTANCE") {
  rightIconCode = rightIcon.executeTemplate().example;
}

export default {
  example: figma.code`
    <Tag
      text="${text}"
      size="${size}"
      style="${style}"
      ${leftIconCode ? figma.code`iconLeft={${leftIconCode}}` : ""}
      ${rightIconCode ? figma.code`iconRight={${rightIconCode}}` : ""}
    />
  `,
  imports: ['import { Tag } from "solutions-library/components"'],
  id: "tag",
  metadata: { nestable: true },
};
