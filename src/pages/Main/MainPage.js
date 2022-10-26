import React from 'react';
import "./mainPage.scss";
import UsersTable from './UsersTable/UsersTable';

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <div className='users-table-header'>
        <h1>Users</h1>
        <button disabled className='delete-btn'>Delete</button>
      </div>
      <UsersTable />
    </div>
  )
}

export default MainPage