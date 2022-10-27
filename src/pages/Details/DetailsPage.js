import React from 'react';
import Button from '../../components/Button/Button';
import { SAVE_BTN_TYPE } from '../../components/Button/constants/buttonTypes';
import './detailsPage.scss';

const DetailsPage = () => {
  return (
    <div className="main-page-container">
      <div className="users-table-header">
        <h1>Users</h1>
        <Button onClick={() => {}} isDisabled={false} type={SAVE_BTN_TYPE} />
      </div>
    </div>
  );
};

export default DetailsPage;
