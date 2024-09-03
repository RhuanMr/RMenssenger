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

const profile = require('../../../../../assets/Mocks/Profile_Image.jpg');
const image = require('../../../../../assets/Chevron_Left.png');
const containerHeight = Dimensions.get('window').height * 0.4;

const ProfileImage = () => (
  <View style={[styles.container, {height: containerHeight}]}>
    <View>
      <TouchableOpacity>
        <Image source={image} />
      </TouchableOpacity>
    </View>
    <View style={styles.contentInfo}>
      <Text style={styles.nameTitle}>Perfil 4</Text>
      <Image source={profile} style={styles.profileImage} />
    </View>
  </View>
);

export default ProfileImage;
