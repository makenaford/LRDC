// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=20276-3666
// source=src/components/Pagination.tsx
// component=Pagination
import figma from "figma";
const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { Desktop: "desktop", Mobile: "mobile" });
export default {
  example: figma.code`<Pagination currentPage={1} totalPages={5} size="${size}" />`,
  imports: ['import { Pagination } from "solutions-library/components"'],
  id: "pagination",
  metadata: { nestable: true },
};
