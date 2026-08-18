# Solutions Library — React Components

React + TypeScript components matching the Figma **Solutions Library (2026)** "UI Components" page, with Figma Code Connect wired up so the Figma inspector shows real code snippets for each component.

## What's here

- `src/components/` — 30 React components covering all 26 top-level Figma components on the UI Components page (some files export multiple small related components, e.g. `Table.tsx` exports `Table`, `TableCellRow`, `TableCellHeader`).
- `src/tokens.css` — shared design tokens (color, spacing, radius, typography) that components are meant to bind to.
- `figma/*.figma.ts` — Code Connect templates, one per Figma component, already published live to the file via the Code Connect API (visible in Figma's Dev Mode / inspect panel right now).
- `figma.config.json` — Code Connect CLI config, so `npx figma connect publish` / `unpublish` works if you set this codebase up in a real repo later.

## Components covered

Alert, Accordion, AspectRatio, Badge, Breadcrumb + BreadcrumbItem, Button, CallToAction, Carousel, Checkbox, Chip, CountrySelector, DesktopFacet, Divider, Dropdown + DropdownItem, FAQ + FaqList, Facets, Input, InlineLink, LabelCTA, Link, PageNumber, Pagination, Radio, Search, Surface, Table + TableCellRow + TableCellHeader, TableOfContents + TocItem, TabsMenu family (AnchorNavTab, NumberTab, TabText, TabsMenuFeatures, TabContent, TabsMenuText, TabsMenuLogo), Tag.

## Not code-connected (by design)

A handful of Figma nodes are internal composition helpers rather than independently reusable components, and Figma itself rejects direct publishing for them (e.g. `_Item`, the underscore-prefixed dropdown row primitive). These are still implemented in code (e.g. `DropdownItem`) and used internally by their parent components, just not mapped 1:1 to a standalone Figma node.

## Styling

Components use plain CSS class names (e.g. `btn--primary`, `chip--selected`) rather than inline styles or a specific CSS framework, so you can drop in whatever styling system your project actually uses (CSS Modules, Tailwind, styled-components, etc.) — wire the classes up to `src/tokens.css`'s custom properties as a starting point.

## Using Code Connect

The mappings are already live — open any of these components in Figma Dev Mode and you'll see the matching React snippet. To manage them from a real repo instead of the API:

```bash
npm install
npx figma connect publish   # re-publish after editing a .figma.ts file
npx figma connect unpublish # remove a mapping
```
