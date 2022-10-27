import React from 'react';

const UserNameInput = ({ userName, handleUserNameChange }) => (
  <div className="user-name-input-container">
    <label htmlFor="userName">Name</label>
    <input
      id="userName"
      placeholder="Type in user full name"
      value={userName}
      onChange={handleUserNameChange}
    />
  </div>
);

export default UserNameInput;
