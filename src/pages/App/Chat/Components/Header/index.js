import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');
const buttonImage = require('../../../../../assets/Chevron_Left_Blue.png');
const isOnline = true;

const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.backButton}>
      <Image source={buttonImage} />
    </TouchableOpacity>
    <Pressable style={styles.content}>
      <Image style={styles.profileImage} source={image} />
      <View style={styles.contentText}>
        <Text style={styles.nameTitle}>Perfil 4</Text>
        {isOnline && <Text style={styles.statusTitle}>Online</Text>}
      </View>
    </Pressable>
  </View>
);

export default Header;
