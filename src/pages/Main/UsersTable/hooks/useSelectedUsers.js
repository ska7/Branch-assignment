import { useState } from 'react';

const useSelectedUsers = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectUsers = (user) => {
    const userIsSelected = selectedUsers.some((selectedUser) => selectedUser === user);

    let updatedSelectedUsers = [];
    if (userIsSelected) {
        updatedSelectedUsers = selectedUsers.filter((selectedUser) => selectedUser !== user);
        console.log('REMOVE USER:', updatedSelectedUsers);
    } else {
        updatedSelectedUsers = [...selectedUsers, user];
        console.log('ADD USER:', updatedSelectedUsers);
    }

    setSelectedUsers(updatedSelectedUsers);
  }
  return {selectedUsers, handleSelectUsers};
};

export default useSelectedUsers;
