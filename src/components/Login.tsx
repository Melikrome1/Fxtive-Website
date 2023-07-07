import React, { useState } from 'react';

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    onLogin();
  };

  const handleGoogleSignUp = () => {
    // add Google sign up logic later
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', border: '2px solid black', borderRadius: '0px', padding: '2rem' }}>
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
        <button type="submit" style={{ borderRadius: '20px', padding: '0.5rem' }}>Login</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleGoogleSignUp} style={{ borderRadius: '20px', padding: '0.5rem' }}>Sign in with Google</button>
        {/* More sign up options later */}
      </div>
    </div>
  );
};

export default Login;



