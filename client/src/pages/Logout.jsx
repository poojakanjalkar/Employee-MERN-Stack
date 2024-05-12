// components/LogoutButton.js
import React from 'react';
import { Button } from 'reactstrap';

const LogoutButton = ({ onLogout }) => {
  return (
    <div className='btn-container'>
      <Button color="danger" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
