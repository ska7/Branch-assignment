import React from 'react';
import { UsersContextProvider, useUsersContext } from '../../context/useUsersContext';
import './mainPage.scss';
import UsersTable from './UsersTable/UsersTable';

const MainPage = () => {
  const {
    selectedUsers,
    checkIfUserIsSelected,
    deleteUsers,
    allUsers,
    usersAreLoading,
  } = useUsersContext();

  const disableDeleteBtn = !selectedUsers.length || usersAreLoading;

  return (
    <div className="main-page-container">
      <div className="users-table-header">
        <h1>Users</h1>
        <button onClick={deleteUsers} disabled={disableDeleteBtn} className="delete-btn">
          Delete
        </button>
      </div>
      <UsersTable
        selectedUsers={selectedUsers}
        usersAreLoading={usersAreLoading}
        users={allUsers}
        checkIfUserIsSelected={checkIfUserIsSelected}
      />
    </div>
  );
};

export default () => (
  <UsersContextProvider>
    <MainPage />
  </UsersContextProvider>
);
