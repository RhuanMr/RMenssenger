import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './Components/Header';
import styles from './styles';
import List from './Components/List';
import Footer from './Components/Footer';

const Chat = ({route}) => {
  const {id, idWith, nameWith} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header id={id} idWith={idWith} nameWith={nameWith} />
      <List id={id} idWith={idWith} nameWith={nameWith} />
    </SafeAreaView>
  );
};

export default Chat;
