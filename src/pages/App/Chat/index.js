import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './Components/Header';
import styles from './styles';
import List from './Components/List';
import Footer from './Components/Footer';
import ChatHooks from './Hooks';

const Chat = ({route}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header item={item} />
      <List item={item} />
    </SafeAreaView>
  );
};

export default Chat;
