import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Example auth logic

  const handleLogin = (username: string, password: string) => {
    // Simulated login: Replace with API call
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authToken', 'fake-jwt-token'); // Simulated token
      window.location.href = '/dashboard'; // Redirect to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
