import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { createContext } from 'react';
import { DELETE_USERS_MUTATION, RESET_USERS_MUTATION } from '../graphql/mutations/usersMutations';
import { ALL_USERS_QUERY } from '../graphql/queries/usersQueries';
import useSelectedUsers from '../pages/Main/UsersTable/hooks/useSelectedUsers';

const UsersContext = createContext(null);

export const UsersContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { selectedUsers, handleSelectUser, checkIfUserIsSelected, clearSelectedUsers } =
    useSelectedUsers();

  const { refetch: refetchUsers } = useQuery(ALL_USERS_QUERY, {
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
    onCompleted: () => {
      updateUsers();
      clearSelectedUsers();
      setLoading(false);
    }
  });

  const [resetUsers] = useMutation(RESET_USERS_MUTATION, {
    onCompleted: async () => {
      const { data } = await refetchUsers();
      setUsers(data?.allUsers);
      setLoading(false);
    }
  });

  const updateUsers = () => {
    const updatedUsers = users.filter((user) => !checkIfUserIsSelected(user.email))
    setUsers(updatedUsers);
  }

  const handleDeleteUsers = () => {
    setLoading(true);
    deleteUsers();
  };

  const handleResetUsers = () => {
    setLoading(true);
    resetUsers();
  }

  return (
    <UsersContext.Provider
      value={{
        selectedUsers,
        users,
        usersAreLoading: isLoading,
        handleSelectUser,
        checkIfUserIsSelected,
        deleteUsers: handleDeleteUsers,
        resetUsers: handleResetUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
