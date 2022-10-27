import React from 'react';
import { userRoles } from '../../../shared/constants/userRoles';
import './userRoles.scss';

const UserRole = ({ userRole }) => (
  <div className='user-role-option'>
    <input type="radio" id={userRole} value={userRole} name="userRoles" key={userRole} />
    <label htmlFor={userRole}>{userRole}</label>
  </div>
);

const UserRoles = () => {
  return (
    <div className="user-roles-radio-group">
      <label htmlFor="userRoles">Role</label>
      <fieldset id="userRoles">
        {userRoles.map((userRole) => (
          <UserRole userRole={userRole} key={userRole}/>
        ))}
      </fieldset>
    </div>
  );
};

export default UserRoles;
