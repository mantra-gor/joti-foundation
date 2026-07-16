---
name: Tactical Excellence
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434843'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#b32922'
  on-secondary: '#ffffff'
  secondary-container: '#fc5e50'
  on-secondary-container: '#610003'
  tertiary: '#271013'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f2427'
  on-tertiary-container: '#b0898c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#900c0d'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#e7bcbf'
  on-tertiary-fixed: '#2d1417'
  on-tertiary-fixed-variant: '#5d3f42'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max-width: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a synthesis of **Modern Enterprise UI** and **Humanitarian Excellence**. It is built for a foundation that demands high-stakes precision and sophisticated storytelling. The aesthetic is inspired by the "Utility-Premium" movement—where functional clarity meets high-end editorial refinement.

The style is primarily **Minimalist** with **Corporate Modern** underpinnings. It leverages expansive whitespace, intentional typography, and a rigid adherence to a grid to evoke a sense of global authority and unwavering reliability. Every element must feel "engineered" yet deeply human, avoiding unnecessary decoration in favor of structural integrity and clarity.

## Colors
The palette is rooted in a "Tactical Excellence" theme, moving away from standard corporate blues toward a grounded, organic, yet high-contrast scheme.

- **Primary (Deep Forest Green):** Used for core branding, primary actions, and deep-background sections. It represents stability and growth.
- **Secondary (Burnt Terracotta):** Reserved for high-impact calls to action and critical highlights. It provides a warm, urgent energy.
- **Accent (Emergency Amber):** Used sparingly for status indicators, warnings, or subtle "active" highlights to ensure visibility in complex data.
- **Base (Warm Ivory):** The primary surface color. It provides a more sophisticated, premium feel than pure white, reducing eye strain and adding a "gallery" quality to the interface.

## Typography
Typography is the primary vehicle for the brand’s "Editorial Excellence." We use **Bricolage Grotesque** for headlines to inject personality and a contemporary edge. Large-scale displays should utilize tight letter-spacing to create a "locked-in" professional look.

For body copy, **Hanken Grotesk** provides a sharp, neutral balance that ensures readability at enterprise scale. **JetBrains Mono** is introduced for labels, metadata, and technical data points, reinforcing the "Tactical" aspect of the foundation's operations.

**Key Rule:** Maintain a generous vertical rhythm. Headlines should always have ample "breathing room" above and below to prevent the UI from feeling cluttered.

## Layout & Spacing
The system utilizes a **12-column fluid grid** with a fixed maximum width of 1440px to ensure a premium, wide-screen experience. 

- **The 8px Grid:** All internal padding and margin between elements must be multiples of 8px.
- **Editorial Compositions:** Avoid centering everything. Use asymmetrical layouts (e.g., 5 columns for text, 7 columns for imagery) to create a sophisticated, magazine-like flow.
- **Whitespace:** Use "dramatic" spacing between major sections (80-120px). This signals confidence and high-end positioning.
- **Breakpoints:** 
  - Mobile: < 768px (4 columns, 20px margins)
  - Tablet: 768px - 1024px (8 columns, 40px margins)
  - Desktop: > 1024px (12 columns, 80px margins)

## Elevation & Depth
This design system avoids heavy shadows and skeuomorphism. It relies on **Tonal Layers** and **Low-Contrast Outlines** to define hierarchy.

- **Surface Tiers:** Use subtle shifts in background color (e.g., Ivory to a slightly darker "Sand" tone) to separate sections.
- **Borders:** Instead of shadows, use 1px solid borders in a slightly darker version of the surface color (#E5E2DE) for cards and containers.
- **Interactive States:** On hover, elements may lift slightly using a very soft, diffused ambient shadow (0px 4px 20px rgba(27, 48, 34, 0.05)), but the primary indicator of depth should be a crisp border color change.

## Shapes
In line with the "Tactical" and "Enterprise" focus, the shape language is **disciplined and sharp**. 

- **Corner Radius:** A maximum of 4px is allowed for buttons, input fields, and cards. This provides just enough softness to feel modern without losing the "engineered" precision of sharp edges.
- **Icons:** Use sharp-edged icons with a consistent stroke weight (1.5px or 2px). Do not use rounded or "bubbly" iconography.

## Components
- **Buttons:** Sharp (4px radius). Primary buttons use Deep Forest Green with Ivory text. Secondary buttons use a ghost style with a 1px border. No gradients.
- **Input Fields:** Minimalist. 1px border (#D1CDC7), transitions to 1px Primary Green on focus. Labels use the JetBrains Mono "label-caps" style above the field.
- **Premium Statistic Blocks:** Large Bricolage Grotesque numbers with high contrast. Include a small 1px divider and a mono-spaced label to indicate data source or timeframe.
- **Cards:** No shadows. 1px border. Generous internal padding (32px or 40px). 
- **Navigation:** A clean, high-placed bar with a slight backdrop blur (Glassmorphism) when scrolling, keeping the Ivory surface visible.
- **Chips/Badges:** Rectangular with 2px radius. Use Burnt Terracotta for high-priority status and Deep Green for neutral tags.