import {useState} from 'react';
import {useAuthStore} from '../../../../store/UserStore';

const ProfileHooks = () => {
  const {logout} = useAuthStore();

  const handleLogOut = () => {
    logout();
  };

  return {
    handleLogOut,
  };
};

export default ProfileHooks;
