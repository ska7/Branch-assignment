import React from 'react';
import './usersTableRow.scss';

const UsersTableRow = ({
  email,
  name,
  role,
  showCheckbox = true,
  rowCls = '',
  isSelected,
  onClick,
}) => {
  const selectedCls = isSelected ? 'selected' : '';
  const userDetailsLink = `/#/details?user=${email}`;
  return (
    <div className={`users-table-row ${selectedCls} ${rowCls}`} onClick={onClick}>
      <div className="user-table-row-checkbox">
        {showCheckbox && <input type="checkbox" checked={isSelected} />}
      </div>
      <div className="user-table-row-value user-id-container">
        <p className="user-email-value">
          {showCheckbox ? <a href={userDetailsLink}>{email}</a> : email}
        </p>
        <p className="user-name-value-mobile">{name}</p>
      </div>
      <p className="user-table-row-value user-name-value">{name}</p>
      <p className="user-table-row-value user-role-value">{role}</p>
    </div>
  );
};

export default UsersTableRow;
