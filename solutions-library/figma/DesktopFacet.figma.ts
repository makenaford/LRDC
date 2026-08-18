// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=20848-3707
// source=src/components/DesktopFacet.tsx
// component=DesktopFacet
import figma from "figma";
const instance = figma.selectedInstance;
const title = instance.getString("Title");
const size = instance.getEnum("Size", { Desktop: "desktop", Mobile: "mobile" });
const showSearch = instance.getEnum("Search", { No: false, Yes: true });
export default {
  example: figma.code`<DesktopFacet title="${title}" size="${size}" ${showSearch ? "showSearch" : ""} />`,
  imports: ['import { DesktopFacet } from "solutions-library/components"'],
  id: "desktop-facet",
  metadata: { nestable: true },
};
