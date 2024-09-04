import React from 'react';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import TextField from './Components/TextField';
import styles from './styles';

const Form = () => (
  <View style={styles.container}>
    <View style={styles.textInputContainer}>
      <TextField placeholder="Email" />
      <TextField placeholder="Nome" />
      <TextField placeholder="Senha" />
      <TextField placeholder="Confirmar a senha" />
    </View>
    <TouchableOpacity style={styles.formButton}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  </View>
);

export default Form;
