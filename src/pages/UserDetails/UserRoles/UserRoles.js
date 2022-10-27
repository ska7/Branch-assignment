import React from 'react';
import { userRoleLabelsEnum, userRoles } from '../../../shared/constants/userRoles';
import './userRoles.scss';

const UserRole = ({ userRole, isSelected }) => {
  const getRoleLabel = userRoleLabelsEnum[userRole];
  return (
    <div className="user-role-option">
      <input
        type="radio"
        id={userRole}
        value={userRole}
        name="userRoles"
        defaultChecked={isSelected}
        key={userRole}
      />
      <label htmlFor={userRole}>{getRoleLabel}</label>
    </div>
  );
};

const UserRoles = ({ activeRole, handleRoleChange }) => {
  return (
    <div className="user-roles-radio-group">
      <label htmlFor="userRoles">Role</label>
      <fieldset id="userRoles" onChange={handleRoleChange}>
        {userRoles.map((userRole) => {
          const isRoleSelected = userRole === activeRole;
          return (
            <UserRole
              userRole={userRole}
              key={userRole}
              isSelected={isRoleSelected}
            />
          );
        })}
      </fieldset>
    </div>
  );
};

export default UserRoles;
