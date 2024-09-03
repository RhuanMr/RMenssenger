import React from 'react';
import {View, Text} from 'react-native';
import PageComponent from '../../../components/Global/Pages';
import Header from './Components/Header';
import CardItem from './Components/CardItem';

const Home = () => (
  <PageComponent>
    <Header />
    <CardItem />
  </PageComponent>
);

export default Home;
