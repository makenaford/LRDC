// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=19322-43580
// source=src/components/FAQ.tsx
// component=FAQ
import figma from "figma";
const instance = figma.selectedInstance;
const title = instance.getString("Dropdown Title");
const description = instance.getString("Description");
const size = instance.getEnum("Size", { Large: "large", Small: "small" });
const device = instance.getEnum("Device", { Desktop: "desktop", Mobile: "mobile" });
const open = instance.getEnum("Property 1", { closed: false, opened: true });
const showLink = instance.getBoolean("Show Link");
export default {
  example: figma.code`<FAQ dropdownTitle="${title}" description="${description}" size="${size}" device="${device}" defaultOpen={${open}} ${showLink ? "showLink" : ""} />`,
  imports: ['import { FAQ } from "solutions-library/components"'],
  id: "faq",
  metadata: { nestable: true },
};
