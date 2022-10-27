import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { createContext } from 'react';
import { DELETE_USERS_MUTATION } from '../graphql/mutations/usersMutations';
import { ALL_USERS_QUERY } from '../graphql/queries/usersQueries';
import useSelectedUsers from '../pages/Main/UsersTable/hooks/useSelectedUsers';

const UsersContext = createContext(null);

export const UsersContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { selectedUsers, handleSelectUser, checkIfUserIsSelected, clearSelectedUsers } =
    useSelectedUsers();

  useQuery(ALL_USERS_QUERY, {
    onCompleted: ({ allUsers }) => {
      setUsers(allUsers);
      setLoading(false);
    },
    fetchPolicy: 'network-only',
  });

  const [deleteUsers] = useMutation(DELETE_USERS_MUTATION, {
    variables: {
      emails: selectedUsers,
    },
  });

  const updateUsers = () => {
    const updatedUsers = users.filter((user) => !checkIfUserIsSelected(user.email))
    setUsers(updatedUsers);
  }

  const handleDeleteUsers = async () => {
    setLoading(true);
    await deleteUsers();
    updateUsers();
    clearSelectedUsers();
    setLoading(false);
  };

  return (
    <UsersContext.Provider
      value={{
        selectedUsers,
        users,
        usersAreLoading: isLoading,
        handleSelectUser,
        checkIfUserIsSelected,
        deleteUsers: handleDeleteUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
