import {useState} from 'react';
import {Alert} from 'react-native';

const SignUpHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [name, setName] = useState('');

  const handleConfirmPassword = () => {
    if (password === confirmedPassword) {
      setPassword(password);
      return true;
    } else {
      setPassword('');
      setConfirmedPassword('');
      Alert.alert('As senhas não combinam!');
      return false;
    }
  };

  const handleSignUp = () => {
    handleConfirmPassword()
      ? Alert.alert('deu bom!')
      : Alert.alert('deu ruim!');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleSignUp,
    confirmedPassword,
    setConfirmedPassword,
  };
};

export default SignUpHooks;
