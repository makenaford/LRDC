// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=12305-1754909
// source=src/components/AspectRatio.tsx
// component=AspectRatio
import figma from "figma";
const instance = figma.selectedInstance;
const ratio = instance.getEnum("Ratio", { "16:10": "16:10", "16:9": "16:9", "1:1": "1:1", "2:1": "2:1", "3:1": "3:1", "3:2": "3:2", "4:3": "4:3", "5:2": "5:2", Adjustable: "adjustable", "40:33": "40:33" });
const orientation = instance.getEnum("Orientation", { Horizontal: "horizontal", Vertical: "vertical" });
export default {
  example: figma.code`<AspectRatio ratio="${ratio}" orientation="${orientation}">Content</AspectRatio>`,
  imports: ['import { AspectRatio } from "solutions-library/components"'],
  id: "aspect-ratio",
  metadata: { nestable: true },
};
