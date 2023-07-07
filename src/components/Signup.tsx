import React, { useState } from 'react';

type SignupProps = {
  onSignup: () => void;
};

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  
    try {
      const response = await fetch('127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email, 
          password: password
        })
      });

      if (response.ok) {
       
        onSignup();
      } else {
     
        const data = await response.json();
        console.log(data.message);
      }
    } catch (error) {
      console.log('An error occurred during signup:', error);
    }
  };

  const handleGoogleSignIn = () => {
    // Get Google sign-in API
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
      <h2>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', border: '2px solid black', borderRadius: '0px', padding: '2rem' }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <button type="submit" style={{ borderRadius: '20px', padding: '0.5rem' }}>
          Sign Up
        </button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleGoogleSignIn} style={{ borderRadius: '20px', padding: '0.5rem' }}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;



