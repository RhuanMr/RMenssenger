import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './Components/Header';
import styles from './styles';
import List from './Components/List';
import Footer from './Components/Footer';

const Chat = ({route}) => {
  const {id, nameWith} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header id={id} nameWith={nameWith} />
      <List id={id} nameWith={nameWith} />
    </SafeAreaView>
  );
};

export default Chat;
