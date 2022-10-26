import React from 'react';
import './usersTableRow.scss';

const UsersTableRow = () => {
  return (
    <div className='users-table-row'>
        <input className='user-table-row-checkbox' type="checkbox" />
        <p className='user-table-row-value'>adithya@ourbranch.com</p>
        <p className='user-table-row-value'>Adithya Reddy</p>
        <p className='user-table-row-value user-role'>Developer</p>
    </div>
  )
}

export default UsersTableRow