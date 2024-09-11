import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');
// var result;
// result = fakeText.slice(0, 45) + '...';
const CardItem = ({item}) => (
  <Pressable style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.profileImage} source={image} />
      <View style={styles.textContent}>
        <View style={styles.infoContent}>
          <Text style={styles.titleText}>{item.nameWith}</Text>
          <Text style={styles.statusText}>Online</Text>
        </View>
        <Text style={styles.messageText}>{item.lastText}</Text>
      </View>
    </View>
  </Pressable>
);

export default CardItem;
