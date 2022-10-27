import React from 'react';
import { UsersContextProvider, useUsersContext } from '../../context/useUsersContext';
import UsersTable from './UsersTable/UsersTable';
import './mainPage.scss';
import Button from '../../components/Button/Button';
import { DELETE_BTN_TYPE } from '../../components/Button/constants/buttonTypes';


const MainPage = () => {
  const {
    selectedUsers,
    checkIfUserIsSelected,
    handleSelectUser,
    deleteUsers,
    allUsers,
    usersAreLoading,
  } = useUsersContext();

  const disableDeleteBtn = !selectedUsers.length || usersAreLoading;

  return (
    <div className="main-page-container">
      <div className="users-table-header">
        <h1>Users</h1>
        <Button onClick={deleteUsers} isDisabled={disableDeleteBtn} type={DELETE_BTN_TYPE}/>
      </div>
      <UsersTable
        handleSelectUser={handleSelectUser}
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
