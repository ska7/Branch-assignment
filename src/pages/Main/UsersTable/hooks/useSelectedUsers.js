import { useState } from 'react';

const useSelectedUsers = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const checkIfUserIsSelected = (user) => selectedUsers.includes(user);

  const clearSelectedUsers = () => setSelectedUsers([]);

  const handleSelectUser = (user) => {
    const userIsSelected = checkIfUserIsSelected(user);

    let updatedSelectedUsers = [];
    if (userIsSelected) {
      updatedSelectedUsers = selectedUsers.filter((selectedUser) => selectedUser !== user);
    } else {
      updatedSelectedUsers = [...selectedUsers, user];
    }

    setSelectedUsers(updatedSelectedUsers);
  };

  return { selectedUsers, handleSelectUser, checkIfUserIsSelected, clearSelectedUsers };
};

export default useSelectedUsers;
