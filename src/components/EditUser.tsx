import React, { useState } from 'react';

const EditUser: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEdit = () => {
    // API call to edit user
    console.log(`Editing user with ID: ${userId}`);
    console.log(`New username: ${username}`);
    console.log(`New password: ${password}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
      <h2>Edit User</h2>
      <form onSubmit={handleEdit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', border: '2px solid black', borderRadius: '0px', padding: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username">New Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <button type="submit" style={{ borderRadius: '20px', padding: '0.5rem' }}>Edit User</button>
      </form>
    </div>
  );
};

export default EditUser;


