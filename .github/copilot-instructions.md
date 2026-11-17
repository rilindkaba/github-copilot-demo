# Project Engineering Standards

## Technology
- Use React 18 and TypeScript (strict mode). Use functional components.
- Use Tailwind CSS for styling.
- Prefer existing dependencies. Do not add new ones without asking.

## Architecture
- Keep components small and reusable.
- Separate business logic from UI: logic goes in `src/hooks` and `src/services`.
- Use existing hooks where possible.
- Follow the existing folder structure: `src/components`, `src/components/ui`, `src/pages`, `src/hooks`, `src/services`, `src/types`.

## Code Quality
- Never use the type `any`.
- Handle loading and error states.
- Use meaningful variable names. Do not duplicate existing functionality.
- Naming: PascalCase component files with named exports, camelCase hooks starting with `use`, props interface named `<Component>Props`.

## Design
- Use the shared components in `src/components/ui` (`Button`, `Card`, `Input`). Never create a new button, card or input.
- Use only the design tokens from `tailwind.config.ts`:
  - colors: `surface`, `surface-muted`, `content`, `content-muted`, `primary`, `primary-foreground`, `border`, `danger`
  - radius: `rounded-control` (8px), `rounded-card` (12px)
- Never use hex colors or arbitrary values such as `w-[237px]`.
- Maintain responsive, mobile-first layouts. Ensure accessibility.

## Verification
- After changes run `npm run lint`, `npm run typecheck` and `npm run test`, and fix any problem.
