import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ALL_USERS_QUERY } from '../../../graphql/queries/usersQueries';
import useSelectedUsers from './hooks/useSelectedUsers';
import UsersTableRow from './UsersTableRow';

const UserTableHeader = () => (
  <UsersTableRow showCheckbox={false} email="EMAIL" name="NAME" role="ROLE" rowCls='users-table-labels' />
);

const UsersTable = () => {
  const { selectedUsers, handleSelectUsers } = useSelectedUsers();

  const { data, loading } = useQuery(ALL_USERS_QUERY);

  const { allUsers } = data || {};

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <UserTableHeader />
      {allUsers.map((user) => (
        <UsersTableRow {...user} />
      ))}
    </>
  );
};

export default UsersTable;
