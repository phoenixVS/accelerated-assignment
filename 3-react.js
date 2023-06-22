import React, { useRef, useEffect } from 'react';

const UserComponent = ({ user }) => {
  const userRef = useRef(null);

  useEffect(() => {
    userRef.current.addEventListener('click', () => {
      console.log(`Clicked on user: ${user.name}`);
    });

    // Cleanup
    return () => {
      userRef.current.removeEventListener('click', console.log);
    };
  }, [user]);

  return (
    <div ref={userRef}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserComponent key={user.email} user={user} />
      ))}
    </div>
  );
};

export default UserList;