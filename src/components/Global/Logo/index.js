import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const image = require('../../../assets/SMS.png');
const text = require('../../../assets/RMmessenger.png');

const Logo = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.contentImage} />
      <Image source={text} />
    </View>
  );
};

export default Logo;
