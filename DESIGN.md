---
name: Fiscal Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747781'
  outline-variant: '#c4c6d1'
  surface-tint: '#3e5e95'
  primary: '#00193c'
  on-primary: '#ffffff'
  primary-container: '#002d62'
  on-primary-container: '#7796d1'
  inverse-primary: '#abc7ff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#90efef'
  on-secondary-container: '#006e6e'
  tertiary: '#330e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#541d02'
  on-tertiary-container: '#d4815d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#24467c'
  secondary-fixed: '#93f2f2'
  secondary-fixed-dim: '#76d6d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb597'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#743417'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-bg: '#F8FAFC'
  data-growth: '#10B981'
  ink-dark: '#0F172A'
  border-subtle: '#E2E8F0'
typography:
  headline-display:
    fontFamily: Source Sans 3
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Sans 3
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Source Sans 3
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Sans 3
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
---

## Brand & Style

The design system is engineered to project unwavering authority, technical precision, and a forward-thinking approach to financial management. It targets corporate stakeholders, SMEs, and regulatory bodies who value accuracy and digital maturity. 

The aesthetic is **Corporate / Modern**, characterized by a rigorous adherence to structure, generous whitespace for clarity, and a sophisticated color palette. The visual narrative balances the "traditional" weight of accounting with the "digital" agility of data analytics. Layouts are strictly organized on a grid, reflecting the methodical nature of financial auditing and data-driven decision-making.

**Core Visual Principles:**
- **Clarity over Ornament:** Every element must serve a functional purpose in communicating information.
- **Digital Integrity:** Use of subtle technical cues (refined lines, data-grid patterns) to emphasize "Digital Transformation."
- **Institutional Weight:** Strong use of Deep Navy to establish a foundation of trust and stability.

## Colors

The palette is anchored by **Deep Navy (#002D62)**, chosen for its psychological associations with reliability and institutional expertise. This is the primary color for brand-heavy elements like headers, primary buttons, and critical iconography.

**Professional Teal (#008080)** serves as the strategic accent, representing "growth" and "digital transformation." It is used sparingly for data visualizations, call-to-action highlights, and success indicators. 

The background should remain a clean **Surface-BG (#F8FAFC)** to ensure the navy and teal retain their professional punch without overwhelming the reader. Grays are used for secondary text and structural borders to maintain a low-friction reading experience.

## Typography

The design system utilizes **Source Sans 3** exclusively to maintain a utilitarian and professional hierarchy. This typeface is highly legible for dense financial information while appearing modern and accessible.

- **Headlines:** Use Bold weights for primary navigation and section titles. Tracking is slightly tightened for display sizes to create a compact, impactful look.
- **Body:** Standardized at 16px for optimal readability. Paragraphs should have a generous line-height (1.6) to prevent eye fatigue during the review of professional experience.
- **Labels:** Small caps and increased letter-spacing are used for meta-data (dates, locations) to differentiate them from functional body text.

## Layout & Spacing

This design system uses a **12-column fixed grid** for desktop and a **single-column fluid grid** for mobile. The layout is structured to prioritize vertical rhythm and logical flow.

- **Breakpoints:** Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px).
- **Whitespace:** Use a "Macro-to-Micro" approach. Section gaps are large (80px) to provide visual breathing room, while internal card spacing is tight and controlled (16px-24px) to suggest precision.
- **Alignment:** All text should be left-aligned to mimic the formal structure of financial reports and legal documents.

## Elevation & Depth

To maintain a "Corporate" feel, the system avoids heavy shadows and skeuomorphism. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Levels:** The primary background is the lightest. Cards and interactive containers use white backgrounds with a subtle 1px border (#E2E8F0).
- **Depth:** A very soft, diffuse shadow (e.g., `0 4px 12px rgba(0, 45, 98, 0.05)`) is reserved exclusively for the "current" or "hovered" card to provide interaction feedback.
- **Data Layers:** Use primary navy for the most critical headers, teal for secondary growth metrics, and light gray for background grids in charts or skill bars.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This minimal rounding provides a modern touch that takes the edge off a purely "industrial" look without sacrificing the professional rigor of sharp corners. 

Buttons and input fields should strictly adhere to this 4px radius. Small tags or chips for skills may use slightly more rounding (8px) to appear as distinct, touchable elements within the data-driven grid.

## Components

### Buttons
- **Primary:** Solid Navy (#002D62) background with white text. High contrast, sharp (4px) corners.
- **Secondary:** Transparent background with Teal (#008080) border and text.

### Professional Experience Cards
- Use a white background with a subtle border. 
- Left-hand column for the timeline (Date range in `label-caps`).
- Right-hand column for Title and Description. Use the accent Teal for bullet points to represent performance and growth.

### Skills Visualization
- **Skill Grids:** Clean, uniform icons (Navy) with `label-sm` text.
- **Progress Bars:** Thin, 4px height bars. The filled portion should be Teal (#008080) against a light gray track. This visually communicates "Data-Driven" proficiency levels.

### Hero Section
- A high-impact, clean section with a centered or left-aligned headline. 
- Background should be neutral or a very subtle geometric pattern representing data nodes.
- Primary CTA should lead to "Contact" or "Download CV."

### Input Fields
- Understated styling. 1px gray border that transitions to Navy on focus. 
- Labels always positioned above the field in `label-sm`.