import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void; 
  errorMessage?: string; 
}
  
  const Login: React.FC<LoginProps> = ({ onLogin, errorMessage }) => {
      const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
          Login
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
