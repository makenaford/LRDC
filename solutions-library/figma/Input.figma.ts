// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=16166-23969
// source=src/components/Input.tsx
// component=Input
import figma from "figma";
const instance = figma.selectedInstance;
const type = instance.getEnum("Type", { Text: "text", Dropdown: "dropdown", "Text Area": "text-area" });
const condensed = instance.getEnum("Condensed", { True: true, False: false });
const state = instance.getEnum("State", { Default: "default", Active: "active", "Disabled (Read Only)": "disabled" });
const filled = instance.getEnum("Filled", { False: false, True: true });
const hasLabel = instance.getBoolean("Label");
const labelText = instance.getString("Label Text");
const placeholder = instance.getString("Placeholder Text");
const required = instance.getBoolean("Required");
const hasHelpText = instance.getBoolean("Help Text");
const hasInfoButton = instance.getBoolean("Info Button");
const hasCountrySelector = instance.getBoolean("Country Selector");
export default {
  example: figma.code`
    <Input
      type="${type}"
      condensed={${condensed}}
      state="${state}"
      ${filled ? "filled" : ""}
      ${hasLabel ? figma.code`label="${labelText}"` : ""}
      placeholder="${placeholder}"
      ${required ? "required" : ""}
      ${hasHelpText ? "showHelpText" : ""}
      ${hasInfoButton ? "showInfoButton" : ""}
      ${hasCountrySelector ? "showCountrySelector" : ""}
    />
  `,
  imports: ['import { Input } from "solutions-library/components"'],
  id: "input",
  metadata: { nestable: true },
};
