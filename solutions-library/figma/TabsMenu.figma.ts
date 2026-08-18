// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=17900-62310
// source=src/components/TabsMenu.tsx
// component=AnchorNavTab, NumberTab, TabText, TabsMenuFeatures, TabContent, TabsMenuText, TabsMenuLogo
import figma from "figma";
const instance = figma.selectedInstance;
const size = instance.getEnum("Sizes", { Desktop: "desktop", Mobile: "mobile" });
export default {
  example: figma.code`<TabsMenuFeatures size="${size}" />`,
  imports: ['import { TabsMenuFeatures } from "solutions-library/components"'],
  id: "tabs-menu-features",
  metadata: { nestable: true },
};
