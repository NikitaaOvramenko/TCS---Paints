# Tasks: UI Styling Refresh

**Input**: Design documents from `/specs/001-ui-styling/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL; this feature focuses on visual changes. Include only if explicitly requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1/US2/US3 mapping to spec user stories
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Create `TCS-Paint/src/assets/theme.css` with color, spacing, type tokens
- [x] T002 [P] Add base variables and spacing scale to `TCS-Paint/src/assets/theme.css`
- [x] T003 [P] Define typography scale and defaults in `TCS-Paint/src/assets/theme.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T004 Add global container and max-width rules (1280px ≥1440px) in `TCS-Paint/src/index.css`
- [x] T005 [P] Ensure responsive breakpoints (≤480, ≤768, ≤1024, ≥1440) in `TCS-Paint/src/index.css`
- [x] T006 [P] Add focus-ring utility and a11y helpers in `TCS-Paint/src/index.css`

---

## Phase 3: User Story 1 - Consistent Layout & Spacing (Priority: P1) 🎯 MVP

**Goal**: Consistent spacing, alignment, and layout across pages with 1280px max width on ≥1440px.
**Independent Test**: Visual audit across Home, Gallery, About, Form without functional changes.

- [ ] T007 [US1] Apply container and spacing classes in `TCS-Paint/src/pages/Home.tsx`
- [ ] T008 [US1] Harmonize section spacing in `TCS-Paint/src/pages/Gallery.tsx`
- [ ] T009 [US1] Harmonize section spacing in `TCS-Paint/src/pages/About.tsx`
- [ ] T010 [US1] Harmonize section spacing in `TCS-Paint/src/pages/Form.tsx`
- [ ] T011 [US1] Normalize layout spacing in `TCS-Paint/src/NavBar.tsx`
- [ ] T012 [US1] Normalize layout spacing in `TCS-Paint/src/Chat.tsx`
- [ ] T013 [P] [US1] Fix any horizontal overflow at breakpoints in `TCS-Paint/src/App.css`

---

## Phase 4: User Story 2 - Modern Color & Typography (Priority: P2)

**Goal**: Apply accessible color palette and readable typographic hierarchy.
**Independent Test**: Contrast ratios meet AA; type scale consistent on pages and components.

- [ ] T014 [US2] Define primary/secondary/accent/neutral palette in `TCS-Paint/src/assets/theme.css`
- [ ] T015 [US2] Map palette tokens to components in `TCS-Paint/src/index.css`
- [ ] T016 [US2] Apply typography scale to headings/body in `TCS-Paint/src/pages/Home.tsx`
- [ ] T017 [US2] Apply typography scale to headings/body in `TCS-Paint/src/pages/Gallery.tsx`
- [ ] T018 [US2] Apply typography scale to headings/body in `TCS-Paint/src/pages/About.tsx`
- [ ] T019 [US2] Apply typography scale to headings/body in `TCS-Paint/src/pages/Form.tsx`

---

## Phase 5: User Story 3 - Unified Buttons, Cards, and Forms (Priority: P3)

**Goal**: Consistent component styles and states for buttons, cards, and forms.
**Independent Test**: Visual audit verifies default/hover/active/disabled and focus rings across pages.

- [ ] T020 [US3] Create button styles (sizes, states) in `TCS-Paint/src/index.css`
- [ ] T021 [US3] Apply button styles in `TCS-Paint/src/NavBar.tsx`
- [ ] T022 [US3] Apply button styles in `TCS-Paint/src/custom-components/FormTemplate.tsx`
- [ ] T023 [US3] Unify card styles in `TCS-Paint/src/custom-components/BeforeAfterCard.tsx`
- [ ] T024 [US3] Unify text panel styles in `TCS-Paint/src/custom-components/TextPanel.tsx`
- [ ] T025 [US3] Normalize input, label, error styles in `TCS-Paint/src/custom-components/FormTemplate.tsx`
- [ ] T026 [US3] Align chat bubble styles and spacing in `TCS-Paint/src/Chat.tsx`

---

## Phase N: Polish & Cross-Cutting

- [ ] T027 [P] Document colors, spacing, and type in `specs/001-ui-styling/STYLE_GUIDE.md`
- [ ] T028 [P] Capture before/after screenshots in `specs/001-ui-styling/assets/`
- [ ] T029 Verify no JS logic changes occurred (diff audit)
- [ ] T030 Run a11y contrast checks and fix regressions in `TCS-Paint/src/index.css`

---

## Dependencies & Execution Order

- Setup (Phase 1) → Foundational (Phase 2) → US1 (MVP) → US2 → US3 → Polish

### Parallel Opportunities

- T002, T003 can run in parallel after T001.
- T005, T006 can run in parallel after T004.
- Within US1: T007–T012 can proceed in parallel by file.
- Within US3: T021–T026 can run in parallel by component.
