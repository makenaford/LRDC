// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16953-109831
// source=src/components/Surface.tsx
// component=Surface
import figma from "figma";
const instance = figma.selectedInstance;
const style = instance.getEnum("Style", { "no-bg": "no-bg", Glass: "glass", Blue: "blue", Grey: "grey", "Gradient Blue": "gradient-blue", "Gradient Purple": "gradient-purple" });
const state = instance.getEnum("State", { Default: "default", Focus: "focus", Hover: "hover" });
export default {
  example: figma.code`<Surface style="${style}" state="${state}" />`,
  imports: ['import { Surface } from "solutions-library/components"'],
  id: "surface",
  metadata: { nestable: true },
};
