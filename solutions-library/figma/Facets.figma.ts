// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16828-10761
// source=src/components/Facets.tsx
// component=Facets
import figma from "figma";
const instance = figma.selectedInstance;
const text = instance.getString("Text");
const type = instance.getEnum("Type", { Checkbox: "checkbox", Default: "default", Radio: "radio" });
const open = instance.getEnum("Open", { Yes: true, No: false });
const showViewAll = instance.getBoolean("View All");
const showSearch = instance.getBoolean("Show Search");
const showLinks = instance.getBoolean("Show Links");
export default {
  example: figma.code`<Facets text="${text}" type="${type}" defaultOpen={${open}} ${showViewAll ? "showViewAll" : ""} ${showSearch ? "showSearch" : ""} ${showLinks ? "showLinks" : ""} />`,
  imports: ['import { Facets } from "solutions-library/components"'],
  id: "facets",
  metadata: { nestable: true },
};
