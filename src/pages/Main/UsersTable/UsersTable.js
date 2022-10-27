import React from 'react';
import Button from '../../../components/Button/Button';
import { RESET_BTN_TYPE } from '../../../components/Button/constants/buttonTypes';
import Loader from '../../../components/Loader/Loader';
import UsersTableRow from './UsersTableRow';

const UserTableHeader = () => (
  <UsersTableRow
    showCheckbox={false}
    email="EMAIL"
    name="NAME"
    role="ROLE"
    rowCls="users-table-labels"
  />
);

const UsersTable = ({ checkIfUserIsSelected, handleSelectUser, resetUsers, usersAreLoading, users = [] }) => (
  <>
    {usersAreLoading && <Loader />}
    <UserTableHeader />
    {users.map((user) => {
      const isUserSelected = checkIfUserIsSelected(user.email);
      const onUserClick = () => handleSelectUser(user.email);
      return (
        <UsersTableRow
          {...user}
          isSelected={isUserSelected}
          onClick={onUserClick}
          key={user.email}
        />
      );
    })}
    {!usersAreLoading && <Button onClick={resetUsers} type={RESET_BTN_TYPE}/>}
  </>
);

export default UsersTable;
