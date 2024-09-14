import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');
const buttonImage = require('../../../../../assets/Chevron_Left_Blue.png');
const isOnline = true;

const Header = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={buttonImage} />
      </TouchableOpacity>
      <Pressable
        style={styles.content}
        onPress={() => navigation.navigate('InfoUser', {item})}>
        <Image style={styles.profileImage} source={image} />
        <View style={styles.contentText}>
          <Text style={styles.nameTitle}>{item.nameWith}</Text>
          {isOnline && <Text style={styles.statusTitle}>Online</Text>}
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
