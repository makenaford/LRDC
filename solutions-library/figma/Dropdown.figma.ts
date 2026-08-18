// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16884-46299
// source=src/components/Dropdown.tsx
// component=Dropdown
import figma from "figma";
const instance = figma.selectedInstance;
const variant = instance.getEnum("Variant", { Simple: "simple", Groups: "groups", Drilldown: "drilldown", Search: "search", Slot: "slot" });
const showFooter = instance.getBoolean("Footer");
const showDrilldownBack = instance.getBoolean("Drilldown Back");
export default {
  example: figma.code`<Dropdown variant="${variant}" ${showFooter ? "showFooter" : ""} ${showDrilldownBack ? "showDrilldownBack" : ""} />`,
  imports: ['import { Dropdown } from "solutions-library/components"'],
  id: "dropdown",
  metadata: { nestable: true },
};
