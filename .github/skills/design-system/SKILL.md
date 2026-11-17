---
name: design-system
description: Builds UI using the project's existing design tokens, shared components, and visual rules.
---

# Design System Guidelines

## Colors
- Use only the semantic color tokens from `tailwind.config.ts`: `surface`, `surface-muted`, `content`, `content-muted`, `primary`, `primary-foreground`, `border`, `danger`.
- Never introduce random brand colors or hex values.

## Components
- Reuse the existing `Button`, `Input` and `Card` (`CardHeader`, `CardBody`).
- Follow their existing props APIs.
- Do not recreate shared components.

## Radius, spacing and typography
- Use the radius tokens `rounded-control` (8px) and `rounded-card` (12px).
- Follow the default Tailwind spacing scale. No arbitrary margin or padding values.
- Keep a consistent type hierarchy and font weights.

## Responsive design
- Design mobile-first and follow the default Tailwind breakpoints.
- Keep layouts consistent with `UsersPage`.

## Before creating a UI element
1. Inspect the existing design system.
2. Find the closest reusable component.
3. Extend it only when necessary.
