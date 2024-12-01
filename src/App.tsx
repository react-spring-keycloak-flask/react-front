import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

const App: React.FC = () => {
  const handleLoginSuccess = (token: string) => {
    console.log(`Authenticated token: ${token}`);
    window.location.href = '/dashboard'; 
  };

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      </Routes>
    </Router>
  );
};

export default App;
