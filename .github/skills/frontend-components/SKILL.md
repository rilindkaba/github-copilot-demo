---
name: frontend-components
description: Creates reusable React components following our frontend architecture, TypeScript conventions, and shared component patterns.
---

# Frontend Component Development

## When creating a new component
1. Inspect existing components first (`src/components`, `src/components/ui`).
2. Check whether similar functionality already exists.
3. Define props with a TypeScript interface named `<Component>Props`.
4. Use a functional component with a named export, in a PascalCase file.
5. Keep business logic separate from presentation: extract hooks into `src/hooks`.
6. Use the existing shared UI components. Follow their props APIs.

## Styling
- Use Tailwind CSS with the shared design tokens only.
- Avoid arbitrary colors and arbitrary values.
- Support responsive layouts (mobile-first).

## Accessibility
- Use semantic HTML.
- Support keyboard navigation.
- Provide accessible labels for every input and button.
- Use appropriate ARIA attributes.

## Output
- Implement the component with types.
- Add tests next to it (Vitest + React Testing Library).
- Explain how to reuse the component.
