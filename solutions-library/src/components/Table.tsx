import React from "react";

export interface TableCellRowProps {
  children: React.ReactNode;
}

/** A single data cell within a table row. */
export function TableCellRow({ children }: TableCellRowProps) {
  return <td className="table-cell-row">{children}</td>;
}

export interface TableCellHeaderProps {
  children: React.ReactNode;
}

/** A single header cell within a table's header row. */
export function TableCellHeader({ children }: TableCellHeaderProps) {
  return <th className="table-cell-header">{children}</th>;
}

export type TableAlign = "column" | "row";

export interface TableProps {
  align?: TableAlign;
  headers: string[];
  rows: React.ReactNode[][];
}

export function Table({ align = "column", headers, rows }: TableProps) {
  return (
    <table className={`table table--${align}`}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <TableCellHeader key={i}>{h}</TableCellHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <TableCellRow key={j}>{cell}</TableCellRow>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
