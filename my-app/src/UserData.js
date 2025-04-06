import React, { useEffect, useState } from 'react';

const UserData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1') // public dummy API
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Info</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserData;
