import {useState} from 'react';
import {Alert} from 'react-native';

const SignInHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    Alert.alert('test');
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
