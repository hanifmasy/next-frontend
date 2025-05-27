'use client';

import { useEffect, useState } from 'react';
import { fetchUsers } from '@/lib/api';

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
