import React from 'react';
import {View, Text} from 'react-native';
import PageComponent from '../../../components/Global/Pages';
import Header from './Components/Header';
import CardItem from './Components/CardItem';
import AppHooks from './Hooks';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';

const Home = () => {
  const {chats} = AppHooks();
  return (
    <PageComponent>
      <Header />
      <FlatList
        data={chats}
        renderItem={({item}) => <CardItem item={item} />}
        keyExtractor={item => item.id}
        style={styles.container}
      />
    </PageComponent>
  );
};

export default Home;
