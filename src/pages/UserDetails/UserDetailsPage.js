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

const UserDetailsPage = () => {
  const {
    userEmail,
    userRole,
    userName,
    userDetailsAreLoading,
    handleUpdateUser,
    handleUserNameChange,
    handleUserRoleChange,
  } = useUserDetailsContext();

  const saveUserBtnProps = {
    onClick: handleUpdateUser,
    isDisabled: userDetailsAreLoading || !userName,
    type: SAVE_BTN_TYPE,
  };

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
