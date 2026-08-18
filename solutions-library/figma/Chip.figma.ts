// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16858-51126
// source=src/components/Chip.tsx
// component=Chip
import figma from "figma";

const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Default: "default",
  Selected: "selected",
  Focused: "focused",
  Disabled: "disabled",
  Dragged: "dragged",
});

const label = instance.getString("Label");
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
    <Chip
      label="${label}"
      state="${state}"
      ${leftIconCode ? figma.code`iconLeft={${leftIconCode}}` : ""}
      ${rightIconCode ? figma.code`iconRight={${rightIconCode}}` : ""}
    />
  `,
  imports: ['import { Chip } from "solutions-library/components"'],
  id: "chip",
  metadata: { nestable: true },
};
