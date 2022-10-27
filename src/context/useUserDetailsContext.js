import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { createContext, useContext, useState } from 'react';
import { UPDATE_USER_MUTATION } from '../graphql/mutations/usersMutations';
import { USER_QUERY } from '../graphql/queries/usersQueries';
import useURLSearchParams from '../shared/hooks/useURLSearchParams';

const UserDetailsContext = createContext(null);

export const UserDetailsContextProvider = ({ children }) => {
  const userEmail = useURLSearchParams('user');

  const [isLoading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleUserNameChange = ({ target }) => setUserName(target.value || '');
  const handleUserRoleChange = ({ target }) => setUserRole(target.value || '');

  const { data } = useQuery(USER_QUERY, {
    variables: {
      email: userEmail,
    },
    onCompleted: ({ user }) => {
      setLoading(false);
      setUserName(user.name);
      setUserRole(user.role);
    },
  });

  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    variables: {
      email: userEmail,
      newAttributes: {
        name: userName,
        role: userRole,
      },
    },
    onCompleted: () => setLoading(false),
  });

  const handleUpdateUser = () => {
    setLoading(true);
    updateUser();
  };

  return (
    <UserDetailsContext.Provider
      value={{
        userEmail,
        userRole,
        userName,
        userDetailsAreLoading: isLoading,
        handleUpdateUser,
        handleUserNameChange,
        handleUserRoleChange,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetailsContext = () => useContext(UserDetailsContext);
