import React from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import './pageContainer.scss';

const PageContainer = ({ children, pageTitle, pageHeaderButtonProps, pageHeaderCls }) => {
  return (
    <div className="main-page-container">
      <PageHeader
        headerTitle={pageTitle}
        headerBtnProps={pageHeaderButtonProps}
        pageHeaderCls={pageHeaderCls}
      />
      {children}
    </div>
  );
};

export default PageContainer;
