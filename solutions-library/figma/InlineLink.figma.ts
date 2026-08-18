// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=8309-482671
// source=src/components/InlineLink.tsx
// component=InlineLink
import figma from "figma";
const instance = figma.selectedInstance;
const text = instance.getString("Text");
const color = instance.getEnum("Color", { Neutral: "neutral", Primary: "primary" });
const state = instance.getEnum("State", { Active: "active", Default: "default", Disabled: "disabled", Hover: "hover", Visited: "visited" });
const hasLeftIcon = instance.getBoolean("Left Icon");
const hasRightIcon = instance.getBoolean("Right Icon");
const leftIcon = hasLeftIcon ? instance.getInstanceSwap("↳ Left Icon") : null;
const rightIcon = hasRightIcon ? instance.getInstanceSwap("↳ Right Icon") : null;
let leftIconCode;
if (leftIcon && leftIcon.type === "INSTANCE") leftIconCode = leftIcon.executeTemplate().example;
let rightIconCode;
if (rightIcon && rightIcon.type === "INSTANCE") rightIconCode = rightIcon.executeTemplate().example;
export default {
  example: figma.code`
    <InlineLink
      text="${text}"
      color="${color}"
      state="${state}"
      ${leftIconCode ? figma.code`iconLeft={${leftIconCode}}` : ""}
      ${rightIconCode ? figma.code`iconRight={${rightIconCode}}` : ""}
    />
  `,
  imports: ['import { InlineLink } from "solutions-library/components"'],
  id: "inline-link",
  metadata: { nestable: true },
};
