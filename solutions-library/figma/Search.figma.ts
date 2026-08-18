// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=19560-9543
// source=src/components/Search.tsx
// component=Search
import figma from "figma";
const instance = figma.selectedInstance;
const placeholder = instance.getString("Search Text");
const size = instance.getEnum("Size", { Small: "small", XL: "xl", Large: "large" });
const theme = instance.getEnum("Theme", { Dark: "dark", Light: "light" });
export default {
  example: figma.code`<Search placeholder="${placeholder}" size="${size}" theme="${theme}" />`,
  imports: ['import { Search } from "solutions-library/components"'],
  id: "search",
  metadata: { nestable: true },
};
