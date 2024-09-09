import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import COLORS from '../../../../../styles/colors';
import SignInHooks from '../../Hooks';

const Form = () => {
  const {email, setEmail, password, setPassword, handleSignIn} = SignInHooks();
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textField}
          placeholderTextColor={COLORS.TEXT}
          placeholder="Email"
          value={email}
          onChangeText={element => setEmail(element)}
        />
        <TextInput
          style={styles.textField}
          placeholderTextColor={COLORS.TEXT}
          placeholder="Senha"
          value={password}
          onChangeText={element => setPassword(element)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.formButton}
        onPress={() => handleSignIn()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
