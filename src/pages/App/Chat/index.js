import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './Components/Header';
import styles from './styles';
import List from './Components/List';
import Footer from './Components/Footer';
import ChatHooks from './Hooks';

const Chat = ({route}) => {
  const {chatId} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <List chatId={chatId} />
      <Footer />
    </SafeAreaView>
  );
};

export default Chat;
