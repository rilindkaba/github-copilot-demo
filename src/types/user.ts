export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}
