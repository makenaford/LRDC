// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16381-2439
// source=src/components/Breadcrumb.tsx
// component=Breadcrumb, BreadcrumbItem
import figma from "figma";
const instance = figma.selectedInstance;
const state = instance.getEnum("State", { "2": 2, "4+": 4, "3": 3 });
const hasIcon = instance.getBoolean("Icon");
export default {
  example: figma.code`<Breadcrumb items={[{ label: "Item 1" }, { label: "Item 2" }]} showIcon={${hasIcon}} />`,
  imports: ['import { Breadcrumb } from "solutions-library/components"'],
  id: "breadcrumb",
  metadata: { nestable: true },
};
