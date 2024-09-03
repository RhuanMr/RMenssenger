import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const image = require('../../../../../assets/SMS.png');

const Header = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Conversas</Text>
      <Image style={styles.logo} source={image} />
    </View>
  </View>
);

export default Header;
