// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16290-53873
// source=src/components/Divider.tsx
// component=Divider
import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("Property 1", { normal: "normal", gradient: "gradient" });
const orientation = instance.getEnum("Property 2", { horizontal: "horizontal", vertical: "vertical" });

export default {
  example: figma.code`<Divider variant="${variant}" orientation="${orientation}" />`,
  imports: ['import { Divider } from "solutions-library/components"'],
  id: "divider",
  metadata: { nestable: true },
};
