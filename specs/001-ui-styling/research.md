# Research: UI Styling Refresh

## Decisions

- Max content width on wide screens: 1280px
- Spacing scale: 8px base (8/16/24/32/48/64)
- Typographic scale: 16px base body; H1/H2/H3 steps (32/24/20)
- Contrast target: WCAG AA for text and interactive elements

## Rationale

- 1280px balances readability on ≥1440px displays and aligns with modern web patterns, avoiding excessive line length.
- 8px spacing scale is widely adopted and simplifies consistency.
- The typographic scale provides clear hierarchy and mobile readability.
- WCAG AA ensures accessibility across themes and devices.

## Alternatives Considered

- 1200px max width: slightly tighter; acceptable but leaves more whitespace on common 1440px displays.
- 1440px max width: can push line lengths too far for comfortable reading.
- Fluid 90ch width: elegant but harder to align across mixed UI and images.

