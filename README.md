# Copilot Customization Demo

This small app lets students compare two ways to ask GitHub Copilot to make the same changes:

- **`no-config`**: Copilot gets the project rules in the prompt.
- **`with-config`**: Copilot gets the project rules from the repository's `.github/` configuration. For these runs, select the `frontend-engineer` agent.

The app and the tasks are the same on both branches. The main difference is where Copilot gets its instructions. The goal is to observe how that changes the result—not to assume that either approach is always better.

## What the app uses

- React 18 and TypeScript
- Tailwind CSS
- Vitest and React Testing Library
- A users page, shared UI components, and mock user data

Each user has an ID, full name, email, role (`Admin`, `Editor`, or `Viewer`), and an optional avatar image.

## Get started

You need Node.js 20 or newer, Git, and VS Code with GitHub Copilot.

Open a terminal in the project folder and install the dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open the local address printed in the terminal. To stop the app, focus the terminal and press `Ctrl+C`.

## Check your work

Run these commands from the project folder:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

All commands should finish without errors.

## Where to look in the project

| Location | What it contains |
|---|---|
| `src/pages/UsersPage.tsx` | The page that displays users |
| `src/components/ui/` | Shared Button, Card, and Input components |
| `src/hooks/useUsers.ts` | Loads users and reports loading or error states |
| `src/services/userService.ts` | Mock user data |
| `src/types/user.ts` | The TypeScript user and role types |
| `tailwind.config.ts` | The design tokens used for colors and corner rounding |

## Run the comparison

Read [DEMO.md](./DEMO.md) for the student walkthrough, the prompts for all three tasks, and a table for recording your results.
