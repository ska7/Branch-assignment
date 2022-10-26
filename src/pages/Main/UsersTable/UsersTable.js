import React from 'react';
import UsersTableRow from './UsersTableRow';

const UserTableHeader = () => (
  <UsersTableRow showCheckbox={false} email="EMAIL" name="NAME" role="ROLE" rowCls='users-table-labels' />
);

const UsersTable = ({ checkIfUserIsSelected, usersAreLoading, users = [] }) => {

  if (usersAreLoading) return <p>Loading...</p>;

  return (
    <>
      <UserTableHeader />
      {users.map((user) => {
        const isUserSelected = checkIfUserIsSelected(user.email);
        return <UsersTableRow {...user} isSelected={isUserSelected} key={user.email}/>
      })}
    </>
  );
};

export default UsersTable;
