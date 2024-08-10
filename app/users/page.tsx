import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users" );
  const users: User[] = await res.json();

  return (
    <div>
      <h1>users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
