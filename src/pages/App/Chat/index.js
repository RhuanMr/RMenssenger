import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './Components/Header';
import styles from './styles';
import List from './Components/List';
import Footer from './Components/Footer';

const Chat = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <List />
    <Footer />
  </SafeAreaView>
);

export default Chat;
