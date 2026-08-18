// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16275-20390
// source=src/components/Radio.tsx
// component=Radio
import figma from "figma";

const instance = figma.selectedInstance;

const selected = instance.getEnum("Selected", { True: true, False: false });
const size = instance.getEnum("Size", { Default: "default", Large: "large" });
const disabled = instance.getEnum("State", { Default: false, Hover: false, Disabled: true });

export default {
  example: figma.code`
    <Radio
      selected={${selected}}
      size="${size}"
      ${disabled ? "disabled" : ""}
    />
  `,
  imports: ['import { Radio } from "solutions-library/components"'],
  id: "radio",
  metadata: { nestable: true },
};
