import {useState} from 'react';
import {Alert} from 'react-native';
import {useAuthStore} from '../../../../store/UserStore';

const SignInHooks = () => {
  const {login} = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    login(email, password);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
};

export default SignInHooks;
