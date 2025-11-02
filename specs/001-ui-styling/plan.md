# Implementation Plan: UI Styling Refresh

**Branch**: `001-ui-styling` | **Date**: 2025-10-30 | **Spec**: ../spec.md
**Input**: Feature specification from `/specs/001-ui-styling/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Improve the TCS-Paint UI styling for visual consistency, modern color/typography,
and responsive behavior across small and large screens without changing logic.
Adopt a shared theme (colors, spacing, typography) and standardize component
styles (buttons, cards, forms), enforcing a 1280px max content width on ≥1440px.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (React), Node 18+  
**Primary Dependencies**: React, Vite; CSS Modules  
**Storage**: N/A (no data model changes)  
**Testing**: Visual regression by screenshots; manual accessibility checks  
**Target Platform**: Web (desktop/tablet/mobile)  
**Project Type**: Web app (frontend + simple server dir exists)  
**Performance Goals**: No layout jank; assets optimized; minimal re-renders  
**Constraints**: Visual-only changes; no JS logic modification  
**Scale/Scope**: All public pages/components (NavBar, Form, Gallery, Chat)

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- Clarity: Refactors MUST remain readable and type-safe. OK
- Consistency: Use shared theme and consistent component APIs. OK
- Performance: Avoid unnecessary re-renders and heavy assets. OK
- Scalability: Encapsulate styles; avoid cross-cutting side effects. OK
- User-Centric: Maintain accessibility and instant feedback. OK

Gate status: PASS (visual-only scope with shared theme and responsive rules)

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
TCS-Paint/
└── src/
    ├── assets/
    │   ├── icons/
    │   └── theme.css            # NEW (shared variables: colors, spacing, type)
    ├── custom-components/
    │   ├── FormTemplate.tsx
    │   ├── BeforeAfterCard.tsx
    │   └── TextPanel.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Gallery.tsx
    │   └── Form.tsx
    ├── NavBar.tsx
    ├── Chat.tsx
    ├── App.css
    └── index.css
```

**Structure Decision**: Add `theme.css` under `TCS-Paint/src/assets/` for
central variables; update component styles locally to consume theme tokens.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
