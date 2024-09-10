import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const image = require('../../../../../assets/Chevron_Left.png');

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={image} />
      </Pressable>
      <Text style={styles.title}>Configurações</Text>
    </View>
  );
};

export default Header;
