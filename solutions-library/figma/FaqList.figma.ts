// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=22570-26321
// source=src/components/FaqList.tsx
// component=FaqList
import figma from "figma";
const instance = figma.selectedInstance;
const layout = instance.getEnum("Property 1", { Large: "large", Mobile: "mobile", Small: "small" });
export default {
  example: figma.code`<FaqList layout="${layout}" items={[]} />`,
  imports: ['import { FaqList } from "solutions-library/components"'],
  id: "faq-list",
  metadata: { nestable: true },
};
