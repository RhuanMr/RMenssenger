import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ChatHooks from '../../Hooks';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');
const buttonImage = require('../../../../../assets/Chevron_Left_Blue.png');

const Header = ({id, nameWith}) => {
  const navigation = useNavigation();
  const {handleGoToHome} = ChatHooks(id, nameWith);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => handleGoToHome()}>
        <Image source={buttonImage} />
      </TouchableOpacity>
      <Pressable
        style={styles.content}
        onPress={() => navigation.navigate('InfoUser', {nameWith})}>
        <Image style={styles.profileImage} source={image} />
        <View style={styles.contentText}>
          <Text style={styles.nameTitle}>{nameWith}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
