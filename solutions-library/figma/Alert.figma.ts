// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=20448-10239
// source=src/components/Alert.tsx
// component=Alert
import figma from "figma";
const instance = figma.selectedInstance;
const type = instance.getEnum("Type", { "Danger/Error": "danger", Generic: "generic", Info: "info", Success: "success", Warning: "warning" });
const style = instance.getEnum("Style", { Detailed: "detailed", Simple: "simple" });
export default {
  example: figma.code`<Alert type="${type}" style="${style}">Alert message</Alert>`,
  imports: ['import { Alert } from "solutions-library/components"'],
  id: "alert",
  metadata: { nestable: true },
};
