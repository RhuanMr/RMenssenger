import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');
const buttonImage = require('../../../../../assets/Chevron_Left.png');

const Header = () => (
  <View style={styles.container}>
    <Pressable>
      <Image source={buttonImage} />
    </Pressable>
    <View style={styles.content}>
      <Pressable>
        <Image style={styles.profileImage} source={image} />
      </Pressable>
      <View style={styles.contentText}>
        <Text>Perfil 4</Text>
        <Text>Online</Text>
      </View>
    </View>
  </View>
);

export default Header;
