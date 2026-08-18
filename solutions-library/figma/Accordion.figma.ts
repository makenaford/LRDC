// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=17019-127517
// source=src/components/Accordion.tsx
// component=Accordion
import figma from "figma";
const instance = figma.selectedInstance;
const headerText = instance.getString("Header Text");
const expanded = instance.getEnum("Expand", { Expanded: true, Closed: false });
export default {
  example: figma.code`<Accordion headerText="${headerText}" defaultExpanded={${expanded}}>Content</Accordion>`,
  imports: ['import { Accordion } from "solutions-library/components"'],
  id: "accordion",
  metadata: { nestable: true },
};
