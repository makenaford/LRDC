// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=20440-16714
// source=src/components/Carousel.tsx
// component=Carousel
import figma from "figma";
const instance = figma.selectedInstance;
const type = instance.getEnum("Type", { arrows: "arrows", lines: "lines" });
export default {
  example: figma.code`<Carousel type="${type}" />`,
  imports: ['import { Carousel } from "solutions-library/components"'],
  id: "carousel",
  metadata: { nestable: true },
};
