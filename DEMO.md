# Student guide: compare Copilot prompts

## What you will do

You will ask GitHub Copilot to complete the same three tasks in two ways:

1. On `no-config`, give Copilot the project rules in your prompt.
2. On `with-config`, use a shorter prompt and let the repository configuration provide the rules. Select the `frontend-engineer` agent.

Then you will check the code, run the tests, and compare the results. The configuration can guide Copilot, but it does not guarantee correct code. Always review and test its work.

## Before you begin

### Set up the project

If you have not already installed the project dependencies, run:

```bash
npm install
```

Check that the starting project works:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Tell your instructor if one of these commands fails before you start. This helps you distinguish an existing problem from one introduced by Copilot.

### Make the comparison fair

- Start each run from the original version of its branch: `no-config` or `with-config`.
- Use a **new Agent mode chat** for every run and the same model for both branches.
- Turn off personal Copilot instructions for the comparison.
- On `with-config`, select the `frontend-engineer` agent. On `no-config`, use the normal Agent mode chat.
- Use the matching prompt for the same task on each branch. Do not add extra requirements to only one prompt.
- After each run, inspect the app and run `npm run lint`, `npm run typecheck`, and `npm run test`.

To select a branch, run `git switch no-config` or `git switch with-config` in the project terminal. A run changes project files. Before starting another run, return that branch to its original version. If you are not sure how to do that, ask your instructor or use a fresh copy of the project. **Do not run reset or clean commands unless you understand that they can delete your work.**

## Task 1: Editable user profile cards

### `no-config` prompt

Copy and paste this prompt into a new Agent mode chat on the `no-config` branch:

```text
Create a reusable UserProfileCard component and use it for every user on src/pages/UsersPage.tsx.

Feature requirements:
- Show the user's avatar when avatarUrl is present; otherwise show initials.
- Show full name, email, and role.
- Provide an Edit button. In edit mode, let the user change full name and email.
- Save must call a typed onSave callback with the updated user and update the displayed user.
- Cancel must discard draft changes and return to display mode without calling onSave.
- Add tests for display mode, avatar/initials fallback, editing, saving, and canceling.

Project rules:
- Use React 18, strict TypeScript, Tailwind CSS, Vitest, and React Testing Library. Do not add dependencies or use the type any.
- First inspect the existing code. Reuse the shared Button, Card, and Input components; do not recreate them.
- Follow the existing folder, component, hook, and named-export conventions.
- Use only the semantic color and border-radius tokens in tailwind.config.ts. Do not use hex colors or arbitrary CSS values.
- Make the UI responsive and accessible. Give inputs and buttons accessible labels and visible keyboard focus.
- Keep business logic in the appropriate page or hook, not duplicated in the card.

Run lint, typecheck, and tests. Fix any problems you find.
```

### `with-config` prompt

Use a new chat on the `with-config` branch, select the `frontend-engineer` agent, and paste:

```text
Create a reusable user profile card and show it for every user on src/pages/UsersPage.tsx. Show an avatar or initials, full name, email, and role. Edit lets the user change their name and email. Save calls a typed onSave callback with the updated user and updates the displayed user; Cancel discards edits without saving. Add tests for display, avatar/initials fallback, editing, saving, and canceling. Run lint, typecheck, and tests.
```

## Task 2: Search and role filters

### `no-config` prompt

Copy and paste this prompt into a new Agent mode chat on the `no-config` branch:

```text
Add search and role filtering to src/pages/UsersPage.tsx.

Feature requirements:
- Search by full name or email, ignoring case and spaces at the beginning or end.
- Add a role filter with All roles, Admin, Editor, and Viewer.
- Allow search and role filters to work together.
- Show the number of matching users and a clear message when there are no matches.
- Add a Clear filters control that resets both filters.
- Keep the existing loading and error behavior. Do not change mock data or add dependencies.
- Add tests for name search, email search, role filtering, combined filters, no results, and clearing filters.

Project rules:
- Use React 18, strict TypeScript, Tailwind CSS, Vitest, and React Testing Library. Do not add dependencies or use the type any.
- First inspect the existing code. Reuse shared UI components, including Input and Button where appropriate.
- Follow the existing folder, component, hook, and named-export conventions.
- Use only the semantic color and border-radius tokens in tailwind.config.ts. Do not use hex colors or arbitrary CSS values.
- Make the UI responsive and accessible. Label every form control and support keyboard use.
- Keep the existing user loading and error handling intact.

Run lint, typecheck, and tests. Fix any problems you find.
```

### `with-config` prompt

Use a new chat on the `with-config` branch, select the `frontend-engineer` agent, and paste:

```text
Add search and role filtering to src/pages/UsersPage.tsx. Search full name or email without regard to letter case or extra spaces at the beginning or end. Let users filter by All roles, Admin, Editor, or Viewer, and combine the filters. Show the matching-user count, an empty state, and a Clear filters control. Preserve loading and error behavior. Add tests for name search, email search, role filtering, combined filters, no results, and clearing. Run lint, typecheck, and tests.
```

## Task 3: Add a user

### `no-config` prompt

Copy and paste this prompt into a new Agent mode chat on the `no-config` branch:

```text
Add an Add user workflow to src/pages/UsersPage.tsx.

Feature requirements:
- An Add user button opens a form with Full name, Email, and Role fields. The available roles are Admin, Editor, and Viewer.
- Require a non-empty name and a valid email address.
- Reject an email that already exists, ignoring case and spaces at the beginning or end, and show an accessible error.
- When the form is submitted successfully, add the user to the visible list immediately. Keep this local to the app; do not add an API or change the mock service.
- Give the new user a unique ID without adding a dependency.
- After a successful save, clear and close the form. Cancel closes the form without adding a user.
- Keep the existing loading and error behavior.
- Add tests for opening and canceling the form, validation, duplicate emails, and successful addition.

Project rules:
- Use React 18, strict TypeScript, Tailwind CSS, Vitest, and React Testing Library. Do not add dependencies or use the type any.
- First inspect the existing code. Reuse the shared Button, Card, and Input components; do not recreate them.
- Follow the existing folder, component, hook, and named-export conventions.
- Use only the semantic color and border-radius tokens in tailwind.config.ts. Do not use hex colors or arbitrary CSS values.
- Make the UI responsive and accessible. Label inputs, announce errors, and support keyboard use.
- Keep business logic in the appropriate page or hook rather than duplicating it in the form.

Run lint, typecheck, and tests. Fix any problems you find.
```

### `with-config` prompt

Use a new chat on the `with-config` branch, select the `frontend-engineer` agent, and paste:

```text
Add an Add user workflow to src/pages/UsersPage.tsx. The form needs Full name, Email, and a Role choice of Admin, Editor, or Viewer. Require a name and valid email; reject duplicate emails without regard to letter case or extra spaces at the beginning or end. A successful save adds the user to the visible list locally, assigns a unique ID, then clears and closes the form. Cancel closes the form without adding a user. Preserve loading and error behavior. Add tests for opening, canceling, validation, duplicate emails, and successful addition. Run lint, typecheck, and tests.
```

## Check and record your results

After each run:

1. Run `npm run lint`, `npm run typecheck`, and `npm run test`.
2. Run `npm run dev` and check the page in your browser.
3. Record what worked and what you had to fix.

Use one row for each run. Repeat a run only if you can start again from the original branch version.

| Task | Branch | Prompt length | Minutes to working result | Reused shared components? | Accessible? | Tests pass? | Lint and typecheck pass? | Manual fixes |
|---|---|---|---|---|---|---|---|---|
| 1. Profile cards | no-config | | | | | | | |
| 1. Profile cards | with-config | | | | | | | |
| 2. Search and filters | no-config | | | | | | | |
| 2. Search and filters | with-config | | | | | | | |
| 3. Add a user | no-config | | | | | | | |
| 3. Add a user | with-config | | | | | | | |

Prompt length can be recorded as characters typed. Record token counts only if Copilot shows them; do not estimate. Different runs can produce different code, so review every result instead of treating the metrics as proof that one approach is always better.
