// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16923-12532
// source=src/components/PageNumber.tsx
// component=PageNumber
import figma from "figma";
const instance = figma.selectedInstance;
const state = instance.getEnum("State", { Default: "default", Hover: "hover", Selected: "selected" });
export default {
  example: figma.code`<PageNumber page={1} state="${state}" />`,
  imports: ['import { PageNumber } from "solutions-library/components"'],
  id: "page-number",
  metadata: { nestable: true },
};
