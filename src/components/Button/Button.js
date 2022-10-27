import React from 'react';
import './button.scss';
import { btnClsEnum, btnLabelEnum } from './constants/enums';

const Button = ({ onClick, label, isDisabled, type, customCls }) => {
  const btnCls = btnClsEnum[type] || '';
  const buttonLabel = label || btnLabelEnum[type];
  return (
    <button onClick={onClick} disabled={isDisabled} className={`btn ${btnCls} ${customCls}`}>
      {buttonLabel}
    </button>
  );
};

export default Button;
