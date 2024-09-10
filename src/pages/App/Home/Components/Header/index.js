import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const image = require('../../../../../assets/SMS.png');
const settings = require('../../../../../assets/Settings.png');

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Conversas</Text>
        <Image style={styles.logo} source={image} />
      </View>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image source={settings} />
      </Pressable>
    </View>
  );
};

export default Header;
