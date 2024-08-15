
import React, { useState, useEffect } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import UserNameInput from './UserNameInput/UserNameInput';
import {
  UserDetailsContextProvider,
} from '../../context/useUserDetailsContext';
import UserRoles from './UserRoles/UserRoles';
import './userDetailsPage.scss';

const UserDetailsPage = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setText('Diana Aralin is the best girl ever I promise ERA LIN')
    }, 1000);

    setTimeout(() => {
      setText2('Long Data Taking Some ERA LIN Juice Cat Gets Claws')
    }, 5000);
  }, [])

  return (
      <div className="details-page-body">
        <h2>{text}</h2>
        <p>FILLER GO AHEAD RANDOM SLURP DRINK GAS STATION</p>
        <h3>{text2}</h3>
      </div>
  );
};

export default UserDetailsPage;
