import React, { useState } from 'react';

const DeleteUser: React.FC = () => {
  const [userId, setUserId] = useState('');

  const handleDelete = () => {
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', border: '2px solid black', borderRadius: '0px', padding: '2rem' }}>
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
        <button type="submit" style={{ borderRadius: '20px', padding: '0.5rem' }}>Delete User</button>
      </form>
    </div>
  );
};

export default DeleteUser;



