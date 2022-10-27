import React from 'react';
import { UsersContextProvider, useUsersContext } from '../../context/useUsersContext';
import UsersTable from './UsersTable/UsersTable';
import './mainPage.scss';
import { DELETE_BTN_TYPE } from '../../components/Button/constants/buttonTypes';
import PageContainer from '../../components/PageContainer/PageContainer';

const MainPage = () => {
  const {
    selectedUsers,
    checkIfUserIsSelected,
    handleSelectUser,
    deleteUsers,
    allUsers,
    usersAreLoading,
  } = useUsersContext();

  const deleteUsersBtnProps = {
    onClick: deleteUsers,
    isDisabled: !selectedUsers.length || usersAreLoading,
    type: DELETE_BTN_TYPE
  }

  return (
    <PageContainer pageTitle="Users" pageHeaderButtonProps={deleteUsersBtnProps}>
      <UsersTable
        handleSelectUser={handleSelectUser}
        selectedUsers={selectedUsers}
        usersAreLoading={usersAreLoading}
        users={allUsers}
        checkIfUserIsSelected={checkIfUserIsSelected}
      />
    </PageContainer>
  );
};

export default () => (
  <UsersContextProvider>
    <MainPage />
  </UsersContextProvider>
);
