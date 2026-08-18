// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16276-63170
// source=src/components/CallToAction.tsx
// component=CallToAction
import figma from "figma";
const instance = figma.selectedInstance;
const align = instance.getEnum("Align", { Vertical: "vertical", Horizontal: "horizontal" });
const size = instance.getEnum("Size", { Desktop: "desktop", Mobile: "mobile" });
const property = instance.getEnum("Property", { Secondary: "secondary", Primary: "primary" });
export default {
  example: figma.code`<CallToAction align="${align}" size="${size}" property="${property}" title="Title" />`,
  imports: ['import { CallToAction } from "solutions-library/components"'],
  id: "call-to-action",
  metadata: { nestable: true },
};
