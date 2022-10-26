import React from 'react';
import './usersTableRow.scss';

const UsersTableRow = ({ email, name, role, showCheckbox = true, rowCls = "" }) => {
  return (
    <div className={`users-table-row ${rowCls}`}>
        <div className='user-table-row-checkbox'>
            {showCheckbox && <input type="checkbox" />}
        </div>
        <p className="user-table-row-value user-email-value">{email}</p>
        <p className="user-table-row-value user-name-value">{name}</p>
        <p className="user-table-row-value user-role-value">{role}</p>
    </div>
  )
}

export default UsersTableRow