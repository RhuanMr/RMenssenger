import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import TextField from './Components/TextField';
import styles from './styles';
import SignUpHooks from '../../Hooks';

const Form = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleSignUp,
    confirmedPassword,
    setConfirmedPassword,
  } = SignUpHooks();
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextField
          placeholder="Nome"
          value={name}
          onChangeText={element => setName(element)}
        />
        <TextField
          placeholder="Email"
          value={email}
          onChangeText={element => setEmail(element)}
        />
        <TextField
          placeholder="Senha"
          value={password}
          onChangeText={element => setPassword(element)}
          secureTextEntry={true}
        />
        <TextField
          placeholder="Confirmar a senha"
          value={confirmedPassword}
          onChangeText={element => setConfirmedPassword(element)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.formButton}
        onPress={() => handleSignUp()}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
