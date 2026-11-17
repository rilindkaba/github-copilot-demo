import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { useUsers } from '../hooks/useUsers';

export function UsersPage() {
  const { users, isLoading, error } = useUsers();

  if (isLoading) {
    return <p role="status">Loading users…</p>;
  }

  if (error) {
    return (
      <p role="alert" className="text-danger">
        {error}
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {users.map((user) => (
        <li key={user.id}>
          <Card>
            <CardHeader>
              <h2 className="font-semibold">{user.fullName}</h2>
            </CardHeader>
            <CardBody>
              <p className="text-content-muted">{user.email}</p>
              <p className="text-content-muted">Role: {user.role}</p>
            </CardBody>
          </Card>
        </li>
      ))}
    </ul>
  );
}
