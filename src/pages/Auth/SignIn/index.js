import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PageComponent from '../../../components/Global/Pages';
import Logo from '../../../components/Global/Logo';
import styles from './styles';
import Form from './Components/Form';

const SignIn = () => (
  <PageComponent>
    <View style={styles.container}>
      <Logo />
      <Form />
    </View>
    <TouchableOpacity style={styles.signUpButton}>
      <Text style={styles.linkText}>Cadastre-se</Text>
    </TouchableOpacity>
  </PageComponent>
);

export default SignIn;
