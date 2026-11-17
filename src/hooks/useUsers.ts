import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import type { User } from '../types/user';

export interface UseUsersResult {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

export function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    getUsers()
      .then((result) => {
        if (!isCancelled) setUsers(result);
      })
      .catch(() => {
        if (!isCancelled) setError('Could not load users.');
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return { users, isLoading, error };
}
