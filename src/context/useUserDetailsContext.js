import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { UPDATE_USER_MUTATION } from '../graphql/mutations/usersMutations';
import { USER_QUERY } from '../graphql/queries/usersQueries';
import useURLSearchParams from '../shared/hooks/useURLSearchParams';

const UserDetailsContext = createContext(null);

export const UserDetailsContextProvider = ({ children }) => {
  const userEmail = useURLSearchParams('user');

  // We introduce this piece of state so we know if the user details have been modified.
  // If not, we'll disable the Save button to avoid unnecessary network calls
  const [formIsDirty, setFormDirty] = useState(false);
  const [initialName, setInitialName] = useState('');
  const [initialRole, setInitialRole] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleUserNameChange = ({ target }) => setUserName(target.value || '');
  const handleUserRoleChange = ({ target }) => setUserRole(target.value || '');

  const [hasError, setHasError] = useState(false);

  useQuery(USER_QUERY, {
    variables: {
      email: userEmail,
    },
    onCompleted: ({ user }) => {
      setLoading(false);
      setUserName(user.name);
      setInitialName(user.name);
      setUserRole(user.role);
      setInitialRole(user.role);
    },
    onError: () => {
      setHasError(true);
      setLoading(false);
    }
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

  useEffect(() => {
    if (initialName === userName && initialRole === userRole) setFormDirty(false);
    else setFormDirty(true);
  }, [initialName, initialRole, userName, userRole]);

  return (
    <UserDetailsContext.Provider
      value={{
        userEmail,
        userRole,
        userName,
        formIsDirty,
        hasError,
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
