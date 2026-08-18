// url=https://www.figma.com/design/KihJKyGA20stc2SSjAlxYU/Solutions-Library--2026?node-id=19556-3572
// source=src/components/Table.tsx
// component=Table, TableCellRow, TableCellHeader
import figma from "figma";
const instance = figma.selectedInstance;
const align = instance.getEnum("Align", { Column: "column", Row: "row" });
export default {
  example: figma.code`<Table align="${align}" headers={[]} rows={[]} />`,
  imports: ['import { Table } from "solutions-library/components"'],
  id: "table",
  metadata: { nestable: true },
};
