import React from 'react';
import { SAVE_BTN_TYPE } from '../../components/Button/constants/buttonTypes';
import PageContainer from '../../components/PageContainer/PageContainer';
import Loader from '../../components/Loader/Loader';
import UserNameInput from './UserNameInput/UserNameInput';
import {
  UserDetailsContextProvider,
  useUserDetailsContext,
} from '../../context/useUserDetailsContext';
import UserRoles from './UserRoles/UserRoles';
import './userDetailsPage.scss';
import NoUserFound from './NoUserFound/NoUserFound';

const UserDetailsPage = () => {
  const {
    userEmail,
    userRole,
    userName,
    formIsDirty,
    hasError,
    userDetailsAreLoading,
    handleUpdateUser,
    handleUserNameChange,
    handleUserRoleChange,
  } = useUserDetailsContext();

  const saveUserBtnProps = {
    onClick: handleUpdateUser,
    isDisabled: userDetailsAreLoading || !userName || !formIsDirty,
    type: SAVE_BTN_TYPE,
  };

  if (hasError) return <NoUserFound userEmail={userEmail}/>

  return (
    <PageContainer
      pageTitle={userEmail}
      pageHeaderButtonProps={saveUserBtnProps}
      pageHeaderCls="details-page-header"
    >
      {userDetailsAreLoading ? (
        <Loader />
      ) : (
        <div className="details-page-body">
          <UserNameInput userName={userName} handleUserNameChange={handleUserNameChange} />
          <UserRoles activeRole={userRole} handleRoleChange={handleUserRoleChange} />
        </div>
      )}
    </PageContainer>
  );
};

export default () => (
  <UserDetailsContextProvider>
    <UserDetailsPage />
  </UserDetailsContextProvider>
);
