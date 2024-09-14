import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const profile = require('../../../../../assets/Mocks/Profile_Image.jpg');
const image = require('../../../../../assets/Chevron_Left.png');
const containerHeight = Dimensions.get('window').height * 0.4;

const ProfileImage = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {height: containerHeight}]}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={image} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentInfo}>
        <Text style={styles.nameTitle}>{item.nameWith}</Text>
        <Image source={profile} style={styles.profileImage} />
      </View>
    </View>
  );
};

export default ProfileImage;
