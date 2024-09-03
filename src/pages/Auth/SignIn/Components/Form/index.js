import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import COLORS from '../../../../../styles/colors';

const Form = () => (
  <View style={styles.container}>
    <View>
      <TextInput
        style={styles.textField}
        placeholderTextColor={COLORS.TEXT}
        placeholder="Email"
      />
      <TextInput
        style={styles.textField}
        placeholderTextColor={COLORS.TEXT}
        placeholder="Senha"
        secureTextEntry={true}
      />
    </View>
    <TouchableOpacity style={styles.formButton}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  </View>
);

export default Form;
