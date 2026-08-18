// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=15121-237267
// source=src/components/LabelCTA.tsx
// component=LabelCTA
import figma from "figma";
const instance = figma.selectedInstance;
const text = instance.getString("Text");
const style = instance.getEnum("Style", { Gradient: "gradient", Tonal: "tonal", Outline: "outline" });
const size = instance.getEnum("Size", { Large: "large", Small: "small", Medium: "medium" });
const showIcon = instance.getBoolean("Show Icon");
const icon = showIcon ? instance.getInstanceSwap("Instance") : null;
let iconCode;
if (icon && icon.type === "INSTANCE") iconCode = icon.executeTemplate().example;
export default {
  example: figma.code`
    <LabelCTA
      text="${text}"
      style="${style}"
      size="${size}"
      ${iconCode ? figma.code`icon={${iconCode}}` : ""}
    />
  `,
  imports: ['import { LabelCTA } from "solutions-library/components"'],
  id: "label-cta",
  metadata: { nestable: true },
};
