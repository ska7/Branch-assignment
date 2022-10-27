import React from 'react';
import { SAVE_BTN_TYPE } from '../../components/Button/constants/buttonTypes';
import PageContainer from '../../components/PageContainer/PageContainer';
import useURLSearchParams from '../../shared/hooks/useURLSearchParams';
import './detailsPage.scss';
import UserRoles from './UserRoles/UserRoles';

const DetailsPage = () => {
  const userEmail = useURLSearchParams("user");
  const saveUserBtnProps = {
    onClick: () => {},
    isDisabled: false,
    type: SAVE_BTN_TYPE
  }

  return (
    <PageContainer pageTitle={userEmail} pageHeaderButtonProps={saveUserBtnProps} pageHeaderCls="details-page-header">
      <div className='details-page-body'>
        <div className='user-name-input-container'>
          <label for="userName">Name</label>
          <input id="userName" placeholder='Type in user full name' value="" onChange={() => {}} />
        </div>
        <UserRoles />
      </div>
    </PageContainer>
  );
};

export default DetailsPage;
