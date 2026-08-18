// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=10834-612154
// source=src/components/Checkbox.tsx
// component=Checkbox
import figma from "figma";

const instance = figma.selectedInstance;

const selected = instance.getEnum("Selected", {
  Yes: "yes",
  No: "no",
  Indeterminate: "indeterminate",
});
const size = instance.getEnum("Size", { Default: "default", Large: "large" });
const disabled = instance.getEnum("State", { Default: false, Hover: false, Disabled: true });
const hasLabel = instance.getBoolean("Label");
const label = hasLabel ? instance.getString("↳ Label") : null;

export default {
  example: figma.code`
    <Checkbox
      selected="${selected}"
      size="${size}"
      ${disabled ? "disabled" : ""}
      ${label ? figma.code`label="${label}"` : ""}
    />
  `,
  imports: ['import { Checkbox } from "solutions-library/components"'],
  id: "checkbox",
  metadata: { nestable: true },
};
