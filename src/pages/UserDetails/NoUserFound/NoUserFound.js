import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { SAVE_BTN_TYPE } from '../../../components/Button/constants/buttonTypes';
import './noUserFound.scss';

const NoUserFound = ({ userEmail }) => {
  return (
    <div className="no-user-found-container">
      {userEmail ? (
        <h1>
          No user found with email <p>{userEmail}</p>
        </h1>
      ) : (
        <h1>No user found</h1>
      )}

      <Link to="../main">
        <Button type={SAVE_BTN_TYPE} label="Go Back" />
      </Link>
    </div>
  );
};

export default NoUserFound;
