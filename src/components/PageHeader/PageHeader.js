import React from 'react';
import Button from '../Button/Button';
import './pageHeader.scss';

export const PageHeader = ({ headerTitle, headerBtnProps, pageHeaderCls = '' }) => {
  return (
    <div className={`page-header ${pageHeaderCls}`}>
      <h1>{headerTitle}</h1>
      <Button {...headerBtnProps} />
    </div>
  );
};
