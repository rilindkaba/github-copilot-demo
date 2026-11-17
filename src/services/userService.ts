import type { User } from '../types/user';

const MOCK_USERS: User[] = [
  { id: '1', fullName: 'Ada Lovelace', email: 'ada@example.com', role: 'Admin' },
  { id: '2', fullName: 'Alan Turing', email: 'alan@example.com', role: 'Editor' },
  { id: '3', fullName: 'Grace Hopper', email: 'grace@example.com', role: 'Editor' },
  { id: '4', fullName: 'Linus Torvalds', email: 'linus@example.com', role: 'Viewer' },
];

const SIMULATED_DELAY_MS = 400;

export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USERS), SIMULATED_DELAY_MS);
  });
}
