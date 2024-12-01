import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Dashboard</h1>
      <p>This is a protected page. You can only see this if you're logged in.</p>
    </div>
  );
};

export default Dashboard;
