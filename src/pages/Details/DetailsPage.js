import React from 'react';
import { SAVE_BTN_TYPE } from '../../components/Button/constants/buttonTypes';
import PageContainer from '../../components/PageContainer/PageContainer';
import useURLSearchParams from '../../shared/hooks/useURLSearchParams';
import './detailsPage.scss';

const DetailsPage = () => {
  const userEmail = useURLSearchParams("user");
  const saveUserBtnProps = {
    onClick: () => {},
    isDisabled: false,
    type: SAVE_BTN_TYPE
  }

  return (
    <PageContainer pageTitle={userEmail} pageHeaderButtonProps={saveUserBtnProps} pageHeaderCls="details-page-header">
      {/* <h2>Something in the way</h2> */}
    </PageContainer>
  );
};

export default DetailsPage;
