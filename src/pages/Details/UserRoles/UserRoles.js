import React from 'react';
import './userRoles.scss';

const UserRoles = () => {
  return (
    <div className='user-roles-radio-group'>
      <label>Role</label>
      <fieldset id="user-roles">
        <input type="radio" id="admin" name="user-roles" />
        <input type="radio" id="developer" name="user-roles" />
      </fieldset>
    </div>
  );
};

export default UserRoles;
