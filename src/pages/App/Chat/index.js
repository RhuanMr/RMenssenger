import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PageComponent from '../../../components/Global/Pages';
import Header from './Components/Header';
import styles from './styles';

const Chat = () => (
  <SafeAreaView style={styles.container}>
    <Header />
  </SafeAreaView>
);

export default Chat;
